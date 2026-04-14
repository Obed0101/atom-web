import { onBeforeUnmount, onMounted } from "vue";

type Cleanup = () => void;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initMotionObserver(root: ParentNode = document): Cleanup {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return () => {};
  }

  const reduced = prefersReducedMotion();
  const targets = Array.from(
    root.querySelectorAll<HTMLElement>("[data-motion]"),
  );

  if (reduced) {
    targets.forEach((el) => el.classList.add("is-inview"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        const delay = Number(el.dataset.motionDelay ?? 0);
        if (delay > 0) {
          window.setTimeout(() => el.classList.add("is-inview"), delay);
        } else {
          el.classList.add("is-inview");
        }
        observer.unobserve(el);
      }
    },
    { rootMargin: "-10% 0px -10% 0px", threshold: 0.12 },
  );

  targets.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

async function initHeroParallax(): Promise<Cleanup> {
  if (typeof window === "undefined" || prefersReducedMotion()) return () => {};
  const heroImg = document.querySelector<HTMLElement>("[data-parallax-hero]");
  const heroSection = document.getElementById("hero");
  if (!heroImg || !heroSection) return () => {};

  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  const tween = gsap.fromTo(
    heroImg,
    { yPercent: -6 },
    {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: heroSection,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    },
  );

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
}

async function initTimelineDraw(): Promise<Cleanup> {
  if (typeof window === "undefined" || prefersReducedMotion()) return () => {};
  const path = document.querySelector<SVGPathElement>("[data-timeline-path]");
  const section = document.getElementById("transformacion");
  if (!path || !section) return () => {};

  const length = path.getTotalLength();
  path.style.strokeDasharray = `${length}`;
  path.style.strokeDashoffset = `${length}`;

  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  const tween = gsap.to(path, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top 75%",
      end: "bottom 60%",
      scrub: 0.8,
    },
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
}

export function useScrollAnimations() {
  const cleanups: Cleanup[] = [];

  onMounted(async () => {
    await new Promise((r) => requestAnimationFrame(() => r(null)));
    cleanups.push(initMotionObserver());
    cleanups.push(await initHeroParallax());
    cleanups.push(await initTimelineDraw());
  });

  onBeforeUnmount(() => {
    for (const c of cleanups) c();
  });
}
