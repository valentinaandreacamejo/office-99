# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

OFFICE 99 — portfolio site for a fictional brand. Aesthetic: "Retro-Office / Fashion Editorial" (Gen Z, 2026): strong two-tone contrast (garnet `#51000E` / powder blue `#BDE0FF`), editorial serif display type, archive-style mono badges like `[001]`, stamp/pill buttons, marquee tickers.

Angular 22 (standalone components, signals), SCSS, Vitest via `@angular/build:unit-test`.

## Commands

Node comes from nvm (version pinned in `.nvmrc` → v24.21.0, which also provides the global `ng`). Non-interactive shells don't load nvm: prefix `PATH=~/.nvm/versions/node/v24.21.0/bin:$PATH`.

- Dev server: `npm start` (http://localhost:4200)
- Production build: `npm run build` (output in `dist/office-99/`)
- Unit tests: `npx ng test --watch=false`
- Single spec file: `npx ng test --watch=false --include src/app/app.spec.ts`
- Format: `npx prettier --write .` (printWidth 100, single quotes, Angular parser for HTML). No linter is configured.

## Conventions

- Angular v20+ file naming: `header.ts` / `header.html` / `header.scss`, class `Header` (no `.component` suffix). Components are standalone by default — don't add `standalone: true`.
- Every component sets `changeDetection: ChangeDetectionStrategy.OnPush`, uses signal `input()` and `@if`/`@for` control flow.
- Pages are lazy-loaded via `loadComponent` in `app.routes.ts`. In-page navigation uses `routerLink="/" [fragment]="..."` with anchor scrolling enabled in `app.config.ts`; section ids are `projects`, `about`, `services`, `contact`.

## Architecture

- `src/app/core/` — models (barrel `core/models/index.ts`) and root-provided services. `ProjectsService` exposes project data as a readonly signal; it holds mock data meant to be swapped for a real source.
- `src/app/shared/components/` — reusable atoms (header, footer, badge, ticker, button).
- `src/app/features/home/` — `Home` page composing the section components under `components/` (hero, projects-grid, about, services, contact).

### Styling system (important)

Global SCSS lives in `src/styles/` and is wired from `src/styles.scss`. `angular.json` adds `src/styles` to `stylePreprocessorOptions.includePaths`, so partials are imported by bare name.

- `_variables.scss` — design tokens. Emits `:root` CSS custom properties (`--color-*`, `--font-display|ui|mono`, `--fs-*`, `--border`, `--shadow-stamp`, `--duration`, `--ease-snap`, `--gutter`, `--section-space`, `--header-height`…). **Never `@use` it from a component stylesheet** — it would duplicate `:root` in every component's CSS. Components consume the CSS custom properties.
- `_mixins.scss` — output-free, safe in components: `@use 'mixins' as *;`. Breakpoints: mobile < 768px ≤ tablet < 1200px ≤ desktop. Mixins: `mobile`, `tablet`, `desktop`, `tablet-up`, `tablet-down`, `respond-to($bp)`, `container`, `section`, `focus-ring`, `reduced-motion`.
- `_utilities.scss` — global design-system primitives: `.bg-garnet`/`.bg-powder` (also set contrasting text color), `.text-garnet`/`.text-powder`, `.badge-tag` (+ `--garnet`, `--powder`, `--live`), `.btn-office` (+ `--powder`, `--outline`).
- `_typography.scss` — `.font-display`, `.font-ui`, `.font-mono` and heading defaults. Fonts (Playfair Display, Syne, Space Mono) are loaded via `<link>` in `src/index.html`.

The `Badge` and `Button` components carry no styles of their own: they apply the global `.badge-tag` / `.btn-office` classes through `host` bindings, so visual changes go in `_utilities.scss`. `Button` uses an attribute selector to keep native semantics: `<a appButton variant="outline">` / `<button appButton>`.

Component style budget (angular.json): warning at 4 kB, error at 8 kB per component stylesheet.
