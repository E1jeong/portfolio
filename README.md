# btob-team

**단일 Codex 인스턴스**가 5명의 가상 팀원을 subagent로 위임 호출하는 멀티에이전트 개발팀 설정입니다.
사용자의 한 줄 지시를 **Triple Crown 자동 워크플로우(전략 -> 구조화 -> 구현 -> 검증 -> 완료)** 로 전개합니다.

```
                          사용자
                            |
                            v
                  은광 (이 Codex 인스턴스)
                            |
              +-------------+-------------+
              |             |             |
              v             v             v
         민혁(설계)    창섭(개발)    현식(UI)
              |             |             |
              +-------------+-------------+
                            |
                            v
                    프니엘(리서치)
                            |
                            v
                       성재(리뷰/QA)
                            |
                            v
                       사용자 보고
```

팀원은 모두 Codex에서 사용 가능한 subagent 기능으로 호출되는 가상 역할입니다. 별도 터미널 pane, 여러 Claude 인스턴스, tmux 자동화는 사용하지 않습니다.

---

## 팀 구성

| 이름 | 역할 | 기본 영역 |
|------|------|-----------|
| **은광** | 팀장 (이 Codex 본인) — 지시 수령, 작업 분류, 위임, 결과 통합, 충돌 관리 | 설정/조율 |
| **민혁** | 아키텍트 — 시스템 설계, 기술 스택, API/데이터 모델 | `docs/architecture/`, `docs/adr/` |
| **창섭** | 개발자 — 기능 구현, 코드 작성, 테스트, 의존성 관리 | `src/`, `tests/`, `package.json` |
| **현식** | UI/UX 디자이너 — 화면 설계, 컴포넌트, 디자인 토큰 | `src/ui/`, `src/components/`, `design/` |
| **프니엘** | 리서쳐 — 기술 조사, 라이브러리 비교, 출처 정리 | `docs/research/` |
| **성재** | QA/리뷰어 — 코드 리뷰, 보안/성능 검토, Severity 분류 | `tests/review/`, `REVIEW.md` |

상세 역할 정의는 [`roles/`](./roles) 디렉토리에 있습니다. 팀원 호출 시 은광이 해당 `roles/*.md` 파일을 읽어 프롬프트에 포함합니다.

### 보고 체인

```
사용자 -> 은광 -> subagent(민혁/창섭/현식/프니엘/성재) -> 은광 통합 -> 사용자
```

팀원은 사용자에게 직접 응답하지 않습니다. 모든 결과는 은광이 통합해서 보고합니다.

---

## 왜 단일 Codex + subagent인가

이 저장소는 처음에 Claude Code와 `CLAUDE.md` 중심으로 설계되어 있었습니다. Codex에서 안정적으로 사용하려면 다음 전제가 달라집니다.

- Codex는 프로젝트 지침으로 `AGENTS.md`를 우선 사용합니다.
- 실제 작업은 현재 Codex 세션에서 가능한 도구와 권한에 맞춰 실행됩니다.
- subagent 기능이 제공되는 환경에서는 `spawn_agent` 같은 Codex multi-agent 도구를 사용하고, 제공되지 않으면 은광이 직접 조사/수정/검증합니다.
- tmux, 여러 AI 인스턴스, Claude 전용 CLI 명령은 필요하지 않습니다.

---

## 요구 사항

- Codex CLI 또는 Codex Desktop
- 이 저장소를 열 수 있는 로컬 디렉토리
- 프로젝트별 실행 도구는 실제 작업 폴더의 `package.json`, `pyproject.toml`, `Cargo.toml` 등에서 확인

---

## 빠른 시작

### 1. 저장소 열기

```bash
cd btob-team
codex
```

Codex Desktop에서는 이 폴더를 작업공간으로 열면 됩니다.

### 2. 지시 입력

```
사용자 알림 기능 추가해줘
```

또는 입력 자료를 줬다면:

```
inputs 보고 사이트 만들어줘
```

은광이 자동으로:

