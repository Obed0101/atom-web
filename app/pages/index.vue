<script setup lang="ts">
import {
  ArrowRight,
  Sparkles,
  Armchair,
  ArrowUp,
  Maximize2,
  UserCheck,
  CheckCircle,
  Cog,
  Cpu,
  Activity,
  Code2,
  Network,
  Mic,
  Volume2,
  Github,
  FileText,
  Package,
} from "lucide-vue-next";
import { motion } from "motion-v";

useHead({
  title: "A.T.O.M. — Un chasis. Dos modos. Libertad.",
});

useScrollAnimations();

const heroEyebrow = "Proyecto final · Mecatronica ULatina · 2026";
const heroTitle = "A.T.O.M.";
const heroSubtitle = "Un chasis. Dos modos. Libertad.";
const heroCopy =
  "Asistente Transformable para Operacion de Movilidad: un vehiculo personal 2-en-1 que pasa de pod motorizado a exoesqueleto de asistencia, controlado por voz con IA local — sin nube, sin compromisos.";

const modeBadges = [
  { src: "/tinycar.png", alt: "Icono modo pod", label: "Modo 1 · Pod" },
  { src: "/tinyexo.png", alt: "Icono modo exoesqueleto", label: "Modo 2 · Exo" },
];

type Mode = {
  key: string;
  img: string;
  alt: string;
  eyebrow: string;
  title: string;
  copy: string;
  specs: string[];
  ctaLabel: string;
  ctaHref: string;
};

const modes: Mode[] = [
  {
    key: "pod",
    img: "/tinycar.png",
    alt: "Render silueta modo pod motorizado",
    eyebrow: "Modo 1",
    title: "Modo Pod",
    copy:
      "Pod motorizado de uso diario. Dos motores BLDC de 250 W controlados por ESP32, asiento reclinable electrico y proteccion por ultrasonicos. El modo por defecto para desplazamientos urbanos.",
    specs: [
      "2 motores BLDC 24V / 250W con encoder",
      "Ruedas neumaticas 12\" + rueda giratoria",
      "Sensor fusion con 4 ultrasonicos HC-SR04",
      "Autonomia 6 h · rango 20 km",
    ],
    ctaLabel: "Ver arquitectura",
    ctaHref: "#arquitectura",
  },
  {
    key: "exo",
    img: "/tinyexo.png",
    alt: "Render silueta modo exoesqueleto",
    eyebrow: "Modo 2",
    title: "Modo Exoesqueleto",
    copy:
      "El mismo chasis se eleva, pliega ruedas y despliega brazos laterales para sostener al usuario de pie. Asistencia para ejercicios de rehabilitacion, no reemplazo de terapia formal.",
    specs: [
      "Actuador lineal 12V / 300 mm / 200 N",
      "4 servos MG996R + banda lumbar activa",
      "IMU MPU6050 para control de balance",
      "Marcha asistida hasta 15 min",
    ],
    ctaLabel: "Ver secuencia",
    ctaHref: "#transformacion",
  },
];

type Step = {
  n: string;
  title: string;
  copy: string;
  icon: typeof Armchair;
  duration: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Reposo silla",
    copy: "Usuario sentado en modo pod. Ruedas libres, brazos en reposo.",
    icon: Armchair,
    duration: "—",
  },
  {
    n: "02",
    title: "Preparacion",
    copy: "Chequeo de seguridad, frenos y peso. Footrest retrae.",
    icon: CheckCircle,
    duration: "2s",
  },
  {
    n: "03",
    title: "Elevacion",
    copy: "Actuador lineal extiende el chasis. Ruedas se pliegan a la base.",
    icon: ArrowUp,
    duration: "5s",
  },
  {
    n: "04",
    title: "Despliegue brazos",
    copy: "Servos extienden soportes laterales en paralelogramo.",
    icon: Maximize2,
    duration: "4s",
  },
  {
    n: "05",
    title: "Modo Exo listo",
    copy: "Banda lumbar ajusta. \"Listo, ya estas de pie.\"",
    icon: UserCheck,
    duration: "~15s total",
  },
];

type Pillar = {
  title: string;
  copy: string;
  icon: typeof Cog;
};

