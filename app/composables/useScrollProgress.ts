import { onBeforeUnmount, onMounted, ref } from "vue";

export function useScrollProgress(scrolledThreshold = 8) {
  const progress = ref(0);
  const scrolled = ref(false);
  let frame = 0;

  function read() {
    frame = 0;
    if (typeof window === "undefined") return;
    const doc = document.documentElement;
    const top = window.scrollY || doc.scrollTop || 0;
    const max = (doc.scrollHeight || 0) - (doc.clientHeight || 0);
    progress.value = max > 0 ? Math.min(1, Math.max(0, top / max)) : 0;
    scrolled.value = top > scrolledThreshold;
  }

  function schedule() {
    if (frame !== 0) return;
    frame = window.requestAnimationFrame(read);
  }

  onMounted(() => {
    read();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
  });

  onBeforeUnmount(() => {
    if (typeof window === "undefined") return;
    window.removeEventListener("scroll", schedule);
    window.removeEventListener("resize", schedule);
    if (frame !== 0) window.cancelAnimationFrame(frame);
  });

  return { progress, scrolled };
}
