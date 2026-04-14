# Analisis de Viabilidad — 3 Modos vs 2 Modos

> **DECISION FINAL (2026-04-14)**: **2 MODOS fisicos** — silla de ruedas motorizada + exoesqueleto de asistencia. El perfil "scooter/sport" queda integrado como modo de velocidad dentro de la silla, NO como tercera geometria. Aprobada por Obed Gonzalez.

## Pregunta original de Obed

¿Vehiculo 3-en-1 (silla + scooter + exoesqueleto) o simplificar a 2 modos?

## Comparativa

| Criterio | 3 Modos | 2 Modos (silla + exo) |
|----------|---------|-----------------------|
| Complejidad mecanica | Alta — 3 geometrias diferentes + transiciones | Media — 2 geometrias con transicion clara |
| Numero de actuadores | 8-10 (posicion + reclinacion + brazos exo + scooter stance) | 4-6 |
| Peso estimado | 85-100 kg | 55-70 kg |
| Costo BOM | USD 2,800-3,500 | USD 1,700-2,200 |
| Riesgo de falla en demo | Alto — 3 modos = 3 oportunidades de bug | Medio |
| Tiempo desarrollo (proyecto integrador) | 12-16 meses | 6-8 meses |
| Casos de uso cubiertos | Silla + transporte + rehabilitacion | Silla + rehabilitacion |
| Diferenciacion academica | Muy alta | Alta |
| Factibilidad en entorno universitario | Baja-Media | Media-Alta |

## Analisis por modo

### Modo Silla de Ruedas
Esencial, no-negociable. Es el modo de reposo y el caso de uso mas frecuente.

### Modo Exoesqueleto
Alto valor academico y social. Integra mecanica articulada + control de balance + seguridad (el usuario esta de pie, una falla es critica).

### Modo Scooter
**Analisis**: el modo scooter se diferencia de la silla principalmente en velocidad y postura del cuerpo. La postura scooter tradicional (inclinado hacia adelante) requiere:
- Manillar extensible
- Cambio de centro de gravedad
- Sistema de frenos independiente

**Alternativa propuesta**: en lugar de scooter como modo fisico separado, implementar **perfil de velocidad Sport en modo silla**:
- Velocidad hasta 25 km/h (vs 8 km/h modo silla estandar)
- Sensor IMU que exige inclinacion corporal minima para activar
- Respuesta de throttle agresiva

Esto cubre el caso de uso "transporte rapido" sin agregar una tercera geometria mecanica.

## Recomendacion

**Implementar 2 modos fisicos (silla + exoesqueleto) con perfil Sport en modo silla**.

Justificacion:
1. **Entregable academico realista**: una demo funcional de 2 modos impresiona mas que 3 modos con bugs.
2. **Seguridad**: el exoesqueleto ya es criticamente sensible; reducir superficies de falla en otros modos libera foco.
3. **Costo**: ahorro ~USD 1,000 en componentes, viable con presupuesto estudiantil.
4. **Escalable**: si el proyecto tiene exito en ULatina, el tercer modo se agrega en Proyecto Integrador como expansion documentada.
5. **Historia narrativa**: "Silla que se pone de pie" es un pitch mas poderoso que "vehiculo 3-en-1".

## Riesgos del enfoque 2-modos

| Riesgo | Mitigacion |
|--------|-----------|
| Profe prefiere los 3 modos originales | Presentar comparativa y dejar decision a Leonel. Mantener los 3 modos como roadmap visible. |
| Perdida de diferenciacion de pitch | Enfatizar la transformacion silla↔exo, que ya es unica en el mercado. |
| Expectativa de scooter en demo | Enseñar perfil Sport + argumentar trade-off documentado. |

## Decision final (CERRADA 2026-04-14)

**2 modos fisicos**: silla motorizada + exoesqueleto de asistencia. El modo scooter se implementa como **perfil Sport dentro del modo silla** (velocidad hasta 25 km/h con requerimiento de inclinacion corporal minima).

El tercer modo queda como **roadmap futuro en Proyecto Integrador** — documentado en `PLAN-SPRINTS.md` como expansion post-graduacion del curso Introduccion a Mecatronica.

---
_Analisis 2026-04-13 noche — seda-master_
