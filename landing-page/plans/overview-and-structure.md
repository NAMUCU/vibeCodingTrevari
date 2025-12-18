## ProcureVision 프로젝트 소개 랜딩 페이지 기획

### 1. 랜딩 페이지 목적
- **목표:** GitHub 저장소 방문자(개발자, PM, 투자자 등)에게 ProcureVision 프로젝트의 문제의식, 핵심 가치, 기능, 기술 스택을 한눈에 전달하고, 레포를 탐색/기여하고 싶게 만드는 것.
- **대상 독자:**
  - 공공조달/제조·건설 도메인에 관심 있는 실무자
  - 데이터·AI 기반 B2B 프로덕트에 관심 있는 개발자
  - 전략적 투자 관점에서 레포를 빠르게 이해하고 싶은 투자자

### 2. PRD 기반 핵심 메시지 정리
- **비전:** "엑셀 노가다 없는 데이터 기반 조달 전략의 대중화"
- **핵심 가치:**
  - 정보 불균형 해소
  - 입찰 성공률 제고
  - 실시간 경쟁 모니터링
- **해결하는 문제 (Problem Statement):**
  - 나라장터 등 공공조달 데이터가 파편화되어 있고, 시계열 단가와 제품 규격(Spec)을 함께 분석할 수 있는 도구가 부재
- **핵심 기능 요약:**
  - 시계열 단가 추이 및 점유율 분석 대시보드
  - 사양(Spec) 기반 고급 필터링
  - 규격서(PDF) 자동 파싱 및 AI 인사이트 제공

### 3. 랜딩 페이지 전체 정보 구조(IA)
- **섹션 1: Hero & Elevator Pitch**
  - 프로젝트 이름 및 한줄 소개
  - 짧은 서브카피 (문제의식 + 가치 제안)
  - 주요 CTA: "GitHub Repo 보기", "Demo / Story 보기" (실제 구현 가능 상태에 따라 텍스트 조정)

- **섹션 2: Problem & Why Now**
  - 공공조달 데이터 환경의 문제점
  - 실무자가 겪는 구체적인 Pain Point (엑셀 작업, 규격서 수작업 분석 등)
  - PRD 3장 User Stories를 1~2줄 요약 카드로 재구성

- **섹션 3: Solution & Key Features**
  - 시계열 단가 분석, 점유율 분석, Spec 기반 필터, AI 규격서 분석 등 핵심 기능을 카드/아이콘 형식으로 요약
  - 각 기능 옆에 간단한 사용자 시나리오를 1줄로 표기

- **섹션 4: For Whom (Target Personas)**
  - PRD 2장의 5개 페르소나 중 랜딩에 적합한 3~4개를 선택
  - 각 페르소나별 "이 프로젝트가 왜 중요한지" 한 문장 배치

- **섹션 5: Product Screens / Concept UI**
  - shadcn/ui 기반 대시보드 컨셉을 1~3개의 Screenshot 또는 와이어프레임 이미지로 보여줄 섹션 (초기에는 Placeholder 이미지/설명을 사용)
  - Main Shell, Summary Cards, Analysis Section, AI Panel 구성 설명

- **섹션 6: Tech Stack & Architecture (High-level)**
  - Frontend, Backend/DB/Auth, AI Engine을 간단한 다이어그램 또는 아이콘 나열로 설명
  - Next.js(App Router), Tailwind, shadcn/ui, Supabase, OpenAI(GPT-4o) 명시

- **섹션 7: Roadmap & Status**
  - PRD 8장의 Phase 1~3 로드맵을 타임라인 형식으로 요약
  - 현재 진행 상태(예: Draft/PoC/Alpha 등)를 뱃지 또는 짧은 문장으로 표시

- **섹션 8: Contribution & Contact (옵션)**
  - 이 레포에 어떻게 기여할 수 있는지 간단 가이드
  - 이슈/PR, 피드백 채널 (GitHub Issues, 이메일 등) 안내

### 4. 섹션별 카피 톤 & 스타일 가이드
- **톤 앤 매너:**
  - B2B 전략 대시보드에 맞는 **전문적이지만 과하게 딱딱하지 않은** 톤
  - "엑셀 노가다", "실무자" 등 현실적인 표현을 적절히 섞어 공감 유도
  - 영어/한국어 혼용 시, 핵심 개념(Strategy, Dashboard, Insights 등)은 영어 병기

- **카피 스타일:**
  - Hero 섹션: 1줄 비전 + 1줄 서브카피 (문장 길이 최대 60자 내외)
  - 기능 설명: 한 기능당 1문장(최대 2문장), 불릿 포인트 위주
  - 기술 스택 설명: 간결한 나열 + 한 문장 요약 ("Next.js + Supabase + OpenAI 기반 전략 엔진")

### 5. GitHub Pages 관점의 구성 계획
- **배포 형태:**
  - GitHub Pages 정적 사이트 (예: Next.js Static Export 또는 단순 React/HTML SPA)  
  - 이 기획 문서는 레포 내 `landing-page` 디렉터리 기준으로 관리
- **파일 구조(예상):**
  - `landing-page/`
    - `plans/` (현재 문서 위치)
    - `src/` 또는 `app/` (실제 페이지 구현)
    - `public/` (이미지/스크린샷)
    - `README.md` (랜딩 페이지 빌드 & 배포 가이드)

### 6. 다음 단계
- [ ] Hero, Problem, Solution 섹션에 사용할 구체 카피 초안 작성
- [ ] 페르소나 3~4개를 랜딩용으로 재정리
- [ ] UI 섹션에서 사용할 Screenshot/Mockup 범위 정의
- [ ] GitHub Pages 빌드/배포 전략(브랜치, 워크플로우) 간단 설계



