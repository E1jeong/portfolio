# Portfolio App Module Guide

## Scope

Next.js App Router pages, layouts, global styles, and project detail routes.

## Orient First

- `app/page.tsx`
- `app/projects/[id]/page.tsx`
- `app/layout.tsx`
- `app/globals.css`

## Boundary & Architecture Constraints

Read content through the typed data layer; keep site content out of page components. Preserve App Router static generation for project detail routes and keep shared layout and styling concerns in their owning files.

## Change Gates

- Do not hardcode portfolio facts, metrics, or project metadata in components.
- Preserve accessible semantic structure, keyboard operation, and readable responsive layouts.
- Do not remove static params or make a project detail route depend on unavailable runtime data.

## Verify

```powershell
npm.cmd run lint
npm.cmd run build
```

Use `npm run ...` outside Windows. Manually inspect the changed route when UI behavior or layout changes.
