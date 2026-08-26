import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';
import { projects } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectScreenshot from '@/components/ui/ProjectScreenshot';

export default function FeaturedProjects() {
  const aidra = projects.find((p) => p.slug === 'aidra') || projects[0];
  const comicDiary = projects.find((p) => p.slug === 'comic-diary') || projects[1];
  const talentSentinel = projects.find((p) => p.slug === 'talent-sentinel') || projects[2];
  const orderMyGiftNow = projects.find((p) => p.slug === 'ordermygiftnow') || projects[3];

  return (
    <section id="work" className="section-padding relative w-full max-w-full overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute right-0 top-[20%] h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-accent-400/5 blur-[120px] max-w-full" aria-hidden />
      <div className="pointer-events-none absolute left-0 bottom-[20%] h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-accent-500/5 blur-[120px] max-w-full" aria-hidden />

      <div className="container-content relative w-full min-w-0">
        <SectionHeading
          eyebrow="SELECTED WORK"
          title={<>Featured Work</>}
          description="Projects spanning multi-agent AI systems, generative visual products, predictive machine learning analytics, and real-world commercial web applications. Each built with focused architecture and clear engineering outcomes."
        />

        <div className="mt-16 flex flex-col gap-10 sm:gap-14">
          {/* ============================================================
              01 — HERO PROJECT: AIDRA
              ============================================================ */}
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.25rem] border border-white/[0.08] bg-paper-100/60 p-4 sm:p-8 lg:p-10 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:border-accent-400/40 hover:bg-paper-100/75 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55),0_0_32px_rgba(79,107,255,0.12)]">
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4 sm:pb-5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
                    <span className="h-2 w-2 rounded-full bg-gradient-aurora shadow-[0_0_8px_#4F6BFF]" />
                    {aidra.number} — HERO PROJECT
                  </span>
                  <span className="h-1 w-1 rounded-full bg-paper-400 hidden xs:inline-block" />
                  <span className="font-mono text-xs text-ink-600 dark:text-ink-400">{aidra.category}</span>
                </div>
                {aidra.status && (
                  <span className="flex items-center gap-1.5 rounded-full border border-accent-400/30 bg-accent-400/10 px-3 py-1 font-mono text-[11px] sm:text-xs font-semibold text-accent-400 shadow-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
                    {aidra.status}
                  </span>
                )}
              </div>

              {/* Main Content Grid */}
              <div className="mt-6 sm:mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
                {/* Left info column (7 cols) */}
                <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-7 min-w-0">
                  <div>
                    <h3 className="font-display text-display-lg sm:text-display-xl font-700 text-ink-900 leading-tight">
                      {aidra.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 font-display text-base sm:text-lg lg:text-xl text-ink-700 dark:text-ink-300 font-400 text-pretty">
                      {aidra.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-ink-700 dark:text-ink-300 text-pretty font-300">
                    {aidra.summary}
                  </p>

                  {/* Conceptual Architecture Flow Diagram */}
                  <div className="flex flex-col gap-2.5 sm:gap-3 rounded-2xl border border-white/[0.07] bg-paper-200/50 backdrop-blur-md p-3.5 sm:p-5">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-600 dark:text-ink-400">
                      System Architecture Flow
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 font-mono text-[11px] sm:text-xs">
                      {aidra.visualFlow?.map((node, idx) => (
                        <div key={node} className="flex items-center gap-1.5 sm:gap-2">
                          <span className="rounded-lg border border-white/[0.08] bg-paper-100/90 px-2.5 sm:px-3 py-1 text-ink-900 dark:text-ink-100 font-medium shadow-xs">
                            {node}
                          </span>
                          {idx < (aidra.visualFlow?.length || 0) - 1 && (
                            <span className="text-accent-400 font-bold">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {aidra.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink-900/10 dark:border-white/[0.1] bg-paper-200/80 backdrop-blur-sm px-3 py-1 font-mono text-xs font-medium text-ink-800 dark:text-ink-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contribution summary */}
                  {aidra.contribution && (
                    <div className="rounded-r-xl border-l-2 border-accent-400 bg-paper-200/50 py-3 pl-3.5 pr-3 text-xs sm:text-sm leading-relaxed text-ink-800 dark:text-ink-200 font-normal break-words">
                      <span className="font-semibold text-ink-900 dark:text-white">Role & Contribution: </span>
                      {aidra.contribution}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      to={`/work/${aidra.slug}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-aurora px-6 py-3.5 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:opacity-95 shadow-[0_4px_20px_rgba(79,107,255,0.3)] hover:shadow-[0_4px_28px_rgba(79,107,255,0.45)]"
                    >
                      <span>View project & case study</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>

                {/* Right Visual / Staging Area (5 cols) */}
                <div className="flex flex-col gap-4 lg:col-span-5 min-w-0 w-full">
                  <ProjectScreenshot
                    candidates={[
                      'landingpageaidra.png',
                      'landingpageaidra',
                      'dashboardaidra.png',
                      'dashboardaidra',
                      'databasenodesaidra.png',
                      'databasenodesaidra',
                      'sampleresultaidra.png',
                    ]}
                    alt="AIDRA — Agentic Intelligence for Explainable Drug Repurposing"
                    badge="AIDRA · Live System & Architecture"
                    aspectRatio="video"
                    fallbackTitle="AIDRA Multi-Agent & Dashboard Visual"
                    fallbackDescription="Deterministic multi-agent pipeline with CrewAI, FastAPI backend, and Neo4j relational knowledge graph."
                  />

                  {/* Secondary Screenshot Preview */}
                  <ProjectScreenshot
                    candidates={[
                      'dashboardaidra.png',
                      'dashboardaidra',
                      'databasenodesaidra.png',
                      'databasenodesaidra',
                      'sampleresultaidra.png',
                      'sampleresultaidra',
                    ]}
                    alt="AIDRA Dashboard & Knowledge Graph"
                    badge="Product Dashboard & Knowledge Graph"
                    aspectRatio="tall"
                    fallbackTitle="Interactive Dashboard & Cypher Graph"
                    fallbackDescription="Query input interface and entity relationship visualizer."
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* ============================================================
              02 — COMIC DIARY (Featured AI Product & Frontend Suite)
              ============================================================ */}
          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.25rem] border border-white/[0.08] bg-paper-100/60 p-4 sm:p-8 lg:p-10 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:border-accent-500/40 hover:bg-paper-100/75 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55),0_0_32px_rgba(139,92,246,0.12)]">
              {/* Top Meta Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4 sm:pb-5">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent-500">
                    <span className="h-2 w-2 rounded-full bg-gradient-aurora shadow-[0_0_8px_#8B5CF6]" />
                    {comicDiary.number} — AI PRODUCT & FRONTEND
                  </span>
                  <span className="h-1 w-1 rounded-full bg-paper-400 hidden xs:inline-block" />
                  <span className="font-mono text-xs text-ink-600 dark:text-ink-400">{comicDiary.category}</span>
                </div>
                <span className="font-mono text-xs text-ink-500">{comicDiary.year}</span>
              </div>

              {/* Main Content Grid */}
              <div className="mt-6 sm:mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Left info column (7 cols) */}
                <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-7 min-w-0">
                  <div>
                    <h3 className="font-display text-display-lg sm:text-display-xl font-700 text-ink-900 leading-tight">
                      {comicDiary.title}
                    </h3>
                    <p className="mt-1.5 sm:mt-2 font-display text-base sm:text-lg lg:text-xl text-ink-700 dark:text-ink-300 font-400 text-pretty">
                      {comicDiary.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-ink-700 dark:text-ink-300 text-pretty font-300">
                    {comicDiary.summary}
                  </p>

                  {/* Workflow Pipeline */}
                  <div className="flex flex-col gap-2.5 sm:gap-3 rounded-2xl border border-white/[0.07] bg-paper-200/50 backdrop-blur-md p-3.5 sm:p-5">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-600 dark:text-ink-400">
                      Visual Generation & Storyboard Pipeline
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 font-mono text-[11px] sm:text-xs">
                      {comicDiary.visualFlow?.map((node, idx) => (
                        <div key={node} className="flex items-center gap-1.5 sm:gap-2">
                          <span className="rounded-lg border border-white/[0.08] bg-paper-100/90 px-2.5 sm:px-3 py-1 text-ink-900 dark:text-ink-100 font-medium shadow-xs">
                            {node}
                          </span>
                          {idx < (comicDiary.visualFlow?.length || 0) - 1 && (
                            <span className="text-accent-500 font-bold">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {comicDiary.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink-900/10 dark:border-white/[0.1] bg-paper-200/80 backdrop-blur-sm px-3 py-1 font-mono text-xs font-medium text-ink-800 dark:text-ink-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contribution summary */}
                  {comicDiary.contribution && (
                    <div className="rounded-r-xl border-l-2 border-accent-500 bg-paper-200/50 py-3 pl-3.5 pr-3 text-xs sm:text-sm leading-relaxed text-ink-800 dark:text-ink-200 font-normal break-words">
                      <span className="font-semibold text-ink-900 dark:text-white">Role & Contribution: </span>
                      {comicDiary.contribution}
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href="https://comic-diary.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full bg-gradient-aurora px-6 py-3.5 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:opacity-95 cursor-pointer"
                    >
                      <span>View project</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <Link
                      to={`/work/${comicDiary.slug}`}
                      className="group inline-flex items-center gap-1.5 rounded-full border border-white/[0.12] bg-paper-200/60 backdrop-blur-md px-5 py-3.5 text-xs font-mono font-medium text-ink-800 dark:text-ink-200 transition-all duration-200 hover:border-white/[0.25] hover:text-ink-900 shadow-sm"
                    >
                      <span>Case study</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent-400" />
                    </Link>
                  </div>
                </div>

                {/* Right Visual / Product Staging Mockup (5 cols) */}
                <div className="flex flex-col gap-4 lg:col-span-5 min-w-0 w-full">
                  <ProjectScreenshot
                    candidates={[
                      'comic result1.png',
                      'comic result 1.png',
                      'comic result1',
                      'compilercomicdiary having examples  (1).png',
                      'compilercomicdiary-example-1.png',
                      'compilercomicdiary having examples (1).png',
                      'editorcomicdiary.png',
                      'dashboardcomic diary.png',
                    ]}
                    alt="Comic Diary — Compiled Comic Strip Result 01"
                    badge="Comic Diary · Compiled Comic Result 01"
                    aspectRatio="video"
                    fallbackTitle="Comic Diary Compiled Result 01"
                    fallbackDescription="Generated multi-panel comic output with dynamic panel layouts, speech bubble rendering, and character framing."
                  />
                  
                  {/* Secondary Preview - Comic Result 2 */}
                  <ProjectScreenshot
                    candidates={[
                      'comic result 2.png',
                      'comic result 2',
                      'compilercomicdiary having examples  (2).png',
                      'compilercomicdiary-example-2.png',
                      'compilercomicdiary having examples (2).png',
                      'editorcomicdiary.png',
                      'dashboardcomic diary.png',
                    ]}
                    alt="Comic Diary — Compiled Comic Strip Result 02"
                    badge="Comic Diary · Compiled Comic Result 02"
                    aspectRatio="tall"
                    fallbackTitle="Comic Diary Compiled Result 02"
                    fallbackDescription="Sequential comic strip generation showcasing emotional tone pacing and dialogue continuity across panels."
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* ============================================================
              03 & 04 — ANALYTICS & COMMERCIAL WEB (2 Columns Grid)
              ============================================================ */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* 03 — TALENT SENTINEL */}
            <Reveal delay={150}>
              <div className="flex h-full flex-col justify-between rounded-2xl sm:rounded-[2.25rem] border border-white/[0.08] bg-paper-100/60 p-4 sm:p-7 lg:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:border-accent-400/40 hover:bg-paper-100/75 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55),0_0_30px_rgba(79,107,255,0.1)]">
                <div className="flex flex-col gap-4 sm:gap-5 min-w-0">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-3.5 sm:pb-4">
                    <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
                      <span className="h-2 w-2 rounded-full bg-gradient-aurora shadow-[0_0_8px_#4F6BFF]" />
                      {talentSentinel.number} — PREDICTIVE ANALYTICS
                    </span>
                    <span className="font-mono text-xs text-ink-500">{talentSentinel.year}</span>
                  </div>

                  <div>
                    <h3 className="font-display text-display-md font-700 text-ink-900 leading-tight">
                      {talentSentinel.title}
                    </h3>
                    <p className="mt-1 font-display text-sm sm:text-base text-ink-700 dark:text-ink-300 font-400">
                      {talentSentinel.subtitle}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-300 text-pretty font-300">
                    {talentSentinel.summary}
                  </p>

                  {/* Screenshot Visual */}
                  <ProjectScreenshot
                    candidates={[
                      'dashbaordtalent.png',
                      'dashbaordtalent',
                      'dashboardtalent.png',
                      "advanceworkforceanalysistalent'.png",
                      'advanceworkforceanalysistalent.png',
                      'employeeretentionand departmentperformacetalent.png',
                      'forecastriskvssatisfactiontalent.png',
                      'monthlyattritiontrendtalent.png',
                    ]}
                    alt="Talent Sentinel — Employee Attrition & Predictive HR Analytics"
                    badge="HR Analytics Dashboard"
                    aspectRatio="video"
                    fallbackTitle="Talent Sentinel Analytics"
                    fallbackDescription="Predictive classification system identifying key retention metrics with 82.4% test precision."
                  />

                  {/* Visual flow */}
                  <div className="rounded-2xl border border-white/[0.07] bg-paper-200/50 backdrop-blur-md p-3.5 sm:p-4">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-600 dark:text-ink-400">
                      Workflow Pipeline
                    </span>
                    <div className="mt-2 flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
                      {talentSentinel.visualFlow?.map((node, idx) => (
                        <div key={node} className="flex items-center gap-1.5">
                          <span className="rounded-md border border-white/[0.08] bg-paper-100/90 px-2.5 py-0.5 text-ink-900 dark:text-ink-100 font-medium">
                            {node}
                          </span>
                          {idx < (talentSentinel.visualFlow?.length || 0) - 1 && (
                            <span className="text-accent-400 font-bold">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Metric Callout */}
                  {talentSentinel.metricHighlight && (
                    <div className="flex items-baseline gap-3 rounded-2xl bg-paper-200/50 border border-white/[0.07] backdrop-blur-md p-3.5 sm:p-4">
                      <span className="font-display text-2xl font-700 text-ink-900">
                        {talentSentinel.metricHighlight.value}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-mono text-xs font-semibold text-ink-900 dark:text-ink-100">
                          {talentSentinel.metricHighlight.label}
                        </span>
                        <span className="text-[11px] text-ink-600 dark:text-ink-400">
                          {talentSentinel.metricHighlight.note}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {talentSentinel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink-900/10 dark:border-white/[0.1] bg-paper-200/80 backdrop-blur-sm px-2.5 py-0.5 font-mono text-[11px] text-ink-800 dark:text-ink-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer link */}
                <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-white/[0.07]">
                  <Link
                    to={`/work/${talentSentinel.slug}`}
                    className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink-900 dark:text-white transition-colors hover:text-accent-400"
                  >
                    <span>View case study</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent-400" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* 04 — BUILT FOR THE REAL WORLD: ORDERMYGIFTNOW */}
            <Reveal delay={200}>
              <div className="flex h-full flex-col justify-between rounded-2xl sm:rounded-[2.25rem] border border-white/[0.08] bg-paper-100/60 p-4 sm:p-7 lg:p-8 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:border-accent-400/40 hover:bg-paper-100/75 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55),0_0_30px_rgba(79,107,255,0.1)]">
                <div className="flex flex-col gap-4 sm:gap-5 min-w-0">
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-white/[0.07] pb-3.5 sm:pb-4">
                    <span className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
                      <span className="h-2 w-2 rounded-full bg-gradient-aurora shadow-[0_0_8px_#4F6BFF]" />
                      {orderMyGiftNow.number} — COMMERCIAL WEB
                    </span>
                    <span className="font-mono text-xs text-ink-500">{orderMyGiftNow.year}</span>
                  </div>

                  <div>
                    <span className="font-mono text-xs font-semibold text-accent-400">
                      {orderMyGiftNow.projectName}
                    </span>
                    <h3 className="font-display text-display-md font-700 text-ink-900 leading-tight">
                      {orderMyGiftNow.title}
                    </h3>
                    <p className="mt-1 font-display text-sm sm:text-base text-ink-700 dark:text-ink-300 font-400">
                      {orderMyGiftNow.subtitle}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-300 text-pretty font-300">
                    {orderMyGiftNow.summary}
                  </p>

                  {/* Screenshot Visual */}
                  <ProjectScreenshot
                    candidates={[
                      'landingpageordermygiftnow.png',
                      'landingpageordermygiftnow',
                      'landingpageordermygiftnow.jpg',
                      'ordermygiftnow.png',
                      'ordermygiftnow',
                    ]}
                    alt="ORDERMYGIFTNOW — Real-World E-Commerce Website"
                    badge="Commercial E-Commerce Storefront"
                    aspectRatio="video"
                    fallbackTitle="ORDERMYGIFTNOW Storefront"
                    fallbackDescription="Production e-commerce platform with product catalogs, shopping workflows, and conversion-focused design."
                  />

                  {/* Feature Highlights */}
                  <div className="rounded-2xl border border-white/[0.07] bg-paper-200/50 backdrop-blur-md p-3.5 sm:p-4">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-600 dark:text-ink-400">
                      Key Deliverables
                    </span>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                      {[
                        'Product catalog with filtering',
                        'Cart & checkout flow',
                        'Mobile-responsive layout',
                        'Brand visual identity',
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-1.5 text-ink-800 dark:text-ink-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-400 shrink-0" />
                          <span className="text-[11px] font-medium leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {orderMyGiftNow.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink-900/10 dark:border-white/[0.1] bg-paper-200/80 backdrop-blur-sm px-2.5 py-0.5 font-mono text-[11px] text-ink-800 dark:text-ink-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer links */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-white/[0.07]">
                  {orderMyGiftNow.liveUrl && (
                    <a
                      href={orderMyGiftNow.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink-900 dark:text-white transition-colors hover:text-accent-400 cursor-pointer"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent-400" />
                    </a>
                  )}
                  <Link
                    to={`/work/${orderMyGiftNow.slug}`}
                    className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-ink-700 dark:text-ink-300 transition-colors hover:text-accent-400"
                  >
                    <span>Read case study</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
