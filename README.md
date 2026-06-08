# Portfolio Website

이원정 Android 개발자 포트폴리오 웹사이트입니다.

채용 담당자와 실무 리더가 짧은 시간 안에 다음을 파악할 수 있도록 구성합니다.

- 어떤 Android 개발자인가
- 어떤 도메인과 기술 문제를 다뤄왔는가
- 각 프로젝트에서 실제로 맡은 역할은 무엇인가
- Git 이력, 코드 구조, Notion 기록으로 뒷받침되는 근거는 무엇인가

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel 배포 기준

## Project Guide

포트폴리오 작성 기준은 루트의 [PORTFOLIO_GUIDE.md](./PORTFOLIO_GUIDE.md)를 따릅니다.

핵심 원칙:

- 과장된 랜딩페이지 문구를 쓰지 않습니다.
- 프로젝트별 본인 역할과 근거를 분리해서 작성합니다.
- Git 이력이 있는 프로젝트는 본인 author 기준으로 작성합니다.
- Git 이력이 없는 프로젝트는 코드 구조와 Notion 기록 기준으로 보수적으로 작성합니다.
- 이미지와 영상은 현재 버전에서 제외하고, 필요한 위치만 추후 반영합니다.

## Main Content

대표 프로젝트 우선순위:

1. UBio-N Face Pro
2. Fisher Lotto + lotto-sub-backend
3. SmartSet Renewal
4. SmartSet
5. Hitec Embedded C Projects

SmartSet은 새 클론 경로를 기준으로 작성합니다.

```text
C:\Users\sumas\OneDrive\Desktop\dev\6.project\smartset
```

기존 `_SmartSet`은 참고하지 않습니다.

## Getting Started

의존성 설치:

```bash
npm install
```

Windows PowerShell에서 `npm.ps1` 실행 정책 문제가 있으면 `npm.cmd`를 사용합니다.

```bash
npm.cmd install
```

개발 서버 실행:

```bash
npm run dev
```

또는:

```bash
npm.cmd run dev
```

기본 URL:

```text
http://localhost:3000
```

## Build

Vercel 배포 전 로컬 빌드 확인:

```bash
npm run build
```

PowerShell 실행 정책 문제가 있으면:

```bash
npm.cmd run build
```

## Validation

Next.js 16 환경에서는 기존 `next lint` 스크립트 대신 TypeScript 검증을 사용합니다.

```bash
npm.cmd run lint
```

## Directory Structure

```text
app/
  globals.css       # 전역 스타일
  layout.tsx        # 메타데이터와 루트 레이아웃
  page.tsx          # 포트폴리오 메인 화면
  robots.ts         # robots.txt
data/
  portfolio.ts      # 프로필, 기술 스택, 프로젝트, 경력 데이터
PORTFOLIO_GUIDE.md  # 포트폴리오 작성 기준
```

## Deployment

Vercel에서 이 저장소를 연결한 뒤 기본 설정으로 배포합니다.

- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: Next.js 기본값
- Environment Variables: 현재 필요 없음

## Notes

`npm audit`에서 Next.js 내부 `postcss` 관련 moderate 이슈가 표시될 수 있습니다. 현재 최신 안정 Next.js 버전 기준으로 발생하는 항목이며, `npm audit fix --force`는 오래된 Next.js 버전으로 변경을 제안하므로 적용하지 않습니다.

최신 코드가 아직 반영되지 않은 프로젝트는 추후 Git 이력과 실제 코드 기준으로 다시 갱신합니다.
