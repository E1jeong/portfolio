# Portfolio Data Module Guide

## Scope

Typed portfolio content and the data contracts consumed by the site.

## Orient First

- `data/portfolio.ts`

## Boundary & Architecture Constraints

`data/portfolio.ts` is the single site-content source. Keep its data types and every project record internally consistent; UI components consume the model rather than redefine it.

## Change Gates

- Ground career claims, metrics, contribution levels, and disclosure scope in Career-Hub; leave unresolved claims in the project wiki.
- Preserve required fields and valid relationships in the exported data model.
- Preserve the established five-project order unless the user explicitly requests a content-order change.

## Verify

```powershell
npm.cmd run lint
npm.cmd run build
```

Use `npm run ...` outside Windows.