const pillars: Pillar[] = [
  {
    title: "Mecanica",
    copy: "Chasis transformable, actuadores lineales y articulaciones en paralelogramo.",
    icon: Cog,
  },
  {
    title: "Electronica",
    copy: "PCB custom con ESP32, driver BLDC y bus de potencia 12V / 24V.",
    icon: Cpu,
  },
  {
    title: "Control",
    copy: "Control PID de velocidad y lazo cerrado con encoder de cuadratura.",
    icon: Activity,
  },
  {
    title: "Software",
    copy: "Firmware ESP32 en C, servicios Python en Pi, web en Nuxt.",
    icon: Code2,
  },
  {
    title: "Sistemas",
    copy: "Comunicacion ESP32 ↔ Pi por UART y eventos MQTT locales.",
    icon: Network,
  },
];

type BomItem = {
  category: string;
  cost: number;
};

const bomItems: BomItem[] = [
  { category: "Mecanica", cost: 673 },
  { category: "Actuadores", cost: 402 },
  { category: "Electronica", cost: 325 },
  { category: "Potencia", cost: 565 },
  { category: "HMI + Seguridad", cost: 95 },
  { category: "Envios + Contingencia", cost: 482 },
];

const bomTotal = 2542;
const bomMax = Math.max(...bomItems.map((i) => i.cost));

const voiceCommands = [
  "levantame",
  "sientame",
  "avanza",
  "detente",
  "gira izquierda",
  "gira derecha",
  "como estoy",
  "modo pod",
  "modo exo",
  "emergencia",
];

type Sprint = {
  n: string;
  range: string;
  title: string;
  bullets: string[];
};

const sprints: Sprint[] = [
  {
    n: "Sprint 0",
    range: "Semana 0",
    title: "Validacion academica",
    bullets: [
      "Entregar PROPUESTA.md a Leonel",
      "Reunion de feedback",
      "Decision 2 vs 3 modos cerrada",
    ],
  },
  {
    n: "Sprint 1",
    range: "Semanas 1-2",
    title: "Diseño CAD",
    bullets: [
      "Chasis base en Fusion360",
      "Simulacion FEA de cargas exoesqueleto",
      "BOM final consolidado",
    ],
  },
  {
    n: "Sprint 2",
    range: "Semanas 3-4",
    title: "Electronica y PCB",
    bullets: [
      "Diagrama de bloques en KiCad",
      "Layout PCB 2 capas → JLCPCB",
      "Firmware ESP32 esqueleto",
    ],
  },
  {
    n: "Sprint 3",
    range: "Semanas 5-6",
    title: "IA de voz local",
    bullets: [
      "whisper.cpp + llama.cpp + Piper",
      "Pipeline STT → LLM → TTS",
      "10 intents definidos",
    ],
  },
  {
    n: "Sprint 4",
    range: "Semanas 7-8",
    title: "Web del proyecto",
    bullets: [
      "Scaffold Nuxt + Tailwind",
      "Galeria 3D con model-viewer",
      "Deploy publico",
    ],
  },
  {
    n: "Sprint 5",
    range: "Semanas 9-12",
    title: "Prototipo mecanico",
    bullets: [
      "Cortar y soldar chasis de aluminio",
      "Montaje de actuadores y motores",
      "Test de carga estatica",
    ],
  },
  {
    n: "Sprint 6",
    range: "Semanas 13-16",
    title: "Integracion total",
    bullets: [
      "PCB + Pi + ESP32 en chasis",
      "Calibracion PID + encoders",
      "Demo transformacion silla ↔ exo",
    ],
  },
  {
    n: "Sprint 7",
    range: "Semanas 17-18",
    title: "Seguridad y refinamiento",
    bullets: [
      "Test de emergencia (seta, corte)",
      "Test con maniqui de 80 kg",
      "Firmware v1.0 + manual",
    ],
  },
  {
    n: "Sprint 8",
    range: "Semanas 19-20",
    title: "Entrega final",
    bullets: [
      "Video promocional 3-5 min",
      "Presentacion academica",
      "Paper IEEE + repo publico",
    ],
  },
];
</script>

