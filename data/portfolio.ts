export type Project = {
  id: string;
  name: string;
  summary: string;
  period: string;
  type: string;
  role: string;
  contribution?: string;
  stack: string[];
  highlights: string[];
  outcomes: string[];
  evidence: string[];
  confidence: "git" | "code-and-notion" | "limited";
  background: string;
  problem: string;
  actions: string[];
  result: string;
  learning: string;
  publicDisclosure: string;
};

export type Experience = {
  company: string;
  domain: string;
  role: string;
  period: string;
  points: string[];
};

export const profile = {
  name: "이원정",
  title: "Android Developer",
  summary:
    "Android 시스템 앱, 하드웨어 연동, NFC/단말 프로토콜, 구독/결제 앱을 다뤄온 개발자입니다.",
  subSummary:
    "레거시 운영과 Kotlin/Compose 구조 개선, 앱과 백엔드가 맞물린 기능 구현을 근거 중심으로 설명합니다.",
  contacts: [
    { label: "Email", href: "mailto:won9964@gmail.com" },
    { label: "GitHub", href: "https://github.com/E1jeong" },
    { label: "Blog", href: "https://still-coding.tistory.com/" }
  ]
};

export const skillGroups = [
  {
    title: "Android Application",
    items: ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "WorkManager", "CameraX"]
  },
  {
    title: "Architecture",
    items: ["Clean Architecture", "Multi-module", "MVI", "Orbit", "Hilt", "Repository Pattern"]
  },
  {
    title: "Data & Network",
    items: ["Room", "DataStore", "Retrofit", "OkHttp", "Firebase", "MySQL 연동 API"]
  },
  {
    title: "Hardware & Protocol",
    items: ["NFC", "AIDL", "JNI", "단말 프로토콜", "계량기/단말 연동", "GPS"]
  },
  {
    title: "Backend",
    items: ["Next.js App Router API", "Google Play Billing", "Pub/Sub", "FCM", "MySQL"]
  }
];

