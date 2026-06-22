# Claude 호환 안내

이 저장소의 기준 문서는 **`AGENTS.md`** 한 개이며, 이 파일은 Claude Code 환경에서 그 내용을 자동 로드하기 위한 얇은 호환 레이어입니다. 실제 팀 규칙(Triple Crown 워크플로우, 충돌 방지, 작업 디렉토리 규칙, 입력 자료 처리 등)은 아래에 import되는 `AGENTS.md` 원문을 그대로 따릅니다.

새 규칙을 추가/수정할 때는 **항상 `AGENTS.md`를 먼저 수정**하고, 이 파일에는 아래 "Claude 번역 레이어"만 유지하세요.

## Claude 환경 번역 레이어 (Codex와 다른 부분만)

`AGENTS.md`는 Codex 기준으로 작성되어 있습니다. Claude Code 환경에서는 위임 도구 이름과 호출 방식만 아래로 치환해서 읽으세요. 그 외 모든 규칙은 원문 그대로 적용됩니다.

| AGENTS.md (Codex) | Claude Code 대응 |
|---|---|
| `spawn_agent({ agent_type, message })` | **`Agent` 도구** 호출 (subagent_type, prompt) |
| `agent_type: "worker"` | `subagent_type: "general-purpose"` |
| `agent_type: "explorer"` | `subagent_type: "Explore"` |
| 병렬 위임 (여러 spawn_agent) | **한 메시지에서 `Agent` 도구를 여러 번 호출** |

- ROLE-PROMPT 조립 방식(`roles/{이름}.md` 전체를 프롬프트 머리에 붙이기), TASK-PROMPT 필수 항목, 결과 통합·보고 규칙은 AGENTS.md와 동일하게 적용합니다.
- subagent 도구를 쓸 수 없거나 위임이 불필요한 작업은 은광(이 인스턴스)이 직접 처리하고, 그 사실을 짧게 보고합니다.
- Triple Crown 워크플로우, 충돌 방지 규칙(R1~R5), 작업 디렉토리/`WORK_ROOT` 규칙, 입력 자료 처리 절차는 **모두 아래 AGENTS.md 원문을 기준**으로 합니다.

---

@AGENTS.md