<template>
  <section
    id="hero"
    class="relative overflow-hidden bg-white"
    aria-labelledby="hero-title"
  >
    <div
      class="pointer-events-none absolute inset-0 -z-10"
      aria-hidden="true"
    >
      <div
        class="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-40"
        style="background: radial-gradient(closest-side, rgba(27,97,201,0.22), transparent 70%);"
      />
      <div
        class="absolute -bottom-24 right-[10%] h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style="background: radial-gradient(closest-side, rgba(0,212,255,0.18), transparent 70%);"
      />
      <svg
        class="absolute inset-0 h-full w-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="#1b61c9"
              stroke-width="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>

    <div class="container-atom grid items-center gap-10 pb-20 pt-16 md:grid-cols-[6fr_4fr] md:gap-14 md:pb-28 md:pt-24 lg:gap-20">
      <div>
        <motion.div
          :initial="{ opacity: 0, y: 16 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }"
          class="eyebrow"
        >
          <Sparkles :size="14" class="text-atom-blue" />
          {{ heroEyebrow }}
        </motion.div>

        <motion.h1
          id="hero-title"
          :initial="{ opacity: 0, y: 24 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }"
          class="mt-6 font-display text-[clamp(3.5rem,10vw,7rem)] font-bold leading-[0.95] tracking-tight2 text-atom-navy"
        >
          <span class="text-gradient-atom">{{ heroTitle }}</span>
        </motion.h1>

        <motion.p
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }"
          class="mt-5 font-display text-[clamp(1.5rem,2.8vw,2.25rem)] font-medium text-atom-navy"
        >
          {{ heroSubtitle }}
        </motion.p>

        <motion.p
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }"
          class="mt-6 max-w-prose2 text-body-lg text-atom-navy/70"
        >
          {{ heroCopy }}
        </motion.p>

        <motion.div
          :initial="{ opacity: 0, y: 16 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }"
          class="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#modos" class="btn-primary cta-pulse">
            Ver los 2 modos
            <ArrowRight :size="16" />
          </a>
          <a href="#concepto" class="btn-ghost">El concepto</a>
        </motion.div>

        <motion.div
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.8, delay: 0.75 }"
          class="mt-10 flex items-center gap-6 border-t border-atom-border pt-6"
        >
          <span class="font-mono text-[11px] uppercase tracking-label text-atom-navy/50">
            2 modos en 1 chasis
          </span>
          <div class="flex items-center gap-4">
            <div
              v-for="b in modeBadges"
              :key="b.alt"
              class="flex items-center gap-2"
            >
              <img
                :src="b.src"
                :alt="b.alt"
                class="h-8 w-8 object-contain"
                loading="lazy"
              />
              <span class="text-xs font-medium text-atom-navy/70">
                {{ b.label }}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        :initial="{ opacity: 0, scale: 0.94 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }"
        class="relative mx-auto w-full max-w-md md:mx-0"
      >
        <div
          class="relative overflow-hidden rounded-lg3 shadow-atom-lg ring-1 ring-atom-border/60"
          style="aspect-ratio: 3 / 4;"
        >
          <img
            data-parallax-hero
            src="/hero-silla.jpg"
            alt="Render de A.T.O.M. en modo pod personal"
            class="h-[112%] w-full object-cover object-center"
            style="transform: translate3d(0, -6%, 0) scale(1.02); will-change: transform;"
            loading="eager"
          />
          <div
            class="pointer-events-none absolute inset-0"
            style="background: linear-gradient(160deg, rgba(27,97,201,0.14) 0%, transparent 45%, rgba(0,212,255,0.12) 100%);"
          />
          <div
            class="pointer-events-none absolute inset-x-0 bottom-0 h-32"
            style="background: linear-gradient(to top, rgba(24,29,38,0.45), transparent);"
          />
          <div class="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div>
              <p class="font-mono text-[10px] uppercase tracking-label text-white/75">
                Modo 1
              </p>
              <p class="font-display text-xl font-semibold text-white">
                Pod personal
              </p>
            </div>
            <span
              class="rounded-full border border-white/30 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-label text-white backdrop-blur"
            >
              Render concepto
            </span>
          </div>
        </div>
        <div
          class="pointer-events-none absolute -inset-x-6 -bottom-10 -z-10 h-40 rounded-full blur-3xl"
          style="background: radial-gradient(closest-side, rgba(27,97,201,0.35), transparent 70%);"
        />
      </motion.div>
    </div>
  </section>

  <!-- SECCION 1 · MODOS -->
  <section
    id="modos"
    class="border-t border-atom-border bg-atom-surface-soft"
    aria-labelledby="modos-title"
  >
    <div class="container-atom py-20 md:py-28">
      <div class="max-w-3xl" data-motion="fade-up">
        <p class="eyebrow">Los 2 modos</p>
        <h2
          id="modos-title"
          class="mt-4 font-display text-section font-semibold text-atom-navy"
        >
          Un solo chasis. Dos configuraciones complementarias.
        </h2>
        <p class="mt-4 max-w-prose2 text-body-lg text-atom-navy/70">
          A.T.O.M. consolida lo que hoy son tres dispositivos separados — silla,
          andador y exoesqueleto — en un mecanismo transformable guiado por voz.
        </p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
        <article
          v-for="(m, i) in modes"
          :key="m.key"
          :data-motion="i === 0 ? 'slide-left' : 'slide-right'"
          class="group relative flex flex-col overflow-hidden rounded-2xl border border-atom-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-atom-lg"
        >
          <div class="flex h-[180px] items-center justify-center">
            <img
              :src="m.img"
              :alt="m.alt"
              class="max-h-[180px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <p class="mt-6 font-mono text-[11px] uppercase tracking-label text-atom-blue">
            {{ m.eyebrow }}
          </p>
          <h3 class="mt-2 font-display text-2xl font-semibold text-atom-navy">
            {{ m.title }}
          </h3>
          <p class="mt-3 text-body text-atom-navy/70">
            {{ m.copy }}
          </p>

          <ul class="mt-6 space-y-2">
            <li
              v-for="s in m.specs"
              :key="s"
              class="flex items-start gap-2 text-sm text-atom-navy/80"
            >
              <span
                class="mt-[7px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-atom-blue"
                aria-hidden="true"
              />
              <span>{{ s }}</span>
            </li>
          </ul>

          <a
            :href="m.ctaHref"
            class="mt-8 inline-flex items-center gap-1.5 self-start text-sm font-medium text-atom-blue transition-colors hover:text-atom-navy"
          >
            {{ m.ctaLabel }}
            <ArrowRight :size="14" />
          </a>
        </article>
      </div>
    </div>
  </section>

  <!-- SECCION 2 · TRANSFORMACION -->
  <section
    id="transformacion"
    class="border-t border-atom-border bg-white"
    aria-labelledby="transformacion-title"
  >
    <div class="container-atom py-20 md:py-28">
      <div class="max-w-3xl" data-motion="fade-up">
        <p class="eyebrow">Secuencia</p>
        <h2
          id="transformacion-title"
          class="mt-4 font-display text-section font-semibold text-atom-navy"
        >
          De sentado a de pie en ~15 segundos.
        </h2>
        <p class="mt-4 max-w-prose2 text-body-lg text-atom-navy/70">
          Cinco fases controladas por el ESP32 de transformacion, con chequeos
          de seguridad y confirmacion por voz en cada paso.
        </p>
      </div>

      <div class="relative mt-14">
        <svg
          class="pointer-events-none absolute inset-x-0 top-[46px] z-0 hidden h-px w-full md:block"
          aria-hidden="true"
          preserveAspectRatio="none"
          viewBox="0 0 1000 1"
        >
          <path
            data-timeline-path
            d="M 0 0.5 L 1000 0.5"
            stroke="#1b61c9"
            stroke-width="1"
            stroke-dasharray="4 4"
            fill="none"
            vector-effect="non-scaling-stroke"
          />
        </svg>

        <ol
          class="relative z-10 grid gap-6 md:grid-cols-5 md:gap-4"
          data-motion="fade-up"
        >
          <li
            v-for="(step, idx) in steps"
            :key="step.n"
            :data-motion="'fade-up'"
            :data-motion-delay="idx * 120"
            class="relative"
          >
            <div class="flex h-full flex-col rounded-xl border border-atom-border bg-atom-surface-soft p-6 transition-all duration-300 hover:border-atom-blue/40 hover:bg-white hover:shadow-atom-soft">
              <div class="flex items-center justify-between">
                <span
                  class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-atom-navy font-mono text-sm font-semibold text-white ring-4 ring-atom-surface-soft"
                >
                  {{ step.n }}
                </span>
                <component
                  :is="step.icon"
                  :size="20"
                  class="text-atom-blue"
                />
              </div>

              <h3 class="mt-5 font-display text-base font-semibold text-atom-navy">
                {{ step.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-atom-navy/70">
                {{ step.copy }}
              </p>
              <p class="mt-auto pt-4 font-mono text-[11px] uppercase tracking-label text-atom-navy/50">
                {{ step.duration }}
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>

  <!-- SECCION 3 · ARQUITECTURA / PILARES -->
  <section
    id="arquitectura"
    class="border-t border-atom-border bg-atom-surface-soft"
    aria-labelledby="arquitectura-title"
  >
    <div class="container-atom py-20 md:py-28">
      <div class="max-w-3xl" data-motion="fade-up">
        <p class="eyebrow">Arquitectura</p>
        <h2
          id="arquitectura-title"
          class="mt-4 font-display text-section font-semibold text-atom-navy"
        >
          Los 5 pilares mecatronicos en un proyecto.
        </h2>
        <p class="mt-4 max-w-prose2 text-body-lg text-atom-navy/70">
          A.T.O.M. fue diseñado para integrar las cinco areas del programa de
          Mecatronica de ULatina en un solo sistema real.
        </p>
      </div>

      <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <article
          v-for="(p, idx) in pillars"
          :key="p.title"
          :data-motion="'scale-in'"
          :data-motion-delay="idx * 60"
          class="group rounded-xl border border-atom-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-atom-blue/40 hover:shadow-atom-soft"
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-atom-blue/10 text-atom-blue transition-colors group-hover:bg-atom-blue group-hover:text-white"
          >
            <component :is="p.icon" :size="20" />
          </span>
          <h3 class="mt-4 font-display text-base font-semibold text-atom-navy">
            {{ p.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-atom-navy/70">
            {{ p.copy }}
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- SECCION 4 · COMPONENTES / BOM -->
  <section
    id="componentes"
    class="border-t border-atom-border bg-white"
    aria-labelledby="componentes-title"
  >
    <div class="container-atom py-20 md:py-28">
      <div class="grid gap-12 lg:grid-cols-[4fr_6fr] lg:gap-16">
        <div data-motion="fade-up">
          <p class="eyebrow">BOM</p>
          <h2
            id="componentes-title"
            class="mt-4 font-display text-section font-semibold text-atom-navy"
          >
            Presupuesto cerrado en USD 2,542.
          </h2>
          <p class="mt-4 text-body text-atom-navy/70">
            Cotizaciones al 2026-04-13 con proveedores locales (Cognix,
            Metalurgica del Istmo) y envio internacional desde Aliexpress,
            Amazon, Digikey y JLCPCB.
          </p>
          <p class="mt-4 text-body text-atom-navy/70">
            Incluye 15% de contingencia y envios. Para el entregable academico
            actual no se requiere compra — solo documentacion del BOM.
          </p>

          <div class="mt-8 rounded-2xl border border-atom-blue/20 bg-atom-blue/5 p-6">
            <p class="font-mono text-[11px] uppercase tracking-label text-atom-blue">
              Total prototipo funcional
            </p>
            <p class="mt-2 font-display text-4xl font-semibold text-atom-navy">
              <CountUp :to="bomTotal" prefix="USD " :duration="1600" />
            </p>
            <p class="mt-1 text-xs text-atom-navy/60">
              Antes: USD 2,800-3,500 con triple modo.
            </p>
          </div>
        </div>

        <div class="space-y-4" data-motion="fade-up">
          <div
            v-for="(item, idx) in bomItems"
            :key="item.category"
            class="group"
            :data-motion-delay="idx * 50"
          >
            <div class="flex items-baseline justify-between gap-4">
              <span class="text-sm font-medium text-atom-navy">
                {{ item.category }}
              </span>
              <span class="font-mono text-sm tabular-nums text-atom-navy/70">
                <CountUp :to="item.cost" prefix="USD " :duration="1300" />
              </span>
            </div>
            <div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-atom-surface-soft">
              <div
                class="h-full rounded-full bg-gradient-to-r from-atom-blue to-atom-accent transition-[width] duration-500"
                :style="{ width: `${(item.cost / bomMax) * 100}%` }"
              />
            </div>
          </div>

          <div class="mt-8 flex items-baseline justify-between border-t border-atom-border pt-6">
            <span class="font-display text-base font-semibold text-atom-navy">
              Total
            </span>
            <span class="font-mono text-xl font-semibold tabular-nums text-atom-blue">
              <CountUp :to="bomTotal" prefix="USD " :duration="1800" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECCION 5 · VOZ -->
  <section
    id="voz"
    class="border-t border-atom-border bg-atom-surface-soft"
    aria-labelledby="voz-title"
  >
    <div class="container-atom py-20 md:py-28">
      <div class="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div data-motion="slide-left">
          <p class="eyebrow">
            <Mic :size="12" />
            Voz
          </p>
          <h2
            id="voz-title"
            class="mt-4 font-display text-section font-semibold text-atom-navy"
          >
            Voz local sin internet.
          </h2>
          <p class="mt-4 text-body-lg text-atom-navy/70">
            Un Raspberry Pi 5 con 8 GB ejecuta el pipeline completo:
            <span class="font-mono text-sm text-atom-navy">whisper.cpp</span>
            para STT en español,
            <span class="font-mono text-sm text-atom-navy">llama.cpp</span>
            con Phi-3-mini Q4 para intent recognition y
            <span class="font-mono text-sm text-atom-navy">Piper</span>
            para TTS. Sin nube, sin dependencia de red, latencia objetivo
            &lt;1.5 s.
          </p>

          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg border border-atom-border bg-white p-4">
              <p class="font-mono text-[11px] uppercase tracking-label text-atom-navy/50">
                Latencia
              </p>
              <p class="mt-1 font-display text-2xl font-semibold text-atom-navy">
                &lt;1.5s
              </p>
            </div>
            <div class="rounded-lg border border-atom-border bg-white p-4">
              <p class="font-mono text-[11px] uppercase tracking-label text-atom-navy/50">
                Privacidad
              </p>
              <p class="mt-1 font-display text-2xl font-semibold text-atom-navy">
                100% local
              </p>
            </div>
          </div>

          <div class="mt-8">
            <p class="font-mono text-[11px] uppercase tracking-label text-atom-navy/50">
              Comandos soportados (10 intents)
            </p>
            <ul class="mt-3 flex flex-wrap gap-2">
              <li
                v-for="cmd in voiceCommands"
                :key="cmd"
                class="rounded-full border border-atom-border bg-white px-3 py-1 font-mono text-xs text-atom-navy/80"
              >
                {{ cmd }}
              </li>
            </ul>
          </div>
        </div>

        <div data-motion="slide-right">
          <div class="relative overflow-hidden rounded-2xl border border-atom-navy/20 bg-atom-navy p-8 shadow-atom-lg">
            <div
              class="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-40 blur-3xl"
              style="background: radial-gradient(closest-side, rgba(0,212,255,0.45), transparent 70%);"
              aria-hidden="true"
            />

            <div class="flex items-center gap-2 border-b border-white/10 pb-4">
              <span class="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span class="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
              <span class="h-2.5 w-2.5 rounded-full bg-green-500/80" />
              <span class="ml-3 font-mono text-[11px] uppercase tracking-label text-white/50">
                atom-shell · ttyUSB0
              </span>
            </div>

            <div class="mt-6 space-y-4 font-mono text-sm">
              <div>
                <p class="text-atom-accent">$ mic capturing...</p>
              </div>
              <div>
                <p class="text-white/50">Usuario:</p>
                <p class="mt-1 text-white">"A.T.O.M., levantame"</p>
              </div>
              <div>
                <p class="text-white/50">stt → llm → intent:</p>
                <p class="mt-1 text-atom-accent">
                  {"{ action: \"transform\", target: \"exo\" }"}
                </p>
              </div>
              <div>
                <p class="text-white/50">A.T.O.M.:</p>
                <p class="mt-1 text-white">
                  "Levantando en 3... 2... 1"
                </p>
              </div>
              <div class="flex items-center gap-2 rounded-md border border-atom-accent/30 bg-atom-accent/5 px-3 py-2 text-atom-accent">
                <Volume2 :size="14" />
                <span class="text-xs">modo exoesqueleto activado · 15s</span>
              </div>
              <div>
                <p class="text-white/50">A.T.O.M.:</p>
                <p class="mt-1 text-white">
                  "Listo, ya estas de pie."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECCION 6 · SPRINTS -->
  <section
    id="sprints"
    class="border-t border-atom-border bg-white"
    aria-labelledby="sprints-title"
  >
    <div class="container-atom py-20 md:py-28">
      <div class="max-w-3xl" data-motion="fade-up">
        <p class="eyebrow">Roadmap</p>
        <h2
          id="sprints-title"
          class="mt-4 font-display text-section font-semibold text-atom-navy"
        >
          9 sprints · 20 semanas.
        </h2>
        <p class="mt-4 max-w-prose2 text-body-lg text-atom-navy/70">
          Del kickoff con Leonel al paper IEEE y el video final. Entregable
          actual cubre Sprint 0; la ejecucion fisica continua en Proyecto
          Integrador.
        </p>
      </div>

      <ol class="mt-14 space-y-6">
        <li
          v-for="(s, idx) in sprints"
          :key="s.n"
          :data-motion="'fade-up'"
          :data-motion-delay="idx * 40"
          class="group grid gap-4 rounded-xl border border-atom-border bg-atom-surface-soft p-6 transition-all duration-300 hover:border-atom-blue/40 hover:bg-white hover:shadow-atom-soft md:grid-cols-[200px_1fr] md:items-start md:gap-8"
        >
          <div>
            <p class="font-mono text-xs font-semibold uppercase tracking-label text-atom-blue">
              {{ s.n }}
            </p>
            <p class="mt-1 font-mono text-[11px] uppercase tracking-label text-atom-navy/50">
              {{ s.range }}
            </p>
          </div>

          <div>
            <h3 class="font-display text-lg font-semibold text-atom-navy">
              {{ s.title }}
            </h3>
            <ul class="mt-3 space-y-1.5">
              <li
                v-for="b in s.bullets"
                :key="b"
                class="flex items-start gap-2 text-sm text-atom-navy/70"
              >
                <span
                  class="mt-[7px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-atom-navy/30"
                  aria-hidden="true"
                />
                <span>{{ b }}</span>
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <!-- SECCION 7 · CONTACTO -->
  <section
    id="contacto"
    class="border-t border-atom-border bg-atom-surface-soft"
    aria-labelledby="contacto-title"
  >
    <div class="container-atom py-20 md:py-28">
      <div
        class="mx-auto max-w-3xl rounded-2xl border border-atom-border bg-white p-10 text-center shadow-atom-soft md:p-14"
        data-motion="scale-in"
      >
        <p class="eyebrow justify-center">
          <Sparkles :size="12" />
          Proyecto academico
        </p>
        <h2
          id="contacto-title"
          class="mt-4 font-display text-section font-semibold text-atom-navy"
        >
          ULatina · Mecatronica · Ciclo 2026-1
        </h2>
        <p class="mx-auto mt-4 max-w-xl text-body-lg text-atom-navy/70">
          Estudiante Obed Gonzalez · Profesor Ing. Leonel Gonzalez. Propuesta
          entregada el 2026-04-14 como proyecto final de Introduccion a
          Ingenieria Mecatronica.
        </p>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/Obed0101/atom-web/blob/main/docs/PROPUESTA.md"
            class="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText :size="16" />
            Ver PROPUESTA.md
          </a>
          <a
            href="https://github.com/Obed0101/atom-web/blob/main/docs/COMPONENTES.md"
            class="btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Package :size="16" />
            Ver BOM
          </a>
          <a
            href="https://github.com/Obed0101/atom-web"
            class="btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github :size="16" />
            Repo
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
