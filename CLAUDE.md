# Claude 호환 안내

이 저장소의 기본 실행 환경은 이제 **Codex**입니다.

Codex가 자동으로 읽는 프로젝트 지침은 [`AGENTS.md`](./AGENTS.md)이며, 팀 역할과 Triple Crown 워크플로우도 그 파일을 기준으로 관리합니다.

이 파일은 이전 Claude Code 환경에서 열었을 때 혼동을 줄이기 위한 호환 안내입니다. Claude에서 이 저장소를 사용할 경우에도 아래 원칙을 따르세요.

1. 실제 기준 문서는 `AGENTS.md`입니다.
2. 은광은 단일 팀장 역할로 사용자 지시를 받고 결과를 통합합니다.
3. 팀원 역할 정의는 `roles/*.md`를 읽어 사용합니다.
4. Claude 전용 `Agent` 도구가 있으면 위임에 사용할 수 있지만, Codex 환경에서는 Codex의 subagent/multi-agent 도구 또는 은광 직접 실행으로 대체합니다.
5. 새 규칙을 추가하거나 수정할 때는 `AGENTS.md`를 먼저 수정하고, 이 파일에는 호환 안내만 유지합니다.

빠른 시작:

```bash
codex
```

Codex Desktop에서는 이 폴더를 작업공간으로 열면 됩니다.
