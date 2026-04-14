# Propuesta de Proyecto Final — Introduccion a Mecatronica

**Estudiante**: Obed Gonzalez
**Profesor**: Ing. Leonel Gonzalez
**Universidad**: ULatina Panama — Ing. Mecatronica
**Ciclo**: 2026-1
**Fecha**: 2026-04-14

---

## Titulo

**A.T.O.M. — Asistente Transformable para Operacion de Movilidad (2-en-1)**

Vehiculo personal asistivo **transformable en 2 modos** con interfaz de voz por IA para personas con movilidad reducida. Un solo chasis = silla de ruedas motorizada + exoesqueleto de asistencia corporal.

## Resumen ejecutivo

A.T.O.M. es un dispositivo mecatronico que integra **mecanica transformable**, **control electronico embebido** e **inteligencia artificial local** en un chasis unico capaz de operar en dos modos complementarios: silla de ruedas automatica y exoesqueleto de asistencia corporal. La transformacion entre modos es asistida por actuadores lineales y controlada por voz mediante un modelo de lenguaje pequeño ejecutado localmente en Raspberry Pi 5, sin dependencia de conexion a internet.

El proyecto integra los cinco pilares de la mecatronica (mecanica, electronica, control, software, sistemas) y atiende una problematica social real: la limitacion de movilidad independiente en adultos mayores y personas con discapacidad motriz temporal o permanente.

## Problematica

En Panama, mas del 11% de la poblacion reporta algun tipo de limitacion motriz (INEC 2023). Las soluciones comerciales actuales presentan tres barreras criticas:

1. **Fragmentacion**: el usuario necesita comprar silla de ruedas, andador y eventualmente exoesqueleto por separado. Cada dispositivo cuesta entre USD 400 y USD 80,000.
2. **Interfaces inaccesibles**: los controles por joystick o boton fisico excluyen a usuarios con limitacion de fuerza en manos.
3. **Dependencia de red**: las soluciones con IA de voz actuales requieren nube, lo cual compromete privacidad y disponibilidad.

## Solucion propuesta

A.T.O.M. consolida dos modos de asistencia en un solo chasis:

### Modo 1 — Silla de Ruedas Motorizada

- Configuracion por defecto (modo reposo).
- Dos motores BLDC 250W controlados via PWM por ESP32.
- Asiento reclinable electricamente (actuador lineal 12V).
- Sensores de proximidad (ultrasonico HC-SR04 x4) para evitar colisiones.
- Autonomia objetivo: 6 horas, rango 20 km.

### Modo 2 — Exoesqueleto de Asistencia

- Al transformarse, el chasis eleva al usuario a posicion de pie asistida.
- Soportes laterales articulados se extienden con servomotores.
- Banda de soporte lumbar activada automaticamente.
- Objetivo: permitir marcha lenta asistida de hasta 15 minutos para ejercicios de rehabilitacion.

### Interfaz de voz local

- Raspberry Pi 5 (8GB RAM) ejecuta:
  - **Whisper.cpp** (STT — transcripcion en español)
  - **Llama.cpp con Phi-3-mini quantizado Q4** (~2.4 GB) para dialogo
  - **Piper TTS** (voz en español local)
- Comandos basicos: "levantame", "sientame", "avanza", "detente", "como estoy" (chequeo de estado).
- Latencia objetivo: <1.5s entre comando y actuacion.

### Web del proyecto

- Sitio informativo publico construido en Next.js 14 + Tailwind.
- Secciones: concepto, especificaciones, galeria 3D, video demo, BOM publico.
- Diseño inicial generado en **Google Stitch** a partir de bocetos de **NotebookLM**.
- Hosteado en Vercel con dominio del proyecto.

## Justificacion tecnica

| Area mecatronica | Implementacion en A.T.O.M. |
|------------------|----------------------------|
| Mecanica | Chasis transformable, actuadores lineales, articulaciones paralelogramo |
| Electronica | PCB custom ESP32, driver BLDC, bus de potencia 12V / 24V |
| Control | Control PID de velocidad motores, lazo cerrado con encoder cuadratura |
| Software | Firmware ESP32 en C, servicios Python en Pi, web en Next.js |
| Sistemas | Comunicacion ESP32 ↔ Pi via UART, eventos via MQTT local |

## Alcance del entregable academico

Para el curso **Introduccion a Ingenieria Mecatronica**, el entregable se limita a:

1. **Documento de propuesta** (este archivo) con analisis y diseño conceptual.
2. **Diagrama de bloques** electronico y mecanico (`ARQUITECTURA.md`).
3. **BOM preliminar** con proveedores y costos estimados (`COMPONENTES.md`).
4. **Plan de desarrollo** por sprints para cursos posteriores (`PLAN-SPRINTS.md`).
5. **Web informativa** del proyecto (prototipo inicial).

La construccion del prototipo fisico se proyecta a materias posteriores (Electronica II, Control, Proyecto Integrador).

## Viabilidad y decisiones de alcance

**Alcance definitivo: 2 modos fisicos.** Se contemplo inicialmente un tercer modo scooter, pero tras analisis de viabilidad (ver `ANALISIS-VIABILIDAD.md`) se decidio el 2026-04-14 consolidar scooter y silla en un solo modo mecanico con **perfil de velocidad dual** (Comfort 8 km/h / Sport 25 km/h con requisito de inclinacion corporal minima para activar el perfil rapido). Esta decision reduce complejidad mecanica en ~30%, peso estimado de 85-100kg a 55-70kg, costo BOM de USD 2,800-3,500 a USD 2,542 (ver `COMPONENTES.md`), y elimina riesgos de falla en transicion triple modo.

El modo scooter fisico queda documentado como **roadmap post-graduacion** en `PLAN-SPRINTS.md` (expansion Proyecto Integrador), permitiendo mantener la vision de largo plazo sin comprometer la viabilidad del entregable academico actual.

## Referencias

- Pineda, L. et al. (2021). "Wearable robotic exoskeletons for mobility". *IEEE Trans. Biomed. Eng.*
- Raspberry Pi Foundation (2024). "Running LLMs on Raspberry Pi 5".
- INEC Panama (2023). "Censo Nacional: Poblacion con Discapacidad".
- World Health Organization (2023). "Assistive Technology Access".

---

_Propuesta entregada por Obed Gonzalez — 2026-04-14_