1. 자료 참조 시 `inputs/` 스캔
2. 규모 판정과 워크플로우 선언
3. 필요한 역할을 subagent 또는 직접 작업으로 배정
4. Phase 1~5 또는 축약형 실행
5. 결과 통합 후 한국어로 보고

---

## Codex에서 로드되는 설정

| 파일 | 용도 |
|------|------|
| [`AGENTS.md`](./AGENTS.md) | Codex가 자동으로 읽는 프로젝트 지침 |
| [`roles/eungwang.md`](./roles/eungwang.md) | 은광(팀장) 역할 정의 |
| [`roles/*.md`](./roles) | 가상 팀원 역할 정의 |
| [`inputs/README.md`](./inputs/README.md) | 입력 자료 배치 규칙 |
| [`CLAUDE.md`](./CLAUDE.md) | 이전 Claude 환경 호환 안내. Codex에서는 `AGENTS.md`가 기준 |

---

## Triple Crown 자동 워크플로우

사용자의 단일 지시를 5단계 파이프라인으로 자동 전개합니다.

| 규모 | 기준 | 자동 적용 워크플로우 | Phase |
|------|------|---------------------|-------|
| **소** | 오타, 설정, 1파일 수정, 간단 질문 | `WF-DIRECT` | 직접 또는 단일 위임 |
| **중** | 버그 수정, 작은 기능, PR 리뷰 | `WF-FEATURE-DEV` 축약형 | 3+4 |
| **대** | 새 기능 모듈, API 추가, 여러 파일 작업 | `WF-FEATURE-DEV` | 1~4 |
| **특대** | 신규 서비스, 대규모 리팩토링 | `WF-TRIPLE-CROWN` | 1~5 |

### 요청 시작 보고

```
📥 받은 요청: "{요청 원문}"
📏 규모 판정: {소|중|대|특대} — 근거: {짧은 이유}
🎯 워크플로우: {workflow-id}
📋 적용 Phase: {Phase 목록}
```

`[수동]` 또는 `[manual]` 접두사가 있으면 자동 분류를 생략하고 단일 라우팅으로 처리합니다.

---

## 위임 프로토콜

Codex에서 subagent 도구가 제공될 때 은광은 다음 정보를 포함해 위임합니다.

```text
너는 KJW 팀의 {이름}({역할})이다.
아래 역할 정의를 그대로 따른다.

--- BEGIN ROLE FILE ---
{roles/{이름}.md 내용 전체}
--- END ROLE FILE ---

팀 설정 루트(읽기 전용): {TEAM_ROOT}
작업 루트(실제 작업 위치): {WORK_ROOT}

작업:
- 태스크 ID
- 작업 내용
- 작업 영역
- 금지 영역
- 브랜치 이름
- 선행 조건
- 결과 보고 형식
```

subagent 기능이 없는 Codex 환경에서는 은광이 같은 기준으로 직접 실행하고, 위임 불가 사실을 짧게 보고합니다.

---

## 디렉토리 구조

```
btob-team/
├── AGENTS.md                    # Codex 프로젝트 지침
├── README.md                    # 본 파일
├── CLAUDE.md                    # Claude 호환 안내
├── .gitignore
├── roles/                       # 6명 역할 정의
│   ├── eungwang.md
│   ├── minhyuk.md
│   ├── changseop.md
│   ├── hyunsik.md
│   ├── phaniel.md
│   └── seongjae.md
└── inputs/                      # 사용자 자료 투입 디렉토리
    ├── README.md
    ├── design/
    ├── requirements/
    ├── data/
    ├── code/
    └── reference/
```

---

## 입력 자료

사용자가 디자인 시안, 요구사항 문서, 데이터 파일 등을 주려면 `inputs/` 아래에 둡니다.

```bash
cp ~/Downloads/design.png inputs/design/
cp ~/Downloads/requirements.md inputs/requirements/
```

자세한 자료 분류 규칙은 [`inputs/README.md`](./inputs/README.md)를 참조하세요.
