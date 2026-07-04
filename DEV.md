# Local development

## Hot Module Replacement (HMR)

`npm run dev` runs Next.js 15 with **Turbopack** (`next dev --turbo`) and **Fast Refresh** enabled by default.

Most edits to components, styles, and pages update in the browser instantly — **no dev server restart needed**.

Restart `npm run dev` only when you change:

- `next.config.ts`
- Environment variables (`.env*`)
- `package.json` dependencies (after `npm install`)

## Agent auto-restart policy

When Cursor (or any agent) edits UI-affecting code, it should **restart the dev server automatically**:

1. `lsof -ti:3000 | xargs kill -9` (or graceful kill first)
2. `npm run dev` in the background and wait for **Ready**

Do not instruct the user to restart manually; HMR is fine for day-to-day edits, but post-agent changes use a full restart by preference.

