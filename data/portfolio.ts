export type ProjectFeature = {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  image?: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
  description?: string;
};

export type PipelineStep = {
  step: string;
  title: string;
  desc: string;
};

export type RepositoryInfo = {
  name: string;
  role: string;
  disclosure: string;
  url?: string;
};

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
  features?: ProjectFeature[];
  metrics?: ProjectMetric[];
  pipelineSteps?: PipelineStep[];
  repositories?: RepositoryInfo[];
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
  title: "AI-Native Android Developer",
  currentCompany: "(주)유니온바이오메트릭스 재직 중",
  email: "sumastra@naver.com",
  summary:
    "AI 모델 설계부터 임베디드 NPU 배포와 Android 앱 아키텍처까지 직접 구현하는\nAI-Native Android 개발자",
  aboutBody:
    "온디바이스 딥러닝(Edge ML) 파이프라인 수립과 INT8 양자화, NPU 실기기 추론 최적화 경험을 보유하고 있으며, AIDL IPC·NFC·단말 프로토콜 등의 시스템 연동 및 Kotlin/Compose 기반 Clean Architecture 전환 경험을 바탕으로 하드웨어와 소프트웨어의 경계를 안정적으로 연결합니다",
  workflowTitle: "How I Work",
  aiWorkflow: [
    {
      step: "Second-Brain Wiki",
      description: "에이전트와 공유하고 관리하는 장기기억"
    },
    {
      step: "AI with Voice",
      description: "생각의 속도로 주고 받는 실시간 대화"
    },
    {
      step: "AI start, Human finish",
      description: "AI가 시작하고, 사람이 완성한다"
    }
  ],
  contacts: [
    { label: "GitHub", href: "https://github.com/E1jeong" },
    { label: "Blog", href: "https://still-coding.tistory.com/" }
  ]
};

export const coreStrengths = [
  "온디바이스 AI (Edge ML 모델 학습, INT8 양자화, NPU 실기기 배포)",
  "하드웨어 및 시스템 연동 (AIDL IPC, NFC, 단말 프로토콜, EAP-TLS)",
  "AI 주도 엔지니어링 & 원인 분석 (SDK·앱 회귀 테스트, 아키텍처 전환)"
];

export const skillGroups = [
  {
    title: "On-Device AI & Edge ML",
    items: [
      "PyTorch",
      "Keras / TensorFlow",
      "TFLite",
      "INT8 PTQ Quantization",
      "NNAPI",
      "NXP i.MX 8M Plus NPU",
      "MediaPipe Tasks Vision"
    ]
  },
  {
    title: "Android Application",
    items: [
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "Android SDK",
      "WorkManager",
      "CameraX"
    ]
  },
  {
    title: "Architecture",
    items: [
      "Clean Architecture",
      "Multi-module",
      "Orbit MVI",
      "Hilt",
      "Room",
      "Repository Pattern"
    ]
  },
  {
    title: "Hardware & Protocol",
    items: [
      "NFC (NTAG I2C)",
      "AIDL IPC",
      "C/C++ JNI",
      "단말 프로토콜",
      "EAP-TLS Wi-Fi"
    ]
  },
  {
    title: "Backend & Cloud",
    items: [
      "Next.js App Router API",
      "Google Play Billing",
      "Firebase Auth / FCM",
      "MySQL",
      "GitHub Actions CI/CD"
    ]
  }
];

const projectOrder = [
  "ubio-n-face-pro",
  "anti-spoofing-ai",
  "fisherlotto",
  "renew-smartset",
  "smartset"
];

const projectRank = (id: string) => {
  const index = projectOrder.indexOf(id);
  return index === -1 ? projectOrder.length : index;
};

