## 1) PRD 대비 요구사항 명세서 (Replit 구현 기준 갭 분석)

### 1.1 기능 요구사항 정리

- **FR-1: 시계열 단가 및 점유율 대시보드**
  - 현재:  
    - `dashboard` 페이지에서 KPI 카드, `MarketShareChart`, `PriceTrendChart`, `ContractsTable` 구현됨.  
    - `/api/analytics/kpi`, `/api/analytics/market-share`, `/api/analytics/price-trend`, `/api/contracts` API 존재.
  - PRD 요구:  
    - 특정 품목·업체 기준 시계열 단가 추이 및 점유율 분석 (User Story 3-1).
  - Gap / 추가 요구사항:
    - [ ] 품목/업체/Spec를 함께 선택할 수 있는 고급 필터 UI 및 쿼리 파라미터 설계.
    - [ ] DB 레벨에서 업체·품목·Spec별 시계열 집계 쿼리 정교화.

- **FR-2: Spec 기반 필터링 및 분석**
  - 현재:  
    - `market-analysis` 페이지에서 품목(LED 투광등/보안등/가로등 등)과 사양(50W/100W/...) 선택 UI 존재.  
    - `specPriceData`, `efficiencyData`는 하드코딩된 예시 데이터.
    - `productSpecs` 테이블, `/api/specs/analyze-pdf`, `/api/product-specs` API 존재(규격서 분석 및 Spec 저장 가능).
  - PRD 요구:
    - 제품의 핵심 사양(W, lm, 인증 등)을 다중 선택하여 시장 상황을 좁혀볼 수 있는 필터 (4.1, 4.3, 7장).
  - Gap / 추가 요구사항:
    - [ ] `productSpecs` + `contracts`를 조인한 실제 Spec 기반 집계/필터링 API 설계.
    - [ ] 다중 Spec 조건(예: W 범위, lm 범위, 인증 포함 여부 등)을 지원하는 필터 UI 및 쿼리 파라미터 정의.
    - [ ] 현재 하드코딩된 `specPriceData`, `efficiencyData`를 실제 데이터 기반으로 교체.

- **FR-3: 규격서(PDF) 자동 파싱 & Spec 저장**
  - 현재:
    - `/api/specs/analyze-pdf`에서 PDF 업로드 → OpenAI Vision(`gpt-4o`)으로 Spec 추출 로직 구현.  
    - 추출 결과를 `productSpecs`로 저장하는 `/api/product-specs` API 구현 완료.
  - PRD 요구:
    - 규격서에서 핵심 Spec 자동 추출 및 비교 가능한 테이블 형태 제공 (4.3, User Story 3-3).
  - Gap / 추가 요구사항:
    - [ ] 규격서 업로드/분석 UI를 `spec-analyzer` 페이지에 연결(현재 코드 확인 필요, UX 플로우 완성).
    - [ ] 여러 규격서 분석 결과를 한 화면에서 비교하는 Spec 비교 테이블 UI 구현.
    - [ ] 분석 실패/부분 추출 시의 에러·보완 UX (재시도, 수동 편집 등) 정의.

- **FR-4: AI 인사이트 & 전략 요약**
  - 현재:
    - `/api/ai/generate-insight`에서 OpenAI(`gpt-4o-mini`)로 계약 요약을 생성, `aiInsights` 테이블에 저장.  
    - `ai-reports` 페이지에서 시장/경쟁사/기회 유형별 리포트 생성·조회 UI 구현.  
    - `AiInsightPanel` 컴포넌트를 통한 인사이트 리스트/하이라이트 제공.
  - PRD 요구:
    - 대시보드 데이터를 분석하여 “점유율 급증/평균 단가 하락” 등의 전략 요약 알림 제공 (4.3).
  - Gap / 추가 요구사항:
    - [ ] KPI/시계열 데이터와 연동된 룰 기반/ML 기반 트리거 정의(예: 점유율 N% 이상 급변 시 alert).  
    - [ ] 알림(Notifications)과 AI 인사이트의 연결: 특정 알림이 어떤 인사이트/데이터에서 파생되었는지 매핑.  
    - [ ] 인사이트 카테고리 세분화(시장·가격·경쟁사·Spec 등)와 필터링 UX 강화.