export const projects: Project[] = [
  {
    id: "ubio-n-face-pro",
    name: "UBio-N Face Pro",
    summary: "일본 고객사 출입통제 플랫폼 요구사항을 Android 단말 앱에 통합한 시스템 앱 프로젝트",
    period: "2025.07 - 진행 중",
    type: "Android system app",
    role: "Android 단말 앱 인증/연동 기능 분담 구현",
    contribution: "2인 개발 중 고객사 연동, 인증 확장, 안정성 개선 영역 담당",
    stack: ["Java", "C/C++ JNI", "AIDL", "Room", "SQLCipher", "NFC", "QR", "Face SDK"],
    highlights: [
      "AIDL IPC, QR 인증, EAP-TLS, SQLCipher, Gesture 보정 기능을 고객사 요구사항에 맞춰 반영했습니다.",
      "PF 서버 수신 JSON의 int 범위 초과 크래시를 방지하고 설정값 변경 전후 검증 흐름을 보강했습니다."
    ],
    outcomes: [
      "외부 플랫폼 연동과 복수 인증 수단을 기존 제품 구조에 통합하고 정식 빌드 반영 범위로 정리했습니다."
    ],
    evidence: ["Career-Hub Evidence: 강함", "Notion UBio-N Face Pro 기록", "로컬 코드 구조"],
    confidence: "code-and-notion",
    background: "일본 고객사 요구사항에 맞춰 출입통제 단말기의 인증 수단과 외부 플랫폼 연동을 확장해야 했습니다.",
    problem: "외부 앱 연동, 엔터프라이즈 Wi-Fi, 로컬 DB 보안, 인증 예외 처리, 서버 응답 안정성이 동시에 요구되었습니다.",
    actions: [
      "SFX/SIU AIDL IPC 연동 흐름과 인증 시나리오 분기를 정리했습니다.",
      "EAP-TLS 인증서 import, QR API Key 인증, NFC IC 카드, Gesture 후처리 흐름을 담당 범위 안에서 구현했습니다.",
      "SQLCipher 적용 범위와 서버 JSON 파싱 예외를 검토해 단말 운영 중 발생 가능한 크래시를 줄이는 방향으로 보완했습니다."
    ],
    result: "고객사 요구 기능을 기존 Android 단말 앱 구조에 통합하고 검증 가능한 구현 단위로 정리했습니다.",
    learning: "외부 시스템과 하드웨어가 결합된 Android 앱에서는 통신 실패, 설정값 오류, 인증 예외를 사전에 방어하는 구조가 중요했습니다.",
    publicDisclosure: "공개 가능하되 전체 코드 공개는 어렵기 때문에 기능 흐름과 일부 구현 범위 중심으로 설명합니다."
  },
  {
    id: "fisherlotto",
    name: "Fisher Lotto",
    summary: "로또 정보, QR 스캔, 구독/결제, 알림을 제공하는 개인 Android 앱과 서브 백엔드",
    period: "2025 - 2026",
    type: "Android app + API backend",
    role: "모바일 클라이언트(Android) 및 API 백엔드 1인 풀스택 개발",
    stack: ["Kotlin", "Compose", "Room", "Firebase", "Google Play Billing", "Next.js", "MySQL", "FCM"],
    highlights: [
      "Multi-module Clean Architecture, Orbit MVI, Hilt 기반으로 Android 앱 계층을 분리했습니다.",
      "CameraX/ML Kit QR 스캔, Google Play Billing, Firebase Auth/FCM, WorkManager 알림 흐름을 구현했습니다.",
      "Next.js App Router BFF에서 영수증 검증, Pub/Sub webhook, KFTC OAuth, FCM 연동을 처리했습니다."
    ],
    outcomes: [
      "공개 GitHub로 확인 가능한 Android 앱과 BFF 서버의 End-to-End 모바일 서비스 구조를 확보했습니다.",
      "클라이언트에 민감 키를 두지 않고 BFF로 분리하는 인증/결제 연동 구조를 적용했습니다."
    ],
    evidence: [
      "fisherlotto Git author: E1jeong <won9964@gmail.com>",
      "lotto-sub-backend Git author: E1jeong <won9964@gmail.com>",
      "로컬 README 및 API 코드"
    ],
    confidence: "git",
    background: "로또 사용자 대상 개인 앱에서 QR 확인, 번호 발급, 구독, 푸시, 오픈뱅킹 연동을 하나의 서비스 흐름으로 구성했습니다.",
    problem: "모바일 앱 내부 기능과 결제 검증, OAuth, 푸시 발송 같은 서버 책임을 분리해야 했습니다.",
    actions: [
      "domain 모듈을 순수 Kotlin으로 분리하고 UseCase 인터페이스를 domain 계층에 배치했습니다.",
      "Compose, Orbit MVI, Hilt를 사용해 화면 상태와 의존성 흐름을 정리했습니다.",
      "Next.js BFF에서 Billing 검증, Pub/Sub webhook, FCM, KFTC OAuth 연동을 처리했습니다."
    ],
    result: "Android 앱부터 BFF 서버, 인증, 결제, 푸시까지 직접 설계한 공개 가능한 End-to-End 프로젝트로 정리했습니다.",
    learning: "모바일 서비스는 앱 기능만큼 민감 정보 분리와 서버 경계 설계가 중요하다는 점을 확인했습니다.",
    publicDisclosure: "공개 GitHub와 로컬 README/API 코드 기준으로 설명할 수 있습니다."
  },
  {
    id: "renew-smartset",
    name: "SmartSet Renewal",
    summary: "Java 기반 현장 운영 앱을 Kotlin/Compose 구조로 리뉴얼한 Android 프로젝트",
    period: "2024.07 - 2025.04",
    type: "Android field operation app",
    role: "Android 아키텍처 리뉴얼 설계 및 주요 기능 구현",
    contribution: "앱 전체 설계와 주요 기능 구현 담당",
    stack: ["Kotlin", "Jetpack Compose", "Orbit MVI", "Hilt", "Room", "Google Maps Compose", "NFC"],
    highlights: [
      "Clean Architecture와 multi-module 구조로 app/data/domain/presentation 계층 책임을 분리했습니다.",
      "Orbit MVI, Hilt, Jetpack Compose 기반으로 화면 상태와 의존성 흐름을 재설계했습니다.",
      "서버 SQLite 데이터를 Room 엔티티로 이관하는 흐름과 QR, 지도, 사진 업로드 기능을 구현했습니다."
    ],
    outcomes: [
      "Java 레거시 앱의 현장 업무 흐름을 Kotlin/Compose 기반 구조로 재정리했습니다.",
      "기존 업무 흐름을 보존하면서 유지보수성과 기능 확장 기반을 확보했습니다."
    ],
    evidence: [
      "Git author: E1jeong <won9964@gmail.com>",
      "Notion Smartset renewal 기록",
      "로컬 코드 구조"
    ],
    confidence: "git",
    background: "기존 Java 기반 현장 운영 앱을 Kotlin, Compose, Clean Architecture 구조로 전환하는 리뉴얼 프로젝트였습니다.",
    problem: "레거시 구조, XML UI, 직접 DB 접근, 복잡한 현장 업무 흐름이 유지보수와 확장을 어렵게 만들었습니다.",
    actions: [
      "멀티모듈 구조와 계층별 의존성 방향을 정리했습니다.",
      "Orbit MVI 상태 흐름과 Hilt DI를 적용해 화면과 비즈니스 로직의 결합을 줄였습니다.",
      "SQLite to Room migration, QR, 지도 클러스터링, 사진 업로드, NFC 요청/응답 흐름을 구현했습니다."
    ],
    result: "최신 Android 스택 기반으로 현장 운영 앱의 유지보수성과 기능 확장 기반을 마련했습니다.",
    learning: "리뉴얼은 기술 교체보다 기존 현장 업무 흐름을 보존하면서 구조를 바꾸는 일이 핵심이었습니다.",
    publicDisclosure: "공개 가능 범위 안에서 Git 이력과 Notion 기록 기준으로 설명합니다."
  },
  {
    id: "smartset",
    name: "SmartSet",
    summary: "NFC 기반 단말 설치, 검침, 설정, AS를 지원하는 Java Android 현장 운영 앱",
    period: "2021 - 2025",
    type: "Android field operation app",
    role: "Java 레거시 코드베이스 최적화 및 현장 단말 연동 기능 개선",
    stack: ["Java", "Android SDK", "NFC", "GPS", "Excel 처리", "단말 프로토콜"],
    highlights: [
      "Eclipse 기반 프로젝트를 Android Studio/Gradle 환경으로 옮기고 Android 12+ 권한 정책과 targetSdk 34에 대응했습니다.",
      "NFC 단말 프로토콜, 서버 응답 기반 AS 작업 순서 제어, 사진/GPS/지도 기능을 개선했습니다.",
      "현장 설치/검침/AS 업무에서 데이터가 혼재되지 않도록 앱 흐름을 보완했습니다."
    ],
    outcomes: [
      "기존 운영 앱의 유지보수 기반을 현대화하고 현장 업무 데이터 정합성을 강화했습니다.",
      "Android 버전 변화와 단말 프로토콜 변경에 대응할 수 있도록 운영 범위를 넓혔습니다."
    ],
    evidence: [
      "Git remote: https://github.com/E1jeong/smartset.git",
      "Git author: E1jeong <won9964@gmail.com>",
      "새 클론 경로: C:\\Users\\sumas\\OneDrive\\Desktop\\dev\\6.project\\smartset"
    ],
    confidence: "git",
    background: "NFC 기반 단말 설치, 검침, 설정, AS를 지원하는 Java Android 현장 운영 앱을 인수인계 후 담당했습니다.",
    problem: "레거시 개발 환경, 단말 유형 증가, Android 권한 정책 변화, AS 데이터 혼재 문제가 함께 있었습니다.",
    actions: [
      "Android Studio/Gradle migration과 compileSdk/targetSdk 34 대응을 진행했습니다.",
      "NFC 프로토콜 확장, 서버 인증 절차, AS 작업 순서 제어, 사진 업로드 흐름을 개선했습니다.",
      "GPS 수신 방식과 현장 사진 경로를 운영 환경에 맞게 보완했습니다."
    ],
    result: "현장 운영 앱의 유지보수 기반을 확보하고 설치/AS 업무 데이터 정합성을 높이는 방향으로 개선했습니다.",
    learning: "운영 앱은 기술 구조뿐 아니라 실제 현장 작업 순서를 앱이 얼마나 잘 강제하는지가 품질과 연결되었습니다.",
    publicDisclosure: "Git remote와 author 기준으로 본인 작업 범위가 확인되는 내용 중심으로 설명합니다."
  },
  {
    id: "hitec-c-projects",
    name: "Hitec Embedded C Projects",
    summary: "Android 현장 앱과 연결되는 계량기 및 단말기 펌웨어 구조를 분석한 보조 경험",
    period: "2021 - 2025",
    type: "Embedded C",
    role: "단기 참여 및 펌웨어 구조 분석",
    stack: ["C", "MSP430", "UART", "NFC", "FOTA", "Meter Protocol"],
    highlights: [
      "meter_hitec-total에서 디지털 수도 계량기 펌웨어 구조를 확인했습니다.",
      "terminal_lg_bc95g-fota_new에서 NB-IoT/Lora, FOTA, NFC, 계량기 프로토콜 관련 구조를 분석했습니다."
    ],
    outcomes: [
      "Android 현장 앱에서 다루는 단말 프로토콜과 하드웨어 연동 맥락을 이해하는 데 도움이 된 보조 경험입니다."
    ],
    evidence: ["로컬 C 프로젝트 구조", "Git 이력 없음"],
    confidence: "limited",
    background: "현장 Android 앱과 연결되는 계량기/단말기 펌웨어 구조를 이해하기 위해 일부 C 프로젝트를 분석했습니다.",
    problem: "Git 이력과 본인 기여 근거가 제한적이어서 대표 성과로 강하게 주장하기 어렵습니다.",
    actions: [
      "디지털 수도 계량기 펌웨어 구조와 NB-IoT/Lora, FOTA, NFC 관련 코드 흐름을 확인했습니다.",
      "Android 앱에서 다루는 단말 프로토콜과 펌웨어 책임 범위를 연결해 이해했습니다."
    ],
    result: "Android 현장 앱의 하드웨어 연동 문제를 이해하는 배경 지식으로 정리했습니다.",
    learning: "앱에서 보이는 단말 응답과 펌웨어 내부 책임을 함께 보면 현장 이슈를 더 보수적으로 해석할 수 있었습니다.",
    publicDisclosure: "Git 근거가 제한적이므로 보조 경험으로만 표현합니다."
  }
];

