# Portfolio Data & Content Module Guide

> 본 문서는 **Portfolio Website**의 Data & Content 서브모듈 가이드(Tier 2)입니다.  
> `data/portfolio.ts`의 스키마 구조, Career-Hub SSOT 정합성, 데이터 제약 및 작성 규칙을 정의합니다.

---

## 1. Scope

- **담당 경로**: `data/` 하위 전체 (`data/portfolio.ts` 및 관련 타입 정의)
- **주요 책임**:
  - 프로필(`profile`), 스킬 그룹(`skillGroups`), 경력 사항(`experiences`), 5대 프로젝트(`projects`) 데이터 관리
  - Career-Hub Evidence Cards 및 Career Timeline과의 정량/정성적 사실 일치 유지
  - TypeScript 데이터 타입(`Project`, `FeatureCard`, `OutcomeMetric`, `ExperienceItem`, `SkillGroup`) 무결성 보장

---

## 2. Orient First

작업 전 아래 위키 문서를 먼저 읽고 데이터 변경 기준을 확인합니다:

- **위키 문서**:
  - `content/content-model.md` (프로젝트 신뢰도, 카테고리, 문구 작성 원칙)
  - `content/career-hub-integration.md` (Career-Hub 연계 원칙 및 수치 완화 예시)
- **핵심 소스 진입점**:
  - `data/portfolio.ts`: 모든 포트폴리오 콘텐츠의 단일 데이터 소스

---

## 3. Boundary & Architecture Constraints

1. **5대 프로젝트 순서 및 카테고리 보장**:
   - `1. UBio-N Face Pro` (`ubio-n-face-pro`, `Android Device`, `2025.07 - 현재`)
   - `2. Fisher Lotto` (`fisherlotto`, `Android Mobile`, `2025.04 - 2025.06`)
   - `3. SmartSet Renewal` (`renew-smartset`, `Android Mobile`, `2024.07 - 2025.04`)
   - `4. SmartSet` (`smartset`, `Android Mobile`, `2023.01 - 2025.04`)
   - `5. 자체 안티스푸핑 AI` (`anti-spoofing-ai`, `On-Device AI`, `2026.06 - 현재`)
2. **신뢰도(Confidence)와 UI 분리**:
   - `confidence` 필드(`git`, `code-and-notion`, `limited`)는 내부 검증용이며 UI에 노출하지 않음.
   - `git` 이력이 없는 프로젝트는 과장하지 않고 보수적이고 객관적인 정성 표현으로 작성.
3. **사용 금지 표현 vs 권장 표현**:
   - **금지**: 혁신적인, 압도적인, 완벽한, 열정적인, 올인원, 최고의 경험, 시너지를 만드는
   - **권장**: 담당한 작업, 개선한 부분, 해결한 문제, 적용한 기술, 마주한 제약, 정량적 측정 성과

---

## 4. Change Gates

작업 시 절대 위반해서는 안 되는 데이터 불변 규칙입니다:

- [ ] **Career-Hub 단정 금지**: `Career-Hub`에서 최종 검증되지 않은 수치나 대외비성 기밀은 임의로 단정하여 작성 금지 (위키 `issues/needs-verification.md` 등록 후 정성적 표현으로 완화).
- [ ] **필수 필드 스키마 준수**: 모든 프로젝트는 `id`, `name`, `category`, `period`, `role`, `contribution`, `summary`, `highlights`, `outcomes`를 필수로 포함해야 함.
- [ ] **SmartSet 기여도 원칙**: 타인 커밋 기반 작업은 본인 성과로 기재 금지. NFC, GPS, Android 14 대응, 단말 프로토콜 개선 등 본인 작업 위주로 기술.
- [ ] **TypeScript 타입 오류 제로**: `data/portfolio.ts` 내 타입 불일치 및 컴파일 오류 무관용.
- [ ] **AI Guide 보존**: 본 서브모듈 가이드를 임의 삭제하거나 루트 `AGENTS.md`로 흡수하지 않고 독립 유지.

---

## 5. Verify

데이터 수정 후 아래 명령어로 정적 빌드 성공 및 10개 SSG 페이지 생성을 검증합니다:

```powershell
# TypeScript 컴파일 및 정적 빌드 검증
npm.cmd run build
```