- **FR-5: 알림 & 가격 경보 시스템**
  - 현재:
    - `priceAlerts`, `notifications` 테이블 및 `/api/alerts`, `/api/notifications` API 존재.  
    - 알림 읽음 처리, 알림 생성/삭제/활성화 토글 API 구현.
  - PRD 요구:
    - 실시간 경쟁 모니터링 및 사용자 맞춤형 알림(로드맵 8장 Phase 3).
  - Gap / 추가 요구사항:
    - [ ] 가격 경보 조건(임계값, 대상 품목/업체/Spec 등)을 UI에서 설정하는 워크플로우 정리.  
    - [ ] 백엔드 주기적 배치/잡(스케줄러) 설계: 실제 시계열 데이터 기반으로 알림 조건 평가.  
    - [ ] 알림 Inbox/Toast UX를 전략적으로 정리(중요도·카테고리·읽음/안읽음 필터).

- **FR-6: 사용자/권한 및 기업 단위 데이터 격리**
  - 현재:
    - `users`, `companies` 테이블 정의, 세션/인증 코드 일부 존재(별도 파일 참고 필요).
    - Replit 템플릿 기준 로그인/세션 플로우를 일부 포함.
  - PRD 요구:
    - Supabase Auth + RLS로 기업 간 데이터 격리 (5장, 6장).
  - Gap / 추가 요구사항:
    - [ ] Supabase로 마이그레이션 할지, 현 Express + Postgres + Drizzle 조합으로 Auth/RLS-equivalent를 구현할지 방향 결정.  
    - [ ] 기업 단위 스코프(tenantId 등) 필드 추가 및 전 API 필터링.  
    - [ ] 사용자 역할(전략기획/영업지원/신규사업/투자심사 등)과 UI/권한 연계.

- **FR-7: 데이터 파이프라인 & 나라장터 연동**
  - 현재:
    - 스키마/스토리지는 설계되어 있지만, 실제 나라장터 API 연동/ETL 파이프라인 구현 여부는 미정(추가 확인 필요).
  - PRD 요구:
    - 나라장터 API 로우 데이터 수집 및 정형화, 시계열 단가 및 Spec 결합 (4.2, 4.3, 7장).
  - Gap / 추가 요구사항:
    - [ ] 나라장터 API/CSV 등 데이터 소스 정의 및 수집 모듈 설계.  
    - [ ] ETL/정제 로직 및 정기 배치/스케줄링 전략.  
    - [ ] 데이터 품질 체크, 누락/이상치 처리 규칙.

### 1.2 비기능 요구사항 (NFR) 정리

- **NFR-1: UI 일관성 & 반응형**
  - 현재: shadcn/ui + Tailwind + 다크 테마 기반의 일관된 컴포넌트 구조와 반응형 레이아웃 대부분 확보.
  - 추가 요구:
    - [ ] PRD 상에서 정의된 Main Shell, Summary Cards, Analysis Section, AI Panel 구조가 모든 페이지에서 일관되게 유지되는지 점검.

- **NFR-2: 보안 & 멀티 테넌시**
  - 현재: 세션 기반 인증 및 users/companies 테이블 존재. RLS 수준의 테넌트 격리는 미구현.
  - 추가 요구:
    - [ ] 기업 단위 데이터 격리 전략 수립(RLS or 애플리케이션 레벨 필터링).  
    - [ ] OpenAI/DB 비밀키 환경변수 관리 및 비노출 보장.

- **NFR-3: 확장성 & 운영**
  - 현재: 단일 Node/Express 서버 + Vite 프론트엔드 구조, Drizzle ORM 기반 DB 계층.
  - 추가 요구:
    - [ ] 데이터 볼륨 증가(수십만~수백만 계약) 시 성능 고려: 인덱스 전략, 요약 테이블(aggregate table), 캐싱 전략.  
    - [ ] 모듈화된 ETL/배치 구조 및 모니터링 방안.

---

## 2) 시스템 디자인 문서 초안 (Replit 구현 → PRD 목표 구조)

### 2.1 현재 시스템 구조 요약

- **클라이언트 (Replit/React)**
  - `client/src/App.tsx`:
    - `wouter` 기반 라우팅 (`/`, `/market`, `/competitors`, `/ai-reports`, `/alerts`, `/spec-analyzer`).  
    - Sidebar + Top Header(알림벨, 테마 토글) + 메인 컨텐츠 레이아웃.
  - 주요 페이지:
    - `dashboard`: KPI, 시장 점유율, 단가 추이, 계약 테이블.
    - `market-analysis`: 품목·사양 선택, Spec별 단가/효율 차트, 시장 점유율 차트.
    - `ai-reports`: AI 인사이트 생성/목록, 인사이트 패널.
    - `alerts`, `competitors`, `spec-analyzer`: 알림/경쟁사/규격서 분석 관련 화면(세부 기능은 코드 전체 참고).
  - 데이터 연동:
    - TanStack React Query로 `/api/analytics/*`, `/api/contracts`, `/api/ai/*`, `/api/alerts`, `/api/notifications` 등 호출.

