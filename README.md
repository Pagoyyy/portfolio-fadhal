# Fadhal Portfolio

Portfolio website built with Next.js App Router, React, TypeScript, and Motion.

## Run locally

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Validate and build

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Deploy to Vercel

1. Add this project folder to a GitHub repository. Keep `package-lock.json` so installs are reproducible; `node_modules`, `.next`, local environment files, and build output are excluded by `.gitignore`.
2. Import the repository in Vercel. Vercel detects Next.js automatically; use the project root as the Root Directory and leave the framework preset and output directory on their defaults.
3. Deploy. The portrait and background audio are served from `public/` and are included in the deployment.

The site uses muted autoplay because browsers block automatic audio with sound. Visitors can enable it with the SOUND control.