# Portfolio Website AI Guide

## Context

This is a code-navigation and safety guide, not project history. Product context, content decisions, roadmap, and history live in the vault-relative `Dev/Project/Personal/portfolio` wiki; resolve it through `_meta/routing-tables.md` or `obsidian-wiki-sync`, then follow the vault root `AGENTS.md`.

Report plans and results in Korean. Use the nearest module guide before changing `app/` or `data/`.

## Code Map

| Module | Responsibility | Orient first | Local guide |
| --- | --- | --- | --- |
| `app/` | Next.js App Router pages, layouts, styles, and static project routes | `app/page.tsx`, `app/projects/[id]/page.tsx` | `app/AGENTS.md` |
| `data/` | Portfolio content model and typed site data | `data/portfolio.ts` | `data/AGENTS.md` |
| `inputs/` | User-provided repository-local source material | `inputs/README.md` | None |

## Change Gates

- Career claims, metrics, contribution levels, and disclosure scope must be grounded in Career-Hub; record unresolved claims in the project wiki.
- Keep portfolio content in `data/portfolio.ts`; do not duplicate it as hardcoded UI data.
- Preserve static generation for every `app/projects/[id]` route.
- Preserve the established five-project order unless the user explicitly requests a content-order change.
- Keep TypeScript checks clean and do not mix unrelated refactors into a requested change.

## Verify

Run the narrowest relevant command:

```powershell
npm.cmd run lint
npm.cmd run build
```

Use `npm run ...` outside Windows. Confirm the affected route manually when layout, interaction, or responsive behavior changes.
