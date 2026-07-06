---
name: obsidian-sync
description: 이 포트폴리오 저장소와 옵시디언 LLM 위키를 양방향 동기화한다. 상위 기준은 Career-Hub(커리어 근거 source of truth), 직접 대상은 'Project/Personal/Portfolio Website'다. 위키 노트를 읽어 작업 컨텍스트로 쓰거나(pull), 코드 변경을 위키 _sources/기술/콘텐츠/log/핸드오프에 기록한다(push). "옵시디언", "위키", "wiki", "career-hub", "동기화", "sync", "위키 업데이트", "위키 반영", "위키 확인", "근거", "evidence" 같은 요청에 사용.
---

# Obsidian Wiki 동기화 (Portfolio Website + Career-Hub)

이 저장소(`portfolio`)와 옵시디언 위키를 양방향으로 동기화한다. 위키 쪽 운영 규칙은 각 위키의 `schema.md`가 기준이며, 이 스킬은 그 워크플로우를 코드 저장소에서 실행하는 도구다.

## 대전제 — Career-Hub가 source of truth

이 포트폴리오 프로젝트의 콘텐츠는 옵시디언 위키의 **Career-Hub**를 근거로 삼는다. 계층은 다음과 같다.

```
Career-Hub                     # 상위 커리어 위키 = 대전제 (근거·Evidence Card·강점 키워드·공개 가능 여부·최종 문장 후보의 source of truth)
   │  확정된 주장만 반영
   ▼
Project/Personal/Portfolio Website   # 웹사이트 코드/배포/화면 구조/콘텐츠 backlog 관리
   ▼
portfolio 코드 저장소 (이 repo)        # 실제 산출물 — 콘텐츠 대부분은 data/portfolio.ts
```

**Key Rule: 웹사이트 문구가 Career-Hub보다 앞서가면 안 된다.** Career-Hub에서 근거 등급과 공개 가능 여부가 확인된 내용만 포트폴리오에 확정 문장으로 반영한다. 확인 안 된 것은 후보로만 다루고, 확인 질문은 `{CAREER_HUB}/questions.md` 에 모은다.

## 0단계 — 위키 경로 해석 (필수, 매번 먼저)

옵시디언 볼트 경로는 머신마다 다르다(집/회사). **절대 하드코딩하지 말고** 아래 순서로 해석한다.

1. **환경변수** `PORTFOLIO_WIKI_PATH` 가 있으면 그 값을 사용.
2. 없으면 저장소 루트의 **`.claude/obsidian-sync.local.json`** 를 읽어 `wikiPath` 값을 사용. (이 파일은 gitignore됨 = 머신별 로컬 설정)
3. 둘 다 없거나 경로가 존재하지 않으면 **자동 탐지**: 흔한 개발 루트에서 마커 파일을 찾는다.
   ```bash
   # 마커: 어떤 볼트 안의 "Project/Personal/Portfolio Website/schema.md"
   find /c/Users -maxdepth 10 -not -path "*/AppData/*" -path "*Project/Personal/Portfolio Website/schema.md" 2>/dev/null | head -1
   ```
   (실제 볼트 깊이는 머신마다 다르다 — 예: `C:\Users\<user>\Desktop\dev\5.obsidian\...` 구조는 `/c/Users`부터 깊이 8이다. `maxdepth`를 너무 낮게 잡으면 조용히 못 찾으므로 여유 있게 잡는다.)
   찾으면 그 `schema.md`의 부모 디렉토리가 `wikiPath`다. **탐지에 성공하면 매번 재탐색하지 않도록 바로 `.claude/obsidian-sync.local.json`에 `{"wikiPath": "..."}`로 저장한다.**
4. 그래도 못 찾으면 사용자에게 한 줄로 경로를 묻고, 확인되면 `.claude/obsidian-sync.local.json` 에 저장할지 물어본다.

해석한 경로를 이후 단계에서 `{WIKI}` 로 참조한다. 진행 전 `{WIKI}/schema.md` 존재를 확인한다.

**Career-Hub 경로 파생**: Career-Hub는 볼트 루트 바로 아래에 있으므로 `{WIKI}` 기준 3단계 위에서 찾는다 → `{CAREER_HUB} = {WIKI}/../../../Career-Hub`. `{CAREER_HUB}/index.md` 존재로 확인한다.

## 위키 구조 (참고, 2026-07-02 구조 표준화 반영)

```
{WIKI}/
  README.md         # 위키 홈
  핸드오프.md        # 세션마다 덮어쓰는 현재 상태/다음 시작점 (append 아님, 유일한 예외)
  schema.md         # 운영 규칙 (이 위키의 기준 문서)
  index.md          # 내비게이션 카탈로그
  log.md            # append-only 변경 이력
  개요.md            # 프로젝트 개요
  기술/코드 구조.md   # 옛 wiki/code-structure.md
  콘텐츠/콘텐츠 모델.md, 콘텐츠/Career-Hub 연동.md   # 옛 wiki/content-model.md, wiki/career-hub-integration.md
  로드맵/작업 목록.md, 로드맵/개선 백로그.md          # 옛 02. Tasks.md, wiki/rewrite-backlog.md
  운영/배포.md
  이슈/확인 필요.md
  _sources/         # raw 소스를 읽고 만든 ingest 스냅샷 (수정 X, 추가만). 옛 이름 `Sources/`
```

