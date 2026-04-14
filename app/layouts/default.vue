<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
import { ref } from "vue";

const open = ref(false);
const links = [
  { label: "Concepto", href: "#concepto" },
  { label: "Modos", href: "#modos" },
  { label: "Arquitectura", href: "#arquitectura" },
  { label: "Contacto", href: "#contacto" },
];
</script>

<template>
  <div class="min-h-screen bg-white text-atom-navy">
    <header
      class="sticky top-0 z-50 border-b border-atom-border/60 bg-white/80 backdrop-blur-xl"
    >
      <div class="container-atom flex h-16 items-center justify-between">
        <NuxtLink
          to="/"
          class="font-display text-[22px] font-bold tracking-tight2 text-atom-navy"
          aria-label="A.T.O.M. inicio"
        >
          A.T.O.M.
        </NuxtLink>

        <nav class="hidden items-center gap-8 md:flex" aria-label="Navegacion principal">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="text-[15px] font-medium text-atom-navy/75 transition-colors hover:text-atom-blue"
          >
            {{ link.label }}
          </a>
        </nav>

        <a href="#modos" class="hidden md:inline-flex btn-primary !px-5 !py-2 !text-[14px]">
          Ver los 2 modos
        </a>

        <button
          class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-btn border border-atom-border text-atom-navy"
          :aria-label="open ? 'Cerrar menu' : 'Abrir menu'"
          @click="open = !open"
        >
          <X v-if="open" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>

      <div v-if="open" class="md:hidden border-t border-atom-border bg-white">
        <nav class="container-atom flex flex-col gap-1 py-4" aria-label="Navegacion movil">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="rounded-btn px-3 py-2 text-[15px] font-medium text-atom-navy hover:bg-atom-surface-soft"
            @click="open = false"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="border-t border-atom-border bg-atom-surface-soft">
      <div class="container-atom flex flex-col items-center justify-between gap-3 py-8 text-center md:flex-row md:text-left">
        <p class="text-sm text-atom-navy/70">
          &copy; 2026 Obed Gonzalez — Proyecto Final Mecatronica ULatina
        </p>
        <p class="text-xs font-mono text-atom-navy/50">
          Asesor: Ing. Leonel Gonzalez
        </p>
      </div>
    </footer>
  </div>
</template>
