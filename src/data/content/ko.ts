import type { HomeContent } from './types';

const ko: HomeContent = {
  meta: {
    title: '브라이언 “Beege” 베리 | 엔지니어링 리더',
    description: 'Beege: 엔지니어링 리더, 빌더, 커뮤니티 오거나이저',
  },

  hero: {
    greeting: '안녕하세요, 저는',
    name: 'Beege입니다!',
    legalName: '재미없게 정식 이름으로 부르자면 브라이언 베리(Bryan Berry)입니다',
    tagline: '서울에서 활동하는 엔지니어링 리더, 빌더, 그리고 커뮤니티 오거나이저입니다.',
    availabilityHtml:
      '엔지니어링 리더십 포지션을 찾고 있습니다. <span class="whitespace-nowrap">F-2-7</span> 비자(2028년까지 유효)를 보유하고 있어 비자 스폰서십이 필요 없습니다.',
    ctaContact: '연락하기',
    ctaResume: '이력서',
    ctaWork: '작업 보기',
    photoAlt: 'Beege의 사진',
  },

  about: {
    paragraphs: [
      '저는 지난 16년 동안 소프트웨어를 만들어 온 소프트웨어 엔지니어이자 엔지니어링 리더이며, 그중 10년을 서울에서 보냈습니다. 라이엇 게임즈와 PUBG를 거쳐 루닛에 이르기까지 게임, 보험, AI, 의료 기술 분야에서 일했고, 루닛에서는 암 진단 AI를 위한 어노테이션 및 데이터 관리 도구를 만드는 팀을 이끌었습니다.',
      '의미 있는 것을 만들고, 실제로 제품을 출시하는 팀을 이끌고, 배우고 싶어 하는 사람들을 가르치는 일을 좋아합니다. 서울의 개발자들이 함께 성장할 수 있는 공간을 만들고자 CodeSeoul을 설립했으며, 현재 새로운 기회를 찾고 있습니다.',
      '조지아 공과대학교(Georgia Tech) 컴퓨테이셔널 미디어 전공. 한국에 사는 미국인. 영어는 원어민 수준이고, 한국어는 열심히 공부 중입니다.',
    ],
  },

  projects: {
    anvo: {
      title: 'Anvo',
      roles: ['공동창업자', 'CTO'],
      teamSize: '2명',
      description:
        '중국의 의료 영상 장비 기술자를 지원하는 웹 앱입니다. Qwen 같은 모델을 자체 인프라에서 구동하거나 Claude 같은 원격 모델을 사용할 수 있도록 설계했습니다. 에이전트 도구를 활용해 RAG와 웹 검색으로 수리 가이드 문서를 찾아냅니다. 또한 병원 장비와 서비스 오더를 다단계 수리 워크플로로 추적하는 의료기기 관리 플랫폼을 포함하며, 병원 측 승인 절차와 문서화된 서비스 이력으로 규제 준수를 지원합니다.',
      imageAlts: [
        "'The Intelligent Era of Medical Device Repair'라는 헤드라인이 있는 Anvo 랜딩 페이지",
        'Philips EPIQ 4 초음파 화면의 흰 점 문제를 단계별로 진단하는 Anvo 채팅',
        '7단계 중 4단계인 병원 승인 단계에서 병원 및 장비 정보를 보여주는 Anvo 수리 요청 화면',
      ],
    },
    arbor: {
      title: 'Arbor',
      roles: ['공동창업자', 'CTO'],
      teamSize: '3명',
      description:
        '리더가 회사 목표와 팀의 실제 업무 사이의 정렬 상태를 시각화하고, 병목과 리스크를 파악하며, 업무량을 관리할 수 있게 해 주는 SaaS 도구입니다. 프로젝트 관리 도구(Jira, Linear 등)와 연동해 계획된 업무가 전략 목표에서 벗어나는 지점을 드러내, 마이크로매니징 없이도 실질적인 가시성을 제공합니다. 팀이 이미 사용하는 도구 안에서 일할 수 있도록 양방향 동기화 전략으로 설계했습니다.',
      imageAlts: [
        "'The alignment layer your tools are missing.'라는 헤드라인과 전략-실행 계층 다이어그램이 있는 Arbor 랜딩 페이지",
        '우선순위와 누적 진행률을 보여주는 중첩 작업 카드가 있는 Arbor 계층형 트리 뷰',
        '멤버 관리와 API 키 설정을 보여주는 Arbor 팀 설정 페이지',
      ],
    },
    'lunit-dms': {
      title: '데이터 관리 시스템',
      company: '루닛',
      roles: ['프로덕트 매니저', '프로젝트 매니저'],
      teamSize: '6명',
      highlight: '운영 환경에서 300 TPS 지속 처리',
      description:
        'DICOM 메타데이터, 파일 참조, 임상 연구 데이터를 정리하는 중앙화 시스템으로, 어노테이션과 ML 학습을 위한 모든 데이터를 한곳에 모은 첫 번째 성공 사례입니다. 최초 시스템을 기획하고 프로덕트 매니지먼트를 이끌며 제조사 별칭(aliasing), 데이터 수집 프로젝트 추적, EU AI Act 재현성을 위한 버전 관리형 ML 데이터 분할 등의 기능을 제공했습니다. 중앙화된 데이터 적재(ingestion) 과정에서 데이터 품질 및 중복 문제도 발견해 해결했습니다.',
    },
    'lunit-pipeline': {
      title: '데이터 파이프라인 플랫폼',
      company: '루닛',
      roles: ['프로젝트 매니저'],
      teamSize: '데이터 엔지니어 6명',
      highlight: '추론 작업 하나를 2개월에서 24시간 이내로 단축',
      description:
        '의료 영상 데이터 적재, 어노테이션 데이터셋 준비, 사내 AI 모델로 일괄(bulk) 추론을 수행하는 대규모 병렬 파이프라인입니다. 최초 아이디어를 구상하고 Prefect로 개념 증명(PoC)을 만든 뒤 팀에 이관했습니다. 스팟 인스턴스와 오토스케일링 튜닝으로 수백 테라바이트 규모의 데이터를 일상적으로 처리했습니다.',
    },
    'lunit-oncology': {
      title: '종양학 어노테이션 도구',
      company: '루닛',
      roles: ['프로덕트 매니저', '프로젝트 매니저', '데브옵스 엔지니어', '엔지니어링 매니저'],
      teamSize: '7명',
      description:
        '종양 전문의가 암 진단 AI 학습용 병리 전체 슬라이드 이미지(WSI)에 라벨을 다는 사내 도구로, 고배율 확대가 가능한 WSI 위에서 조직 영역 칠하기, 포인트 지정, 세포 윤곽 그리기, 세포 내 구조 라벨링 등 다양한 어노테이션 모드를 지원합니다. 매니저 권한을 갖춘 외부 계약자 접근 기능으로 루닛이 내부 인력 이상으로 어노테이션 규모를 확장할 수 있었습니다.',
    },
    'lunit-radiology': {
      title: '영상의학 어노테이션 도구',
      company: '루닛',
      roles: ['프로덕트 매니저', '프로젝트 매니저', '데브옵스 엔지니어', '백엔드 엔지니어', '엔지니어링 매니저'],
      teamSize: '6명',
      highlight: '“지금까지 진행한 어노테이션 중 가장 순조로웠습니다.”',
      description:
        '영상의학과 전문의가 흉부 X-ray, 유방촬영술(mammogram), 디지털 유방 단층촬영(DBT) 영상에 라벨을 다는 사내 도구로, 큐 기반 및 풀 기반 작업 배정과 키보드 단축키 중심의 어노테이션을 지원합니다. 프로덕트 매니저 겸 엔지니어링 매니저로 프로젝트를 인수해 DBT 모달리티 지원, 현재-과거 영상 멀티 윈도우 비교, 이미지 간 어노테이션 그룹화, 리뷰어 피드백 시스템, ML 연구자용 API를 도입했습니다.',
    },
    'posicube-c2': {
      title: '원격 제어 시스템',
      company: '포지큐브',
      companyContext: '소규모 스타트업 (직원 9–20명)',
      roles: ['백엔드 엔지니어', '엔지니어링 매니저'],
      description:
        '고객사 현장에 배포된 엣지 디바이스를 모니터링하고 제어하는 원격 관리 시스템입니다. 중앙 노드와 엣지 노드 간 WebSocket-over-TLS 통신을 구축하고, 망이 분리된 고객사 네트워크 환경을 위해 릴레이 노드도 지원했습니다. 보안 감사를 통과할 수 있도록 모든 원격 기능을 명시적으로 정의했습니다.',
    },
    'posicube-robi': {
      title: 'Robi 백엔드 (현 robi T)',
      company: '포지큐브',
      companyContext: '소규모 스타트업 (직원 9–20명)',
      roles: ['백엔드 엔지니어', '엔지니어링 매니저'],
      description:
        'Google Dialogflow를 이용한 음성 인식, 의도 파악, TTS로 발신자를 적절한 부서에 연결해 주는 AI 전화 안내원 Robi의 백엔드입니다. 피처 플래그로 제어되는 6개의 마이크로서비스로 구성된 모노레포로 백엔드를 설계했습니다.',
    },
    'sk-car-rental': {
      title: '렌터카 서비스',
      company: 'SK테크엑스 (SK텔레콤)',
      roles: ['백엔드 엔지니어'],
      description:
        '사람의 개입 없이 렌터카를 예약하고 이용할 수 있는 서비스입니다. 8개 서비스로 이루어진 Spring Boot 플랫폼의 일부로 예약 및 차량 접근 백엔드 API를 개발했습니다.',
    },
    'riot-network-impact': {
      title: '유·무선 연결의 승률 영향 분석 보고서',
      company: '라이엇 게임즈',
      roles: ['데이터 분석가'],
      highlight: '식별 가능한 모든 요인을 보정한 결과, 유선 연결 플레이어의 승률이 통계적으로 유의미하게 1% 높게 나타남',
      description:
        '리그 오브 레전드 플레이어의 유선 연결과 무선 연결 간 승률 차이가 유의미한지 검증한 팀 분석입니다. Hadoop Hive에서 페타바이트 규모의 게임 및 인프라 데이터를 조회하는 역할을 맡았으며, 통계 분석은 팀원이 주도했습니다. 분석 결과는 Tableau 대시보드로 공유했습니다.',
    },
    'riot-monitoring': {
      title: '준실시간 서비스 모니터링',
      company: '라이엇 게임즈',
      roles: ['데이터 엔지니어'],
      description:
        '게임 서버 상태 데이터를 네트워크 운영 센터(NOC)에 제공하는 분 단위 지표 수집 시스템입니다. 전 세계 인프라를 대상으로 서버 가용성, 로그인 대기열 길이, 동시 접속자 수 수집기를 구축했습니다.',
    },
    'asurion-splunk': {
      title: 'Splunk 확장',
      company: '어슈어리온',
      roles: ['모니터링 엔지니어'],
      highlight: '장애 원인 파악 시간 80% 단축',
      description:
        '방치되어 있던 감사용 도구 Splunk를 전사 모니터링의 핵심 구성 요소로 확장했습니다. 전체 인프라에 배포하고 Splunk 프로페셔널 서비스와 협력해 운영 대시보드를 구축했습니다.',
    },
    'asurion-etl': {
      title: 'ETL 운영',
      company: '어슈어리온',
      roles: ['ETL 운영 엔지니어'],
      description:
        '보험 청구 처리를 위해 600개 이상의 작업이 실행되는 자체 개발 SSIS 기반 ETL 프레임워크를 운영하고 개발했습니다. 고객 데이터 수집, 청구, 배송 처리 관련 핵심 워크플로를 관리했습니다. 지식 관리 시스템을 구축하고 인도 오프쇼어 팀 관리를 도왔습니다.',
    },
    meddaas: {
      title: 'MedDaaS',
      description:
        '의대생과 영상의학과 의사의 진단 역량 향상을 돕는 AI 기반 영상의학 교육 플랫폼입니다. 학생이 흉부 X-ray 판독문을 작성하면 시스템이 다단계 LLM 분석으로 전문가 정답과 비교하여, 소견별 점수, 교육용 피드백, 구체적인 개선 제안을 스트리밍으로 실시간 제공합니다. CodeSeoul과 함께 Spoon OS 해커톤에서 개발했습니다.',
      imageAlts: [
        '검색창과 2개 판독문 완료, 62.9/100점을 보여주는 진행 카드가 있는 MedDaaS 홈페이지',
        '밝기·대비 조절이 가능한 흉부 X-ray와 판독문 편집기가 함께 있는 MedDaaS 판독 화면',
        '유사도, 완성도, 정확도, 용어 사용 항목별 점수를 보여주는 MedDaaS 상세 피드백 페이지',
      ],
    },
    'monster-brawl': {
      title: 'Monster Brawl',
      description:
        '플레이어가 고전 몬스터들을 서로 대결시키는 턴제 배틀 게임입니다. 계정 관리, 매치메이킹, 게임플레이, 통계 기능을 포함했습니다. 출시되지는 않았습니다.',
    },
  },

  otherContributions: {
    title: '기타 기여',
    entries: {
      'pubg-wordpress': {
        title: 'WordPress 배포',
        company: 'PUBG',
        role: '데브옵스',
        summary: '회사 홈페이지 교체를 위해 Terraform으로 AWS에 WordPress를 배포했습니다.',
      },
      'asurion-nagios': {
        title: 'Nagios 확장',
        company: '어슈어리온 모바일 앱',
        role: '모니터링',
        summary: 'Nagios 지표를 확장하고 알림을 개선해 불필요한 알림을 줄였습니다.',
      },
      'asurion-splunk-deployment': {
        title: 'Splunk 도입',
        company: '어슈어리온 모바일 앱',
        role: '모니터링',
        summary: '로그 수집, 지표 추출, 대시보드를 포함해 Splunk를 처음부터 새로 도입했습니다.',
      },
      'asurion-build-system': {
        title: '빌드 시스템 프로토타입',
        company: '어슈어리온 모바일 앱',
        role: '모니터링',
        summary: '레거시 Perl에서 Ruby on Rails로의 빌드 시스템 이전을 프로토타이핑했으며, 퇴사 후 실제로 도입되었습니다.',
      },
      'asurion-single-pane': {
        title: '통합 모니터링 화면 (Single Pane of Glass)',
        company: '어슈어리온',
        role: '모니터링',
        summary: 'CA 프로페셔널 서비스와 함께 CA Spectrum과 CA eHealth를 도입해 NOC를 전면 개편했습니다.',
      },
    },
  },

  experience: {
    anvo: {
      title: '공동창업자 & CTO',
      org: 'Anvo, 서울',
      period: '2025년 11월 – 현재 (Arbor와 병행)',
      bullets: [
        'ReactJS, PHP, Laravel, Python, LangGraph, PostgreSQL, pgvector 기반의 의료기기 관리 플랫폼과 의료기기 수리용 AI 에이전트 개발. Claude Code를 활용한 반자율 에이전틱 개발 파이프라인 운용.',
        'ThinkPHP 기반 레거시 PHP 애플리케이션과 서비스가 종료된 중국 독점 외부 서비스를 Laravel로 마이그레이션.',
        'AI 에이전트를 지원하기 위해 의료기기 매뉴얼, 서비스 오더 기록, 온라인 자료를 저장하는 RAG 구축.',
        '의료기기 운영 및 수리의 복잡성에 특화된 새로운 그래프 RAG에 대한 특허 출원 (출원번호 10-2026-0183554).',
      ],
    },
    arbor: {
      title: '공동창업자 & CTO',
      org: 'Arbor, 서울',
      period: '2025년 11월 – 2026년 8월 (10개월, Anvo와 병행)',
      bullets: [
        '업무를 회사 목표 및 조직 건강도와 연결하는 데 초점을 둔 AI 기반 전략 목표 및 프로젝트 관리 플랫폼을 ReactJS, Supabase, Cloudflare로 개발. Claude Code를 활용한 반자율 에이전틱 개발 파이프라인 운용.',
        '3인 팀 구성, 알파 테스트 고객사 2곳 확보, 디자인 및 정부 지원사업 신청 자문 계약, 잠재 고객 10명 이상 인터뷰.',
        'AI 연동과 원활한 고객 온보딩을 위한 MCP 서버 및 스킬 개발.',
      ],
    },
    'lunit-pm-lead': {
      title: 'AI 플랫폼 프로덕트 매니지먼트 팀 리드',
      org: '루닛, 서울 강남구',
      period: '2022년 8월 – 2025년 10월 (3년 2개월)',
      bullets: [
        '프로덕트 매니저 2명, 프로그램 매니저 1명, 디자이너 2명, QA 엔지니어 1명을 채용하여 팀 신설.',
        '페타바이트 규모의 영상의학 제품 학습·검증 데이터를 위한 최초의 데이터베이스를 기획·구성·구현하여 데이터 관리 효율과 규제 준수 수준 향상.',
        '구조화된 계약 추적 기능을 기획·구성하고 이를 중심으로 프로세스를 수립하여 규제 및 법률 준수 확보.',
        '데이터 적재 프로세스 개선, 데이터 모델 재설계 조율, 중복 제거 로직 정의를 통해 수작업 감소 및 데이터 중복 제거.',
        '데이터 카탈로그 작성, 계약 검증, 신규 데이터 관리 시스템으로의 데이터 이관을 조율하여 만료 데이터와 중복 데이터를 식별하고 R&R을 명확화, 테라바이트 규모의 중복 데이터 제거.',
        '허용된 데이터 사용 범위를 관리하는 시스템을 정의·구현하여 AI 모델 개발 과정의 데이터 유출(data leakage) 위험 완화.',
      ],
    },
    'lunit-platform-lead': {
      title: 'AI 플랫폼 팀 리드',
      org: '루닛, 서울 강남구',
      period: '2021년 9월 – 2022년 8월 (11개월)',
      bullets: [
        '어노테이션 도구의 프로젝트 진행 흐름 개선을 주도하여 고객으로부터 "지금까지 진행한 어노테이션 프로젝트 중 가장 순조로웠다"는 평가를 받음.',
        '고객 및 팀과 협력하여 이미지 어노테이션 도구에 영상의학 모달리티를 추가하고, 2D 이미지 뷰에 더해 2.5D 이미지 지원.',
        '데브옵스 엔지니어 1명, 백엔드 엔지니어링 리드, 백엔드 엔지니어, MLOps 엔지니어링 리드를 채용하여 팀 확장. 면접 진행 및 기술 과제 설계·검토 담당.',
        '팀 외부 활동으로 사내 해커톤 기획 및 운영 주도.',
        '계층형 데이터 라벨, 윤곽선 어노테이션, 리뷰어 시스템, 어노테이션 프로젝트 진행 상황 시각화, 불량 데이터 신고 시스템 등 어노테이션 도구 기능의 설계 지원, 기획 및 개발 주도.',
        '재택근무 팀원을 위한 비동기 데일리 업데이트, 백로그 그루밍, 스프린트 플래닝 등 스크럼에 가까운 개발 프로세스를 수립하고 운영.',
      ],
    },
    'lunit-senior-engineer': {
      title: '시니어 백엔드 엔지니어 / 데브옵스 엔지니어',
      org: '루닛, 서울 강남구',
      period: '2021년 1월 – 2021년 9월 (8개월)',
      bullets: [
        '면접 및 기술 과제 검토를 통해 채용 지원.',
        '어노테이션 도구의 관리자 인터페이스를 지원하도록 API를 확장하여 어노테이션 프로젝트 시작 및 관리에 드는 시간과 노력 절감.',
        'Buildkite 기반 CI/CD 시스템을 구축하여 학습 데이터 어노테이션 시스템의 테스트 및 배포 자동화.',
        '이미지 어노테이션 도구의 FastAPI 서비스를 마이크로서비스 아키텍처에 맞게 리팩터링.',
        'Terraform으로 AWS EKS에, Ansible로 베어메탈 환경에 Kubernetes 기반 서비스 배포 구성.',
      ],
    },
    posicube: {
      title: '백엔드 엔지니어 / 데브옵스 엔지니어 / 백엔드 팀 리드',
      org: '포지큐브, 서울 서초구',
      period: '2018년 9월 – 2020년 12월 (2년 3개월)',
      bullets: [
        'AI 기반 전화 안내 제품과 내부 관리 콘솔의 백엔드 서비스를 Node.js, MySQL Aurora, AWS Lambda 및 관련 서비스로 개발하고, 인프라는 Terraform으로 관리.',
        'AI 기반 온라인 배송 제품의 백엔드 서비스를 Node.js, Cloud SQL, GCP Kubernetes로 개발. 회사 디렉터리 관리, 인증, Docker Swarm 관리, 하드웨어 프로비저닝, 통화 기록 서비스 등 포함.',
        '총 4명의 백엔드 팀을 이끌며 IoT 디바이스와 AI 시스템 간 통신을 처리하는 MSA 호환 모노레포 구축.',
        '사이트 간 VPN, 사무실 네트워크, 자체 호스팅 GitLab CI, 빌드 파이프라인 등 다양한 인프라 구축.',
        'Terraform으로 AWS 및 GCP 인프라 설계·관리. GCP Kubernetes에 ELK 로깅 구축.',
        'Golang과 AWS로 고객사 현장의 Raspberry Pi 디바이스용 원격 제어 서비스 및 클라이언트 개발.',
        'Raspberry Pi 디바이스의 AI 소프트웨어를 위해 systemd로 관리되는 Python 기반 상태 보고 및 통화 기록 서비스 개발.',
      ],
    },
    pubg: {
      title: '백엔드 엔지니어',
      org: 'PUBG(펍지주식회사), 서울 서초구',
      period: '2017년 11월 – 2018년 7월 (8개월)',
      bullets: [
        'Go와 C#을 사용한 마이크로서비스 개발 지원.',
        'WordPress부터 머신러닝 시스템까지 다수 프로젝트의 인프라를 Terraform으로 자동화.',
        'AWS Lambda, SQS, S3, Redshift, Kinesis를 사용해 공개 API 서비스, 머신러닝 시스템, 일반 데이터 분석용 데이터 파이프라인 구축.',
        '프로젝트의 빌드, 테스트, 배포 속도를 높이기 위한 GitLab CI 설정 구성.',
        'AWS ECS에서 운영되는 Go 기반 공개 API 서비스 출시에 기여.',
      ],
    },
    'sk-techx': {
      title: '백엔드 엔지니어',
      org: 'SK테크엑스, 서울 강남구',
      period: '2017년 1월 – 2017년 11월 (10개월)',
      bullets: [
        'Jenkins Job DSL과 Pipeline DSL로 빌드 파이프라인을 코드화하여 소스 관리에 포함. Spring Batch로 리포팅용 ETL 시스템 구축.',
        '웹 서버와 REST API를 포함해 8개 서비스로 구성된 Spring 기반 서비스 플랫폼 개발.',
        '빌드 파이프라인을 리팩터링하여 로컬 빌드 시간을 전체 서비스 기준 최소 7분에서 가장 긴 서비스 최대 2분, 가장 짧은 서비스 20초로 단축.',
      ],
    },
    riot: {
      title: '라이브 데이터 분석가',
      org: '라이엇 게임즈, 미국 캘리포니아주 산타모니카',
      period: '2013년 10월 – 2016년 9월 (2년 11개월)',
      bullets: [
        'Bash, Python, Go로 100개 이상의 지표를 분 단위로 수집하는 글로벌 준실시간 데이터 수집 시스템 개발 및 유지보수.',
        '네트워크 데이터 수집 및 시각화를 위해 Kafka, Elasticsearch, Kibana, Timelion 실험.',
        '전 세계 수백만 플레이어의 Hadoop Hive 데이터를 활용해 클라이언트 네트워크 성능, 게임 서버 용량, NOC KPI 등 게임 상태 지표에 대한 Tableau 리포트 제작.',
        '플레이어 경험과 관련된 비정상 지표 값을 제공하는 플레이어 영향 REST API를 Go로 개발하고 Docker로 배포.',
        'PHP 웹 앱을 만들어 400건 이상의 요청 처리 및 프로모션 코드 생성 자동화.',
        'NOC 기술자를 위한 Python 기초 강의를 설계하고 진행.',
      ],
    },
    'chainsaw-rabbit': {
      title: '공동창업자 & 개발자',
      org: 'Chainsaw Rabbit Games, 미국 캘리포니아주 샌프란시스코',
      period: '2012년 11월 – 2015년 6월 (2년 7개월, 파트타임)',
      bullets: [
        '비동기 경쟁형 멀티 플랫폼 모바일 게임 공동 설계.',
        'Lua/CoronaSDK로 게임 클라이언트를, Twisted Matrix로 Python 기반 게임 서버를 개발.',
      ],
    },
    asurion: {
      title: '분석가 II → 프로덕션 시스템 분석가',
      org: '어슈어리온, 미국 테네시주 내슈빌 → 캘리포니아주 샌프란시스코',
      period: '2010년 8월 – 2013년 10월 (3년)',
      bullets: [
        '분산 Splunk 인프라를 처음부터 구축하여 장애 원인 파악 시간 80% 단축.',
        '600개 이상의 작업이 실행되는 자체 개발 SSIS 기반 ETL 프레임워크 운영.',
      ],
    },
  },

  education: {
    degree: '컴퓨테이셔널 미디어 학사 (B.S. Computational Media)',
    school: '조지아 공과대학교 (Georgia Institute of Technology)',
    period: '2006 – 2011',
  },

  community: {
    paragraphsHtml: [
      '2016년에 <a href="https://www.meetup.com/codeseoul/" target="_blank" rel="noopener noreferrer" class="text-link">CodeSeoul</a>을 설립했습니다. Meetup 회원 3,400명 이상을 보유한 서울의 비영리 개발자 커뮤니티로, 최근에는 행사당 평균 40명이 참석하고 있습니다. 코딩 수업, 워크숍, 강연, 해커톤, 네트워킹 모임을 운영하며, 설 연휴에는 데브옵스 부트캠프를 진행하기도 했습니다.',
      '수강생을 완전 초보에서 주니어 엔지니어 수준까지 이끄는 Java 전체 과정을 가르쳤습니다. 그 밖에도 Kubernetes, Prefect, AWS, Golang은 물론 발표, 이력서 작성, 프로젝트 관리 같은 소프트 스킬도 강의했습니다.',
      '<a href="https://www.youtube.com/@codeseoul" target="_blank" rel="noopener noreferrer" class="text-link">YouTube</a>에서도 만나보세요.',
    ],
  },

  contact: {
    title: '연락하기',
    kakao: '카카오톡: TheBeege',
    phoneKr: '한국',
    phoneUs: '미국',
  },

  footerName: '브라이언 베리 (Bryan Berry)',
};

export default ko;
