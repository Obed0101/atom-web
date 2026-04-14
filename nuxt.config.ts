// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "~/tailwind.config.js",
  },
  app: {
    head: {
      htmlAttrs: { lang: "es" },
      title: "A.T.O.M. — Asistente Transformable de Movilidad",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "A.T.O.M. — Un chasis, dos modos. Pod personal motorizado y exoesqueleto de asistencia, controlado por voz con IA local. Proyecto final Mecatronica ULatina.",
        },
        { name: "theme-color", content: "#1b61c9" },
        { property: "og:title", content: "A.T.O.M. — Asistente Transformable de Movilidad" },
        { property: "og:description", content: "Un chasis. Dos modos. Libertad." },
        { property: "og:type", content: "website" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500&display=swap",
        },
      ],
    },
  },
});
