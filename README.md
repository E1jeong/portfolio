# Portfolio Website

> **이원정 | AI-Native Android Developer Portfolio**  
> AI 모델 설계부터 임베디드 NPU 하드웨어 배포, 모던 Android 앱 아키텍처까지 일관되게 구축합니다.

Next.js App Router 기반의 정적 생성(SSG) 포트폴리오 웹사이트입니다.  
채용 담당자와 기술 리더가 엔지니어링 역량, 실제 프로덕션 기여도, 코드 기반 근거를 명확하게 파악할 수 있도록 케이스 스터디 중심으로 설계되었습니다.

---

## 🌟 Featured Projects

| 프로젝트명 | 도메인 | 기간 | 주요 기술 & 역할 |
| --- | --- | --- | --- |
| **UBio-N Face Pro** | Android Device | `2025.07 - 현재` | • 일본 NEC 고객사 출입통제 플랫폼 연동 프로덕션 단말 앱<br>• AIDL IPC 멀티 프로세스 통신, WPA2-Enterprise(EAP-TLS) 보안, FeliCa IDm 스마트카드 로컬 캐싱, SQLCipher 암호화 DB |
| **UBio-Vision (안티스푸핑 AI)** | On-Device AI | `2026.06 - 현재` | • 상용 SDK 없는 자체 안티스푸핑 딥러닝 모델 설계 & NXP i.MX 8M Plus NPU 실기기 추론 앱<br>• PyTorch/Keras, INT8 PTQ 양자화, NNAPI 하드웨어 가속, 듀얼 카메라(RGB/IR) 파이프라인 |
| **Fisher Lotto** | Android Mobile | `2024.12 - 현재` | • 1인 풀스택 안드로이드 앱 & Next.js BFF 백엔드<br>• Jetpack Compose, Clean Architecture 4-멀티모듈, Google Play Billing 정기구독, FCM 푸시 |
| **SmartSet Renewal** | Android Mobile | `2024.07 - 2025.04` | • 원격 수도 검침 단말 제어 차세대 Android 앱 전면 재설계<br>• Clean Architecture, MVI(Orbit), Hilt, Coroutines/Flow, Room DB 캐싱 |
| **SmartSet** | Android Mobile | `2023.01 - 2025.04` | • 현장 작업자용 NFC 스마트 미터 통신 및 단말 상태 검침 앱<br>• NFC 커스텀 단말 프로토콜 제어, 지자체 A/S 작업 오더 정합성 검증 및 유지보수 |

---

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (Strict Type Safety)
- **Rendering**: 100% Static Site Generation (`generateStaticParams`)
- **Styling**: Modern Dark Theme Design System (Vanilla CSS, Responsive)
- **Typography**: Pretendard (Korean) & Plus Jakarta Sans (English/Digits)
- **Deployment**: Vercel

---

## 📂 Architecture & Directory Structure

```text
├── app/
│   ├── globals.css              # 다크 테마 커스텀 디자인 시스템 및 반응형 미디어 쿼리
│   ├── layout.tsx               # SEO 메타데이터 및 전역 폰트/레이아웃
│   ├── page.tsx                 # 메인 랜딩 (스크롤스파이 & 프로젝트 서브 네비게이션)
│   ├── projects/[id]/page.tsx   # 정적 케이스 스터디 상세 페이지 (SSG)
│   └── robots.ts                # 검색 엔진 최적화 (SEO)
├── data/
│   └── portfolio.ts             # 단일 소스 오브 트루스(SSOT) 기반 정적 데이터 모델
├── AGENTS.md                    # AI 어시스턴트 협업 및 엔지니어링 가이드
└── README.md                    # 리포지토리 대문 문서
```

---

## 🚀 Getting Started

### 1. 의존성 설치
```bash
npm install
# Windows PowerShell 실행 정책 이슈 발생 시
npm.cmd install
```

### 2. 개발 서버 실행
```bash
npm run dev
# 또는
npm.cmd run dev
```
브라우저에서 `http://localhost:3000`으로 접속합니다.

### 3. 정적 빌드 및 무결성 검증
```bash
# TypeScript 타입 검증
npm run lint

# 정적 페이지 10개 빌드 생성 확인
npm run build
```

---

## 🔒 Content & Evidence Governance

- 모든 이력, 기여도, 수치, 공개 범위는 근거 자료(Git 이력, 사내 수용평가 종결 기록, 실기기 벤치마크)를 기반으로 작성되었습니다.
- 상세 페이지의 기능 설명은 **문제 상황(Challenge) ➔ 해결 방법 및 로직(Solution) ➔ 결과 및 성과(Outcome)**의 정형화된 케이스 스터디 포맷을 따릅니다.
- 사이트의 모든 콘텐츠는 [`data/portfolio.ts`](./data/portfolio.ts) 단일 파일에서 중앙 집중식으로 관리됩니다.