- **서버 (Express + Drizzle)**
  - `server/routes.ts`:
    - **계약/분석 API**:  
      - `/api/contracts` (GET/POST, 필터 지원)  
      - `/api/analytics/kpi`, `/api/analytics/market-share`, `/api/analytics/price-trend`
    - **AI 인사이트 API**:  
      - `/api/ai/insights` (GET), `/api/ai/generate-insight` (POST) – GPT-4o-mini 사용.
    - **알림/경보 API**:  
      - `/api/alerts` (GET/POST), `/api/alerts/:id` (DELETE/PATCH)  
      - `/api/notifications` (GET), `/api/notifications/:id/read` (PATCH)
    - **규격서 분석/Spec API**:  
      - `/api/specs/analyze-pdf` – GPT-4o Vision으로 PDF에서 Spec 추출.  
      - `/api/product-specs` (POST) – 추출된 Spec 저장.  
      - `/api/export/contracts` – 계약 데이터 JSON/CSV export.
  - `shared/schema.ts`:
    - DB 테이블: `users`, `companies`, `contracts`, `productSpecs`, `aiInsights`, `priceAlerts`, `notifications`.  
    - 분석용 타입: `MarketShareData`, `PriceTrendData`, `KpiData`.
  - 스토리지:
    - `storage.ts`에서 in-memory 또는 Postgres 기반 구현(현재 템플릿은 in-memory 기본, Postgres로 확장 가능).

### 2.2 PRD 목표 아키텍처와의 매핑

- **UI/UX 레이어**
  - 현재: React SPA + shadcn/ui + Tailwind (Replit).  
  - PRD: Next.js(App Router) + Tailwind + shadcn/ui 기반 대시보드 (현재 `landing-page`에서 소개/브랜딩 역할 수행).
  - 설계 방향:
    - 대시보드 실제 Product는 Replit 구조(React+Express)를 유지하거나, 점진적으로 Next.js(App Router) 기반으로 이관.  
    - 공통 디자인 시스템(shadcn/ui, 색상 토큰, 레이아웃 패턴)을 `replit`와 `landing-page` 둘 다에서 공유하는 방안 검토.

- **데이터 & 분석 레이어**
  - 현재:
    - 계약/회사/Spec/AI인사이트/알림 스키마는 이미 Drizzle로 정의.  
    - 분석용 API는 샘플/Mock 또는 제한된 집계 기준으로 구현.
  - 목표:
    - 나라장터 실데이터 기반 시계열 집계 및 Spec 결합 분석.  
    - Spec 필터(다중 조건), 점유율/단가 추세, 효율 지표 등의 분석 결과를 API로 제공.
  - 설계 방향:
    - ETL 파이프라인에서 계약+규격서 데이터 적재 → 요약 테이블(예: daily/monthly aggregates) 생성.  
    - `contracts`/`productSpecs`에 인덱스 추가 (companyId, productCategory, contractDate, specWatt 등).  
    - 분석 API는 집계 테이블을 우선 조회하는 구조로 최적화.

- **AI 레이어**
  - 현재:
    - 텍스트 기반 AI 인사이트 생성(`/api/ai/generate-insight`).  
    - PDF 규격서 분석(`/api/specs/analyze-pdf`) → JSON Spec 추출.
  - 목표:
    - 규격서 기반 Spec 비교, 시장/경쟁사/기회 인사이트를 “전략 브리핑” 형태로 제공.  
    - 특정 이벤트(점유율 급변 등)에 기반한 자동 인사이트/알림 생성.
  - 설계 방향:
    - Prompt 템플릿을 PRD의 KPI/지표에 맞게 재정의.  
    - OpenAI 호출 래퍼 모듈화(재시도/로깅/비용 관리를 위한 abstraction).  
    - AI 인사이트와 알림/보고서(Export) 기능을 하나의 “Insight Center” 컨셉으로 통합.

- **보안 & 멀티 테넌시**
  - 현재:
    - users/companies 스키마 및 일부 인증 로직, notifications/alerts에 company 스코프는 미약 또는 부재.
  - 목표:
    - 기업 단위 RLS 또는 equivalent를 제공하여 데이터 격리.
  - 설계 방향:
    - 모든 주요 테이블에 `tenantId` 또는 `companyId` 기반 스코프 필드를 명시.  
    - API 레벨에서 로그인 사용자 컨텍스트에 따라 필터 적용.  
    - 필요 시 Supabase Auth로 이전하거나, 현 Express + Passport + Postgres 구조를 강화.

### 2.3 향후 확장 고려

- **성능**
  - 계약 데이터 규모가 커질 경우를 대비해:
    - 분할 테이블(월/연도 기준), 요약 테이블, 캐시 레이어(Redis 등) 설계 여지.
