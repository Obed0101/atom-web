<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";
import { computed, ref, watch } from "vue";
import { useScrollProgress } from "~/composables/useScrollProgress";
import { useActiveSection } from "~/composables/useActiveSection";

const open = ref(false);
const links = [
  { label: "Concepto", href: "#concepto", id: "concepto" },
  { label: "Modos", href: "#modos", id: "modos" },
  { label: "Arquitectura", href: "#arquitectura", id: "arquitectura" },
  { label: "Contacto", href: "#contacto", id: "contacto" },
];

const { progress, scrolled } = useScrollProgress(8);
const active = useActiveSection(links.map((l) => l.id));

const progressStyle = computed(() => ({
  transform: `scaleX(${progress.value})`,
}));

watch(open, (value) => {
  if (typeof document === "undefined") return;
  document.body.style.overflow = value ? "hidden" : "";
});

function closeMenu() {
  open.value = false;
}
</script>

<template>
  <div class="min-h-screen bg-white text-atom-navy">
    <header
      class="topbar sticky top-0 z-50"
      :class="scrolled ? 'topbar--scrolled' : 'topbar--top'"
    >
      <div class="topbar-progress" aria-hidden="true">
        <div class="topbar-progress__bar" :style="progressStyle"></div>
      </div>

      <div class="container-atom flex h-16 items-center justify-between">
        <NuxtLink
          to="/"
          class="topbar-logo font-display text-[22px] font-bold tracking-tight2"
          aria-label="A.T.O.M. inicio"
        >
          <span class="topbar-logo__text">A.T.O.M.</span>
        </NuxtLink>

        <nav
          class="hidden items-center gap-1 md:flex"
          aria-label="Navegacion principal"
        >
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="nav-link"
            :class="{ 'nav-link--active': active === link.id }"
            :aria-current="active === link.id ? 'page' : undefined"
          >
            <span>{{ link.label }}</span>
          </a>
        </nav>

        <a
          href="#modos"
          class="topbar-cta hidden md:inline-flex btn-primary !px-5 !py-2 !text-[14px]"
        >
          <span class="relative z-10">Ver los 2 modos</span>
        </a>

        <button
          class="topbar-burger md:hidden inline-flex h-10 w-10 items-center justify-center rounded-btn border border-atom-border bg-white/70 text-atom-navy backdrop-blur-md"
          :aria-label="open ? 'Cerrar menu' : 'Abrir menu'"
          :aria-expanded="open"
          aria-controls="mobile-drawer"
          @click="open = !open"
        >
          <X v-if="open" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </header>

    <Teleport to="body">
      <Transition name="drawer-overlay">
        <div
          v-if="open"
          class="drawer-overlay md:hidden"
          aria-hidden="true"
          @click="closeMenu"
        ></div>
      </Transition>
      <Transition name="drawer">
        <aside
          v-if="open"
          id="mobile-drawer"
          class="drawer md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegacion"
        >
          <div class="drawer__head">
            <span
              class="font-display text-[18px] font-bold tracking-tight2 text-atom-navy"
            >
              A.T.O.M.
            </span>
            <button
              class="inline-flex h-10 w-10 items-center justify-center rounded-btn border border-atom-border text-atom-navy"
              aria-label="Cerrar menu"
              @click="closeMenu"
            >
              <X :size="20" />
            </button>
          </div>
          <nav class="drawer__nav" aria-label="Navegacion movil">
            <a
              v-for="(link, i) in links"
              :key="link.href"
              :href="link.href"
              class="drawer__link"
              :class="{ 'drawer__link--active': active === link.id }"
              :style="{ animationDelay: `${80 + i * 55}ms` }"
              :aria-current="active === link.id ? 'page' : undefined"
              @click="closeMenu"
            >
              <span class="drawer__link-index">0{{ i + 1 }}</span>
              <span>{{ link.label }}</span>
            </a>
            <a
              href="#modos"
              class="drawer__cta btn-primary !py-2.5 !text-[14px]"
              @click="closeMenu"
            >
              Ver los 2 modos
            </a>
          </nav>
        </aside>
      </Transition>
    </Teleport>

    <main>
      <slot />
    </main>

    <footer class="border-t border-atom-border bg-atom-surface-soft">
      <div
        class="container-atom flex flex-col items-center justify-between gap-3 py-8 text-center md:flex-row md:text-left"
      >
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

<style scoped>
.topbar {
  transition:
    background-color 320ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 320ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 320ms cubic-bezier(0.16, 1, 0.3, 1);
  border-bottom: 1px solid transparent;
}
.topbar--top {
  background-color: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(8px) saturate(140%);
  -webkit-backdrop-filter: blur(8px) saturate(140%);
}
.topbar--scrolled {
  background-color: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(18px) saturate(170%);
  -webkit-backdrop-filter: blur(18px) saturate(170%);
  border-bottom-color: rgba(224, 226, 230, 0.85);
  box-shadow: 0 8px 24px -16px rgba(15, 48, 106, 0.15);
}

