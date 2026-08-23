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
  currentCompany: "유니온바이오메트릭스 재직 중",
  email: "won9964@gmail.com",
  summary:
    "AI 모델을 직접 설계하여 임베디드 NPU 하드웨어에 배포하고, 그 위의 Android 시스템과 아키텍처까지 책임지는 AI-Native Android 개발자입니다.",
  subSummary:
    "온디바이스 AI(Edge ML) · Android 시스템 및 하드웨어 연동 · AI 주도 단위 테스트 및 엔지니어링",
  contacts: [
    { label: "GitHub", href: "https://github.com/E1jeong" },
    { label: "Blog", href: "https://still-coding.tistory.com/" }
  ]
};

export const coreStrengths = [
  "온디바이스 AI (Edge ML 모델 학습, INT8 양자화, NPU 실기기 배포)",
  "하드웨어 및 시스템 연동 (AIDL IPC, NFC, 단말 프로토콜, EAP-TLS)",
  "AI 주도 엔지니어링 & 원인 분석 (17개 단위 테스트 잠금, 아키텍처 전환)"
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
    title: "AI-Native Engineering & Ops",
    items: [
      "AI-Driven Unit Testing (Boundary/Mock)",
      "Multi-Agent Orchestration (AGENTS.md)",
      "AI-Ops Tooling (Audit Checkers)",
      "Prompt & Workflow Engineering"
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
      "EAP-TLS Wi-Fi",
      "Wiegand"
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

export const projects: Project[] = [
  {
    id: "ubio-n-face-pro",
    name: "UBio-N Face Pro",
    summary:
      "일본 NEC 고객사 출입통제 플랫폼 요구사항을 Android 단말 앱에 통합한 시스템 앱 프로젝트",
    period: "2025.04 - 현재 (집중 개발 2025.07 - 2026.03)",
    type: "Android System App / Device Integration",
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
      "Wiegand",
      "EAP-TLS"
    ],
    highlights: [
      "AIDL IPC 기반 프로세스 간 통신 설계 및 QR/NFC/EAP-TLS 멀티 인증 시나리오 확장",
      "단말 관리 플랫폼 연동 중 JSON 정수형 초과로 인한 크래시를 BigDecimal 커스텀 어댑터로 해결",
      "FeliCa 대용량 스마트카드 오프라인 로컬 캐싱 최적화 및 Wiegand 비트 패리티 정합성 확보"
    ],
    outcomes: [
      "사내 수용평가(RQA) 이슈 121건 중 118건(97.5%)을 종결하고 NEC 고객사 검수 이슈 25건을 전건 해결했습니다.",
      "6차 릴리즈 완료 및 고객사 납품 검수를 통과하여 7차 기능 개발을 신뢰 기반으로 지속 수임했습니다."
    ],
    evidence: [
      "사내 RQA 이슈 트래커 종결 기록 (121건 중 118건 종결)",
      "일본 NEC 고객사 6차 릴리즈 수용평가 검수 통과 자료",
      "로컬 Gradle 멀티 모듈 소스 코드 구조"
    ],
    confidence: "code-and-notion",
    background:
      "일본 대형 솔루션 고객사(NEC 등)의 요구에 맞춰 출입통제 얼굴인식 단말의 외부 플랫폼(SFX/SIU) 연동을 확장하고, QR/NFC/EAP-TLS 등 고안전성 기업 환경용 다중 인증 수단을 기존 Android 단말기 소프트웨어 엔진에 이식하는 대규모 신제품 개발 및 안정화 프로젝트였습니다.",
    problem:
      "외부 플랫폼(SFX/SIU) 연동, 복수 인증 수단, 엔터프라이즈 Wi-Fi(EAP-TLS), 로컬 DB 보안, 대용량 오프라인 카드 매칭 요구가 동시에 제기되었으며, 기존 단말기 제품 구조를 유지하면서 안정적으로 통합해야 했습니다.",
    actions: [
      "SFX/SIU AIDL IPC 연동 흐름 정비 및 BindService 구조 설계",
      "WPA2-Enterprise(EAP-TLS) 사설 RADIUS 인증서 사전 상호 대조 검증 및 보안 강화",
      "BigDecimal 기반 SafeIntegerAdapter 주입으로 int 범위 초과 JSON 크래시 방지",
      "MediaPipe Tasks Vision 랜드마크 분석 기반 제스처 오인식 방지 2차 필터링 알고리즘 설계",
      "FeliCa IDm 스마트카드 메모리 Lookup 캐시 계층 도입 및 Wiegand 비트 패리티 동적 매칭"
    ],
    result:
      "고객사 요구 기능을 기존 제품 구조에 완벽히 통합하여 사내 RQA 97.5% 종결 및 NEC 고객사 25건 이슈 전건 해결을 달성하며 6차 릴리즈 검수를 통과했습니다.",
    metrics: [
      {
        label: "사내 RQA 이슈 종결",
        value: "97.5%",
        description: "121건 중 118건 종결 (2인 공동 담당)"
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
        title: "AIDL IPC 기반 외부 보안 제어 소프트웨어(SFX/SIU) 연동 인터페이스 정비",
        description:
          "Android 시스템 단말 앱과 타사 외부 보안 앱 간의 멀티 프로세스 통신(IPC) 경계를 설정하고, 단말 잠금 해정 및 이벤트 통지 흐름을 정밀 제어하는 핵심 통신 계층 개발입니다.",
        challenge:
          "비동기 다중 프로세스 환경에서 IPC 호출 시의 타이밍 불일치 및 예외 상황 분기 누락으로 인해 단말이 락 해정 통지를 누락하거나 일시적으로 IPC 커넥션 데드락(Deadlock)에 빠지는 안정성 위험이 존재했습니다.",
        solution:
          "AIDL 인터페이스 경계면의 예외 처리를 단말 제어 생명주기와 분리하고, 비동기 호출 시 데이터 전달 정합성을 높이도록 Thread-safe한 상태 처리 큐(Queue)와 재시도 로직을 설계 및 이식했습니다.",
        outcome:
          "수용평가(RQA) 단계에서 단말 제어 연동 테스트를 통과하여, 외부 프로세스 연동 시의 동작 신뢰성을 개선했습니다."
      },
      {
        title: "WPA2-Enterprise (EAP-TLS) 사설 RADIUS 환경 보안 암호화 인증 우회 취약점 해결",
        description:
          "고안전성 기업용 출입문 Wi-Fi 인프라 연결 시, 표준 TLS 암호화 핸드셰이크를 준수하고 인증서 정합성을 통제하여 중간자 공격(MITM) 및 보안 우회 가능성을 줄이는 통신 보안 강화 작업입니다.",
        challenge:
          "사설 RADIUS 서버가 구축된 특수한 고객망 환경에서 CA 인증서가 설치되지 않았음에도 Wi-Fi 접속이 비정상적으로 성공하거나, CA 인증서만 단독 임포트 시 기존 클라이언트 키쌍(Keypair)과의 불일치로 인한 시스템 에러가 발생했습니다.",
        solution:
          "인증서 임포트 모듈 진입점에서 CA 및 클라이언트 개인키의 유효성/일치 여부를 사전에 상호 대조 검증하는 정밀 로직을 설계하고, 사설 RADIUS 암호화 인증 실패 예외 조건을 통제하기 위해 Android KeyStore 프레임워크와의 연동 검증을 강화했습니다.",
        outcome:
          "사설 RADIUS 접속에서의 인증서 검증 우회 가능성을 점검하고 검증 로직을 강화하여 기업 네트워크 보안 요구사항에 대응했습니다."
      },
      {
        title: "단말 관리 플랫폼 Config JSON 파싱 예외 복구 및 런타임 안정성 개선",
        description:
          "원격 클라우드 서버로부터 단말 설정값(Configs)을 동기화할 때, 비표준 형식 또는 이상 데이터 유입에 대해 단말 구동 프로세스가 비정상 종료(Crash)되지 않도록 방어하는 유효성 검증 계층을 설계했습니다.",
        challenge:
          "서버가 보낸 특정 설정 필드가 표준 32비트 int 범위를 넘어서는 대형 정수를 가질 경우, Gson/Moshi 라이브러리가 파싱 중 NumberFormatException을 터뜨려 단말기 시스템 앱이 통째로 런타임 Crash되는 치명적인 필드 오류가 있었습니다.",
        solution:
          "파서 단에 정수형 초과 데이터 유입을 유연하게 소화하도록 BigDecimal을 활용한 커스텀 SafeIntegerAdapter를 작성해 파서에 주입하고, 설정값 파싱 완료 전후 비교 및 URL 값 유효성 정규식 검증 레이어를 도입했습니다.",
        outcome:
          "플랫폼 서버 장애나 비정상 데이터 유입 환경에서도 단말이 크래시 없이 안정적으로 구동되도록 런타임 안정성을 개선했습니다."
      },
      {
        title: "MediaPipe Tasks Vision 기반 랜드마크 분석 제스처(Gesture) 오인식 개선 알고리즘",
        description:
          "비접촉 근태 등록 및 기기 제어를 위해 단말 전면 카메라 입력에서 사용자 손동작(Gesture)을 실시간으로 감지하고 분류하는 온디바이스 AI 비전 알고리즘 보강입니다.",
        challenge:
          "MediaPipe 모델이 내놓는 단순 분류 결과만으로는 V자 포즈(Victory)와 검지 지목(PointUp) 손동작 간의 미세한 각도 차이를 오인식하여, 잘못된 근태 명령이 실행되는 감지 신뢰도 문제가 발생했습니다.",
        solution:
          "기본 분류 모델 결과에 더해, 실시간으로 검출된 손가락 관절 랜드마크(Landmarks) 좌표 상에서 각 손가락 끝(Tip)과 두 번째 관절 마디(Pip)의 높이 차이 및 굴곡도를 픽셀 변위 분석으로 수학적 2차 필터링 검증 단계를 설계했습니다.",
        outcome:
          "Victory와 PointUp의 판단 모호도를 해소하여 제스처 인식 정확도를 개선하였으며, 불필요한 근태 오입력 가능성을 줄였습니다."
      },
      {
        title: "FeliCa IDm 스마트카드 로컬 캐싱 및 대용량 오프라인 매칭 최적화",
        description:
          "Suica 등 일본 현지에서 널리 쓰이는 FeliCa 규격의 모바일 스마트카드를 단말 리더기가 인식했을 때, 로컬 데이터베이스를 기반으로 단말 자체에서 1대N 검증을 신속히 수행하는 하드웨어 리딩 최적화입니다.",
        challenge:
          "네트워크 단절 시에도 출입이 가능하도록 대용량 사용자 IDm 리스트를 단말 로컬 DB(SQLCipher)에 저장·매칭해야 했으나, 짧은 갱신 주기로 인해 플랫폼 동기화 시 로컬 I/O 병목 및 단말 UI 스레드 일시 정지(Freezing) 현상이 발생했습니다.",
        solution:
          "대규모 변경 사항을 데이터베이스에 반영할 때 Room/SQLite 벌크(Bulk) 트랜잭션 처리를 고도화하고, DB 직접 조회를 최소화하기 위해 메모리 단에 최적화된 Lookup 캐시 계층을 배치하여 카드리더 스레드와의 연동 효율을 높였습니다.",
        outcome:
          "인터넷이 차단된 오프라인 환경에서도 대용량 IDm 리스트를 신속하게 로컬 매칭하도록 개선하고, 플랫폼 동기화 중 발생하던 단말 오작동을 해소했습니다."
      },
      {
        title: "Wiegand 외부 입출력 제어 프로토콜의 패리티 비트(Parity Bit) 이기종 단말 정합성 확보",
        description:
          "인증 완료 시 외부 도어 컨트롤러 또는 하드웨어 컨트롤 장치로 Wiegand 신호를 송신하거나 리더로부터 카드 번호를 수신할 때, 비트 수준의 신호 정합성을 보장하는 임베디드 통신 최적화입니다.",
        challenge:
          "이기종 단말 모델(NPro와 XPro) 간에 Wiegand 비트 전송 규격이 달라, 타사 컨트롤러 연동 시 카드 ID의 이진 변환 값이 비트 밀림 등으로 깨져 출입문 제어가 무산되는 장애가 있었습니다.",
        solution:
          "WiegandComm 메서드 단에서 26bit, 32bit, 34bit 포맷 패킷을 분석해 홀수/짝수 패리티 비트 연산 로직을 동적으로 분기 적용하고 하드웨어 하위 비트 송수신 레이어의 통신 규격을 정밀 매칭했습니다.",
        outcome:
          "국내외 다양한 벤더사 출입 통제 컨트롤러 장비와의 물리 비트 호환성 테스트를 통과하여 현장 장비 호환 오류를 해소했습니다."
      }
    ],
    learning:
      "하드웨어 제어, 펌웨어, 외부 솔루션 및 원격 관리 플랫폼이 복잡하게 얽혀 24시간 중단 없이 구동되어야 하는 단말용 Android 시스템 환경에서는 입출력 값의 사소한 불일치가 전체 시스템 다운타임으로 이어질 수 있습니다. 이에 따라 통신 인터페이스 진입점부터 철저한 방어적 프로그래밍(Defensive Programming)과 모듈 간 역할 격리가 프로덕션 급 제품 안정성의 핵심임을 배웠습니다.",
    publicDisclosure:
      "보안성 및 계약 조건(NDA) 준수를 위해 전체 코드 구현부는 비공개하며, 사양 및 아키텍처 다이어그램 위주로 기술합니다."
  },
  {
    id: "anti-spoofing-ai",
    name: "자체 안티스푸핑(Liveness) AI 모델 & 실기기 검증 앱",
    summary:
      "상용 SDK 없이 출입통제 단말용 위조 얼굴 판별 딥러닝 모델을 자체 개발하고, NXP i.MX 8M Plus NPU 실기기 검증 앱까지 구축한 On-Device AI 프로젝트",
    period: "2026.06 - 현재",
    type: "On-Device AI / Edge ML",
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
      "RGB·IR 듀얼 입력 6클래스 분류 설계 및 subject 단위 Group K-Fold로 인물 데이터 누수 원천 차단",
      "Keras MobileNetV2 기반 INT8 PTQ 양자화로 Float32 대비 손실 없는 Near-Zero Loss 달성",
      "NXP i.MX 8M Plus NPU(NNAPI) 실기기에서 추론 속도 P50 10ms 확보 및 실시간 듀얼 카메라 추론 파이프라인 구축",
      "시각적으로 판별하기 어려운 경계값(79.9% vs 80.0%)과 BMP 헤더/바이트 순서를 검증하는 17개 JVM 단위 테스트 구축"
    ],
    outcomes: [
      "독립 Test Split ACER 0.60%, 최신 단일 IR 모델 ACER 0.05% 달성 (보안 목표 2.0% 대비 대폭 초과 달성)",
      "NXP i.MX 8M Plus NPU 하드웨어에서 실시간 온디바이스 라이브니스 추론(P50 10ms) 구동 검증 완료"
    ],
    evidence: [
      "GitHub access-liveness-model (Python 학습 및 양자화 파이프라인 코드)",
      "GitHub android-anti-spoofing-lab (Android 실시간 추론 앱 및 17개 단위 테스트)",
      "실기기 NXP i.MX 8M Plus NPU 회귀 테스트 로그 (2026-07-28)"
    ],
    confidence: "git",
    background:
      "얼굴인식 출입통제기에서 인쇄물, 스마트폰 화면 재생, 3D 실리콘 마스크 등 다양한 위조 얼굴 공격을 방어해야 했습니다. 외부 상용 SDK에 의존하지 않고 자체 딥러닝 모델을 구축해야 했으며, 최종 배포처가 연산 자원이 극도로 제한된 임베디드 NPU(NXP i.MX 8M Plus) 환경이라는 하드웨어 제약이 존재했습니다.",
    problem:
      "정확도 손실 없이 모델을 INT8 정수형으로 양자화하여 임베디드 NPU에 배포해야 했으며, 카메라 스트림 전처리와 NPU 추론 지연시간을 실시간(Real-time) 수준으로 유지하고, 미세한 확률 변동 속에서도 측정 신뢰성을 엄격히 확보해야 했습니다.",
    actions: [
      "RGB/IR 듀얼 입력 6클래스 분류 데이터셋(14,400장) 구축 및 Subject 단위 Group K-Fold 적용",
      "MobileNetV2 기반 양자화 친화적 구조 개조 및 Keras TFLite INT8 PTQ 파이프라인 수립",
      "Android 타깃 보드에서 RGB/IR 150ms 타임스탬프 허용 오차 기반 프레임 페어링 및 3-Executor 스레드 격리",
      "AI를 활용한 17개 JVM 단위 테스트로 확률 판정 경계값(79.9% vs 80.0%) 및 24-bit BMP 바이트 정합성 잠금",
      "NPU BPCER 폭등 현상의 원인을 역추적하여 평가 스크립트 정규화 버그 규명 및 NNAPI 캐싱 장애 해결"
    ],
    result:
      "보안 목표치(2.0%)를 압도하는 ACER 0.05%(단일 IR) 및 0.60%(Test split)를 달성하고, Float32 대비 정확도 손실 없는 INT8 양자화 모델을 실물 NPU 하드웨어에서 P50 10ms 속도로 실시간 구동하는 데 성공했습니다.",
    metrics: [
      {
        label: "단일 IR ACER",
        value: "0.05%",
        description: "최신 IR 모델 검증 오차율 (보안 목표 2.0% 대비)"
      },
      {
        label: "독립 Test ACER",
        value: "0.60%",
        description: "INT8 양자화 모델 고정 Test Split 평가 결과"
      },
      {
        label: "실기기 NPU 추론 지연",
        value: "P50 10ms",
        description: "NXP i.MX 8M Plus NPU(NNAPI) 실시간 추론"
      },
      {
        label: "학습 데이터셋 규모",
        value: "14,400장",
        description: "Train 12,000 / Val 1,200 / Test 1,198 (6개 클래스)"
      }
    ],
    pipelineSteps: [
      {
        step: "01",
        title: "Dataset & Leakage Prevention",
        desc: "RGB/IR 6클래스 14,400장 데이터셋 구축, Subject 단위 Group K-Fold로 인물 간 데이터 누수 원천 차단"
      },
      {
        step: "02",
        title: "Model Architecture & Tuning",
        desc: "MobileNetV2 기반 경량 모델 설계, IR 1채널 Conv1 가중치 전이(sum 모드) 적용으로 활성화 왜곡 방지"
      },
      {
        step: "03",
        title: "INT8 PTQ & NPU Export",
        desc: "TFLite INT8 양자화 적용, Hardswish→ReLU 개조 및 SE 비활성화로 NPU 최적화 손실 최소화 (Near-Zero Loss)"
      },
      {
        step: "04",
        title: "Real-time Dual Stream Pipeline",
        desc: "Android 타깃 단말에서 RGB/IR 150ms 프레임 페어링 및 3-Executor 스레드 분리(카메라/검출/추론)"
      },
      {
        step: "05",
        title: "AI-Driven Unit & Boundary Tests",
        desc: "AI를 활용한 17개 JVM 단위 테스트로 확률 경계값(79.9% vs 80.0%) 및 24-bit BMP 바이트 정합성 잠금"
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
        role: "Android 실시간 듀얼 카메라 추론, NPU 하드웨어 평가 앱 및 17개 단위 테스트 (Java)",
        disclosure: "마스킹 후 부분 공개 (단말 상용 SDK/기존 코드 마스킹, 본인 구현부 발췌)"
      }
    ],
    features: [
      {
        title: "Subject 단위 Group K-Fold 및 IR 1채널 가중치 전이 최적화",
        description:
          "데이터셋 구축 시 인물 데이터 누수를 방지하고 단일 IR 센서 입력에 최적화된 합성곱 가중치 변환 설계",
        challenge:
          "동일 인물의 프레임이 Train과 Val/Test에 섞여 들어갈 경우 지표가 과도하게 낙관적으로 왜곡(Data Leakage)되고, 1채널 IR 이미지 주입 시 기존 3채널 사전학습 모델의 Conv1 활성화 스케일이 왜곡되는 문제가 발생했습니다.",
        solution:
          "물리적 피실험자 매핑 기반 Subject Group K-Fold를 강제 적용해 진짜 성능을 검증하고, Conv1 가중치 전이 모드를 'mean'에서 'sum'으로 변경하여 초기 활성화 스케일 왜곡을 방지했습니다.",
        outcome:
          "인물 누수를 완벽 차단한 상태에서 최신 단일 IR 모델 ACER 0.05%를 달성하여 보안 기준치(2.0%)를 크게 상회하는 정확도를 확보했습니다."
      },
      {
        title: "Keras MobileNetV2 기반 INT8 PTQ 양자화 및 Near-Zero Loss 달성",
        description:
          "임베디드 NPU 하드웨어 구동을 위해 32비트 부동소수점 모델을 8비트 정수형으로 양자화(Post-Training Quantization)",
        challenge:
          "초기 PyTorch MobileNetV3 경로에서는 Hardswish 활성화 함수와 SE 블록으로 인해 양자화 시 활성화 분포가 무너져 ACER가 50%까지 폭락하는 구조적 한계가 확인되었습니다.",
        solution:
          "Hardswish를 ReLU로 교체하고 SE 블록을 비활성화하는 구조 개조를 거친 후, Keras/MobileNetV2 기반 TFLite INT8 및 NPU-friendly export 경로로 피벗(Pivot)을 단행했습니다.",
        outcome:
          "Float32 대비 정확도 손실이 거의 없는(Near-Zero Loss) INT8 양자화 모델을 성공적으로 도출했습니다."
      },
      {
        title: "Android 실시간 RGB/IR 듀얼 카메라 추론 파이프라인 및 스레드 격리",
        description:
          "하드웨어 단말에서 실시간으로 유입되는 RGB 및 IR 카메라 스트림을 동기화하고 온디바이스 NPU 추론을 수행하는 Android 시스템 앱 구현",
        challenge:
          "초당 30프레임의 듀얼 카메라 콜백에서 YUV→Bitmap 변환과 NNAPI 추론이 메인/카메라 스레드를 점유하여 프레임 드랍 및 UI 프리징이 발생했습니다.",
        solution:
          "카메라 수신, 전처리/디텍션, NPU 추론의 책임을 3개의 독립적인 Single-thread Executor로 완전 분리하고, 150ms 타임스탬프 허용 오차(MAX_PAIR_DELTA_NS) 기반 프레임 페어링 큐를 설계했습니다.",
        outcome:
          "카메라 프레임 누락 없이 실시간 듀얼 스트림을 안정적으로 동기화하며 NPU 실기기 추론(P50 10ms)을 달성했습니다."
      },
      {
        title: "AI 활용 17개 JVM 단위 테스트 및 경계값(Edge-case) 회귀 방지",
        description:
          "실제 하드웨어의 미세 확률 변동과 바이너리 파일 입출력의 정합성을 보장하는 단위 테스트 스위트 구축",
        challenge:
          "화면상 표시되는 라이브니스 확률이 실시간으로 변동하여 육안 검증이 불가능한 경계값(Threshold)과 커스텀 24-bit BMP 바이트 패딩 에러를 수동 테스트로 검출하기 어려웠습니다.",
        solution:
          "AI를 활용하여 100회 캡처 스케줄, LIVE 79.9% Rejected vs 80.0% Allowed 판정 경계, 24-bit BMP 헤더·4바이트 row padding·바이트 오더를 검증하는 17개 JVM 단위 테스트를 구축했습니다.",
        outcome:
          "코드 리팩토링 및 NPU 드라이버 업데이트 시에도 핵심 비즈니스 로직과 파일 입출력의 무결성을 100% 보장하는 회귀 테스트 환경을 확보했습니다."
      },
      {
        title: "NPU 평가 스크립트 정규화 버그 규명 및 NNAPI 캐싱 실패 원인 분석",
        description:
          "하드웨어 가속기(NPU) 배포 과정에서 발생하는 비정상 지표와 런타임 드라이버 장애의 근본 원인(Root Cause) 추적 및 해결",
        challenge:
          "NPU-friendly 모델 평가 시 위조를 진짜로 오인하는 BPCER이 30~60%로 폭등하고, 타깃 보드 NPU 드라이버에서 NNAPI 컴파일 캐싱 활성화 시 런타임 실패(ANEURALNETWORKS_OP_FAILED)가 발생했습니다.",
        solution:
          "지표 폭등의 원인이 모델 결함이 아니라 평가 스크립트의 입력 정규화 범위 미스매치임을 역추적하여 수식을 보정하고, VSI NPU 드라이버의 캐싱 버그를 확인하여 캐시 설정을 비활성화함과 동시에 CPU 조용한 폴백(Silent fallback)을 차단했습니다.",
        outcome:
          "성능 착시를 원천 차단하고 Float32와 동등한 정상 성능을 복원하여 실기기 하드웨어 신뢰성을 확보했습니다."
      }
    ],
    learning:
      "지표를 좋게 만드는 것과 모델을 견고하게 만드는 것은 다릅니다. 데이터 누수를 철저히 차단하고 NPU 실패 시의 조용한 폴백을 막았을 때 비로소 드러나는 결함들을 정면으로 마주하며 해결할 수 있었습니다. 엔지니어링의 본질은 눈앞의 수치를 꾸미는 것이 아니라 어떤 극한 환경에서도 신뢰할 수 있는 재현성을 확보하는 것임을 배웠습니다.",
    publicDisclosure:
      "Python 학습 파이프라인(access-liveness-model)은 완전 공개되며, Android 검증 앱(android-anti-spoofing-lab)은 상용 SDK 및 단말 의존 코드를 마스킹한 후 본인 구현부(파이프라인·스레드·17개 단위테스트)를 중심으로 발췌 공개합니다."
  },
  {
    id: "fisherlotto",
    name: "Fisher Lotto",
    summary:
      "Android 클라이언트부터 Next.js BFF 서버까지 직접 설계한 1인 풀스택 End-to-End 모바일 서비스",
    period: "2024.12 - 현재",
    type: "Full-Stack Mobile App + BFF Backend",
    role: "Android 클라이언트 및 API 백엔드 1인 단독 풀스택 개발",
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
      "CameraX/ML Kit 고속 QR 스캔, Google Play Billing 구독 결제, FCM 푸시 파이프라인 구축",
      "Next.js App Router BFF 서버에서 영수증 서버 검증 및 KFTC 오픈뱅킹 OAuth 2.0 연동"
    ],
    outcomes: [
      "공개 GitHub 코드로 증명 가능한 모바일 클라이언트와 서버리스 백엔드의 End-to-End 아키텍처 확보",
      "클라이언트에 민감 키를 일절 노출하지 않고 BFF로 안전하게 분리하는 보안 인증/결제 구조 완성"
    ],
    evidence: [
      "FisherLotto Android GitHub: https://github.com/E1jeong/FisherLotto",
      "lotto-sub-backend GitHub: https://github.com/E1jeong/lotto-sub-backend",
      "GitHub Actions CI/CD 파이프라인 및 Vercel 배포 내역"
    ],
    confidence: "git",
    background:
      "실무에서 즉시 도입하기 어려운 최신 Android 스택(Compose, Multi-module, MVI, Play Billing)과 클라우드 백엔드를 End-to-End로 직접 설계하고 실전 운영 역량을 검증하기 위해 기획한 1인 사이드 프로젝트입니다.",
    problem:
      "모바일 앱 내부의 복잡한 비즈니스 로직과 결제 영수증 검증, 푸시 알림 발송, OAuth 연동 같은 서버의 보안 책임을 명확히 분리해야 했습니다.",
    actions: [
      "app/presentation/domain/data 4모듈 설계 및 순수 Kotlin domain 모듈 분리",
      "Orbit MVI 상태 관리와 Hilt DI를 결합한 단방향 데이터 흐름 구축",
      "CameraX ImageAnalysis와 ML Kit를 활용한 0.1초 즉각 QR 당첨 대조 구현",
      "Next.js BFF 서버 구축 및 Google Cloud Pub/Sub Webhook 기반 영수증 검증 연동",
      "GitHub Actions를 통한 빌드/테스트 자동화 및 Vercel 서버리스 배포 파이프라인 구축"
    ],
    result:
      "Android 앱부터 BFF 서버, 인증, 결제, 푸시, CI/CD까지 전 과정을 직접 설계하여 공개 GitHub로 확인 가능한 고완성도 서비스 구조를 구축했습니다.",
    metrics: [
      {
        label: "모듈 아키텍처",
        value: "4-Module",
        description: "app / presentation / domain / data"
      },
      {
        label: "CI/CD 자동화",
        value: "100%",
        description: "GitHub Actions + Vercel Serverless"
      },
      {
        label: "공개 코드베이스",
        value: "100% Public",
        description: "GitHub 공개 저장소 2개 (App + Backend)"
      }
    ],
    features: [
      {
        title: "순수 Kotlin domain 모듈 기반 Multi-module Clean Architecture & Orbit MVI",
        description:
          "안드로이드 프레임워크 의존성이 없는 순수 Kotlin domain 모듈과 MVI 단방향 데이터 흐름 설계",
        challenge:
          "QR 스캔, 구독 결제, 오픈뱅킹, 번호 추첨 등 복잡한 비즈니스 로직이 단일 화면에 뒤엉켜 상태 충돌 및 테스트 격리가 어려웠습니다.",
        solution:
          "domain 모듈을 순수 Kotlin으로 격리하여 UseCase 인터페이스를 배치하고, Orbit MVI를 적용해 State(상태), SideEffect(1회성 이벤트), Intent(사용자 동작)를 단방향으로 통제했습니다.",
        outcome:
          "비즈니스 로직과 UI 컴포넌트의 결합도를 낮추고 모듈 단위 독립적 유지보수성을 확보했습니다."
      },
      {
        title: "Google Play Billing 7.0 구독 결제 및 Next.js BFF 서버 실시간 검증",
        description:
          "클라이언트에 민감 키를 노출하지 않고 BFF 서버를 통해 결제 영수증 위변조를 방지하는 결제 파이프라인",
        challenge:
          "클라이언트 단에서 직접 결제 결과를 신뢰할 경우 결제 우회(Tampering) 및 영수증 조작 보안 취약점이 발생했습니다.",
        solution:
          "Next.js App Router 기반 BFF 서버를 구축하고 Google Cloud Pub/Sub Webhook 및 Play Developer API를 연동하여 서버 사이드에서 실시간 구매 토큰 검증 및 구독 상태 갱신을 처리했습니다.",
        outcome:
          "클라이언트에 민감 키를 두지 않는 안전한 End-to-End 결제 검증 파이프라인을 구축했습니다."
      },
      {
        title: "CameraX + ML Kit 기반 고속 QR 코드 분석 및 당첨 자동 대조",
        description:
          "로또 용지의 QR 코드를 실시간 캡처하여 당첨 번호와 복수 회차 데이터를 자동 파싱하는 카메라 기능",
        challenge:
          "저조도 환경이나 각도 왜곡 시 QR 바코드 디코딩 실패율이 증가하고 카메라 프레임 분석 중 UI 렌더링 스레드가 버벅이는 현상이 있었습니다.",
        solution:
          "CameraX ImageAnalysis 유즈케이스와 Google ML Kit 바코드 스캐너를 결합하고, 백그라운드 Executor에서 실시간 URL 파싱 및 정규식 검증 엔진을 구동했습니다.",
        outcome:
          "카메라 뷰파인더 딜레이 없이 0.1초 내 즉각적인 QR 인식 및 당첨 결과 오버레이 표시를 구현했습니다."
      }
    ],
    learning:
      "모바일 서비스 개발에서는 클라이언트 기능 구현만큼이나 민감 키를 분리하고 서버와의 경계를 견고히 설계하는 것이 보안과 안정성의 핵심임을 배웠습니다.",
    publicDisclosure: "GitHub 공개 저장소를 통해 전체 소스 코드와 API 설계를 확인할 수 있습니다."
  },
  {
    id: "renew-smartset",
    name: "SmartSet Renewal",
    summary:
      "레거시 Java 현장 운영 앱을 Kotlin, Jetpack Compose, Multi-module Clean Architecture로 전면 리뉴얼한 프로젝트",
    period: "2024.07 - 2025.04",
    type: "Android Architecture Modernization",
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
      "SqliteToRoomImporter를 통한 레거시 DB 트랜잭션 이관 및 현장 작업 흐름 통합"
    ],
    outcomes: [
      "Java/XML 기반 레거시 앱을 모던 Android 기술 스택으로 전면 전환하여 유지보수성 및 확장성 극대화",
      "현장 설치팀·개발팀·영업팀에 APK를 배포하여 실제 운영 검증 완료"
    ],
    evidence: [
      "Git author: E1jeong <won9964@gmail.com>",
      "Notion SmartSet Renewal 설계 사양서 및 화면 명세",
      "로컬 4모듈 코드베이스"
    ],
    confidence: "git",
    background:
      "기존 Java 기반 현장 운영 앱(SmartSet)의 구조적 한계(XML UI, 단일 모듈, 직접 DB 접근)를 극복하고, 현장 업무 흐름(설치·AS·검침·사진·지도)을 완벽히 보존하면서 최신 아키텍처로 전환하기 위해 진행된 전면 리뉴얼 프로젝트였습니다.",
    problem:
      "수천 줄 단위의 액티비티 결합도를 해체하고, 서버에서 제공하는 원시 SQLite DB를 Room 엔티티로 무손실 이관하며, 현장 작업자의 기존 업무 플로우를 중단 없이 재현해야 했습니다.",
    actions: [
      "app / presentation / domain / data 4개 모듈 분할 및 계층별 의존성 규칙 수립",
      "Orbit MVI 상태 관리 도입으로 화면 상태(State)와 비즈니스 UseCase 분리",
      "SqliteToRoomImporter 트랜잭션 계층 구현으로 레거시 데이터 무결성 보장",
      "Compose Screen 13개, ViewModel 8개, UseCase 21개, Room DAO 6개 구현",
      "CameraX QR 스캔, Google Maps Compose 마커 클러스터링, 사진 압축 업로드 통합"
    ],
    result:
      "기존 현장 업무 흐름을 100% 보존하면서 최신 Android 아키텍처로 전면 전환을 완료하여, 향후 기능 추가와 유지보수가 용이한 기반을 확립했습니다.",
    metrics: [
      {
        label: "구현 규모",
        value: "13개 화면",
        description: "ViewModel 8개 / UseCase 21개 / Room DAO 6개"
      },
      {
        label: "아키텍처 전환",
        value: "100% 완료",
        description: "Java/XML ➔ Kotlin Compose Multi-module"
      },
      {
        label: "현장 배포",
        value: "APK 실운영 검증",
        description: "설치팀/개발팀/영업팀 실운영 배포 및 비교 검증"
      }
    ],
    features: [
      {
        title: "4모듈 Clean Architecture 및 Orbit MVI 기반 상태·이벤트 분리",
        description:
          "레거시 모놀리식 단일 모듈을 app, presentation, domain, data 4개 모듈로 분할하고 단방향 상태 흐름 구축",
        challenge:
          "기존 Java 레거시 코드는 UI와 DB 호출, 비즈니스 로직이 액티비티 하나에 수천 줄로 얽혀 있어 작은 수정에도 사이드 이펙트가 빈번했습니다.",
        solution:
          "계층별 단방향 의존성 규칙을 강제하고, Orbit MVI와 Hilt 의존성 주입을 적용하여 화면 상태(State)와 비즈니스 UseCase를 명확히 격리했습니다.",
        outcome:
          "Compose Screen 13개, ViewModel 8개, UseCase 21개를 체계적으로 분리하여 기능 추가 및 유지보수성을 극대화했습니다."
      },
      {
        title: "서버 SQLite 파일에서 Room 데이터베이스로의 트랜잭션 마이그레이션",
        description:
          "원격 서버에서 다운로드된 레거시 SQLite 파일 데이터를 앱 내부 최신 Room 엔티티로 안전하게 이관",
        challenge:
          "현장 단말 맵핑 데이터가 담긴 원시 SQLite 파일을 직접 다루는 과정에서 테이블 스키마 불일치 및 대량 데이터 변환 시 트랜잭션 롤백 문제가 발생했습니다.",
        solution:
          "전용 SqliteToRoomImporter 계층을 설계하여 트랜잭션 단위로 데이터 유효성을 검증하고, Room DAO 엔티티 매퍼를 통해 안전하게 데이터를 주입했습니다.",
        outcome:
          "데이터 손실이나 스키마 충돌 없이 현장 검침/설치 데이터의 정합성을 100% 보장하는 마이그레이션 파이프라인을 완성했습니다."
      },
      {
        title: "Google Maps Compose 및 CameraX 결합 현장 작업 흐름 통합",
        description:
          "계량기 설치 위치 지도 클러스터링, QR 바코드 인식, 현장 설치 사진 압축 업로드 기능 통합",
        challenge:
          "지리 정보 표시와 대용량 사진 촬영/업로드 작업이 빈번한 현장 환경에서 메모리 누수(OOM) 및 백그라운드 작업 중단 문제가 있었습니다.",
        solution:
          "Google Maps Compose와 Marker 클러스터링을 적용하고, CameraX 촬영 이미지를 비동기로 압축하여 업로드 큐에서 순차 처리하도록 최적화했습니다.",
        outcome:
          "현장 기사들이 설치 위치 확인부터 단말 QR 인식, 완공 사진 등록까지 하나의 앱 흐름 안에서 중단 없이 수행할 수 있도록 완성했습니다."
      }
    ],
    learning:
      "아키텍처 리뉴얼의 본질은 단순히 최신 프레임워크를 적용하는 것이 아니라, 수년간 누적된 현장 작업자들의 실제 업무 흐름을 훼손하지 않으면서 코드의 응집도를 높이는 작업임을 깨달았습니다.",
    publicDisclosure: "공개 가능한 범위 내에서 소스 코드와 아키텍처 다이어그램을 설명합니다."
  },
  {
    id: "smartset",
    name: "SmartSet",
    summary:
      "NFC 기반 계량기 설치·검침·설정·AS를 지원하는 Java Android 현장 운영 앱 단독 유지보수 및 현대화",
    period: "2023.01 - 2025.04 (인수인계 2022)",
    type: "Android Field Operation App",
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
      "OS 버전 업그레이드와 단말 프로토콜 변경에 따른 현장 장애 발생 차단"
    ],
    evidence: [
      "Git remote: https://github.com/E1jeong/smartset.git",
      "Git author: E1jeong <won9964@gmail.com>",
      "asis_src vs SmartSet 폴더 분리 구조"
    ],
    confidence: "git",
    background:
      "NFC 기반 단말 설치, 검침, 설정, AS를 지원하는 Java Android 현장 운영 앱을 인수인계받아 단독으로 운영 및 고도화를 담당했습니다.",
    problem:
      "구식 Eclipse 개발 환경, 지속적으로 증가하는 신규 단말 프로토콜, Android 12+ 권한 정책 변화, 작업자의 임의 작업 순서로 인한 AS 데이터 혼재 문제가 복합적으로 존재했습니다.",
    actions: [
      "Eclipse ➔ Android Studio / Gradle migration 및 compileSdk/targetSdk 34 대응",
      "서버 인증 응답 기반 AS 작업 순서 강제 제어 로직 구현",
      "NTAG I2C NFC 프로토콜 송신 30+개 / 수신 20+개 패킷 클래스 확장",
      "현장 사진 갤러리 및 Excel 로그 데이터 정합성 개선"
    ],
    result:
      "레거시 현장 앱의 운영 기반을 안정적으로 현대화하고, AS 작업 순서 제어를 통해 현장 실물 단말과 전산 데이터의 불일치를 해소했습니다.",
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
        title: "Eclipse 기반 레거시 프로젝트의 Android Studio/Gradle 이전 및 targetSdk 34 대응",
        description:
          "빌드조차 어려웠던 구식 Eclipse 구조를 최신 Gradle 빌드 시스템으로 마이그레이션하고 최신 OS 권한 정책 적용",
        challenge:
          "구식 빌드 환경으로 인해 최신 라이브러리 도입이 불가능했고, Android 12+ 권한 정책 미대응으로 현장 기기에서 블루투스/카메라 기능이 차단될 위험이 있었습니다.",
        solution:
          "프로젝트를 asis_src와 신규 SmartSet 모듈로 명확히 분리하여 Gradle 빌드를 재구성하고, Runtime Permission 처리 레이어를 도입하여 targetSdk 34 대응을 완료했습니다.",
        outcome:
          "최신 안드로이드 OS 디바이스에서도 현장 앱이 정상 구동되도록 운영 지속성을 확보했습니다."
      },
      {
        title: "서버 응답 기반 AS 작업 순서 제어 및 현장 재고 데이터 정합성 보장",
        description:
          "현장 작업자의 임의 작업 순서로 인해 발생하던 단말 교체·반납·재설치 데이터 혼재 방지",
        challenge:
          "현장 기사들이 단말 교체와 반납 절차를 거치지 않고 신규 설치를 진행하여 서버 재고 데이터와 현장 실물 단말 정보가 불일치하는 문제가 있었습니다.",
        solution:
          "서버 인증 응답 상태에 따라 다음 단계 UI 컴포넌트 활성화(UI enable)를 통제하고, 필수 절차를 완료해야만 다음 작업으로 넘어가도록 작업 플로우를 앱 단에서 강제했습니다.",
        outcome:
          "단말 교체/반납/재설치 시의 데이터 혼재를 원천 방지하여 전산 재고 정합성을 크게 개선했습니다."
      }
    ],
    learning:
      "운영 환경의 소프트웨어는 코드 품질뿐만 아니라, 현장 작업자의 실수나 예외적인 작업 순서를 앱이 얼마나 효과적으로 가이드하고 방어해주는지가 시스템 전체의 신뢰도를 결정함을 배웠습니다.",
    publicDisclosure:
      "Git remote 및 author 기준으로 본인 기여 범위가 명확히 분리된 내용 중심으로 소스 코드를 공개 설명합니다."
  }
];

