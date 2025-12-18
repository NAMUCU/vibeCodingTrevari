# ProcureVision Dash (Replit 프로젝트)

이 디렉터리는 Replit 환경에서 개발된 **ProcureVision 조달 데이터 전략 대시보드** 프로젝트를 포함합니다.  
실제 애플리케이션 코드는 `replit/ProcureVision-Dash` 하위에 위치합니다.

## 1. 프로젝트 개요

ProcureVision Dash는 **한국 제조·건설 기업을 위한 B2B 공공조달 분석 대시보드**입니다.  
나라장터 등 공공조달 데이터에서 **제품 규격(Spec)** 과 **시계열 단가(Price)** 를 결합해,

- 시장 점유율과 단가 추이 분석
- 경쟁사 비교
- AI 기반 리포트/인사이트

를 제공하는 것이 목표입니다. UI와 카피는 **한국어 실무자**를 1차 타깃으로 설계되어 있습니다.

## 2. 디렉터리 구조

- `replit/ProcureVision-Dash/`
  - `client/` – React 18 + TypeScript 기반 프론트엔드
    - `src/pages/` – 대시보드, 시장 분석, 경쟁사 비교, AI 리포트 등 페이지 컴포넌트
    - `src/components/ui/` – shadcn/ui + Radix UI 기반 공통 컴포넌트
    - `src/components/` – KPI 카드, 차트, 사이드바, 알림 벨 등 기능 컴포넌트
    - `src/lib/`, `src/hooks/` – 유틸리티 및 공용 훅
  - `server/` – Express.js 기반 백엔드 서버
    - `routes.ts`, `storage.ts` – API 라우트 및 스토리지 레이어
    - `db.ts`, `shared/schema.ts` – Drizzle ORM + PostgreSQL 스키마 정의
  - `script/` – 서버 빌드 스크립트 (`build.ts`)
  - `design_guidelines.md` – UI/UX 및 디자인 가이드
  - `replit.md` – Replit 템플릿 메타 정보 및 시스템 아키텍처 설명

## 3. 핵심 기술 스택

- **프론트엔드**
  - React 18 + TypeScript
  - Wouter (경량 라우팅)
  - TanStack React Query (서버 상태 관리 및 캐싱)
  - Tailwind CSS + shadcn/ui + Radix UI
  - Recharts (차트 시각화)

- **백엔드**
  - Node.js + Express.js (ESM, TypeScript)
  - RESTful API (`/api/*`)
  - Drizzle ORM + PostgreSQL (`shared/schema.ts`)
  - Drizzle Kit로 마이그레이션 (`npm run db:push`)

- **AI 연동**
  - OpenAI API (GPT-4 계열)
  - 환경 변수:
    - `AI_INTEGRATIONS_OPENAI_BASE_URL`
    - `AI_INTEGRATIONS_OPENAI_API_KEY`

## 4. 로컬 실행 방법 (Replit 프로젝트 폴더 기준)

> 아래 명령은 `replit/ProcureVision-Dash` 디렉터리에서 실행하는 것을 기준으로 합니다.

```bash
cd replit/ProcureVision-Dash
```

1. **환경 변수 설정**

PostgreSQL 및 OpenAI 연동을 사용하려면 `.env` 혹은 Replit 환경설정에 다음 키들을 지정해야 합니다.

- `DATABASE_URL` – PostgreSQL 접속 URL
- `AI_INTEGRATIONS_OPENAI_BASE_URL` – OpenAI API Base URL
- `AI_INTEGRATIONS_OPENAI_API_KEY` – OpenAI API 키

2. **의존성 설치**

```bash
npm install
```

3. **개발 서버 실행**

```bash
npm run dev
```

- Express 서버 및 Vite 기반 클라이언트가 함께 동작하도록 설정되어 있습니다.
- Replit에서 템플릿으로 실행할 경우, `Run` 버튼에 연결된 기본 명령이 `npm run dev`입니다.

4. **프로덕션 빌드 및 실행**

```bash
# 서버 + 클라이언트 번들 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 5. 주요 NPM 스크립트 (`ProcureVision-Dash/package.json`)

- `npm run dev` – 개발 모드로 서버 실행 (tsx 기반)
- `npm run build` – `script/build.ts`를 통해 서버/클라이언트 번들 빌드
- `npm start` – 프로덕션 모드 서버 실행 (`dist/index.cjs`)
- `npm run check` – TypeScript 타입 검사
- `npm run db:push` – Drizzle Kit로 DB 스키마를 PostgreSQL에 반영

## 6. 이 레포 내 다른 부분과의 관계

- `/vibeCodingTest/landing-page` – GitHub Pages용 정적 랜딩 페이지 (Next.js 기반)
- `/vibeCodingTest/replit/ProcureVision-Dash` – 실제 **대시보드 애플리케이션** 구현체

현재 README는 **Replit 기반 ProcureVision Dash 애플리케이션을 이해하고 로컬에서 실행할 수 있도록** 돕기 위한 요약 문서입니다. 자세한 아키텍처 설명은 `replit/ProcureVision-Dash/replit.md`와 `design_guidelines.md`를 참고하세요.


