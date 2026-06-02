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
    "Android 시스템 앱, 하드웨어 연동, NFC/단말 프로토콜, 결제/구독 기반 앱을 개발해왔습니다.",
  subSummary:
    "Java 기반 레거시 운영 경험과 Kotlin/Compose 기반 구조 개선 경험을 함께 가지고 있습니다.",
  contacts: [
    { label: "Email", href: "mailto:won9964@gmail.com" },
    { label: "GitHub", href: "https://github.com/E1jeong" },
    { label: "Blog", href: "#" }
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
    id: "renew-smartset",
    name: "SmartSet Renewal",
    summary: "Java 기반 현장 운영 앱을 Kotlin/Compose 구조로 리뉴얼한 Android 프로젝트",
    period: "2024.07 - 2025.04",
    type: "Android field operation app",
    role: "Android 아키텍처 리뉴얼 설계 및 주요 기능 구현",
    contribution: "전체 코드 기여도 80% 이상 담당 및 아키텍처 리뉴얼 주도",
    stack: ["Kotlin", "Jetpack Compose", "Orbit MVI", "Hilt", "Room", "Google Maps Compose", "NFC"],
    highlights: [
      "Clean Architecture와 multi-module 구조로 app/data/domain/presentation 계층을 분리했습니다.",
      "NFC 요청/응답 흐름, QR, 지도 클러스터링, 사진 업로드, 다국어 처리를 구현했습니다.",
      "서버 SQLite 데이터를 Room 기반 로컬 데이터 구조로 이전하는 흐름을 정리했습니다."
    ],
    outcomes: [
      "Java 레거시 앱의 현장 업무 흐름을 Kotlin/Compose 기반 구조로 재정리했습니다.",
      "NFC, 지도, 사진, 데이터 이전처럼 현장 운영에 필요한 주요 흐름을 모듈화된 구조 안에 배치했습니다."
    ],
    evidence: [
      "Git author: E1jeong <won9964@gmail.com>",
      "Notion Smartset renewal 기록",
      "로컬 코드 구조"
    ],
    confidence: "git"
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
      "CameraX/ML Kit 기반 QR 스캔, 회차 정보, 통계, 예상번호 기능을 구성했습니다.",
      "Google Play Billing, 구독 상태 동기화, FCM, WorkManager 기반 알림 흐름을 구현했습니다.",
      "Next.js API 백엔드에서 영수증 검증, Pub/Sub webhook, FCM 연동, 예상번호 API를 처리했습니다."
    ],
    outcomes: [
      "Next.js API 백엔드와 Google Play 결제 영수증 검증 프로세스를 연동하여 실시간 구독 상태 불일치를 제거했습니다.",
      "FCM과 WorkManager를 유기적으로 조합하여 백그라운드 환경에서도 높은 알림 도달률을 확보했습니다."
    ],
    evidence: [
      "fisherlotto Git author: E1jeong <won9964@gmail.com>",
      "lotto-sub-backend Git author: E1jeong <won9964@gmail.com>",
      "로컬 README 및 API 코드"
    ],
    confidence: "git"
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
      "Android 14 대응을 위해 Location BroadcastReceiver 처리를 수정했습니다.",
      "GPS 수신 방식을 Fused Provider 중심으로 개선했습니다.",
      "NFC 로그 Excel 처리, 계량기 상태 확인, 단말 프로토콜 버전 대응, 사진 촬영 경로 개선을 반영했습니다."
    ],
    outcomes: [
      "현장 설치/검침 업무에서 필요한 NFC, GPS, 사진, 프로토콜 처리 흐름을 개선했습니다.",
      "Android 버전 변화와 단말 프로토콜 변경에 대응할 수 있도록 유지보수 범위를 넓혔습니다."
    ],
    evidence: [
      "Git remote: https://github.com/E1jeong/smartset.git",
      "Git author: E1jeong <won9964@gmail.com>",
      "새 클론 경로: C:\\Users\\sumas\\OneDrive\\Desktop\\dev\\6.project\\smartset"
    ],
    confidence: "git"
  },
  {
    id: "ubio-n-face-pro",
    name: "UBio-N Face Pro",
    summary: "일본향 출입문 통제 단말의 Android 시스템 앱 및 하드웨어 연동 프로젝트",
    period: "2025.07 - 진행 중",
    type: "Android system app",
    role: "Android 시스템 앱 연동 흐름 분석 및 담당 영역 정리",
    contribution: "핵심 아키텍처 분석 및 시스템 연동 흐름 문서화",
    stack: ["Java", "C/C++ JNI", "AIDL", "Room", "SQLCipher", "NFC", "QR", "Face SDK"],
    highlights: [
      "SFX/SIU AIDL IPC, EAP-TLS Wi-Fi, QR API Key 인증, NFC IC 카드, Gesture 인증 흐름을 다뤘습니다."
    ],
    outcomes: [
      "Notion 설계 문서를 바탕으로 AIDL 통신 인터페이스 및 단말 하드웨어 모듈과의 연동 흐름을 파악 및 문서화하여 개발 생산성 기반을 다졌습니다."
    ],
    evidence: ["Notion UBio-N Face Pro 기록", "로컬 코드 구조", "Git 이력 없음"],
    confidence: "code-and-notion"
  },
  {
    id: "hitec-c-projects",
    name: "HiTec Embedded C Projects",
    summary: "계량기 및 단말기 펌웨어 구조를 분석하고 일부 기능 흐름을 파악한 C 프로젝트",
    period: "2021 - 2025",
    type: "Embedded C",
    role: "단기 참여 및 코드 분석",
    stack: ["C", "MSP430", "UART", "NFC", "FOTA", "Meter Protocol"],
    highlights: [
      "meter_hitec-total에서 디지털 수도 계량기 펌웨어 구조를 확인했습니다.",
      "terminal_lg_bc95g-fota_new에서 NB-IoT/Lora, FOTA, NFC, 계량기 프로토콜 관련 구조를 분석했습니다."
    ],
    outcomes: [
      "Android 현장 앱과 연결되는 계량기/단말기 펌웨어 구조를 이해하는 데 도움이 된 경험입니다."
    ],
    evidence: ["로컬 C 프로젝트 구조", "Git 이력 없음"],
    confidence: "limited"
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
