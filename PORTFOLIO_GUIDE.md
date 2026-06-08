# Portfolio Website Guide

## Goal

이 포트폴리오 웹사이트의 목표는 화려한 랜딩페이지가 아니라, 채용 담당자와 실무 리더가 3분 안에 다음을 파악할 수 있게 만드는 것이다.

- 이원정이 어떤 Android 개발자인가
- 어떤 도메인과 기술 문제를 다뤄왔는가
- 각 프로젝트에서 본인이 실제로 맡은 역할은 무엇인가
- 주장하는 역량이 Git 이력, 코드 구조, Notion 기록으로 뒷받침되는가

## Positioning

첫 화면에서 바로 읽혀야 하는 정체성은 다음과 같다.

```text
이원정
Android Developer

Android 시스템 앱, 하드웨어 연동, NFC/단말 프로토콜, 결제/구독 기반 앱을 개발해왔습니다.
Java 기반 레거시 운영 경험과 Kotlin/Compose 기반 구조 개선 경험을 함께 가지고 있습니다.
```

감성 카피나 과장 표현보다 직무, 도메인, 기술 문제를 먼저 보여준다.

## Writing Rules

사용하지 않을 표현:

- 혁신적인
- 압도적인
- 완벽한
- 열정적인
- 올인원
- 최고의 경험
- 끊임없이 성장하는
- 시너지를 만드는

사용할 표현:

- 담당한 작업
- 개선한 부분
- 해결한 문제
- 적용한 기술
- 운영 중 마주한 제약
- Git 이력으로 확인되는 변경

## Site Structure

```text
1. 첫 화면
2. 핵심 역량
3. 대표 프로젝트
4. 경력
5. 기타 프로젝트
6. 연락처
```

첫 화면에는 사진, 긴 자기소개, 장식보다 다음 정보를 우선 배치한다.

- 직무명: Android Developer
- 핵심 도메인: Android 시스템 앱, 하드웨어 연동, NFC, 단말 프로토콜, 구독/결제 앱
- 연락 링크: Email, GitHub, Blog
- 대표 프로젝트 2~3개 바로가기

## Project Order

프로젝트는 시간 순서 기준으로 배치한다. 최신 또는 진행 중 프로젝트를 먼저 보여주고, 그다음 최근 개인 프로젝트와 이전 회사 프로젝트를 이어서 보여준다.

1. UBio-N Face Pro
2. fisherlotto + lotto-sub-backend
3. renew_smartset
4. smartset
5. hitec_project C 프로젝트

## Evidence Rules

각 프로젝트는 다음 근거 순서로 작성한다.

1. Git 이력
2. 실제 코드 구조
3. Notion 포트폴리오 기록
4. 사용자의 추가 설명

Git 이력이 확인되는 프로젝트:

- `C:\Users\sumas\OneDrive\Desktop\dev\6.project\smartset`
- `C:\Users\sumas\OneDrive\Desktop\dev\6.project\renew_smartset`
- `C:\Users\sumas\OneDrive\Desktop\dev\6.project\fisherlotto`
- `C:\Users\sumas\OneDrive\Desktop\dev\7.server\lotto-sub-backend`

Git 이력이 없거나 제한적인 프로젝트:

- `C:\Users\sumas\OneDrive\Desktop\dev\6.project\ubio-x-facepro-kakao`
- `C:\Users\sumas\OneDrive\Desktop\dev\6.project\hitec_project\meter_hitec-total`
- `C:\Users\sumas\OneDrive\Desktop\dev\6.project\hitec_project\terminal_lg_bc95g-fota_new`

Git 이력 없는 프로젝트는 과장하지 않고, 코드 구조와 Notion 기록을 기준으로 낮은 확신도로 작성한다.

## SmartSet Rule

SmartSet은 새 클론된 폴더를 기준으로 작성한다.

```text
C:\Users\sumas\OneDrive\Desktop\dev\6.project\smartset
```

기존 `_SmartSet`은 참고하지 않는다.

SmartSet 근거:

- Git remote: `https://github.com/E1jeong/smartset.git`
- 본인 작업 작성자: `E1jeong <won9964@gmail.com>`

SmartSet 문구 방향:

```text
Java 기반 Android 현장 운영 앱에서 NFC 기반 단말 설치, 검침, 설정, AS 업무를 지원했습니다.
Android 14 대응, GPS 수신 방식 개선, NFC 로그 Excel 처리, 계량기 상태 확인,
단말 프로토콜 버전 대응, 사진 촬영 경로 개선 등 현장 업무 흐름과 유지보수성을 개선했습니다.
```

다른 작성자 커밋에 기반한 작업은 본인 성과처럼 쓰지 않는다.

## Project Detail Template

각 프로젝트 상세는 같은 흐름으로 작성한다.

```text
프로젝트명
한 줄 설명

기간 / 형태 / 기술 스택 / 본인 역할 / 기여도

배경
이 프로젝트가 왜 필요했는지

담당한 작업
내가 실제로 맡은 범위

문제와 해결
어떤 문제가 있었고 어떻게 풀었는지

결과 또는 변화
수치가 있으면 수치, 없으면 구조적 개선/운영 개선/안정성 개선

근거
Git 이력 / 코드 구조 / Notion / 로컬 문서
```

수치화된 결과가 없을 때는 억지로 숫자를 만들지 않는다. 대신 실제 개선 범위와 운영상의 변화를 쓴다.

## Skill Grouping

기술은 단순 나열하지 않고 문제 영역 기준으로 묶는다.

```text
Android Application
Kotlin, Java, Jetpack Compose, Android SDK, WorkManager, CameraX

Architecture
Clean Architecture, Multi-module, MVI, Orbit, Hilt, Repository Pattern

Data & Network
Room, DataStore, Retrofit, OkHttp, Firebase, MySQL 연동 API

Hardware & Protocol
NFC, AIDL, JNI, 단말 프로토콜, 계량기/단말 연동, GPS

Backend
Next.js App Router API, Google Play Billing, Pub/Sub, FCM, MySQL
```

## UI Rules

- 과한 장식보다 빠른 스캔을 우선한다.
- 카드 안에 또 카드를 넣지 않는다.
- 첫 화면에서 대표 프로젝트로 바로 이동할 수 있어야 한다.
- 프로젝트 카드에는 역할, 기술, 결과가 먼저 보여야 한다.
- 모바일에서도 프로젝트명, 역할, 기술, 결과가 접히지 않고 읽혀야 한다.
- 이미지와 영상은 현재 구현에서 제외한다.
- 필요한 위치는 추후 업로드 가능한 placeholder로만 표시한다.

## Color System

색상은 Aakash Rajbanshi 포트폴리오의 smoky black/gold 톤을 기준으로 한다. 배경은 완전한 순흑보다 약간 부드러운 블랙을 쓰고, 포인트 컬러는 teal이나 blue 대신 warm gold 계열로 고정한다.

```text
Background: #0d0d0d
Surface: #1e1e1f
Surface Hover / Placeholder: #242426
Primary Text: #f5f5f5
Muted Text: #d6d6d6
Light Text: rgba(214, 214, 214, 0.7)
Accent: #ffdb70
Accent Light: #ffe49a
Accent Soft: rgba(255, 219, 112, 0.12)
Accent Strong: #ffe8a8
```

배경은 콘텐츠를 돋보이게 하는 역할만 한다. 장식용 gradient, beige/cream/sand 계열, 강한 컬러 배경은 사용하지 않는다. Accent는 링크, 섹션 제목, active indicator, 작은 badge에만 제한적으로 사용한다.

## Success Criteria

- 첫 화면 5초 안에 Android 개발자라는 점이 보인다.
- 3분 안에 대표 프로젝트 2~3개의 역할과 강점이 읽힌다.
- 각 프로젝트마다 본인 역할과 근거가 분리되어 있다.
- Git 이력 없는 프로젝트는 낮은 확신도로 작성되어 있다.
- Vercel에서 정적 배포가 가능하다.
- 이미지/영상이 없어도 내용이 성립한다.
