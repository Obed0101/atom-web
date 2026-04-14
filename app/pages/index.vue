<script setup lang="ts">
import { ArrowRight, Sparkles } from "lucide-vue-next";
import { motion } from "motion-v";

useHead({
  title: "A.T.O.M. — Un chasis. Dos modos. Libertad.",
});

const heroEyebrow = "Proyecto final · Mecatronica ULatina · 2026";
const heroTitle = "A.T.O.M.";
const heroSubtitle = "Un chasis. Dos modos. Libertad.";
const heroCopy =
  "Asistente Transformable para Operacion de Movilidad: un vehiculo personal 2-en-1 que pasa de pod motorizado a exoesqueleto de asistencia, controlado por voz con IA local — sin nube, sin compromisos.";

const modeBadges = [
  { src: "/tinycar.png", alt: "Icono modo pod", label: "Modo 1 · Pod" },
  { src: "/tinyexo.png", alt: "Icono modo exoesqueleto", label: "Modo 2 · Exo" },
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
          <a href="#modos" class="btn-primary">
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
            src="/hero-silla.jpg"
            alt="Render de A.T.O.M. en modo pod personal"
            class="h-full w-full object-cover object-center"
            style="transform: scale(1.02);"
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

  <section
    id="modos"
    class="border-t border-atom-border bg-atom-surface-soft"
    aria-labelledby="modos-title"
  >
    <!-- CC2: fill content here -->
    <div class="container-atom py-24 text-center">
      <p class="eyebrow justify-center">Modos</p>
      <h2
        id="modos-title"
        class="mt-4 font-display text-section font-semibold text-atom-navy"
      >
        Seccion en construccion
      </h2>
      <p class="mx-auto mt-3 max-w-xl text-atom-navy/60">
        CC2 rellena este bloque con el detalle de los 2 modos operativos.
      </p>
    </div>
  </section>
</template>