export const projects: Project[] = ([
  {
    id: "ubio-n-face-pro",
    name: "UBio-N Face Pro",
    summary:
      "일본 NEC 고객사 출입통제 플랫폼 요구사항을 Android 단말 앱에 통합한 프로덕션 앱 프로젝트",
    period: "2025.07 - 현재",
    type: "Android Device",
    role: "Android 단말 앱 인증 확장, AIDL IPC 연동, DB 보안, 안정성 개선 전담",
    contribution: "2인 개발 중 카메라/얼굴 알고리즘 외 전 기능 전담 (~50%)",
    stack: [
      "Java",
      "C/C++ JNI",
      "AIDL",
      "Room",
      "SQLCipher",
      "NFC",
      "QR",
      "MediaPipe Tasks Vision",
      "EAP-TLS"
    ],
    highlights: [
      "AIDL IPC 기반 프로세스 간 통신 설계 및 QR/NFC/EAP-TLS 멀티 인증 시나리오 확장",
      "단말 관리 플랫폼의 범위 초과 정수 응답에 BigDecimal 커스텀 어댑터를 적용해 RQA 이슈의 수동 재현이 중단되도록 개선",
      "FeliCa 카드 인증 연동 및 카드 데이터의 로컬 DB·메모리 조회 경로 개선"
    ],
    outcomes: [
      "사내 수용평가(RQA) 이슈 121건 중 118건 종결(97.5%, 2026.04 기준) 및 NEC 고객사 검수 이슈 25건 해결",
      "6차 릴리즈 고객사 검수 통과\nVision SDK 제품 연동 진행 중이며 최신 API 실기기 회귀는 대기"
    ],
    evidence: [
      "사내 RQA 이슈 트래커 종결 기록 (121건 중 118건 종결)",
      "일본 NEC 고객사 6차 릴리즈 수용평가 검수 통과 자료",
      "로컬 Gradle 멀티 모듈 소스 코드 구조"
    ],
    confidence: "code-and-notion",
    background:
      "일본 NEC 고객사의 요구에 맞춰 출입통제 얼굴인식 단말의 외부 보안 플랫폼 연동을 확장하고, QR/NFC/EAP-TLS 등 엔터프라이즈 인증 수단을 기존 단말 소프트웨어에 통합한 프로덕션 개발 및 안정화 프로젝트",
    problem:
      "외부 보안 플랫폼 연동, 복수 인증 수단, 엔터프라이즈 Wi-Fi(EAP-TLS), 로컬 DB 보안, 대용량 오프라인 카드 매칭 요구를 기존 단말 제품 구조 안에 통합해야 하는 과제 존재",
    actions: [
      "외부 보안 앱과의 AIDL IPC 연동 흐름 정비 및 BindService 구조 설계",
      "WPA2-Enterprise(EAP-TLS) 인증서 가져오기·구성 및 예외 처리 구현",
      "BigDecimal 기반 SafeIntegerAdapter 주입으로 범위 초과 정수 응답의 JSON 파싱 예외 처리",
      "MediaPipe Tasks Vision 랜드마크 분석 기반 제스처 오인식 완화용 2차 필터링 설계",
      "FeliCa 카드 인식·인증 연동과 카드 데이터의 로컬 DB·메모리 조회 처리 구현"
    ],
    result:
      "고객사 요구 기능을 기존 제품 구조에 통합하고, 2인 공동 담당으로 사내 RQA 121건 중 118건 종결(2026.04 기준), NEC 검수 이슈 25건 해결 및 6차 릴리즈 검수 통과\nVision SDK 제품 연동은 진행 중이며 최신 API 이관·실기기 회귀는 대기 중",
    metrics: [
      {
        label: "사내 RQA 이슈 종결",
        value: "97.5%",
        description: "121건 중 118건 종결 (2인 공동 담당, 2026.04 기준)"
      },
      {
        label: "고객사 수용평가 이슈",
        value: "100% 해결",
        description: "NEC 검수 이슈 25건 전건 해결 (버전 960.09~960.15)"
      },
      {
        label: "릴리즈 차수",
        value: "6차 완료",
        description: "현재 7차 기능 개발 진행 중"
      }
    ],
    features: [
      {
        title: "Vision SDK 기반 안티스푸핑 제품 연동",
        description:
          "기존 단말 앱의 인증 흐름에 자체 안티스푸핑 추론 SDK/AAR 연결",
        challenge:
          "프레임별 모델 출력과 제품 인증 판정을 구분하고 IR 조명 안정화 이후의 입력으로 판정해야 하는 과제 존재",
        solution:
          "이전 Vision SDK를 연동하여 IR 400ms 안정화 후 3프레임 평균 판정을 제품 호스트 흐름에 적용",
        outcome:
          "2026-09-17 사용자 실기기 확인에서 live/display 출력 관찰\n09-18 최신 API/AAR 이관과 회귀·오버레이 검증은 대기 중이며 7차 릴리즈 완료나 최종 안티스푸핑 검수를 뜻하지 않음"
      },
      {
        title: "AIDL IPC 기반 외부 보안 앱 연동 인터페이스 정비",
        description:
          "Android 단말 앱과 타사 외부 보안 앱 사이의 멀티 프로세스 통신(IPC) 경계를 설정하고, 단말 잠금 해제와 이벤트 통지 흐름을 제어하는 통신 계층 개발",
        challenge:
          "비동기 다중 프로세스 환경에서 IPC 호출 시의 타이밍 불일치 및 예외 상황 분기 누락으로 인해 단말이 잠금 해제 통지를 누락하거나 일시적으로 IPC 교착 상태에 빠지는 안정성 위험 존재",
        solution:
          "AIDL 인터페이스 경계면의 예외 처리를 단말 제어 생명주기와 분리하고, 비동기 호출 시 데이터 전달 정합성을 높이도록 Thread-safe한 상태 처리 큐(Queue)와 재시도 로직 설계 및 이식",
        outcome:
          "수용평가(RQA) 단계에서 단말 제어 연동 테스트를 통과하여 외부 프로세스 연동 시의 동작 신뢰성 확보"
      },
      {
        title: "WPA2-Enterprise (EAP-TLS) 사설 RADIUS 환경 인증서 구성",
        description:
          "기업용 출입문 Wi-Fi 환경에서 EAP-TLS 인증서 가져오기와 연결 설정을 처리하는 네트워크 구성 작업",
        challenge:
          "사설 RADIUS 서버가 구축된 특수 고객망 환경에서 CA 인증서가 설치되지 않았음에도 Wi-Fi 접속이 비정상적으로 성공하거나, CA 인증서만 단독 임포트 시 기존 클라이언트 키쌍(Keypair)과의 불일치로 인한 시스템 에러 발생",
        solution:
          "인증서 가져오기 단계에서 CA와 클라이언트 키 구성 조건을 확인하고, Android KeyStore 및 WifiEnterpriseConfig 연동 과정의 예외 처리 보강",
        outcome:
          "사설 RADIUS 환경에서 필요한 EAP-TLS 인증서 가져오기와 연결 설정 흐름 구현"
      },
      {
        title: "단말 관리 플랫폼 Config JSON 파싱 예외 복구 및 런타임 안정성 개선",
        description:
          "원격 클라우드 서버로부터 단말 설정값(Configs)을 동기화할 때, 비표준 형식 또는 이상 데이터 유입에 대해 단말 구동 프로세스가 비정상 종료(Crash)되지 않도록 방어하는 유효성 검증 계층 설계",
        challenge:
          "서버가 보낸 특정 설정 필드가 표준 32비트 int 범위를 넘을 경우 JSON 파싱 중 예외가 발생해 단말 앱이 종료되는 문제 발생",
        solution:
          "파서 단에 정수형 초과 데이터 유입을 유연하게 소화하도록 BigDecimal을 활용한 커스텀 SafeIntegerAdapter를 작성해 파서에 주입하고, 설정값 파싱 완료 전후 비교 및 URL 값 유효성 정규식 검증 레이어 도입",
        outcome:
          "변경 후 수동 테스트에서 해당 이슈가 재현되지 않았고 동일 후속 이슈가 접수되지 않음\n전체 크래시율과 전후 발생 건수는 미측정"
      },
      {
        title: "MediaPipe Tasks Vision 기반 랜드마크 분석 제스처(Gesture) 오인식 개선 알고리즘",
        description:
          "비접촉 근태 등록 및 기기 제어를 위해 단말 전면 카메라 입력에서 사용자 손동작(Gesture)을 실시간으로 감지하고 분류하는 온디바이스 AI 비전 알고리즘 보강",
        challenge:
          "MediaPipe 모델의 단순 분류 결과만으로는 V자 포즈(Victory)와 검지 지목(PointUp) 손동작 간의 미세한 각도 차이를 오인식하여 잘못된 근태 명령이 실행되는 감지 신뢰도 문제 발생",
        solution:
          "기본 분류 모델 결과에 더해, 실시간 검출된 손가락 관절 랜드마크(Landmarks) 좌표 상에서 각 손가락 끝(Tip)과 두 번째 관절 마디(Pip)의 높이 차이 및 굴곡도를 픽셀 변위 분석으로 수학적 2차 필터링 검증 단계 설계",
        outcome:
          "Victory와 PointUp을 구분하는 랜드마크 기반 2차 판정 단계를 추가해 제스처 오인식 가능성 완화"
      },
      {
        title: "카드 인증 연동 및 로컬 데이터 관리",
        description:
          "FeliCa 카드 인식·인증 연동과 로컬 DB·메모리 기반 카드 데이터 처리를 함께 담당",
        challenge:
          "카드 리더의 인식 결과를 단말 인증 흐름에 연결하는 작업과, 인증에 사용하는 로컬 카드 데이터를 저장·갱신·조회하는 작업을 함께 구현해야 하는 과제 존재",
        solution:
          "카드 연동에서는 FeliCa 인식 결과와 인증 처리를 연결하고, 데이터 관리에서는 로컬 DB 저장·갱신과 메모리 조회 처리를 구성해 각 역할에 맞게 구현",
        outcome:
          "카드 입력·인증 연동과 로컬 데이터 저장·조회 기능을 구현하여 고객사 요구 카드 기능을 단말 앱에 통합"
      }
    ],
    learning:
      "하드웨어, 외부 솔루션, 원격 관리 플랫폼이 결합된 단말에서는 입력값과 통신 예외를 경계에서 처리하고 모듈 책임을 분리하는 것이 운영 안정성의 핵심임을 확인",
    publicDisclosure:
      "전체 소스는 비공개이며, 공개가 승인된 기능 단위 코드 발췌와 아키텍처 다이어그램으로 설명합니다"
  },
  {
    id: "fisherlotto",
    name: "Fisher Lotto",
    summary:
      "로또 당첨 확인·예상 번호·통계·로그인·구독을 Android 앱과 전용 Next.js 서버로 연결한 개인 프로젝트",
    period: "2024.12 - 현재",
    type: "Android Mobile",
    role: "Full-Stack 개인 프로젝트 (Android 클라이언트 + Next.js 백엔드 + 배포 파이프라인 전담)",
    contribution: "100% 단독 기획·설계·개발",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Clean Architecture",
      "Multi-module",
      "Orbit MVI",
      "Hilt",
      "CameraX",
      "ML Kit",
      "Google Play Billing",
      "Next.js",
      "MySQL",
      "FCM",
      "GitHub Actions"
    ],
    highlights: [
      "순수 Kotlin domain 모듈 기반 Multi-module Clean Architecture 및 Orbit MVI 적용",
      "CameraX/ML Kit QR 스캔, Google Play Billing 구독 결제, FCM 푸시 파이프라인 구축",
      "Next.js BFF 영수증 검증에 계정 귀속 계약 추가, 당첨 번호 수집에 중복 방지·재시도 구현",
      "KFTC 오픈뱅킹 OAuth 2.0 연동 구현 (프로덕션 미적용)"
    ],
    outcomes: [
      "공개 GitHub 코드로 확인 가능한 모바일 클라이언트와 전용 백엔드의 End-to-End 아키텍처 확보",
      "Google Play Closed Testing의 최근 확인 버전은 v0.0.7\n기존 결제·구독 만료·FCM 흐름은 실기기 검증 완료\n새 계정 귀속 결제와 v0.0.8 출시는 검증 대기"
    ],
    evidence: [
      "FisherLotto Android GitHub: https://github.com/E1jeong/FisherLotto",
      "lotto-sub-backend GitHub: https://github.com/E1jeong/lotto-sub-backend",
      "GitHub Actions 배포 파이프라인 및 Gabia/PM2 운영 기록"
    ],
    confidence: "git",
    background:
      "실무에서 즉시 도입하기 어려운 최신 Android 스택(Compose, Multi-module, MVI, Play Billing)과 클라우드 백엔드를 End-to-End로 직접 설계하고 실전 운영 역량을 검증하기 위해 기획한 1인 사이드 프로젝트",
    problem:
      "모바일 앱 내부의 복잡한 비즈니스 로직과 결제 영수증 검증, 푸시 알림 발송, OAuth 연동 같은 서버의 보안 책임을 명확히 분리해야 하는 과제 존재",
    actions: [
      "app/presentation/domain/data 4모듈 설계 및 순수 Kotlin domain 모듈 분리",
      "Orbit MVI 상태 관리와 Hilt DI를 결합한 단방향 데이터 흐름 구축",
      "CameraX ImageAnalysis와 ML Kit를 활용한 QR 당첨 대조 구현",
      "Next.js BFF 서버 구축 및 Google Cloud Pub/Sub Webhook 기반 영수증 검증 연동",
      "신규 구매의 obfuscatedAccountId와 서버 검증을 연결해 영수증 계정 귀속 구현",
      "당첨 번호 수집의 동일 회차 중복·충돌 방지 및 10분 간격 재시도 구현",
      "GitHub Actions를 통한 빌드/배포 자동화 및 Gabia PM2 운영 파이프라인 구축"
    ],
    result:
      "Android 앱·서버·인증·결제·푸시·CI/CD를 직접 설계하고 기존 결제·알림 흐름을 실기기에서 검증\nGoogle Play Closed Testing의 최근 확인 버전은 v0.0.7\n이후 추가한 계정 귀속 결제의 신규 구매·타 계정 토큰 거부, 첫 예약 당첨 번호 수집, v0.0.8 및 공개 출시는 검증 대기 중",
    metrics: [
      {
        label: "모듈 아키텍처",
        value: "4-Module",
        description: "app / presentation / domain / data"
      },
      {
        label: "CI/CD 자동화",
        value: "Automated",
        description: "GitHub Actions + Gabia/PM2"
      },
      {
        label: "공개 코드베이스",
        value: "100% Public",
        description: "GitHub 공개 저장소 2개 (App + Backend)"
      }
    ],
    features: [
      {
        title: "앱·서버를 연결한 구독 결제 및 영수증 검증",
        description:
          "클라이언트에 민감 키를 노출하지 않고 BFF 서버를 통해 결제 영수증 위변조를 방지하는 결제 파이프라인",
        challenge:
          "클라이언트 단에서 직접 결제 결과를 신뢰할 경우 결제 우회(Tampering) 및 영수증 조작 등 보안 취약점 발생 위험 존재",
        solution:
          "Next.js BFF에서 Pub/Sub Webhook과 Play Developer API로 구매 토큰·구독 상태를 검증\n신규 구매에는 이메일의 SHA-256 기반 obfuscatedAccountId를 기록하고, 서버에서 제공자 식별자를 대조한 뒤 영수증을 계정에 귀속",
        outcome:
          "기존 결제·취소·만료·FCM 흐름은 실기기 검증 완료\n새 계정 귀속 계약의 신규 구매와 타 계정 토큰 거부는 앱·서버 연동 검증 대기"
      },
      {
        title: "순수 Kotlin domain 모듈 기반 Multi-module Clean Architecture & Orbit MVI",
        description:
          "안드로이드 프레임워크 의존성이 없는 순수 Kotlin domain 모듈과 MVI 단방향 데이터 흐름 설계",
        challenge:
          "QR 스캔, 구독 결제, 오픈뱅킹, 번호 추첨 등 복잡한 비즈니스 로직이 단일 화면에 뒤엉켜 상태 충돌 및 테스트 격리가 어려운 문제 존재",
        solution:
          "domain 모듈을 순수 Kotlin으로 격리하여 UseCase 인터페이스를 배치하고, Orbit MVI를 적용해 State(상태), SideEffect(1회성 이벤트), Intent(사용자 동작)를 단방향으로 통제",
        outcome:
          "비즈니스 로직과 UI 컴포넌트의 결합도를 낮추고 모듈 단위 독립적 유지보수성 확보"
      },
      {
        title: "당첨 번호 수집의 중복 방지 및 재시도",
        description:
          "서버에 저장된 당첨 번호를 Android 앱이 조회하는 구조에서 회차별 수집 경로 보강",
        challenge:
          "같은 회차의 중복 실행이나 당첨 번호 미공개 시점의 요청에 대응해야 하는 과제 존재",
        solution:
          "인증된 직접 수집 경로에 동일 회차 멱등성·충돌 방지와 10분 간격 재시도를 구현",
        outcome:
          "2026-09-18 운영 기록에서 수동 중복 요청의 무변경 처리와 미공개 회차 재시도 확인\n첫 토요일 예약 실행과 앱의 새 회차 조회 검증은 대기 중"
      },
      {
        title: "CameraX + ML Kit 기반 QR 코드 분석 및 당첨 자동 대조",
        description:
          "로또 용지의 QR 코드를 실시간 캡처하여 당첨 번호와 복수 회차 데이터를 자동 파싱하는 카메라 기능",
        challenge:
          "복권 QR과 상품 바코드를 구분하고, 복권 형식이 아닌 QR 입력에는 명확한 오류 피드백을 제공해야 하는 과제 존재",
        solution:
          "CameraX ImageAnalysis와 Google ML Kit를 결합하고 QR 형식만 복권 URL 파싱 대상으로 전달하도록 입력 필터링 적용",
        outcome:
          "복권 QR 당첨 대조와 결과 표시 흐름을 구현하고 상품 바코드의 잘못된 파싱 진입 차단"
      }
    ],
    learning:
      "모바일 서비스 개발에서는 클라이언트 기능 구현만큼이나 민감 키를 분리하고 서버와의 경계를 견고히 설계하는 것이 보안과 안정성의 핵심임을 체득",
    publicDisclosure: "GitHub 공개 저장소를 통해 전체 소스 코드와 API 설계 확인 가능"
  },
  {
    id: "renew-smartset",
    name: "SmartSet Renewal",
    summary:
      "레거시 Java 현장 운영 앱을 Kotlin, Jetpack Compose, Multi-module Clean Architecture로 전면 리뉴얼한 프로젝트",
    period: "2024.07 - 2025.04",
    type: "Android Mobile",
    role: "Java 레거시 앱의 Kotlin/Compose 아키텍처 리뉴얼 및 1인 단독 개발",
    contribution: "100% 단독 수행 (아키텍처 설계부터 기능 마이그레이션까지)",
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Clean Architecture",
      "Multi-module",
      "Orbit MVI",
      "Hilt",
      "Room",
      "DataStore",
      "Google Maps Compose",
      "CameraX",
      "NFC"
    ],
    highlights: [
      "Clean Architecture와 multi-module 구조로 app/presentation/domain/data 계층 분리",
      "Orbit MVI, Hilt, Jetpack Compose 기반으로 화면 상태와 비즈니스 로직 결합도 최소화",
      "SqliteToRoomImporter의 설치·AS·AS코드 테이블별 Room 트랜잭션 이관 및 현장 작업 흐름 통합"
    ],
    outcomes: [
      "Java/XML 기반 레거시 앱을 모던 Android 기술 스택으로 전환해 유지보수·기능 확장 기반 마련",
      "현장 설치팀·개발팀·영업팀에 APK를 배포해 기존 앱과 병행 현장 검증 진행"
    ],
    evidence: [
      "Git author: E1jeong <won9964@gmail.com>",
      "Notion SmartSet Renewal 설계 사양서 및 화면 명세",
      "로컬 4모듈 코드베이스"
    ],
    confidence: "git",
    background:
      "기존 Java 기반 현장 운영 앱(SmartSet)의 구조적 한계(XML UI, 단일 모듈, 직접 DB 접근)를 극복하고, 주요 현장 업무 흐름(설치·AS·검침·사진·지도)을 유지하면서 최신 아키텍처로 전환하기 위해 진행된 전면 리뉴얼 프로젝트",
    problem:
      "수천 줄 단위의 액티비티 결합도를 해체하고, 서버의 SQLite 데이터를 Room 엔티티로 이관하면서 기존 현장 업무 흐름을 유지해야 하는 과제 존재",
    actions: [
      "app / presentation / domain / data 4개 모듈 분할 및 계층별 의존성 규칙 수립",
      "Orbit MVI 상태 관리 도입으로 화면 상태(State)와 비즈니스 UseCase 분리",
      "SqliteToRoomImporter의 설치·AS·AS코드 테이블별 트랜잭션 구현 (서버 정보 교체는 별도 처리)",
      "소스 기준 Compose Screen 13개, ViewModel 8개, domain UseCase 인터페이스 26개, Room DAO 6개 구성",
      "CameraX QR 스캔, Google Maps Compose 마커 클러스터링, 사진 압축 업로드 통합"
    ],
    result:
      "기존 주요 현장 업무 흐름을 유지하면서 최신 Android 아키텍처로 전환하여, 향후 기능 추가와 유지보수가 용이한 기반 확립",
    metrics: [
      {
        label: "구현 규모",
        value: "13개 화면",
        description: "소스 기준 ViewModel 8개 / domain UseCase 인터페이스 26개 / Room DAO 6개"
      },
      {
        label: "아키텍처 전환",
        value: "핵심 구조 구현",
        description: "Java/XML ➔ Kotlin Compose Multi-module"
      },
      {
        label: "현장 검증",
        value: "병행 비교",
        description: "기존 앱과 함께 검증\n전면 전환 전 퇴사"
      }
    ],
    features: [
      {
        title: "레거시 앱의 Kotlin·Compose 전환 및 4모듈 아키텍처 설계",
        description:
          "레거시 모놀리식 단일 모듈을 app, presentation, domain, data 4개 모듈로 분할하고 단방향 상태 흐름 구축",
        challenge:
          "기존 Java 레거시 코드는 UI와 DB 호출, 비즈니스 로직이 액티비티 하나에 수천 줄로 얽혀 있어 작은 수정에도 사이드 이펙트가 빈번히 발생하는 구조적 문제 존재",
        solution:
          "계층별 단방향 의존성 규칙을 강제하고, Orbit MVI와 Hilt 의존성 주입을 적용하여 화면 상태(State)와 비즈니스 UseCase를 명확히 격리",
        outcome:
          "Compose Screen 13개, ViewModel 8개, domain UseCase 인터페이스 26개로 책임을 분리하여 기능 추가 및 유지보수 기반 마련"
      },
      {
        title: "서버 SQLite 데이터를 Room으로 이관하는 테이블별 트랜잭션",
        description:
          "원격 서버에서 다운로드된 레거시 SQLite 파일 데이터를 앱 내부 최신 Room 엔티티로 안전하게 이관",
        challenge:
          "현장 단말 맵핑 데이터가 담긴 원시 SQLite 파일을 직접 다루는 과정에서 테이블 스키마 불일치 및 대량 데이터 변환 시 트랜잭션 롤백 문제 발생",
        solution:
          "SqliteToRoomImporter에서 설치·AS·AS코드 테이블 교체에 각각 Room 트랜잭션을 적용하고 엔티티를 매핑\n서버 정보 삭제·삽입은 해당 트랜잭션 밖에서 별도 처리",
        outcome:
          "테이블별 교체 경계를 명시한 Room 이관 파이프라인 구현\n전체 import의 원자성을 보장하지 않음\n기존 앱과 병행 현장 검증 후 전면 전환 전 퇴사"
      },
      {
        title: "Google Maps Compose 및 CameraX 결합 현장 작업 흐름 통합",
        description:
          "계량기 설치 위치 지도 클러스터링, QR 바코드 인식, 현장 설치 사진 압축 업로드 기능 통합",
        challenge:
          "지리 정보 표시와 대용량 사진 촬영/업로드 작업이 빈번한 현장 환경에서 메모리 누수(OOM) 및 백그라운드 작업 중단 위험 존재",
        solution:
          "Google Maps Compose와 Marker 클러스터링을 적용하고, CameraX 촬영 이미지를 비동기로 압축하여 업로드 큐에서 순차 처리하도록 최적화",
        outcome:
          "설치 위치 확인, 단말 QR 인식, 완공 사진 등록을 하나의 앱 흐름으로 통합하고 기존 앱과 병행 현장 검증 진행"
      }
    ],
    learning:
      "아키텍처 리뉴얼에서는 기술 교체 자체보다 기존 현장 업무 흐름을 유지하면서 책임 경계를 다시 설계하는 일이 중요함을 확인",
    publicDisclosure: "소스 코드와 4모듈 의존성·MVI 상태 흐름 다이어그램을 공개할 수 있습니다"
  },
  {
    id: "smartset",
    name: "SmartSet",
    summary:
      "NFC 기반 계량기 설치·검침·설정·AS를 지원하는 Java Android 현장 운영 앱 단독 유지보수 및 현대화",
    period: "2023.01 - 2025.04",
    type: "Android Mobile",
    role: "인수인계 후 단독 유지보수, 개발환경 현대화, 현장 데이터 정합성 개선",
    contribution: "인수인계 이후 100% 단독 전담",
    stack: [
      "Java",
      "Android SDK",
      "NFC (NTAG I2C)",
      "SQLite",
      "GPS",
      "Excel Processing",
      "단말 프로토콜"
    ],
    highlights: [
      "Eclipse 기반 프로젝트를 Android Studio/Gradle 환경으로 이전 및 targetSdk 34 대응",
      "서버 응답 기반 AS 작업 순서 강제 제어로 현장 단말 재고 데이터 혼재 방지",
      "NFC 프로토콜 클래스 50+ 개 확장 및 현장 Excel 로그 / 사진 촬영 경로 개선"
    ],
    outcomes: [
      "50~100명 규모의 전국 현장 설치/운영 인력이 사용하는 앱의 운영 지속성 확보",
      "OS 버전 업그레이드와 단말 프로토콜 변경에 대응할 수 있는 운영 기반 마련"
    ],
    evidence: [
      "Git remote: https://github.com/E1jeong/smartset.git",
      "Git author: E1jeong <won9964@gmail.com>",
      "asis_src vs SmartSet 폴더 분리 구조"
    ],
    confidence: "git",
    background:
      "NFC 기반 단말 설치, 검침, 설정, AS를 지원하는 Java Android 현장 운영 앱을 인수인계받아 단독 운영 및 고도화 전담",
    problem:
      "구식 Eclipse 개발 환경, 지속적으로 증가하는 신규 단말 프로토콜, Android 12+ 권한 정책 변화, 작업자의 임의 작업 순서로 인한 AS 데이터 혼재 문제 복합 존재",
    actions: [
      "Eclipse ➔ Android Studio / Gradle migration 및 compileSdk/targetSdk 34 대응",
      "서버 인증 응답 기반 AS 작업 순서 강제 제어 로직 구현",
      "NTAG I2C NFC 프로토콜 송신 30+개 / 수신 20+개 패킷 클래스 확장",
      "현장 사진 갤러리 및 Excel 로그 데이터 정합성 개선"
    ],
    result:
      "레거시 현장 앱의 개발·운영 기반을 현대화하고, AS 작업 순서 제어로 단말 교체·반납·재설치 과정의 데이터 혼재 감소",
    metrics: [
      {
        label: "운영 사용자 규모",
        value: "50~100명",
        description: "전국 현장 설치 및 AS 전담 인력 실운영"
      },
      {
        label: "타깃 SDK 현대화",
        value: "targetSdk 34",
        description: "Eclipse ➔ Android Studio / Gradle 전환"
      },
      {
        label: "NFC 프로토콜 확장",
        value: "50+ 개",
        description: "송신 30+개 / 수신 20+개 패킷 클래스"
      }
    ],
    features: [
      {
        title: "AS 작업 순서 제어로 현장 재고 데이터 정합성 개선",
        description:
          "현장 작업자의 임의 작업 순서로 인해 발생하던 단말 교체·반납·재설치 데이터 혼재 방지",
        challenge:
          "현장 작업자의 임의 절차 건너뛰기로 인해 단말 교체·반납 누락 및 서버 재고 데이터와 현장 실물 단말 정보 불일치 문제 발생",
        solution:
          "서버 인증 응답 상태에 따라 다음 단계 UI 컴포넌트 활성화(UI enable)를 통제하고, 필수 절차 완료 시에만 다음 단계로 진입하도록 작업 플로우 앱 단에서 강제",
        outcome:
          "단말 교체·반납·재설치 순서를 앱에서 제어해 데이터 혼재를 줄이고 전산 재고 정합성 개선"
      },
      {
        title: "Eclipse 기반 레거시 프로젝트의 Android Studio/Gradle 이전 및 targetSdk 34 대응",
        description:
          "빌드조차 어려웠던 구식 Eclipse 구조를 최신 Gradle 빌드 시스템으로 마이그레이션하고 최신 OS 권한 정책 적용",
        challenge:
          "구식 빌드 환경으로 인해 최신 라이브러리 도입이 불가능했고, Android 12+ 권한 정책 미대응으로 현장 기기에서 블루투스/카메라 기능이 차단될 위험 존재",
        solution:
          "프로젝트를 asis_src와 신규 SmartSet 모듈로 명확히 분리하여 Gradle 빌드를 재구성하고, Runtime Permission 처리 레이어를 도입하여 targetSdk 34 대응 완료",
        outcome:
          "최신 Android OS 디바이스에서도 현장 앱이 정상 구동되도록 장기 운영 지속성 확보"
      }
    ],
    learning:
      "운영 환경의 소프트웨어는 순수 코드 품질뿐만 아니라, 현장 작업자의 실수나 비정형 작업 순서를 시스템이 얼마나 효과적으로 가이드하고 방어하는지가 전체 신뢰도를 결정함을 체득",
    publicDisclosure:
      "인수인계 전후 코드 경계를 구분해 본인 구현 범위와 전체 소스를 공개할 수 있습니다"
  },
  {
    id: "anti-spoofing-ai",
    name: "UBio-Vision (안티스푸핑 AI)",
    summary:
      "출입통제 단말기의 위조 얼굴을 판별하는 자체 딥러닝 모델(UBio-Vision)을 상용 SDK 없이 개발하고, NXP i.MX 8M Plus NPU 실기기 검증 앱까지 구축한 On-Device AI 프로젝트",
    period: "2026.06 - 현재",
    type: "On-Device AI",
    role: "딥러닝 모델 설계·학습·INT8 양자화 & Android 실시간 추론 앱 1인 단독 개발",
    contribution: "100% 단독 수행 (개념 공유 외 전 파이프라인 단독 설계 및 구현)",
    stack: [
      "Python",
      "PyTorch",
      "Keras/TensorFlow",
      "TFLite",
      "INT8 PTQ",
      "Android SDK",
      "Java",
      "NNAPI",
      "NXP i.MX 8M Plus NPU",
      "CameraX",
      "JUnit4"
    ],
    highlights: [
      "6클래스 단일 IR 독립 Test 기준 확보 후 고정 split 기반 12클래스·덴탈 마스크 처리로 확장",
      "Keras MobileNetV2 INT8 양자화 후 2026-07-23 단일 IR Validation split에서 Float32와 동일 ACER 확인",
      "기존 6클래스 고정 IR 모델을 NXP i.MX 8M Plus NPU(NNAPI)에서 invoke P50 10–11ms로 구동하고, 별도의 RGB/IR 듀얼 카메라 추론 파이프라인 구축",
      "추론을 Vision SDK/AAR로 분리\n2026-09-18 기록상 vision 31개·app 88개 JVM 테스트 통과, 최신 실기기 회귀 대기"
    ],
    outcomes: [
      "6클래스 단일 IR Keras 모델: 2026-07-14 독립 Test ACER 0.60%, 07-23 Validation ACER 0.05%\n현재 12클래스는 새 통과 정책 재평가·독립 Test 대기",
      "과거 6클래스 고정 IR NPU invoke P50 10–11ms와 2026-07-31 앱 End-to-End P50 47–49ms 검증 (최신 SDK 성능과 별개)"
    ],
    evidence: [
      "Career-Hub Evidence: UBio-Vision (In-House Anti-Spoofing Deep Learning Model)",
      "GitHub access-liveness-model (Python 학습 및 양자화 파이프라인 코드)",
      "Career-Hub android-anti-spoofing-lab Evidence: Vision SDK/AAR 및 2026-09-18 회사 테스트 기록 (vision 31개 + app 88개)",
      "실기기 NXP i.MX 8M Plus NPU 회귀 테스트 로그 (2026-07-28)"
    ],
    confidence: "git",
    background:
      "얼굴인식 출입통제기에서 인쇄물, 스마트폰 화면 재생, 3D 실리콘 마스크 등 다양한 위조 얼굴 공격 방어 목적\n외부 상용 SDK 의존 없이 자체 딥러닝 모델을 구축해야 했으며, 최종 배포처가 연산 자원이 극도로 제한된 임베디드 NPU(NXP i.MX 8M Plus) 환경이라는 하드웨어 제약 존재",
    problem:
      "정확도 손실을 최소화하며 모델을 INT8로 양자화해 임베디드 NPU에 배포하고, 모델 invoke와 앱 End-to-End 지연을 구분해 측정 신뢰성을 확보해야 하는 과제 존재",
    actions: [
      "과거 6클래스 데이터셋(Train 12,000 / Val 1,200 / Test 1,198)과 Subject Group K-Fold 실험 후, 현재 12클래스 단일 IR 고정 split 및 인물·페어 누수 검사로 전환",
      "MobileNetV2 기반 양자화 친화적 구조 개조 및 Keras TFLite INT8 PTQ 파이프라인 수립",
      "Android 타깃 보드에서 RGB/IR 150ms 타임스탬프 허용 오차 기반 프레임 페어링 및 3-Executor 스레드 격리",
      "초기 17개 JVM 테스트로 확률 경계값·BMP 바이트 정합성을 검증하고, Vision SDK의 전처리·세션 판정과 앱 회귀 테스트로 범위 확장",
      "모델 로딩·전처리·NNAPI 추론·IR 400ms 안정화·3프레임 평균 판정을 재사용 가능한 Vision SDK/AAR로 분리",
      "NPU BPCER 폭등 현상의 원인을 역추적하여 평가 스크립트 정규화 버그 규명 및 NNAPI 캐싱 장애 해결"
    ],
    result:
      "6클래스 단일 IR Keras/MobileNetV2에서 Test ACER 0.60%(2026-07-14), Validation ACER 0.05%(07-23) 기록\n현재 12클래스는 live·덴탈 2종 통과 정책(09-16)에 따른 재평가와 독립 Test 검증 대기\n09-18 Vision SDK/AAR는 회사 기록상 컴파일·테스트·lint·빌드를 통과했으며, 최신 API의 Lab 실기기 회귀·NPro 연동·캘리브레이션 일치는 확인 대기 중",
    metrics: [
      {
        label: "단일 IR ACER",
        value: "0.05%",
        description: "2026-07-23, 6클래스 단일 IR Validation (현재 12클래스와 구분)"
      },
      {
        label: "독립 Test ACER",
        value: "0.60%",
        description: "2026-07-14, 6클래스 단일 IR Keras/MobileNetV2 INT8 고정 Test split"
      },
      {
        label: "6클래스 NPU 모델 invoke",
        value: "P50 10–11ms",
        description: "과거 6클래스 고정 IR 모델, NXP NPU(NNAPI)\n최신 SDK 측정 아님"
      },
      {
        label: "학습 데이터셋 규모",
        value: "14,398장",
        description: "과거 6클래스 기준: Train 12,000 / Val 1,200 / Test 1,198"
      }
    ],
    pipelineSteps: [
      {
        step: "01",
        title: "Dataset & Leakage Prevention",
        desc: "과거 6클래스 Group K-Fold 실험에서 현재 12클래스 단일 IR 고정 split·인물/페어 누수 검사로 전환"
      },
      {
        step: "02",
        title: "Model Architecture & Tuning",
        desc: "MobileNetV2 단일 IR 모델과 학습용 보조 head 구성, Conv1 sum 가중치 전이로 활성화 스케일 보존"
      },
      {
        step: "03",
        title: "INT8 PTQ & NPU Export",
        desc: "학습용 보조 head 제거 후 TFLite INT8 배포\n과거 07-23 단일 IR 검증 split의 ACER 동등성을 별도 기록"
      },
      {
        step: "04",
        title: "Real-time Dual Stream Pipeline",
        desc: "Android 타깃 단말에서 RGB/IR 150ms 프레임 페어링 및 3-Executor 스레드 분리(카메라/검출/추론)"
      },
      {
        step: "05",
        title: "Vision SDK & Regression Tests",
        desc: "추론·세션 판정을 SDK/AAR로 분리\n09-18 기록상 vision 31개·app 88개 테스트 통과\n최신 Lab/NPro 실기기 검증 대기"
      }
    ],
    repositories: [
      {
        name: "access-liveness-model",
        role: "딥러닝 모델 학습, 데이터셋 설계, INT8 양자화 및 NPU 배포 파이프라인 (Python)",
        disclosure: "전체 공개 (코드 전체 및 수치 지표 공개)"
      },
      {
        name: "android-anti-spoofing-lab",
        role: "Android 듀얼 카메라 평가 앱, Vision SDK/AAR 및 추론·세션·앱 회귀 테스트 (Java)",
        disclosure: "마스킹 후 부분 공개 (단말 상용 SDK/기존 코드 마스킹, 본인 구현부 발췌)"
      }
    ],
    features: [
      {
        title: "자체 안티스푸핑 모델의 INT8 양자화 및 NPU 배포",
        description:
          "임베디드 NPU 하드웨어 구동을 위해 32비트 부동소수점 모델을 8비트 정수형으로 양자화(Post-Training Quantization)",
        challenge:
          "초기 PyTorch ai_edge_quantizer 경로의 Float32 덮어쓰기 오류를 바로잡자 실제 INT8 ACER 50% 확인",
        solution:
          "초기 PyTorch/MobileNetV3에서 Hardswish를 ReLU로 교체하고 SE 블록을 비활성화하는 구조 개조 실험 수행\nKeras/MobileNetV2 기반 TFLite INT8 및 NPU-friendly export 경로로 전환",
        outcome:
          "2026-07-23 6클래스 단일 IR Validation split에서 Float32·INT8·NPU-friendly 모두 ACER 0.05% 기록\n다중 클래스 정확도나 모든 모델의 양자화 성능 동등성을 뜻하지 않음\n별도로 진행한 2026-08-14 Sony MCT 실험은 Validation ACER 12.32%로 배포 목표 미달"
      },
      {
        title: "Android 실시간 RGB/IR 듀얼 카메라 추론 파이프라인 및 스레드 격리",
        description:
          "하드웨어 단말에서 실시간으로 유입되는 RGB 및 IR 카메라 스트림을 동기화하고 온디바이스 NPU 추론을 수행하는 Android 애플리케이션 구현",
        challenge:
          "초당 30프레임의 듀얼 카메라 콜백에서 YUV→Bitmap 변환과 NNAPI 추론이 메인/카메라 스레드를 점유하여 프레임 드랍 및 UI 프리징 발생",
        solution:
          "카메라 수신, 전처리/디텍션, NPU 추론을 3개의 Single-thread Executor로 분리하고, 150ms 타임스탬프 허용 오차(MAX_PAIR_DELTA_NS) 기반 프레임 페어링 큐 설계",
        outcome:
          "부하 발생 시 프레임을 의도적으로 드롭해 카메라 콜백과 추론 큐 적체를 차단하고, RGB/IR 페어링과 NPU 추론 분리 완료 (기존 6클래스 고정 IR 모델 invoke P50 10–11ms 달성)"
      },
      {
        title: "재사용 가능한 Vision SDK/AAR와 제품 세션 계약",
        description:
          "호스트 카메라·검출·캘리브레이션과 모델 로딩·전처리·추론·판정 책임 분리",
        challenge:
          "검증 앱의 프레임별 진단과 제품의 최종 인증 판정을 구분하고, 호스트마다 다른 전처리 가정을 줄여야 하는 과제 존재",
        solution:
          "VisionSdk.loadAll과 AntiSpoofingEngine으로 SDK 진입점을 구성하고, 제품 세션은 IR 조명 요청 후 400ms 안정화와 3프레임 평균을 거쳐 live/spoof/error 결과 반환",
        outcome:
          "이전 SDK의 제품 흐름은 2026-09-17 사용자 실기기 확인\n09-18 API/AAR는 빌드 검증까지 완료했으며 최신 NPro 연동, Lab 회귀, 캘리브레이션 좌우 의미·바이트 순서 일치는 대기 중"
      },
      {
        title: "NPU 평가 스크립트 정규화 버그 규명 및 NNAPI 캐싱 실패 원인 분석",
        description:
          "하드웨어 가속기(NPU) 배포 과정에서 발생하는 비정상 지표와 런타임 드라이버 장애의 근본 원인(Root Cause) 추적 및 해결",
        challenge:
          "NPU-friendly 모델 평가 시 정상 얼굴을 공격으로 오인하는 BPCER이 30~60%로 폭등하고, 타깃 보드 NPU 드라이버에서 NNAPI 컴파일 캐싱 활성화 시 런타임 실패(ANEURALNETWORKS_OP_FAILED) 발생",
        solution:
          "지표 폭등 원인이 모델 결함이 아닌 평가 스크립트 입력 정규화 범위 불일치임을 역추적해 수식을 보정하고, VSI NPU 드라이버의 캐싱 오류 확인 후 캐시 비활성화 및 CPU 조용한 폴백(Silent fallback) 차단",
        outcome:
          "입력 정규화를 보정해 유효한 평가를 복원하고 NPU 준비 실패를 숨기지 않는 검증 경로 확보\n일부 과거 fold의 Float32 근접 결과를 전체 모델의 동등 성능으로 일반화하지 않음"
      },
      {
        title: "인물·페어 누수 검사와 IR 1채널 가중치 전이 최적화",
        description:
          "데이터셋 구축 시 인물 데이터 누수를 방지하고 단일 IR 센서 입력에 최적화된 합성곱 가중치 변환 설계",
        challenge:
          "동일 인물의 프레임이 Train과 Val/Test에 섞여 들어갈 경우 지표가 과도하게 낙관적으로 왜곡(Data Leakage)되고, 1채널 IR 이미지 주입 시 기존 3채널 사전학습 모델의 Conv1 활성화 스케일이 왜곡되는 문제 발생",
        solution:
          "과거 Subject Group K-Fold 실험 후 현재는 고정 train/validation/test split의 인물·페어 누수를 검사\nIR Conv1 가중치 전이를 'mean'에서 'sum'으로 변경하여 초기 활성화 스케일 왜곡 방지",
        outcome:
          "인물 누수를 차단한 기존 6클래스 검증에서 단일 IR Validation ACER 0.05% 달성 (현재 12클래스 파이프라인과 구분 관리)"
      },
      {
        title: "AI 활용 경계값 회귀 테스트와 Vision SDK 분리",
        description:
          "실제 하드웨어의 미세 확률 변동과 바이너리 파일 입출력의 정합성을 검증하는 단위 테스트 스위트 구축",
        challenge:
          "화면 표시 라이브니스 확률의 실시간 변동으로 육안 검증이 불가능한 경계값(Threshold) 판정과 커스텀 24-bit BMP 바이트 패딩 에러를 수동 테스트로 검출하기 어려운 한계 존재",
        solution:
          "초기에는 AI를 활용해 100회 캡처 스케줄, LIVE 79.9% Rejected vs 80.0% Allowed 판정 경계, 24-bit BMP 헤더·4바이트 row padding·바이트 오더를 검증하는 17개 JVM 테스트 구축\n이후 SDK 전처리·세션 상태와 앱 테스트로 확장",
        outcome:
          "초기 17개 테스트 이후 SDK·앱으로 범위 확장\n2026-09-18 회사 기록상 vision 31개·app 88개 JVM 테스트와 컴파일·release lint·AAR 빌드 통과\n최신 API의 Lab/NPro 실기기 회귀는 대기 중"
      }
    ],
    learning:
      "데이터 누수와 NPU의 조용한 CPU 폴백을 차단하자 가려져 있던 결함을 확인할 수 있었음\n좋은 수치보다 평가 조건과 실행 경로를 재현 가능하게 만드는 것이 우선임을 확인",
    publicDisclosure:
      "공식 프로젝트명 UBio-Vision의 Python 학습 파이프라인(access-liveness-model)은 완전 공개\nAndroid 검증 앱(android-anti-spoofing-lab)은 상용 SDK 및 단말 의존 코드 마스킹 후 본인 구현부(추론·세션·스레드·회귀 테스트) 중심으로 발췌 공개"
  }
] satisfies Project[]).sort(
  (left, right) => projectRank(left.id) - projectRank(right.id)
);

