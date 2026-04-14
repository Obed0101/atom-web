<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

interface Props {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  locale?: string;
}
const props = withDefaults(defineProps<Props>(), {
  duration: 1500,
  prefix: "",
  suffix: "",
  locale: "en-US",
});

const el = ref<HTMLElement | null>(null);
const displayed = ref(0);
let raf = 0;
let io: IntersectionObserver | null = null;
let played = false;

const reduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const run = () => {
  if (played) return;
  played = true;
  if (reduced()) {
    displayed.value = props.to;
    return;
  }
  const start = performance.now();
  const tick = (t: number) => {
    const p = Math.min((t - start) / props.duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    displayed.value = Math.round(props.to * eased);
    if (p < 1) raf = requestAnimationFrame(tick);
    else displayed.value = props.to;
  };
  raf = requestAnimationFrame(tick);
};

onMounted(() => {
  if (!el.value || typeof window === "undefined") return;
  io = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        run();
        io?.disconnect();
      }
    },
    { threshold: 0.4 },
  );
  io.observe(el.value);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(raf);
  io?.disconnect();
});
</script>

<template>
  <span ref="el" class="tabular-nums">
    {{ prefix }}{{ displayed.toLocaleString(locale) }}{{ suffix }}
  </span>
</template>
