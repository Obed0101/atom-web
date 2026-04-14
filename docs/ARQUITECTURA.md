# Arquitectura — A.T.O.M. (2-en-1: silla + exoesqueleto)

## Diagrama de bloques electronico

```
┌─────────────────────────────────────────────────────────────┐
│                    USUARIO (voz + pulsadores)                │
└────────────────┬────────────────────────────────────────────┘
                 │
    ┌────────────▼──────────────┐
    │  ReSpeaker 2-Mic HAT      │  ← captura audio
    │  (USB a Raspberry Pi)     │
    └────────────┬──────────────┘
                 │
    ┌────────────▼──────────────────────────┐
    │       Raspberry Pi 5 (8GB)            │
    │  ┌──────────┐ ┌────────┐ ┌─────────┐  │
    │  │whisper.cpp│→│llama.cpp│→│Piper TTS│ │
    │  │   (STT)  │ │Phi-3-mini│ │  (TTS) │  │
    │  └──────────┘ └────────┘ └─────────┘  │
    │                                        │
    │  MQTT local broker (mosquitto)        │
    └────────────┬──────────────────────────┘
                 │ UART + MQTT
    ┌────────────▼───────────────────────────┐
    │       ESP32 Controller #1               │
    │   (Motores + Sensores proximidad)       │
    │                                         │
    │  ┌─────────────┐  ┌─────────────┐     │
    │  │ PID Velocidad│  │ Sensor Fusion│    │
    │  │  (motores)   │  │  (HC-SR04)   │    │
    │  └─────────────┘  └─────────────┘     │
    └──┬──────────┬─────────┬─────────────┬─┘
       │          │         │             │
    ┌──▼───┐  ┌──▼───┐  ┌──▼───┐     ┌───▼──────┐
    │BLDC L│  │BLDC R│  │Encoder│    │HC-SR04 x4│
    │Driver│  │Driver│  │Quadra │    │proximidad│
    └──┬───┘  └──┬───┘  └───────┘    └──────────┘
       │         │
    ┌──▼─────────▼──┐
    │  Motor BLDC   │
    │  24V 250W x2  │
    └───────────────┘

    ┌──────────────────────────────────────┐
    │      ESP32 Controller #2              │
    │   (Transformacion + Exoesqueleto)     │
    │                                       │
    │  Controla:                            │
    │  - Actuador lineal reclinacion        │
    │  - 4x Servo brazos exo               │
    │  - Motor paso a paso asiento         │
    │  - IMU MPU6050 (balance)             │
    └──────────────────────────────────────┘

    ┌──────────────────────────────────────┐
    │         SISTEMA DE POTENCIA           │
    │                                       │
    │  Baterias LiFePO4 25.6V 20Ah (2P)    │
    │      │                                │
    │      ├──→ BMS 40A con balance         │
    │      │                                │
    │      ├──→ 24V bus (motores BLDC)     │
    │      │                                │
    │      └──→ DC-DC → 5V bus              │
    │                     ├→ Pi 5           │
    │                     ├→ ESP32 x2       │
    │                     └→ Sensores       │
    └──────────────────────────────────────┘
```

## Diagrama mecanico (vista lateral — modo silla)

```
                 ┌────────────┐
                 │  Respaldo  │  ← reclinable con actuador
                 │            │
                 │  ┌──────┐  │
                 │  │ Pi 5 │  │
                 │  └──────┘  │
                 └─┬──────────┘
                   │
        ┌──────────▼──────┐
        │     Asiento     │
        └────┬────────┬───┘
             │        │
    ┌────────▼──┐ ┌───▼──────┐
    │ Batterias │ │  ESP32   │
    │   +BMS    │ │ controlL │
    └───────────┘ └──────────┘
          │
    ┌─────┼──────┐
    │     │      │
   ┌▼─┐  ┌▼─┐   ┌▼┐
   │M │  │M │   │●│  ← rueda trasera
   │BL│  │BL│
   │DC│  │DC│
   └──┘  └──┘
    ▲    ▲
    └────┴── ruedas 12" motorizadas
```

