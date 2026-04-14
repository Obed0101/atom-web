# Descripciones Visuales — A.T.O.M. 2-en-1

> Prompts detallados para alimentar a **NotebookLM**, **Gemini Image**, **Midjourney**, **DALL-E 3** o **Stable Diffusion** para generar imagenes de alta calidad de los 2 modos del vehiculo + secuencia de transformacion.
>
> Estos prompts sirven para:
> - Hero shots de la pagina web
> - Presentacion academica a Leonel (ULatina)
> - Slides de pitch profesional
> - Bocetos conceptuales iniciales
> - Renders para el paper IEEE

---

## Estetica general del proyecto

**Paleta de colores**:
- **Primario**: Antracita oscuro mate (#1A1D23)
- **Secundario**: Azul electrico LED (#00D4FF)
- **Acentos**: Aluminio cepillado natural (brushed aluminum), naranja de seguridad (#FF6B35) solo en boton de emergencia
- **Luces**: Blanco frio 6000K en perimetro del chasis, LEDs azules en articulaciones activas, LED rojo pulsante en boton de emergencia

**Materiales visibles**:
- Chasis: tubo cuadrado aluminio 6061 con acabado anodizado negro mate
- Paneles: carbono fibra con textura 2x2 twill en superficies verticales (respaldo, soportes exo)
- Contacto humano: tela tecnica negra tipo neopreno 4mm (asiento, bandas lumbares, soportes brazos)
- Detalles: tornilleria DIN 912 negra, cableado organizado en mangueras textiles negras trenzadas

**Estilo visual objetivo**:
- Medico pero moderno — Permobil x Tesla x Boston Dynamics
- Minimalista, sin adornos decorativos
- Proporciones humanoides (el exoesqueleto debe verse "humano-like" de pie)
- Iluminacion tipo producto tech (fondo blanco o gris degrade, rim light azul sutil)

**Referencias esteticas** (para buscar en Pinterest/ArtStation como inspiracion):
- Boston Dynamics Atlas (proporciones humanoides cuando de pie)
- Permobil F3 Corpus (calidad industrial medica)
- Tesla Cybertruck (lineas rectas, anodizado mate)
- Sarcos Guardian XO (exoesqueleto industrial)
- Whill Model Ci (silla de ruedas electrica minimalista)

**Aspect ratio recomendado**: 16:9 para hero web, 4:5 para Instagram, 1:1 para thumbnails.

---

## MODO 1 — Silla de Ruedas Motorizada

### Prompt basico (para image gen)

```
Futuristic motorized wheelchair, single-user, 3/4 front angle view. Matte anthracite aluminum
frame with carbon fiber side panels. Two large pneumatic rear wheels (12 inch, matte black
rubber with knurled tread), single smaller swivel front wheel. Integrated ergonomic seat with
black technical neoprene cushioning, adjustable electric backrest at 100 degree angle.
Compact armrests with embedded OLED display on right side showing battery and speed.
Emergency red mushroom button on left armrest. Four ultrasonic sensors visible at corners
(small grey plastic domes). Brushed aluminum footrest folded. Cool white LED strip tracing
the chassis perimeter. Electric blue LEDs pulsing softly at wheel hubs. Studio product
photography, seamless light grey backdrop, soft key light from top-left, rim light from
right. Photorealistic, octane render quality, shallow depth of field, clean technical aesthetic.
```

### Especificaciones fisicas visibles

| Atributo | Valor |
|----------|-------|
| Largo total | 110 cm |
| Ancho total | 70 cm |
| Alto total (modo silla) | 105 cm (desde suelo a respaldo) |
| Altura de asiento | 48 cm (suelo a cojin) |
| Diametro ruedas traseras | 12 pulgadas (30.5 cm) |
| Peso estimado | 55-65 kg |
| Posicion del usuario | Sentado, espalda a 100°, piernas a 90°, brazos reposando en apoyabrazos |

### Elementos clave a mostrar en el render

1. **Dos ruedas traseras motorizadas** — neumaticas, negras mate, con encoder visible en el eje
2. **Motor BLDC** — parcialmente visible bajo el asiento en un housing de aluminio
3. **Pantalla OLED 1.3"** — en apoyabrazos derecho, mostrando icono de silla + % bateria
4. **Sensores ultrasonicos** — 4 domos grises pequeños en las esquinas del chasis
5. **Microfono ReSpeaker** — mini HAT circular integrado en apoyabrazos izquierdo
6. **Speaker frontal** — rejilla discreta debajo del apoyabrazos derecho
7. **Boton de emergencia** — seta roja seta industrial en apoyabrazos izquierdo
8. **Raspberry Pi 5** — housing ventilado oculto bajo el asiento, solo luces de estado visibles
9. **Bateria LiFePO4** — en base baja del chasis, NO visible directamente (panel cerrado)
10. **Luz LED perimetral** — tira LED cool white 6000K bordeando el chasis

### Angulos recomendados para renderizar

- **Hero principal (web)**: 3/4 frontal, ligeramente elevado, angulo de 30° desde horizontal
- **Perfil lateral**: mostrando el largo total + ruedas
- **Vista cenital**: huella del vehiculo para mostrar sus dimensiones vs silla tradicional
- **Detalle armrest**: close-up del panel de control con display + boton emergencia + mic
- **Detalle rueda/motor**: macro showing hub motor + encoder + cableado

### Contexto de uso (escenas)

- Usuario adulto mayor sentado, en entorno hogareño (sala con luz natural tarde)
- Usuario joven profesional, oficina moderna, dando vuelta entre escritorios
- Exterior: parque Panama, via peatonal, luz de atardecer
- Medico: consultorio de rehabilitacion, tonos claros, instrumentos medicos al fondo

---

## MODO 2 — Exoesqueleto de Asistencia

### Prompt basico (para image gen)

```
Futuristic mobility exoskeleton, full-body assistive device, front view with user standing
upright supported by the frame. Same anthracite aluminum chassis as wheelchair mode but now
vertically deployed: the seat back has pivoted to become a spinal support column, the wheels
have retracted into a low base platform, and two articulated lateral arms extend from hip
level up to shoulder level, cradling the user gently. Lumbar support band in black technical
fabric wraps around the user's lower back. Shoulder harness with adjustable straps.
Servomotor joints visible at hips, knees (chassis mirrors leg positions), and elbow-like
articulations on the lateral arms. Cool white LED strips on the vertical columns. Electric
blue LEDs pulsing at each active servo joint. Emergency red mushroom button accessible at
hip level. Chest panel showing OLED display with body position diagram. User (adult, neutral
clothing) standing supported, feet on the base platform, arms naturally at sides. Studio
product photography, seamless white backdrop, dramatic rim lighting from behind, cool color
temperature, photorealistic, octane render, technical medical-industrial aesthetic.
```

### Especificaciones fisicas visibles

| Atributo | Valor |
|----------|-------|
| Altura total desplegado | 180 cm (ajustable 160-200 cm segun usuario) |
| Ancho (brazos desplegados) | 70 cm (mismo que modo silla) |
| Profundidad base | 50 cm |
| Altura base-plataforma | 12 cm (suelo donde se para el usuario) |
| Peso | 55-65 kg (mismo chasis) |
| Posicion del usuario | De pie, espalda apoyada en columna vertical, torso sujeto por banda lumbar + arnes pectoral, pies en plataforma base |

### Elementos clave a mostrar en el render

1. **Columna vertebral** — el respaldo de la silla ahora vertical, paralelo a la espalda del usuario
2. **Brazos articulados laterales** — 2 brazos extendidos desde las caderas, hasta los hombros, con tres articulaciones cada uno (paralelogramo mecanico)
3. **Banda lumbar** — envolvente en tela tecnica negra, con hebilla de cierre rapido al frente
4. **Arnes de hombros** — 2 correas ajustables cruzando el pecho en X
5. **Servos de articulacion** — MG996R metalicos visibles en los joints (6 total: 2 cadera, 2 hombro, 2 codo)
6. **Plataforma base** — rectangular, 50x70 cm, con las 2 ruedas replegadas hacia el interior (visibles como 2 circulos negros)
7. **Actuador lineal** — cilindro metalico vertical en la parte posterior de la columna, responsable de elevar el sistema
8. **LEDs azules pulsantes** — uno en cada articulacion activa (6 servos + hip + shoulders)
9. **Pantalla OLED pectoral** — pequeño display frontal mostrando silueta del usuario y estado de soporte
10. **Boton emergencia** — seta roja a nivel de cadera, facilmente accesible con la mano del usuario
11. **Pies del usuario** — visibles en la plataforma base, con marcas antideslizantes
12. **Cableado** — organizado en mangueras textiles negras trenzadas, siguiendo la columna

### Angulos recomendados

- **Hero principal**: frontal completo, usuario de pie al centro, simetrico
- **3/4 lateral**: mostrando articulaciones de brazos + profundidad
- **Detalle cadera**: close-up de la articulacion cadera con servo expuesto
- **Detalle columna**: vista posterior mostrando el actuador lineal
- **Usuario caminando**: dos frames — paso izquierdo, paso derecho (mostrar dinamica)

### Contexto de uso (escenas)

- Consultorio de fisioterapia: paciente post-operatorio practicando marcha
- Hogar: adulto mayor levantandose de la cama, en habitacion con luz matinal
- Rehabilitacion hospitalaria: ambiente clinico, paredes blancas, pasamanos al lado
- Al aire libre: parque con suelo liso, usuario caminando asistido cerca de un familiar

---

## SECUENCIA DE TRANSFORMACION (Silla → Exoesqueleto)

### Prompt para animacion / 5 frames

```
A 5-step transformation sequence of a mobility device converting from wheelchair to
exoskeleton. Frame 1: user sitting in matte anthracite wheelchair mode, feet on footrest,
relaxed. Frame 2: footrest retracts into chassis, wheels lock, chassis emits soft blue LED
pulse indicating transformation mode activating. Frame 3: the seat back pivots upward 30
degrees, lateral arms begin extending from under the armrests, linear actuator extends
raising the assembly. Frame 4: user is now mid-position (half-standing), spinal column fully
vertical, lateral arms at 45 degrees cradling torso, lumbar band auto-tightens. Frame 5:
full exoskeleton mode, user standing upright fully supported, all servos locked, green LED
confirmation on chest panel. Consistent product photography lighting across all 5 frames,
photorealistic, studio backdrop, cinematic transformation.
```

### Fases detalladas (para diagrama tecnico o animacion CAD)

| Fase | Duracion | Cambio mecanico | Aviso audible |
|------|----------|-----------------|----------------|
| 0 — Reposo silla | — | Usuario sentado, ruedas libres, brazos en reposo | — |
| 1 — Preparacion | 2s | Chequeo seguridad (frenos, proximidad, peso correcto), footrest retrae | "Levantando en 3... 2... 1" |
| 2 — Elevacion | 5s | Actuador lineal extiende chasis vertical, ruedas se pliegan hacia centro para formar base | Tono ascendente |
| 3 — Despliegue brazos | 4s | Servos extienden brazos laterales en paralelogramo, brazos se adaptan a altura de hombros | Click mecanico suave |
| 4 — Ajuste soporte | 3s | Banda lumbar auto-tensa, arnes pectoral ajusta, IMU confirma posicion vertical | Confirmacion vibratoria |
| 5 — Modo exoesqueleto listo | — | Usuario de pie, todos los servos en lock, green LED chest panel | "Listo, ya estas de pie" |

**Tiempo total**: ~15 segundos.

### Inversa (Exoesqueleto → Silla)

Misma secuencia en reverso, con aviso: *"Sentandote en 3... 2... 1"*, duracion similar 15s.

---

## ESCENAS PARA LA WEB DEL PROYECTO

### Landing hero

**Prompt compuesto**:
```
Split-screen hero image. Left side: user sitting in ATOM wheelchair mode, smiling, in a
modern minimalist apartment. Right side: same user standing supported by ATOM exoskeleton
mode, in the same apartment, looking empowered. Text overlay centered: "Un chasis. Dos
modos. Libertad." Consistent lighting and color grading across both halves. Cinematic, high
production value.
```

### Seccion "Concepto"

**Prompt**:
```
Isometric exploded view of ATOM chassis showing internal components — Raspberry Pi 5 in
central housing, two ESP32 controllers, BLDC motors, lithium battery pack, ultrasonic sensors,
servo articulations, linear actuator, wiring harness. Labels in Spanish pointing to each
component. Clean white background, technical illustration style, similar to Apple product
breakdown aesthetics.
```

### Seccion "Voz"

**Prompt**:
```
Close-up of the ATOM voice interface panel. ReSpeaker microphone array circular HAT with
4 LED indicators in blue. Holographic voice waveform emerging upward. User's hand hovering
near but not touching. Warm ambient lighting, shallow depth of field, futuristic but
accessible aesthetic.
```

### Seccion "Seguridad"

**Prompt**:
```
Red emergency mushroom button on the armrest of ATOM wheelchair, finger pressing it,
with dramatic red LED pulsing around the button. All motors and actuators shown in
frozen/locked state indicated by red indicator lights on chassis. Industrial safety
photography style.
```

---

## PALETA DE IMAGENES PARA NOTEBOOK LM

Cuando subas a NotebookLM estos documentos + los prompts arriba, pidele:

1. **Resumen conceptual** (1 parrafo) para el pitch a Leonel
2. **5 takeaways clave** para el paper academico
3. **Mapa mental** de los pilares mecatronicos cubiertos
4. **FAQ anticipadas** que Leonel podria preguntar + respuestas preparadas
5. **Generar (si NotebookLM lo soporta) bocetos** en base a los prompts de arriba

Si NotebookLM no genera imagenes, usa estos prompts en:
- **Gemini 2.0 Flash Image** (gratis, calidad alta)
- **Midjourney v7** (pago, mejor calidad fotografica)
- **DALL-E 3 via ChatGPT** (consistencia de personajes)
- **Stable Diffusion XL Turbo** (local, rapido)

---

## NOTAS FINALES

- Todos los prompts incluyen **"2-en-1"** o **"transformable"** para reforzar el mensaje central.
- Evitar en prompts: "3 modos", "scooter", "multi-funcion triple", "tres configuraciones".
- Mantener consistencia de color (antracita + azul electrico) a traves de todos los assets.
- La secuencia de transformacion es el ACTIVO VISUAL MAS IMPORTANTE — si solo hay tiempo para generar una pieza, que sea esa.

---

_Generado 2026-04-14 para alimentar NotebookLM y generacion de imagenes de la pagina web del proyecto. Ajustar prompts segun la tool especifica que se use._
