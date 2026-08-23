# App Router & UI Module Guide

> 본 문서는 **Portfolio Website**의 UI 및 App Router 서브모듈 가이드(Tier 2)입니다.  
> 화면 레이아웃, 컴포넌트 구조, 타이포그래피, Tailwind 스타일 및 UI 변경 게이트를 정의합니다.

---

## 1. Scope

- **담당 경로**: `app/` 하위 전체 (`app/layout.tsx`, `app/page.tsx`, `app/projects/[id]/`, `app/globals.css`, `app/robots.ts`)
- **주요 책임**:
  - Next.js 16 App Router 기반 메인 랜딩 화면 및 프로젝트 상세 케이스 스터디 화면 렌더링
  - Pretendard & Plus Jakarta Sans 이원화 웹폰트 시스템 유지
  - Smoky Black & Warm Gold 글래스모피즘 테마 및 반응형 레이아웃 통제
  - 3개 카테고리 필터(`Android Device`, `Android Mobile`, `On-Device AI`) 동작

---

## 2. Orient First

작업 전 아래 위키 문서를 먼저 읽고 소스 진입점을 파악합니다:

- **위키 문서**:
  - `technical/code-structure.md` (렌더링 플로우, 컴포넌트 계층, 상세 페이지 구조)
  - `operations/deployment.md` (Vercel 배포 및 SSG 빌드 기준)
- **핵심 소스 진입점**:
  - `app/layout.tsx`: 루트 레이아웃, 메타데이터, 폰트 변수 설정
  - `app/page.tsx`: 고정 사이드바 + 3개 카테고리 필터 + 프로젝트 카드 + 경력 타임라인
  - `app/projects/[id]/page.tsx`: 상세 케이스 스터디 (Hero, Banner, Challenge-Solution-Outcome 카드, Pagination)
  - `app/globals.css`: Tailwind CSS v4 테마 변수, 글래스모피즘, 커스텀 유틸리티 클래스

---

## 3. Boundary & Architecture Constraints

1. **타이포그래피 원칙 (Typography System)**:
   - **영문 / 숫자 / 코드**: `Plus Jakarta Sans` (`font-sans`, `font-mono`) 적용. Title Case 권장.
   - **한글**: `Pretendard` Dynamic Subset 웹폰트 적용.
   - 헤더 및 태그에 강제 `text-transform: uppercase` 적용 금지 (자연스러운 Title Case 유지).
2. **컬러 & 디자인 토큰 (Smoky Black & Gold)**:
   - Background: `#0d0d0d` (순흑 지양)
   - Surface: `#1e1e1f`, Surface Hover / Card: `#242426`
   - Primary Text: `#f5f5f5`, Muted Text: `#d6d6d6`
   - Accent: `#ffdb70` (Warm Gold), Accent Light: `#ffe49a`
   - 과도한 원색 gradient나 beige/sand 배경 사용 금지. Accent는 링크, 섹션 제목, 배지에만 제한적 사용.
3. **카테고리 필터 일관성**:
   - `All Projects`, `Android Device`, `Android Mobile`, `On-Device AI` 4개 탭 유지.
   - `data/portfolio.ts`의 `category` 값과 1:1로 일치해야 함.

---

## 4. Change Gates

작업 시 절대 위반해서는 안 되는 금지/필수 규칙입니다:

- [ ] **SSG 정적 라우트 보장**: `app/projects/[id]/page.tsx`의 `generateStaticParams`를 임의로 삭제하거나 비동기 데이터 fetch로 변환 금지 (빌드 시 10/10 정적 HTML 생성 필수).
- [ ] **텍스트 하드코딩 금지**: 프로젝트 설명, 프로필, 경력 등 모든 텍스트 콘텐츠는 UI 컴포넌트에 직접 하드코딩하지 않고 `data/portfolio.ts`를 경유.
- [ ] **모바일 반응형 유지**: 프로젝트명, 역할, 핵심 지표가 모바일 viewport(< 768px)에서 잘리거나 접히지 않도록 보장.
- [ ] **TypeScript / Lint 무결성**: 린트 에러(`npm.cmd run lint`) 및 빌드 에러 무관용.
- [ ] **AI Guide 보존**: 본 서브모듈 가이드를 임의 삭제하거나 루트 `AGENTS.md`로 흡수하지 않고 독립 유지.

---

## 5. Verify

UI 수정 후 아래 명령어로 린트 및 정적 빌드를 검증합니다:

```powershell
# 린트 검사
npm.cmd run lint

# 정적 빌드 및 10개 라우트 SSG 생성 검증
npm.cmd run build
```