## Diagrama mecanico (vista lateral — modo exoesqueleto)

```
        ┌───────┐  ← Soporte cabeza (pasivo)
        │       │
        └───┬───┘
            │
       ┌────▼────┐
       │  Banda  │  ← lumbar (servos)
       │ lumbar  │
       └──┬───┬──┘
          │   │
      ┌───▼┐ ┌▼───┐
      │Brz.│ │Brz.│  ← brazos articulados (servos)
      │ Izq│ │Der │
      └─┬──┘ └──┬─┘
        │        │
   ┌────┴────────┴────┐
   │  Base elevada    │
   │  (actuadores     │
   │   desplegados)   │
   └────┬────────┬────┘
        │        │
       ┌▼──┐    ┌▼──┐
       │BL │    │BL │
       │DC │    │DC │
       └───┘    └───┘
```

## Flujo de datos — comando por voz

```
Usuario: "Atom, levantame"
   │
   ▼
ReSpeaker mic ──→ audio PCM 16kHz mono
   │
   ▼
whisper.cpp ──→ texto: "atom levantame"
   │
   ▼
llama.cpp Phi-3-mini ──→ intent: {action: "transform", target: "exo"}
   │
   ▼
MQTT publish topic `atom/command` ──→ {action: "transform_to_exo"}
   │
   ▼
ESP32 #2 (suscrito) ──→ ejecuta secuencia:
   1. Verifica seguridad (usuario sentado, frenos puestos)
   2. Avisa por speaker: "levantando en 3... 2... 1"
   3. Actuador lineal extiende chasis
   4. Servos extienden brazos laterales
   5. Banda lumbar ajusta
   6. Confirma posicion final con IMU
   │
   ▼
MQTT publish topic `atom/status` ──→ {mode: "exo", ready: true}
   │
   ▼
Piper TTS ──→ "Listo, ya estas de pie"
   │
   ▼
Speaker ──→ audio al usuario
```

## Protocolos de comunicacion

| Canal | Participantes | Protocolo | Uso |
|-------|---------------|-----------|-----|
| Pi ↔ ESP32 #1 | Pi, ESP32-1 | MQTT local (wifi AP interno) | Comandos motores |
| Pi ↔ ESP32 #2 | Pi, ESP32-2 | MQTT local | Comandos transformacion |
| ESP32 #1 ↔ ESP32 #2 | ESP32 x2 | ESP-NOW | Coordinacion modo activo |
| ESP32 ↔ Motores BLDC | ESP32-1 | PWM + UART | Control velocidad |
| Pi ↔ Usuario | Pi | Audio USB + altavoz | Voz bidireccional |

## Topologia de seguridad

1. **Seta de emergencia fisica** — corta bus 24V directo, sin pasar por controlador.
2. **Watchdog en cada ESP32** — si no recibe heartbeat del Pi en 3s, detiene motores.
3. **Sensores proximidad** — auto-stop si distancia <30cm en direccion de movimiento.
4. **IMU** — en modo exoesqueleto, si inclinacion >20°, asiste regreso a silla.
5. **BMS** — corta si voltaje bateria <20V o temperatura celda >55°C.

## Stack de software

| Componente | Lenguaje | Libreria / Framework |
|------------|----------|----------------------|
| Firmware ESP32 | C++ | Arduino Core + PlatformIO |
| Servicios Pi | Python 3.11 | asyncio + paho-mqtt |
| STT | — | whisper.cpp (C++) |
| LLM | — | llama.cpp (C++) |
| TTS | — | Piper (C++) |
| Web del proyecto | TypeScript | Next.js 14 + Tailwind |
| CAD | — | Fusion360 |
| Diagramas | — | KiCad |

---
_Arquitectura inicial — refinar en Sprint 1._