export const experiences: Experience[] = [
  {
    company: "유니온바이오메트릭스",
    domain: "출입통제 단말 On-Device AI 모델 개발 & Android 시스템 앱",
    role: "Android Developer / 대리",
    period: "2025.04 - 현재",
    points: [
      "상용 SDK 없이 출입통제 단말용 안티스푸핑 딥러닝 모델을 자체 개발하고 NXP i.MX 8M Plus NPU 실기기 추론(P50 10ms, ACER 0.05%) 배포를 완결했습니다.",
      "UBio-N Face Pro 일본 NEC 고객사향 시스템 앱의 AIDL IPC, EAP-TLS 네트워크 보안, JSON 파싱 방어, DB 암호화를 전담하여 6차 릴리즈 검수를 통과했습니다.",
      "AI를 활용한 17개 JVM 단위 테스트로 경계값 회귀를 차단하고, 사내 AI 활용 및 기술 보고서 작성을 지원했습니다."
    ]
  },
  {
    company: "하이텍앤솔",
    domain: "수도 계량기 및 스마트 현장 단말 운영 솔루션",
    role: "Android Developer / 선임",
    period: "2021.04 - 2025.04",
    points: [
      "SmartSet Renewal 프로젝트에서 Java 레거시 앱을 Kotlin, Jetpack Compose, 4모듈 Clean Architecture, Orbit MVI 구조로 전면 리뉴얼했습니다.",
      "SmartSet 현장 운영 앱을 Eclipse에서 Android Studio/Gradle로 마이그레이션하고 targetSdk 34 대응 및 AS 작업 순서 강제 제어를 구현했습니다.",
      "NFC(NTAG I2C) 단말 프로토콜 50여 개 클래스 확장 및 50~100명 규모의 현장 설치 인력 운영을 지원했습니다."
    ]
  },
  {
    company: "Personal & Open Source",
    domain: "End-to-End 모바일 서비스 & AI-Ops 개발 환경",
    role: "Full-Stack Developer",
    period: "2024.12 - 현재",
    points: [
      "Fisher Lotto Android 앱과 Next.js BFF 서버를 풀스택 1인 개발하여 Google Play Billing 구독 결제, FCM, CI/CD를 구축했습니다.",
      "Claude Code, Codex, Antigravity 3개 도구와 3개 머신 간의 규칙을 표준화하고 형상 드리프트를 감사하는 AI-Ops 인프라를 구축했습니다."
    ]
  }
];