export const experiences: Experience[] = [
  {
    company: "유니온바이오메트릭스",
    domain: "출입통제 단말 및 Android 시스템 앱",
    role: "Android Developer / 대리",
    period: "2025.04 - 현재",
    points: [
      "UBio-N Face Pro 일본향 출입문 통제 단말의 Android 시스템 앱과 하드웨어 연동을 전담했습니다.",
      "AIDL IPC, NFC, QR, Face SDK, SQLCipher 등 단말 환경의 인증/연동 흐름을 정밀 분석하고 단말 시스템 앱 구현을 설계했습니다."
    ]
  },
  {
    company: "하이텍앤솔",
    domain: "수도 계량기 및 현장 단말 운영 솔루션",
    role: "Android Developer / 선임",
    period: "2021.04 - 2025.04",
    points: [
      "SmartSet과 SmartSet Renewal에서 NFC 기반 단말 설치/검침/설정/AS 업무 흐름을 설계 및 개발했습니다.",
      "Java 레거시 Android 앱 운영을 고도화하고 Kotlin/Compose 기반 구조 개선을 성공적으로 주도했습니다."
    ]
  },
  {
    company: "Personal Projects",
    domain: "Android 앱과 구독/알림 백엔드",
    role: "Android & Backend Developer",
    period: "2025 - 2026",
    points: [
      "Fisher Lotto Android 앱과 lotto-sub-backend를 기획 및 풀스택 개발했습니다.",
      "Google Play Billing, Pub/Sub, FCM, MySQL, Next.js API를 유기적으로 연동하여 인앱 구독 및 알림 푸시 자동화 파이프라인을 구축했습니다."
    ]
  }
];
