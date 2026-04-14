# Proyecto Final — Mecatronica ULatina 2026-1

> Clase: Introduccion a Ingenieria Mecatronica
> Profesor: **Leonel Gonzalez** (papa de Obed)
> Entrega: **2026-04-14 antes 4pm**
> Estudiante: Obed Gonzalez

## Concepto

**A.T.O.M. 2-en-1** — vehiculo asistivo transformable para personas con movilidad reducida. Un solo chasis que opera en **dos modos**: silla de ruedas motorizada (reposo + transporte) y exoesqueleto de asistencia corporal (marcha asistida + rehabilitacion). La transformacion entre ambos modos es asistida por actuadores lineales y controlada por voz mediante un LLM local en Raspberry Pi 5, sin internet.

**Decision final**: 2 modos fisicos (silla + exoesqueleto). El perfil de "scooter/sport" queda integrado como modo de velocidad dentro de la silla. Ver `ANALISIS-VIABILIDAD.md` para trade-offs.

## Archivos del proyecto

| Documento | Proposito |
|-----------|-----------|
| [`PROPUESTA.md`](PROPUESTA.md) | Documento formal presentable al profe (entrega 14-abr) |
| [`ANALISIS-VIABILIDAD.md`](ANALISIS-VIABILIDAD.md) | 2 vs 3 modos — trade-offs tecnicos y academicos |
| [`COMPONENTES.md`](COMPONENTES.md) | BOM — lista de componentes + costo estimado |
| [`PLAN-SPRINTS.md`](PLAN-SPRINTS.md) | Cronograma de desarrollo post-aprobacion |
| [`ARQUITECTURA.md`](ARQUITECTURA.md) | Diagrama de bloques electronico + mecanico |
| [`DESCRIPCIONES-VISUALES.md`](DESCRIPCIONES-VISUALES.md) | Prompts visuales detallados de los 2 modos para NotebookLM / image gen / web hero shots |

## Codigo / Desarrollo

Ubicacion: `/Users/obed/Documents/Obsidian/agent-seda/workbench/proyecto-mecatronica/`

- `web/` — sitio del proyecto (Next.js 14 + Tailwind)
- `firmware/` — codigo Arduino/ESP32 para actuadores
- `pi/` — LLM local + voz (Python, whisper + llama.cpp)
- `cad/` — modelos 3D (Fusion360 / FreeCAD)

## Tools externas

- **NotebookLM** — bocetos conceptuales y diagramas
- **Google Stitch** — diseño UI/UX de la web
- **Workbench seda** — desarrollo y documentacion

## Estado actual

- [x] Propuesta formal redactada
- [x] Analisis 2-modos vs 3-modos
- [x] BOM inicial
- [x] Plan de sprints
- [ ] Bocetos NotebookLM (Obed)
- [ ] Web scaffold en workbench
- [ ] Entrega a Leonel via WA antes de 4pm

---
_Generado por seda-master 2026-04-13 tarde_
