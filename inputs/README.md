# inputs/

Store user-provided material here when it belongs with the repository. Inspect this folder only when the user names it or the task explicitly depends on supplied material.

## Suggested Layout

| Directory | Material |
| --- | --- |
| `design/` | Mockups, wireframes, brand guides, screenshots |
| `requirements/` | Requirements, specifications, user stories, ADRs |
| `data/` | CSV, JSON, spreadsheets, and sample data |
| `code/` | Existing code, reference code, and library archives |
| `reference/` | URLs, competitor captures, and external documents |

Unclassified material may stay at the `inputs/` root. Naming conventions are optional; prefer descriptive topic and version names.

## Use

1. Read only the requested files and summarize the relevant constraints.
2. Route small or single-area work directly.
3. Load at most one specialist role for medium work, or two to three disjoint roles for genuinely large work, following root `AGENTS.md`.
4. Pass concrete file paths, scope, and verification criteria to any delegated role.

## Large or Sensitive Material

- Do not commit files over 1 GB; add an appropriate `.gitignore` rule when needed.
- Mask personal data before storing it, or place it under an ignored `inputs/private/` directory.
