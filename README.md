# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deploy en Vercel

Este repo ya incluye `vercel.json` para deploy estático con Nuxt:

- `installCommand`: `bun install --frozen-lockfile`
- `buildCommand`: `bun run generate`
- `outputDirectory`: `.output/public`

Pasos:

1. Importa el repo en Vercel.
2. Framework preset: **Other** o **Nuxt.js** (ambos funcionan con `vercel.json`).
3. Deploy.

Para validar local antes de subir:

```bash
bun run generate
npx serve .output/public
```