.topbar-progress {
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  overflow: hidden;
  pointer-events: none;
}
.topbar-progress__bar {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, #1b61c9 0%, #00d4ff 100%);
  transform-origin: left center;
  transform: scaleX(0);
  transition: transform 120ms linear;
  box-shadow: 0 0 8px rgba(0, 212, 255, 0.45);
}

.topbar-logo {
  position: relative;
  display: inline-flex;
  align-items: center;
  color: var(--theme-fg);
}
.topbar-logo__text {
  display: inline-block;
  color: var(--theme-fg);
  transition: color 220ms ease;
}
.topbar-logo:hover .topbar-logo__text,
.topbar-logo:focus-visible .topbar-logo__text {
  background: linear-gradient(90deg, #1b61c9 0%, #00d4ff 50%, #1b61c9 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: logoSheen 1.8s linear infinite;
}
@keyframes logoSheen {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.nav-link {
  position: relative;
  padding: 6px 12px;
  font-size: 15px;
  font-weight: 500;
  color: rgba(24, 29, 38, 0.72);
  border-radius: 8px;
  transition: color 220ms ease;
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 2px;
  height: 2px;
  border-radius: 2px;
  background: linear-gradient(90deg, #1b61c9, #00d4ff);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 320ms cubic-bezier(0.16, 1, 0.3, 1);
}
.nav-link:hover {
  color: #1b61c9;
}
.nav-link:hover::after,
.nav-link:focus-visible::after {
  transform: scaleX(1);
}
.nav-link--active {
  color: #1b61c9;
}
.nav-link--active::after {
  transform: scaleX(1);
  transform-origin: left center;
}

.topbar-cta {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}
.topbar-cta::before {
  content: "";
  position: absolute;
  top: 0;
  left: -120%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.55),
    transparent
  );
  transform: skewX(-22deg);
  pointer-events: none;
  z-index: 0;
  transition: left 700ms cubic-bezier(0.22, 1, 0.36, 1);
}
.topbar-cta:hover::before,
.topbar-cta:focus-visible::before {
  left: 130%;
}

.topbar-burger {
  transition:
    background-color 200ms ease,
    border-color 200ms ease,
    transform 200ms ease;
}
.topbar-burger:hover {
  background-color: var(--theme-surface-soft);
  border-color: rgba(24, 29, 38, 0.35);
}
.topbar-burger:active {
  transform: scale(0.94);
}

.drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: 60;
  background: rgba(10, 14, 23, 0.45);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 70;
  width: min(86vw, 320px);
  background: #ffffff;
  box-shadow: -24px 0 48px -16px rgba(15, 48, 106, 0.22);
  display: flex;
  flex-direction: column;
}
.drawer__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  border-bottom: 1px solid var(--theme-border);
}
.drawer__nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 12px;
}
.drawer__link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--theme-fg);
  transition:
    background-color 200ms ease,
    color 200ms ease;
  opacity: 0;
  animation: drawerLinkIn 360ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.drawer__link:hover {
  background: var(--theme-surface-soft);
  color: var(--theme-primary);
}
.drawer__link--active {
  background: linear-gradient(
    90deg,
    rgba(27, 97, 201, 0.1),
    rgba(0, 212, 255, 0.04)
  );
  color: var(--theme-primary);
}
.drawer__link-index {
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 11px;
  color: rgba(24, 29, 38, 0.4);
  letter-spacing: 0.1em;
  min-width: 24px;
}
.drawer__cta {
  margin-top: 12px;
  opacity: 0;
  animation: drawerLinkIn 360ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 360ms;
}
@keyframes drawerLinkIn {
  from {
    opacity: 0;
    transform: translateX(12px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.drawer-enter-active,
.drawer-leave-active {
  transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1);
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}
.drawer-overlay-enter-active,
.drawer-overlay-leave-active {
  transition: opacity 280ms ease;
}
.drawer-overlay-enter-from,
.drawer-overlay-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .topbar,
  .topbar-progress__bar,
  .nav-link,
  .nav-link::after,
  .topbar-cta::before,
  .topbar-logo__text,
  .topbar-burger,
  .drawer-enter-active,
  .drawer-leave-active,
  .drawer-overlay-enter-active,
  .drawer-overlay-leave-active,
  .drawer__link,
  .drawer__cta {
    transition: none !important;
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
  .topbar-cta::before {
    display: none;
  }
  .topbar-logo:hover .topbar-logo__text,
  .topbar-logo:focus-visible .topbar-logo__text {
    background: none;
    -webkit-text-fill-color: currentColor;
    color: var(--theme-primary);
    animation: none;
  }
}
</style>
