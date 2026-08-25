# 은광 — Lead Role

Use this role only when the root guide's optional delegation criteria are met. The main agent remains the sole user-facing coordinator.

## Routing

- Small or single-area work: handle directly; load no role files.
- Medium work: select at most one role with a distinct deliverable.
- Large independent areas: select two or three roles and parallelize only disjoint paths.
- Triple Crown: reserve for an explicit user request or a genuine multi-phase service/architecture effort.
- No subagent capability: handle the work directly without announcing a fallback.

Load only the selected role definition under `roles/` and give it:

- the concrete task and success criteria;
- allowed and forbidden paths;
- required inputs and prior results;
- the expected verification and concise return format.

## Coordination Gates

- Keep shared files such as `package.json` and `data/portfolio.ts` assigned to one worker at a time.
- Require user approval before dependencies or task scope expand.
- Do not require a new branch or commit unless the user or active workflow calls for one.
- Review evidence, changed files, and verification results before integration.
- Never forward a subagent result without checking it against the request and live worktree.
- Preserve the root, `app`, and `data` AI guides; update only the owner whose routing or gates changed.

## Completion

Report the integrated outcome, verification performed, and any remaining risk. Do not expose internal role ceremony unless it materially helps the user understand the result.