- **운영**
  - 배포 대상 환경(예: Replit, Render, Railway, 자체 인프라 등)에 따른 빌드/런타임 파이프라인 정의.
  - 로깅/모니터링(요청 수, 오류율, AI 호출량, DB 쿼리 시간 등) 지표 선정.

---

## 3) 개발 Task List (실행 우선순위 제안)

### 3.1 단기 (MVP 정리 – 이미 있는 것 다듬기)

- [ ] **대시보드/시장분석 데이터 정합성 개선**
  - [ ] `/api/analytics/*` 응답 스키마를 PRD KPI 정의와 맞추기.
  - [ ] `market-analysis`의 `specPriceData`, `efficiencyData`를 실제 DB 조회로 대체.

- [ ] **Spec 분석 플로우 완성**
  - [ ] `spec-analyzer` 페이지에서 PDF 업로드 → `/api/specs/analyze-pdf` → 결과 확인 → `/api/product-specs` 저장까지 E2E 연결.  
  - [ ] 복수 규격서 결과를 한 테이블에서 비교하는 Spec 비교 UI 구현.

- [ ] **AI 리포트 UX 개선**
  - [ ] `/api/ai/generate-insight` 프롬프트에 PRD의 핵심 지표(점유율 변화, 평균 단가, 신규 진입 업체 수 등) 설명 추가.  
  - [ ] 인사이트 카테고리/타입 필터 UI 추가 (시장/가격/경쟁사/기회 등).

### 3.2 중기 (PRD 요구사항 본격 반영)

- [ ] **고급 Spec 필터링 & 분석**
  - [ ] `contracts` + `productSpecs` 조인 기반 Spec 필터링 API 설계(`GET /api/analytics/spec-market` 등).  
  - [ ] 다중 필터(와트 범위, lm 범위, 인증 포함, 직접생산 여부 등) 쿼리 파라미터 및 응답 포맷 정의.  
  - [ ] UI에서 복수 조건 필터링 및 필터 상태 저장/공유 기능 추가.

- [ ] **알림/경보 시스템 강화**
  - [ ] 가격 경보 조건 생성/편집 UI 구현(품목/업체/Spec, 임계값, 방향 등).  
  - [ ] 배치/스케줄러(크론 잡) 설계: 매일/매주 단위로 조건 평가 → `notifications` 생성.  
  - [ ] 알림 Inbox 화면 및 NotificationBell 드롭다운 UX 개선(필터, 일괄 읽음 처리 등).

- [ ] **멀티 테넌시/보안**
  - [ ] 모든 주요 테이블에 기업/테넌트 스코프 필드 확인 및 누락 시 추가.  
  - [ ] API 레벨에서 로그인 사용자 기준으로 `companyId` 필터 적용.  
  - [ ] 권한 모델(역할별 기능 접근 차등) 정의.

### 3.3 장기 (PRD 로드맵 Phase 2–3)

- [ ] **데이터 파이프라인 & 나라장터 연동**
  - [ ] 나라장터 API/CSV 등 실제 소스 분석 및 PoC 수집 코드 작성.  
  - [ ] ETL 파이프라인(수집 → 정제 → 적재 → 집계) 설계 및 구현.  
  - [ ] 데이터 품질 모니터링 및 로그/에러 핸들링 체계 구축.

- [ ] **지능형 입찰가 추천 엔진**
  - [ ] 입찰가 추천에 사용할 특징(feature) 정의(과거 단가, 경쟁사 전략, Spec, 수량, 시즌성 등).  
  - [ ] 규칙 기반 모델 → 간단한 ML/통계 모델로 단계적 진화 계획 수립.  
  - [ ] 추천 결과를 대시보드/AI 리포트/알림과 통합하는 UX 설계.

- [ ] **Next.js 기반 통합 프론트엔드로의 이관(선택)**
  - [ ] Replit React SPA를 Next.js(App Router) 구조로 점진 이관할지 결정.  
  - [ ] 공통 UI 키트(shadcn/ui, Tailwind 토큰)를 `landing-page`와 공유하는 방식 정의.  
  - [ ] SEO/공개 랜딩과 인증이 필요한 실제 대시보드의 경계를 명확히 설계.

---

위 문서는 `vibeCodingTest/docs/prd.md`와 `replit/ProcureVision-Dash` 현재 구현을 기준으로 한 **갭 분석 + 향후 개발 로드맵 초안**입니다.  
구체 구현 단계에서는 각 Task를 이슈 트래킹 시스템(GitHub Issues 등)에 세분화하여 관리하는 것을 권장합니다.


