import { onBeforeUnmount, onMounted, ref } from "vue";

export function useActiveSection(
  ids: string[],
  rootMargin = "-45% 0px -50% 0px",
) {
  const active = ref<string | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          active.value = (visible[0].target as HTMLElement).id;
        }
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer!.observe(el));
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
    observer = null;
  });

  return active;
}
