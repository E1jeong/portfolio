# Portfolio Website AI Guide

## Context

This is a code-navigation and safety guide, not project history. Product context, content decisions, roadmap, and history live in the vault-relative `Dev/Project/Personal/portfolio` wiki; resolve it through `_meta/routing-tables.md` or `obsidian-wiki-sync`, then follow the vault root `AGENTS.md`.

Report plans and results in Korean.

## Code Map

| Module | Responsibility | Key Files |
| --- | --- | --- |
| `app/` | Next.js App Router pages, layouts, styles, and static project routes | `app/page.tsx`, `app/projects/[id]/page.tsx`, `app/layout.tsx`, `app/globals.css` |
| `data/` | Single site-content source and typed portfolio data model | `data/portfolio.ts` |

## Change Gates

### Data & Career Integrity
- Ground career claims, metrics, contribution levels, and disclosure scope in Career-Hub; record unresolved claims in the project wiki.
- Keep `data/portfolio.ts` as the single site-content source; never hardcode portfolio facts, metrics, or metadata in UI components.
- Preserve required fields and valid relationships in the exported data model.
- Preserve the established five-project order unless explicitly requested otherwise.

### UI & App Router
- Preserve static generation (`generateStaticParams`) for every `app/projects/[id]` route; do not depend on unavailable runtime data.
- Preserve accessible semantic structure, keyboard navigation, and responsive layouts.
- Keep shared layout and styling concerns in their owning files (`layout.tsx`, `globals.css`).

### Engineering Hygiene
- Keep TypeScript checks clean (`tsc --noEmit`).
- Do not mix unrelated refactors into a requested change.

## Verify

Run the narrowest relevant command:

```powershell
npm.cmd run lint
npm.cmd run build
```

Use `npm run ...` outside Windows. Confirm the affected route manually when layout, interaction, or responsive behavior changes.
