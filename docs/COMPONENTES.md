# BOM — Bill of Materials

> Estimacion preliminar para prototipo funcional. Proveedores referenciales: Panama + envio internacional.

## Categoria A — Chasis y Mecanica

| Item | Cant. | Proveedor | Costo USD |
|------|-------|-----------|-----------|
| Tubo cuadrado aluminio 6061 25x25x2mm (6m) | 4 | Metalurgica del Istmo | 120 |
| Lamina aluminio 3mm (1x2m) | 2 | Metalurgica del Istmo | 80 |
| Rodamientos lineales SBR16UU | 8 | Aliexpress | 48 |
| Guias lineales SBR16 (400mm) | 4 | Aliexpress | 90 |
| Actuador lineal 12V 300mm 200N | 2 | Amazon | 140 |
| Ruedas 12" neumaticas con eje | 2 | Auto-parts local | 90 |
| Rueda giratoria trasera | 1 | Local | 25 |
| Rulemanes SKF serie 6200 | 6 | Industrias de Panama | 35 |
| Tornilleria grado 8.8 (caja) | 1 | Do It Center | 45 |
| **Subtotal Mecanica** | | | **673** |

## Categoria B — Actuadores y Motores

| Item | Cant. | Proveedor | Costo USD |
|------|-------|-----------|-----------|
| Motor BLDC 24V 250W con encoder | 2 | Aliexpress | 220 |
| Driver ESC BLDC 30A | 2 | Aliexpress | 70 |
| Servomotor MG996R (soporte exo) | 4 | Amazon | 48 |
| Motor paso a paso NEMA 23 (reclinacion asiento) | 1 | Aliexpress | 42 |
| Driver TB6600 para NEMA 23 | 1 | Amazon | 22 |
| **Subtotal Actuadores** | | | **402** |

## Categoria C — Electronica y Control

| Item | Cant. | Proveedor | Costo USD |
|------|-------|-----------|-----------|
| Raspberry Pi 5 8GB | 1 | Cognix stock / PiShop | 85 |
| Microsd 64GB Clase 10 | 1 | PriceSmart | 15 |
| ESP32 DevKit v1 | 2 | Cognix stock | 30 |
| Sensor ultrasonico HC-SR04 | 4 | Cognix stock | 12 |
| IMU MPU6050 | 2 | Aliexpress | 10 |
| PCB custom 2 capas (diseño + fab) | 1 | JLCPCB | 35 |
| Componentes pasivos (R, C, L, conectores) | — | Digikey | 80 |
| Display OLED 1.3" I2C | 1 | Aliexpress | 12 |
| Microfono USB ReSpeaker 2-Mic HAT | 1 | Seeed Studio | 28 |
| Speaker 5W 8ohm + amplificador PAM8403 | 1 | Amazon | 18 |
| **Subtotal Electronica** | | | **325** |

## Categoria D — Potencia

| Item | Cant. | Proveedor | Costo USD |
|------|-------|-----------|-----------|
| Baterias LiFePO4 12.8V 20Ah (2s) | 2 | Aliexpress | 380 |
| BMS 2S 40A con balance | 1 | Aliexpress | 35 |
| Convertidor DC-DC 24V→5V 10A | 1 | Amazon | 22 |
| Cargador inteligente 29.2V 5A | 1 | Aliexpress | 55 |
| Cableado AWG 10/14/18 + terminales | — | Local electricidad | 40 |
| Fusibles + portafusibles | — | Local | 15 |
| Interruptor de emergencia seta | 1 | Industrial | 18 |
| **Subtotal Potencia** | | | **565** |

## Categoria E — Seguridad y HMI

| Item | Cant. | Proveedor | Costo USD |
|------|-------|-----------|-----------|
| Correa de seguridad torso (velcro + hebilla) | 1 | Local deportes | 25 |
| Boton emergencia inalambrico | 1 | Amazon | 22 |
| Luces LED 12V (freno/direccion) | 1 kit | Auto | 28 |
| Buzzer audible alarma | 1 | Local | 5 |
| Pulsador capacitivo HMI (backup a voz) | 3 | Aliexpress | 15 |
| **Subtotal HMI** | | | **95** |

## Resumen

| Categoria | Costo USD |
|-----------|-----------|
| Mecanica | 673 |
| Actuadores | 402 |
| Electronica | 325 |
| Potencia | 565 |
| HMI + Seguridad | 95 |
| Envios internacionales estimados | 150 |
| Contingencia (15%) | 332 |
| **TOTAL prototipo funcional** | **USD 2,542** |

## Notas

- Cotizaciones en USD al 2026-04-13. Los precios Aliexpress pueden variar con promos.
- Cognix tiene stock parcial de ESP32, Pi, sensores comunes. Obed ya trabaja ahi.
- Para entregable academico actual (14-abr), no se requiere comprar componentes. Solo documentar el BOM.
- Fase de construccion sugerida: Proyecto Integrador o curso taller.