export const experiences: Experience[] = [
  {
    company: "(주)유니온바이오메트릭스",
    domain: "출입통제 단말 On-Device AI 모델 개발 & Android 애플리케이션",
    role: "Android Developer / 대리",
    period: "2025.04 - 현재",
    points: [
      "UBio-Vision: 자체 안티스푸핑 모델과 NPU 추론 구현\n6클래스 단일 IR Keras Test ACER 0.60%(2026-07-14), Validation 0.05%(07-23) 기록\n현재 12클래스는 새 통과 정책 재평가·독립 Test 대기",
      "UBio-N Face Pro: 일본 NEC 고객사향 단말 앱의 AIDL IPC, EAP-TLS 인증서 구성, JSON 파싱 방어, DB 암호화 전담 및 6차 릴리즈 납품 검수 통과",
      "Vision SDK/AAR로 추론·세션 판정을 분리하고 회귀 테스트 확장 (2026-09-18 회사 기록: vision 31개·app 88개 통과, 최신 실기기 연동 검증 대기)"
    ]
  },
  {
    company: "하이텍앤솔",
    domain: "수도 계량기 및 스마트 현장 단말 운영 솔루션",
    role: "Android Developer / 선임",
    period: "2021.04 - 2025.04",
    points: [
      "SmartSet Renewal: Java 레거시 앱을 Kotlin, Jetpack Compose, 4모듈 Clean Architecture, Orbit MVI 구조로 전면 리뉴얼 및 13개 화면 구현",
      "SmartSet: Eclipse 기반 프로젝트를 Android Studio/Gradle로 마이그레이션, targetSdk 34 대응 및 AS 작업 순서 강제 제어로 실물-전산 데이터 정합성 확보",
      "NFC(NTAG I2C) 단말 프로토콜 50여 개 클래스 확장 및 50~100명 규모 전국 현장 설치 인력 운영 지원"
    ]
  }
];
