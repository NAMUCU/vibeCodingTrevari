"use client";

const GITHUB_URL = "https://github.com/vibeCodingTrevari/vibeCodingTrevari";

const sections = [
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "personas", label: "For Whom" },
  { id: "ui", label: "Product UI" },
  { id: "tech", label: "Tech Stack" },
  { id: "roadmap", label: "Roadmap" },
  { id: "contribution", label: "Contribution" },
];

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-brand-400 to-brand-700 flex items-center justify-center text-xs font-bold">
              PV
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-slate-50">
                ProcureVision
              </span>
              <span className="text-[11px] text-slate-400">
                조달 데이터 기반 전략 엔진
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-xs text-slate-300">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="hover:text-brand-200 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={GITHUB_URL}
              className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-50 hover:border-brand-400 hover:bg-slate-900/80 transition-colors"
            >
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="section">
          <div className="section-container grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-brand-300 mb-3">
                조달 데이터 기반 전략 대시보드
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-50 mb-4">
                엑셀 노가다 없는{" "}
                <span className="text-brand-300">조달 전략 인사이트</span>
              </h1>
              <p className="text-base md:text-lg text-slate-300 mb-6 max-w-xl">
                ProcureVision은 나라장터 공공조달 데이터를 수집·분석하여
                제품 Spec과 시계열 단가를 한 화면에서 결합해 보여주는
                전략 대시보드입니다. 정보 불균형을 줄이고, 입찰 전략 수립을
                더 데이터 기반으로 바꿉니다.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={GITHUB_URL}
                  className="inline-flex items-center justify-center rounded-md bg-brand-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-400 transition-colors"
                >
                  GitHub Repo 보기
                </a>
                <a
                  href="#solution"
                  className="inline-flex items-center justify-center rounded-md border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 hover:border-brand-400 hover:text-brand-200 transition-colors"
                >
                  어떤 문제를 해결하나요?
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-4 md:p-5 shadow-xl shadow-black/40">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">
                Dashboard Snapshot (Concept)
              </h2>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-slate-900 border border-slate-800 p-3">
                    <p className="text-[11px] text-slate-400 mb-1">
                      당월 수주 총액
                    </p>
                    <p className="text-lg font-semibold text-slate-50">
                      42.3억
                    </p>
                    <p className="text-[11px] text-emerald-400">+18.4% mom</p>
                  </div>
                  <div className="rounded-lg bg-slate-900 border border-slate-800 p-3">
                    <p className="text-[11px] text-slate-400 mb-1">
                      평균 낙찰 단가
                    </p>
                    <p className="text-lg font-semibold text-slate-50">
                      97,200원
                    </p>
                    <p className="text-[11px] text-amber-300">
                      -3.1% vs 3개월 평균
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-900 border border-slate-800 p-3">
                    <p className="text-[11px] text-slate-400 mb-1">
                      신규 진입 업체
                    </p>
                    <p className="text-lg font-semibold text-slate-50">
                      12개사
                    </p>
                    <p className="text-[11px] text-slate-300">
                      LED 보안등 카테고리
                    </p>
                  </div>
                </div>
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] text-slate-400">
                      50W LED 보안등 단가 추이 (12M)
                    </p>
                    <span className="text-[10px] rounded-full bg-slate-800 px-2 py-0.5 text-slate-300">
                      Spec: KS 인증 · 직접생산
                    </span>
                  </div>
                  <div className="h-20 w-full rounded bg-slate-950 border border-dashed border-slate-700 flex items-center justify-center text-[10px] text-slate-500">
                    Time-series price chart placeholder
                  </div>
                </div>
                <div className="rounded-lg bg-slate-900 border border-slate-800 p-3">
                  <p className="text-[11px] text-slate-400 mb-1">
                    AI Weekly Briefing
                  </p>
                  <p className="text-[11px] text-slate-200">
                    &quot;직접생산 인증 보안등 카테고리에서 A사의 수주 비중이
                    최근 3개월간 12% → 21%로 급증했습니다. B사는 동일 Spec
                    대비 평균 단가를 4.3% 인하해 방어 전략이 필요합니다.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="section">
          <div className="section-container">
            <p className="section-title">Problem & Why Now</p>
            <h2 className="section-heading">
              공공조달 데이터는 많은데, 전략에 바로 쓰기는 어렵습니다
            </h2>
            <p className="section-subtitle mb-6">
              나라장터를 포함한 공공조달 시장에서는 수많은 공고·규격서·낙찰
              정보가 매일 쌓이고 있습니다. 하지만 대부분의 실무자는 엑셀을
              열고 수작업으로 CSV를 붙여보며, 수십 페이지짜리 규격서를
              직접 읽는 방식으로 전략을 세우고 있습니다.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="text-sm font-semibold text-slate-50 mb-1">
                  파편화된 데이터
                </h3>
                <p className="text-sm text-slate-300">
                  공고 정보, 규격서(PDF), 낙찰 단가가 서로 다른 포맷으로
                  흩어져 있어 한 번에 보기 어렵습니다.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="text-sm font-semibold text-slate-50 mb-1">
                  Spec + Price 결합 분석 부재
                </h3>
                <p className="text-sm text-slate-300">
                  제품의 세부 Spec(용량, 인증, 광속 등)과 시계열 단가를 함께
                  보는 툴이 없어 전략 단가 설정이 감에 의존합니다.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <h3 className="text-sm font-semibold text-slate-50 mb-1">
                  반복되는 엑셀 노가다
                </h3>
                <p className="text-sm text-slate-300">
                  CSV 다운로드 → 가공 → 피벗 → 보고서 작성까지, 전략 수립보다
                  데이터 정리에 더 많은 시간을 씁니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution & Features */}
        <section id="solution" className="section">
          <div className="section-container">
            <p className="section-title">Solution & Key Features</p>
            <h2 className="section-heading">
              조달 데이터를 전략 대시보드 언어로 재구성합니다
            </h2>
            <p className="section-subtitle mb-6">
              ProcureVision은 공공조달 데이터 허브를 구축하고, 실무자 관점의
              대시보드와 AI 인사이트로 &quot;전략에 바로 쓰는 데이터&quot;를
              목표로 합니다.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  시계열 단가 & 점유율 분석
                </h3>
                <p className="text-sm text-slate-300">
                  특정 품목(예: 50W LED 보안등)에 대해 지난 1년간 업체별 단가
                  변화를 라인 그래프로 비교하고, 수주 점유율 추이를
                  시각화합니다.
                </p>
                <p className="text-[11px] text-slate-400">
                  User Story: &quot;전략기획 팀장으로서, A사가 지난 1년간
                  단가를 어떻게 조정해 왔는지 한눈에 보고 싶다.&quot;
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  Spec 기반 고급 필터링
                </h3>
                <p className="text-sm text-slate-300">
                  W, lm, 인증, 직접생산 여부 등 제품 Spec을 다중 선택하여,
                  실제 전략에 쓰이는 조건으로 시장을 슬라이싱할 수 있습니다.
                </p>
                <p className="text-[11px] text-slate-400">
                  User Story: &quot;영업지원 담당자로서, 직접생산 업체만
                  필터링해 실제 제조사들의 점유율만 보고 싶다.&quot;
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  규격서(PDF) 자동 파싱
                </h3>
                <p className="text-sm text-slate-300">
                  OpenAI(GPT-4o)를 활용해 수십 페이지의 규격서에서 핵심 Spec을
                  추출하고, 비교 가능한 형태의 테이블로 정리합니다.
                </p>
                <p className="text-[11px] text-slate-400">
                  User Story: &quot;신규 사업팀으로서, 여러 규격서를 일일이
                  읽지 않고 AI가 정리해준 Spec 비교표만 보고 싶다.&quot;
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  주간 전략 브리핑 & 알림
                </h3>
                <p className="text-sm text-slate-300">
                  점유율 급변, 단가 급락·급등 등 중요한 패턴을 감지하면 자연어
                  요약으로 알려주어, &quot;지금 대응해야 할 이슈&quot;를
                  빠르게 파악할 수 있습니다.
                </p>
                <p className="text-[11px] text-slate-400">
                  Roadmap: 사용자 맞춤형 알림과 지능형 입찰가 추천 엔진으로
                  확장 예정.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personas */}
        <section id="personas" className="section">
          <div className="section-container">
            <p className="section-title">For Whom</p>
            <h2 className="section-heading">
              다양한 실무자가 같은 데이터에서 각자 필요한 인사이트를 뽑아갑니다
            </h2>
            <p className="section-subtitle mb-6">
              PRD에서 정의한 5개 페르소나 중, 랜딩 페이지에서는 대표적인 4개
              역할을 중심으로 메시지를 구성합니다.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-[11px] font-semibold text-brand-300 mb-1">
                  전략기획 · 팀장
                </p>
                <h3 className="text-sm font-semibold text-slate-50 mb-1">
                  경쟁사 단가 전략과 점유율을 한눈에
                </h3>
                <p className="text-sm text-slate-300">
                  업체별 시계열 단가와 수주 점유율을 기준으로, 우리 제품의
                  방어/공격 단가 전략을 데이터 기반으로 설계할 수 있습니다.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-[11px] font-semibold text-brand-300 mb-1">
                  영업지원 · 과장
                </p>
                <h3 className="text-sm font-semibold text-slate-50 mb-1">
                  경영진 보고용 인사이트 카드 자동 생성
                </h3>
                <p className="text-sm text-slate-300">
                  카테고리별 시장 점유율, 신규 진입 업체, 평균 단가 변동률
                  등을 요약 카드 형태로 뽑아, 슬라이드에 바로 붙여넣을 수
                  있습니다.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-[11px] font-semibold text-brand-300 mb-1">
                  신규사업 · 대표/리더
                </p>
                <h3 className="text-sm font-semibold text-slate-50 mb-1">
                  진입 품목의 시장가와 마진 구조를 빠르게 스캔
                </h3>
                <p className="text-sm text-slate-300">
                  진입을 고민 중인 품목의 Spec별 시장 단가와 경쟁 구도를
                  시뮬레이션하여, 사업성 판단을 정량적으로 뒷받침합니다.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-[11px] font-semibold text-brand-300 mb-1">
                  투자심사 · 심사역
                </p>
                <h3 className="text-sm font-semibold text-slate-50 mb-1">
                  비상장 제조사의 실시간 수주 모멘텀 체크
                </h3>
                <p className="text-sm text-slate-300">
                  특정 제조사의 조달 수주 추이를 추적하여, 제품별 시장 지배력
                  및 모멘텀을 검증하는 데이터 포인트로 활용할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product UI */}
        <section id="ui" className="section">
          <div className="section-container">
            <p className="section-title">Product Screens / Concept UI</p>
            <h2 className="section-heading">
              shadcn/ui 스타일의 B2B 전략 대시보드를 목표로 합니다
            </h2>
            <p className="section-subtitle mb-6">
              초기 버전에서는 컨셉 수준의 와이어프레임과 컴포넌트 구성을
              제공하고, 이후 실제 데이터 연동 대시보드로 확장할 계획입니다.
            </p>
            <div className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    Main Shell & Layout
                  </span>
                  <span className="text-[10px] rounded-full bg-slate-900 px-2 py-0.5 text-slate-300">
                    Sidebar · Top Search · Content
                  </span>
                </div>
                <div className="h-40 w-full rounded-lg border border-dashed border-slate-700 flex items-center justify-center text-[11px] text-slate-500">
                  shadcn/ui 기반 레이아웃 컴포넌트가 들어갈 영역 (예:
                  Sidebar, Tabs, DataTable)
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <h3 className="text-sm font-semibold text-slate-50 mb-1">
                    Summary Cards
                  </h3>
                  <p className="text-sm text-slate-300">
                    당월 수주 총액, 전월 대비 변동률, 신규 진입 업체 수 등을
                    한 줄로 보여주는 카드 영역입니다.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <h3 className="text-sm font-semibold text-slate-50 mb-1">
                    Analysis Section
                  </h3>
                  <p className="text-sm text-slate-300">
                    시계열 단가 그래프와 하단 데이터 테이블을 탭으로 전환하며
                    볼 수 있는 분석 영역입니다.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                  <h3 className="text-sm font-semibold text-slate-50 mb-1">
                    AI Panel
                  </h3>
                  <p className="text-sm text-slate-300">
                    규격서 파싱 결과와 주간 전략 브리핑이 표시되는 AI 요약
                    영역입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="section">
          <div className="section-container">
            <p className="section-title">Tech Stack & Architecture</p>
            <h2 className="section-heading">
              Next.js + Supabase + OpenAI 기반 전략 엔진
            </h2>
            <p className="section-subtitle mb-6">
              ProcureVision은 모던 웹 스택과 관리형 백엔드를 활용해 빠른
              프로토타이핑과 보안, 확장성을 동시에 노립니다.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-[11px] font-semibold text-brand-300 mb-1">
                  Frontend
                </p>
                <h3 className="text-sm font-semibold text-slate-50 mb-1">
                  Next.js (App Router) · Tailwind · shadcn/ui
                </h3>
                <p className="text-sm text-slate-300">
                  기업용 B2B 대시보드에 맞는 UI 일관성과 반응형 경험을 위해
                  App Router 기반 Next.js와 Tailwind, shadcn/ui 컴포넌트를
                  사용합니다.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-[11px] font-semibold text-brand-300 mb-1">
                  Backend / DB / Auth
                </p>
                <h3 className="text-sm font-semibold text-slate-50 mb-1">
                  Supabase (Postgres · Auth · Storage)
                </h3>
                <p className="text-sm text-slate-300">
                  나라장터 데이터를 정형화해 저장하고, 기업 계정 단위의 보안
                  인증과 RLS 기반 데이터 격리를 구현합니다.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-[11px] font-semibold text-brand-300 mb-1">
                  AI Engine
                </p>
                <h3 className="text-sm font-semibold text-slate-50 mb-1">
                  OpenAI API (GPT-4o)
                </h3>
                <p className="text-sm text-slate-300">
                  규격서 자동 파싱, 시나리오 기반 전략 요약, 입찰가 추천 등
                  고급 인사이트 생성을 위해 GPT-4o를 활용합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="section">
          <div className="section-container">
            <p className="section-title">Roadmap & Status</p>
            <h2 className="section-heading">
              단계별로 데이터 파이프라인 → AI 인사이트 → 추천 엔진까지
            </h2>
            <p className="section-subtitle mb-6">
              PRD 로드맵을 기준으로, ProcureVision은 아래 3단계를 통해 PoC에서
              실제 운영 가능한 전략 엔진으로 확장될 예정입니다.
            </p>
            <ol className="space-y-3 text-sm text-slate-200">
              <li className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-[11px] font-semibold text-emerald-300 mb-1">
                  Phase 1 · Data & Core Charts
                </p>
                <p className="text-slate-50 font-medium mb-1">
                  데이터 파이프라인 구축 및 핵심 차트(점유율/단가) 구현
                </p>
                <p className="text-slate-300">
                  나라장터 데이터를 수집·정제하고, 품목/업체 기준의 시계열
                  단가 및 점유율 차트를 대시보드에 제공합니다.
                </p>
              </li>
              <li className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-[11px] font-semibold text-amber-300 mb-1">
                  Phase 2 · AI Spec Parsing & Advanced Filtering
                </p>
                <p className="text-slate-50 font-medium mb-1">
                  규격서 자동 분석 및 사양 기반 필터링 고도화
                </p>
                <p className="text-slate-300">
                  OpenAI 연동으로 비정형 규격서를 구조화하고, 복합 Spec 조건에
                  대한 필터링을 지원합니다.
                </p>
              </li>
              <li className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-[11px] font-semibold text-sky-300 mb-1">
                  Phase 3 · Alerts & Bid Recommendation
                </p>
                <p className="text-slate-50 font-medium mb-1">
                  사용자 맞춤형 알림 및 지능형 입찰가 추천 엔진
                </p>
                <p className="text-slate-300">
                  사용자별 관심 품목/업체에 대해 중요한 시그널을 알림으로
                  제공하고, 시뮬레이션 기반 입찰가 추천 기능으로 확장합니다.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* Contribution */}
        <section id="contribution" className="section">
          <div className="section-container">
            <p className="section-title">Contribution & Contact</p>
            <h2 className="section-heading">
              데이터 기반 조달 전략에 관심 있는 분들의 기여를 환영합니다
            </h2>
            <p className="section-subtitle mb-6">
              이 레포는 실무 친화적인 조달 데이터 분석 도구를 함께 실험해
              보는 공간입니다. 버그 리포트, 기능 제안, 도메인 피드백 모두
              환영합니다.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-200">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  어떻게 기여할 수 있나요?
                </h3>
                <ul className="list-disc list-inside text-slate-300 space-y-1">
                  <li>GitHub Issues에 버그/아이디어 등록</li>
                  <li>문서(PRD, README, UI 기획) 개선 및 번역</li>
                  <li>대시보드 UI/UX 제안 및 컴포넌트 구현</li>
                  <li>데이터 모델링, 쿼리 최적화, AI 프롬프트 개선</li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <h3 className="text-sm font-semibold text-slate-50">
                  GitHub Repo & Contact
                </h3>
                <p className="text-slate-300">
                  전체 코드는 GitHub에서 공개적으로 관리됩니다. 이슈나 PR
                  템플릿을 참고해 자유롭게 의견을 남겨주세요.
                </p>
                <a
                  href={GITHUB_URL}
                  className="inline-flex items-center justify-center rounded-md bg-slate-100 px-4 py-2 text-xs font-medium text-slate-950 hover:bg-slate-200 transition-colors"
                >
                  GitHub에서 프로젝트 보기
                </a>
                <p className="text-[11px] text-slate-500 mt-1">
                  추가적인 협업 제안이나 도메인 인터뷰 제안은 GitHub 프로필에
                  표기된 연락처를 통해 공유해 주세요.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="text-[11px] text-slate-500">
            ProcureVision – 조달 데이터 기반 전략 엔진 (Draft)
          </p>
          <p className="text-[11px] text-slate-600">
            Built with Next.js · Tailwind CSS · GitHub Pages
          </p>
        </div>
      </footer>
    </div>
  );
}


