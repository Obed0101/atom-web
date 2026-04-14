# Plan de Sprints — Desarrollo A.T.O.M.

> Cronograma post-aprobacion de la propuesta. Sprints de 2 semanas cada uno.
> Entregable actual (14-abr) se limita a la propuesta; la ejecucion fisica va por este plan en cursos siguientes.

## Sprint 0 — Validacion academica (PROXIMOS 7 DIAS)

**Objetivo**: obtener aprobacion de Leonel y feedback inicial.

| Tarea | Responsable | Deliverable |
|-------|-------------|-------------|
| Entregar `PROPUESTA.md` | Obed | PDF enviado al profe 14-abr antes 4pm |
| Reunion feedback con Leonel | Obed + Leonel | Notas de ajuste |
| Revisar decision 2 vs 3 modos con el profe | Obed | Decision final documentada |
| Ajustar propuesta post-feedback | Obed | v2 de propuesta |

## Sprint 1 — Investigacion y diseño CAD (semanas 1-2)

| Tarea | Deliverable |
|-------|-------------|
| Modelar chasis base en Fusion360 | Archivo CAD `.f3d` |
| Simulacion FEA cargas en exoesqueleto | PDF reporte |
| Modelar mecanismo transformacion silla→exo | Animacion MP4 |
| Seleccionar componentes finales del BOM | `COMPONENTES.md` actualizado |
| Bocetos UI de la web en Google Stitch | Screenshots + export Figma |

## Sprint 2 — Electronica y PCB (semanas 3-4)

| Tarea | Deliverable |
|-------|-------------|
| Diagrama de bloques electronico | `ARQUITECTURA.md` |
| Diseño esquematico en KiCad | `.kicad_sch` |
| Layout PCB 2 capas | `.kicad_pcb` |
| Enviar a fab JLCPCB | PCB fisica en 2 semanas |
| Firmware ESP32 esqueleto (motores + sensores) | Repo Git |

## Sprint 3 — Integracion IA voz (semanas 5-6)

| Tarea | Deliverable |
|-------|-------------|
| Instalar Raspberry Pi OS + dependencias | Imagen SD clonable |
| Instalar whisper.cpp + benchmark latencia | Reporte de latencia |
| Instalar llama.cpp con Phi-3-mini Q4 | Modelo cargado |
| Instalar Piper TTS voz español | Demo audio |
| Integrar STT → LLM → TTS pipeline | Video demo funcionando |
| Definir comandos basicos (10 intents) | `voice-commands.yaml` |

## Sprint 4 — Web del proyecto (semanas 7-8)

| Tarea | Deliverable |
|-------|-------------|
| Scaffold Next.js 14 + Tailwind | Repo `workbench/proyecto-mecatronica/web/` |
| Implementar diseño de Google Stitch | Componentes React |
| Galeria 3D (model-viewer) con chasis CAD | Pagina `/galeria` |
| Seccion BOM publica | Pagina `/componentes` |
| Deploy Vercel | URL publica |

## Sprint 5 — Prototipo mecanico (semanas 9-12)

| Tarea | Deliverable |
|-------|-------------|
| Cortar y soldar chasis aluminio | Marco base fisico |
| Ensamblar rodamientos y guias | Sistema de desplazamiento lineal |
| Montar actuadores y motores | Tren motriz basico |
| Test de carga estatica | Reporte seguridad |

## Sprint 6 — Integracion total (semanas 13-16)

| Tarea | Deliverable |
|-------|-------------|
| Integrar PCB + Raspberry + ESP32 en chasis | Sistema electronico instalado |
| Cableado de potencia + fusibles | Sistema energizado |
| Calibracion motores y encoders | PID afinado |
| Test transformacion silla↔exo | Video de transformacion |
| Test comando voz end-to-end | Demo completa |

## Sprint 7 — Seguridad y refinamiento (semanas 17-18)

| Tarea | Deliverable |
|-------|-------------|
| Test de emergencia (boton seta, corte de energia) | Protocolo validado |
| Test con maniqui de 80kg | Reporte de seguridad |
| Iteraciones de firmware segun tests | Firmware v1.0 |
| Documentacion tecnica completa | Manual PDF |

## Sprint 8 — Entrega final (semanas 19-20)

| Tarea | Deliverable |
|-------|-------------|
| Video promocional del proyecto | MP4 3-5 min |
| Presentacion academica | PPT + speech |
| Paper academico estilo IEEE | PDF |
| Push repo publico | GitHub |

## Dependencias criticas

- Leonel debe aprobar propuesta antes del Sprint 1.
- Cognix debe autorizar uso de stock en Sprint 2 (Obed ya trabaja ahi, probable OK).
- Presupuesto USD 2,542 debe aprobarse antes del Sprint 5.

## Metricas de exito

- Transformacion silla→exo en ≤15 segundos
- Reconocimiento de voz con precision ≥90% en español panameño
- Latencia voz end-to-end ≤1.5s
- Autonomia bateria ≥6 horas en modo silla
- Cero lesiones durante testing (con maniqui)

---
_Plan inicial 2026-04-13 — ajustable post-feedback de Leonel._