`wiki/`, `Sources/`(대문자), 번호 매긴 문서(`00.`~`04.`)는 2026-07-02 구조 표준화로 없어졌다 — 이 스킬이나 과거 세션 기록에 그 경로가 남아 있어도 따라가지 말고 위 구조를 기준으로 한다.

## Pull — 위키 → 코드 (읽기)

코드 작업의 컨텍스트/요구사항을 위키에서 가져온다.

1. **`{WIKI}/핸드오프.md`부터 읽는다** — 지난 세션이 어디까지 했고 다음에 뭘 하면 되는지 파악한다.
2. `{WIKI}/index.md` 로 전체 구조 파악.
3. `{WIKI}/schema.md` 로 도메인 규칙 확인 (특히 UI 비노출 규칙, 공개 가능 여부, "확정하지 않는 항목").
4. 작업 주제에 맞는 문서(`기술/코드 구조`, `콘텐츠/콘텐츠 모델`, `로드맵/작업 목록`, `로드맵/개선 백로그` 등)를 읽어 할 일/제약을 파악.
5. **콘텐츠/문구 작업이면 Career-Hub를 먼저 확인한다** (대전제). 관련 프로젝트의 `{CAREER_HUB}/evidence/<프로젝트>.md`, `{CAREER_HUB}/outputs/portfolio-interpretation.md`, `{CAREER_HUB}/profile/core-strengths.md` 를 읽어 근거 등급·공개 가능 여부·확정 문장 후보를 파악. 코드(특히 `data/portfolio.ts`)에 넣을 문구는 여기서 확인된 범위를 넘지 않는다.
6. 읽은 내용을 코드 작업의 근거로 요약해 사용자에게 보고한 뒤 진행. Career-Hub에서 미확정인 주장이 필요하면 단정하지 말고 `{CAREER_HUB}/questions.md` 에 질문으로 남길지 사용자에게 확인.

## Push — 코드 → 위키 (기록, "위키 업데이트해" 요청 시 또는 세션 종료 시)

코드 변경 후 위키를 갱신한다. 반드시 `{WIKI}/schema.md` 의 **Ingest Workflow** 를 따른다.

1. raw 소스(이 저장소: `data/portfolio.ts`, 상세 페이지, README 등)에 의미 있는 변경이 있는지 확인.
2. 새 정보가 있으면 `{WIKI}/_sources/` 에 스냅샷을 **새 파일로 추가**. 파일명 `portfolio-code-YYYY-MM-DD.md` (기존 스냅샷 수정 금지). 포함: raw 소스 경로, ingest 날짜, 읽은 파일, 확정 사실, 불확실 항목.
3. 영향받는 위키 문서(`기술/코드 구조`, `콘텐츠/콘텐츠 모델`, `로드맵/작업 목록` 등)를 갱신. (코드에서 확정된 사실 ↔ 커리어 해석을 분리해서 작성.)
4. 커리어 근거/강점/공개 가능 여부에 영향을 주는 변경이면 Career-Hub 갱신 여부를 사용자에게 확인한다. 관련 경로: `{CAREER_HUB}/evidence/<프로젝트>.md`, `{CAREER_HUB}/questions.md`(확인 질문), `{CAREER_HUB}/log.md`. **Career-Hub는 상위 기준이므로 코드 변경이 임의로 Career-Hub의 확정 주장을 덮어쓰지 않는다** — 후보/질문으로만 올린다.
5. `{WIKI}/log.md` 에 **append-only** 로 작업 기록 추가. 형식은 기존 항목과 동일:
   ```
   ## YYYY-MM-DD - <제목>

   <변경 요약>

   Modified: <파일 목록>
   ```
6. **`{WIKI}/핸드오프.md`를 덮어써서** 이번 세션 요약, 현재 상태, 다음 세션 시작점을 최신화한다. (append 아님 — 이 파일만 예외.)

## 동기화 규칙

- **raw source / Sources 스냅샷은 수정하지 않는다.** Sources는 새 파일 추가만.
- **log.md 는 append-only.** (Portfolio Website, Career-Hub 양쪽 모두) 기존 항목 편집/삭제 금지.
- **`핸드오프.md`만 예외다.** 세션마다 덮어쓴다 — append하지 않는다.
- 위키 `schema.md` 의 "확정하지 않는 항목"(최종 이력서 문구, 공개 가능 여부 등)은 후보로만 기록하고 단정하지 않는다.
- **Career-Hub가 상위 기준이다.** 코드/Portfolio Website 쪽 변경이 Career-Hub의 확정 주장을 앞서거나 덮어쓰지 않는다. 충돌 시 Career-Hub를 따른다.
- `_sensitive/` 내용은 코드 저장소로 복사하거나 커밋하지 않는다.
- 위키 변경은 옵시디언 볼트(별도 git 저장소)에서 일어나므로, 이 포트폴리오 저장소 커밋과 섞지 않는다. 위키 쪽 커밋이 필요하면 사용자에게 따로 확인.
- 양방향 작업 시 순서: **Pull → 코드 작업 → Push** 를 기본으로 한다.

## 작업 마무리 보고

- Pull/Push 중 무엇을 했는지, 읽거나 수정한 위키 파일 경로 목록, log.md 추가 여부를 짧게 보고한다.
