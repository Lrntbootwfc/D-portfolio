import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  ShieldAlert,
  LineChart,
  Palette,
  MessageSquare,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { projects } from '@/data/portfolio';
import Reveal from '@/components/ui/Reveal';
import ProjectScreenshot from '@/components/ui/ProjectScreenshot';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container-content flex min-h-[70vh] flex-col items-center justify-center gap-6 pt-28">
        <h1 className="font-display text-display-lg text-ink-900">Project not found</h1>
        <p className="text-ink-500">The requested case study could not be located.</p>
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-aurora px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 shadow-md shadow-accent-400/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Featured Work
        </Link>
      </div>
    );
  }

  const caseStudy = project.caseStudy;

  return (
    <article className="pt-24 pb-28 relative w-full max-w-full overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 h-[350px] w-[350px] sm:h-[500px] sm:w-[650px] rounded-full bg-accent-400/8 blur-[120px] max-w-full" aria-hidden />

      {/* ============================================================
          TOP NAVIGATION & HERO HEADER
          ============================================================ */}
      <div className="container-content relative w-full min-w-0">
        <Reveal className="flex flex-col gap-6 border-b border-white/[0.08] pb-12">
          <Link
            to="/#work"
            className="group inline-flex w-fit items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink-500 transition-colors hover:text-accent-400"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Back to Selected Work
          </Link>

          {/* Number & Category & Year */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <span className="rounded-full bg-accent-400/15 border border-accent-400/30 px-3 py-1 font-mono text-xs font-semibold text-accent-400 shadow-xs">
              {project.number} — {project.category}
            </span>
            <span className="font-mono text-xs text-ink-400">· {project.year}</span>
            {project.status && (
              <span className="rounded-full border border-white/[0.08] bg-paper-200/50 px-3 py-1 font-mono text-xs text-ink-700 backdrop-blur-md">
                {project.status}
              </span>
            )}
          </div>

          {/* Main Title & Subtitle */}
          <div>
            <h1 className="font-display text-display-2xl font-700 text-ink-900 leading-tight">
              {project.title}
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-ink-600 font-300 max-w-prose leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.08] bg-paper-100/70 backdrop-blur-md px-3.5 py-1 font-mono text-xs text-ink-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Live URL button */}
          {project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-aurora px-6 py-2.5 text-xs font-mono font-medium text-white transition-all hover:opacity-95 cursor-pointer"
              >
                {project.slug === 'comic-diary' ? 'View live project' : 'Visit Live Platform'}
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          )}
        </Reveal>
      </div>

      {/* ============================================================
          STRUCTURED CASE STUDY SECTIONS
          ============================================================ */}
      {caseStudy ? (
        <div className="container-content mt-16 flex flex-col gap-20 relative">
          {/* 01. OVERVIEW */}
          <Reveal>
            <section className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
                  01 / OVERVIEW
                </span>
                <h2 className="mt-1 font-display text-display-md font-600 text-ink-900">
                  Project Summary
                </h2>
              </div>
              <div className="lg:col-span-8 flex flex-col gap-6">
                <p className="text-base sm:text-lg leading-relaxed text-ink-700 text-pretty font-300">
                  {caseStudy.overview}
                </p>

                {/* Primary Hero Screenshot */}
                {project.slug === 'aidra' && (
                  <ProjectScreenshot
                    candidates={[
                      'landingpageaidra.png',
                      'landingpageaidra',
                      'landingpageaidra.jpg',
                      'dashboardaidra.png',
                      'databasenodesaidra.png',
                    ]}
                    alt="AIDRA Landing Page & Main Visual"
                    badge="AIDRA · Landing Page Visual"
                    aspectRatio="video"
                    caption="Primary application landing interface detailing biomedical search parameters and query orchestration."
                    fallbackTitle="AIDRA Landing Page Visual"
                    fallbackDescription="Main landing page visual representation for AIDRA research software."
                  />
                )}

                {project.slug === 'comic-diary' && (
                  <ProjectScreenshot
                    candidates={[
                      'compilercomicdiary having examples  (1).png',
                      'compilercomicdiary-example-1.png',
                      'compilercomicdiary having examples  (2).png',
                      'compilercomicdiary-example-2.png',
                      'comic compilercomicdiary.png',
                      'comic compilercomicdiary',
                      'editorcomicdiary.png',
                      'dashboardcomic diary.png',
                    ]}
                    alt="Comic Diary — Compiled Comic Strip Result 01"
                    badge="Comic Diary · Compiled Comic Result 01"
                    aspectRatio="video"
                    caption="Generated multi-panel comic output with dynamic panel layouts, speech bubble rendering, and character framing."
                    fallbackTitle="Comic Diary Compiled Result 01"
                    fallbackDescription="Full interactive canvas suite converting reflections into expressive multi-panel comic strips."
                  />
                )}

                {project.slug === 'talent-sentinel' && (
                  <ProjectScreenshot
                    candidates={[
                      'dashbaordtalent.png',
                      'dashbaordtalent',
                      'dashboardtalent.png',
                      "advanceworkforceanalysistalent'.png",
                      'advanceworkforceanalysistalent.png',
                    ]}
                    alt="Talent Sentinel Executive HR Analytics Dashboard"
                    badge="Talent Sentinel · Primary Dashboard Visual"
                    aspectRatio="video"
                    caption="Comprehensive predictive attrition dashboard tracking risk distribution and turnover metrics."
                    fallbackTitle="Talent Sentinel Dashboard"
                    fallbackDescription="Executive analytics console displaying employee retention risk factors."
                  />
                )}

                {project.slug === 'ordermygiftnow' && (
                  <ProjectScreenshot
                    candidates={[
                      'landingpageordermygiftnow.png',
                      'landingpageordermygiftnow',
                      'landingpageordermygiftnow.jpg',
                      'ordermygiftnow.png',
                      'ordermygiftnow',
                    ]}
                    alt="ORDERMYGIFTNOW Real-World E-Commerce Storefront"
                    badge="ORDERMYGIFTNOW · Live Storefront Screenshot"
                    aspectRatio="video"
                    caption="Live digital storefront designed for occasion-based gift discovery and seamless mobile checkout."
                    fallbackTitle="ORDERMYGIFTNOW Real Website Visual"
                    fallbackDescription="Live e-commerce storefront layout for commercial gift venture."
                  />
                )}
              </div>
            </section>
          </Reveal>

          {/* 02. PROBLEM & 03. APPROACH */}
          <Reveal>
            <section className="grid gap-8 lg:grid-cols-2 border-t border-white/[0.08] pt-16">
              {/* Problem */}
              <div className="flex flex-col gap-4 rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-8 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
                  02 / THE CHALLENGE
                </span>
                <h3 className="font-display text-2xl font-600 text-ink-900">
                  Problem Statement
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-ink-600 text-pretty font-300">
                  {caseStudy.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="flex flex-col gap-4 rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-8 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
                  03 / METHODOLOGY
                </span>
                <h3 className="font-display text-2xl font-600 text-ink-900">
                  Proposed Solution
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-ink-600 text-pretty font-300">
                  {caseStudy.approach}
                </p>
              </div>
            </section>
          </Reveal>

          {/* 04. SYSTEM ARCHITECTURE */}
          <Reveal>
            <section className="border-t border-white/[0.08] pt-16">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
                04 / ARCHITECTURE
              </span>
              <h2 className="mt-1 font-display text-display-md font-600 text-ink-900">
                System Topology & Pipeline
              </h2>
              <p className="mt-3 text-sm sm:text-base text-ink-600 max-w-prose text-pretty font-300">
                {caseStudy.architecture.description}
              </p>

              {/* Architecture Steps Box */}
              <div className="mt-8 rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-6 sm:p-8 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {caseStudy.architecture.flow.map((step, idx) => (
                    <div
                      key={step}
                      className="flex flex-col gap-2 rounded-2xl border border-white/[0.07] bg-paper-200/50 p-5 backdrop-blur-md transition-all hover:border-accent-400/40"
                    >
                      <span className="font-mono text-[11px] font-semibold text-accent-400">
                        STAGE 0{idx + 1}
                      </span>
                      <span className="text-sm font-medium text-ink-900">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture Screenshot for AIDRA */}
              {project.slug === 'aidra' && (
                <div className="mt-8">
                  <ProjectScreenshot
                    candidates={[
                      'multi-agent orchestration',
                      'multi-agent-orchestration',
                      'multi_agent_orchestration',
                      'aidra-architecture',
                      'aidra-orchestration',
                      'architecture',
                    ]}
                    alt="AIDRA Multi-Agent Orchestration & System Architecture"
                    badge="System Architecture & Multi-Agent Orchestration"
                    aspectRatio="video"
                    caption="Actual system architecture showing CrewAI multi-agent coordinator, FastAPI task endpoints, and Neo4j graph traversal layer."
                    fallbackTitle="AIDRA Multi-Agent Orchestration"
                    fallbackDescription="System topology connecting CrewAI specialist agents with Neo4j graph database and FastAPI."
                  />
                </div>
              )}
            </section>
          </Reveal>

          {/* 05. IMPLEMENTATION & 06. MY CONTRIBUTION */}
          <Reveal>
            <section className="grid gap-8 lg:grid-cols-2 border-t border-white/[0.08] pt-16">
              {/* Implementation */}
              <div className="flex flex-col gap-6">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
                    05 / TECHNICAL SPECIFICATIONS
                  </span>
                  <h3 className="mt-1 font-display text-display-md font-600 text-ink-900">
                    Implementation Details
                  </h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {caseStudy.implementation.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700 font-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* My Contribution */}
              <div className="flex flex-col gap-6 rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-8 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
                    06 / ROLE & OWNERSHIP
                  </span>
                  <h3 className="mt-1 font-display text-display-md font-600 text-ink-900">
                    My Contribution
                  </h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {caseStudy.contribution.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-ink-700 font-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </Reveal>

          {/* 07. VISUAL ARTIFACTS & SCREENSHOT GALLERY */}
          <Reveal>
            <section className="border-t border-white/[0.08] pt-16">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
                  07 / VISUALS & ARTIFACTS
                </span>
                <h2 className="font-display text-display-md font-600 text-ink-900">
                  Project Asset Staging & Architecture Visuals
                </h2>
                <p className="text-sm text-ink-500 font-300">
                  Interactive breakdowns, real screenshots, and visual representations of core modules, database queries, and user workflows.
                </p>
              </div>

              {/* Custom interactive artifact preview per project */}
              <div className="mt-8">
                {project.slug === 'aidra' && <AidraArtifacts />}
                {project.slug === 'comic-diary' && <ComicDiaryArtifacts />}
                {project.slug === 'talent-sentinel' && <TalentSentinelArtifacts />}
                {project.slug === 'ordermygiftnow' && <OrderMyGiftNowArtifacts />}
              </div>

              {/* Structured artifact metadata grid */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {caseStudy.visualPlaceholders.map((visual) => (
                  <div
                    key={visual.id}
                    className="flex flex-col justify-between rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-6 sm:p-7 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all hover:border-accent-400/40"
                  >
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-400">
                        {visual.title}
                      </span>
                      <p className="text-xs sm:text-sm text-ink-600 leading-relaxed font-300">
                        {visual.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.07] pt-3 text-[11px] font-mono text-ink-400">
                      <span>Module Artifact</span>
                      <span className="text-accent-400">Documented</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          {/* 08. OUTCOME & DISCLAIMER */}
          <Reveal>
            <section className="border-t border-white/[0.08] pt-16">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
                08 / OUTCOMES & BENCHMARKS
              </span>
              <h2 className="mt-1 font-display text-display-md font-600 text-ink-900">
                Key Deliverables & Results
              </h2>
              <div className="mt-6 rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-8 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <p className="text-base leading-relaxed text-ink-700 text-pretty font-300">
                  {caseStudy.outcome}
                </p>
                {caseStudy.disclaimer && (
                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-paper-200/50 p-4 text-xs leading-relaxed text-ink-500 backdrop-blur-md">
                    <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                    <span>{caseStudy.disclaimer}</span>
                  </div>
                )}
              </div>
            </section>
          </Reveal>

          {/* Pagination Navigation between projects */}
          <Reveal>
            <ProjectPagination currentSlug={project.slug} />
          </Reveal>
        </div>
      ) : null}
    </article>
  );
}

function AidraArtifacts() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'graph' | 'schema'>('dashboard');
  const [activeShot, setActiveShot] = useState<number>(0);

  const aidraShots = [
    {
      candidate: 'landingpageaidra.png',
      candidates: ['landingpageaidra.png', 'landingpageaidra.jpg', 'landingpageaidra'],
      title: '01. Landing & System Architecture',
      alt: 'AIDRA Landing Page & System Scope',
      caption: 'Main entrance interface describing multi-agent biomedical workflow and search orchestration.',
    },
    {
      candidate: 'dashboardaidra.png',
      candidates: ['dashboardaidra.png', 'dashboardaidra.jpg', 'dashboardaidra'],
      title: '02. Research Console & Agents',
      alt: 'AIDRA Biomedical Query Console',
      caption: 'Query parameters, live agent execution tracking, and structured literature synthesis.',
    },
    {
      candidate: 'databasenodesaidra.png',
      candidates: ['databasenodesaidra.png', 'databasenodesaidra.jpg', 'databasenodesaidra'],
      title: '03. Neo4j Knowledge Graph',
      alt: 'AIDRA Neo4j Entity Relationship Graph',
      caption: 'Relational entity visualization mapping Compound → Target → Pathway → Disease interactions.',
    },
    {
      candidate: 'sampleresultaidra.png',
      candidates: ['sampleresultaidra.png', 'sampleresultaidra', 'dashboardaidra.png'],
      title: '04. Structured Sample Output',
      alt: 'AIDRA Repurposing Result & Confidence',
      caption: 'Deterministic validation score and biomedical citations generated from multi-agent synthesis.',
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Interactive Screenshot Selector Gallery */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-5 sm:p-7 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-400">
              Interactive Screenshot Gallery ({aidraShots.length} System Views)
            </span>
            <h3 className="font-display text-lg font-600 text-ink-900">
              {aidraShots[activeShot].title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {aidraShots.map((shot, idx) => (
              <button
                key={shot.title}
                onClick={() => setActiveShot(idx)}
                className={`rounded-xl px-3 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                  activeShot === idx
                    ? 'border border-accent-400/40 bg-accent-400/20 text-accent-400 font-medium shadow-xs'
                    : 'border border-white/[0.07] bg-paper-200/50 text-ink-600 hover:bg-paper-200/80 hover:text-ink-900'
                }`}
              >
                Visual 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <ProjectScreenshot
            candidates={aidraShots[activeShot].candidates}
            alt={aidraShots[activeShot].alt}
            badge={`AIDRA Visual 0${activeShot + 1} · ${aidraShots[activeShot].title}`}
            aspectRatio="video"
            caption={aidraShots[activeShot].caption}
          />
        </div>
      </div>

      {/* Complete Multi-Screenshot System Showcase */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-6 sm:p-8 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="mb-6 border-b border-white/[0.07] pb-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
            System Walkthrough & Visual Artifacts
          </span>
          <h3 className="mt-1 font-display text-xl font-600 text-ink-900">
            Biomedical Multi-Agent System Views
          </h3>
          <p className="mt-1 text-xs text-ink-500 font-mono">
            Click any screenshot to expand into full raw high-resolution inspect mode.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {aidraShots.map((shot, idx) => (
            <div key={shot.title} className="flex flex-col gap-2">
              <span className="font-mono text-xs font-semibold text-ink-800">
                {shot.title}
              </span>
              <ProjectScreenshot
                candidates={shot.candidates}
                alt={shot.alt}
                badge={`AIDRA 0${idx + 1}`}
                aspectRatio="video"
                caption={shot.caption}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Code & Schema Inspector */}
      <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-paper-100/60 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        {/* Tab Navigation Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/[0.07] bg-paper-200/60 px-5 py-3">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`rounded-xl px-3 py-1.5 text-xs font-mono font-medium transition-colors ${
                activeTab === 'dashboard'
                  ? 'border border-accent-400/40 bg-accent-400/20 text-accent-400'
                  : 'border border-transparent text-ink-600 hover:text-ink-900'
              }`}
            >
              01. Hypothesis Summary
            </button>
            <button
              onClick={() => setActiveTab('graph')}
              className={`rounded-xl px-3 py-1.5 text-xs font-mono font-medium transition-colors ${
                activeTab === 'graph'
                  ? 'border border-accent-400/40 bg-accent-400/20 text-accent-400'
                  : 'border border-transparent text-ink-600 hover:text-ink-900'
              }`}
            >
              02. Neo4j Cypher Traversal
            </button>
            <button
              onClick={() => setActiveTab('schema')}
              className={`rounded-xl px-3 py-1.5 text-xs font-mono font-medium transition-colors ${
                activeTab === 'schema'
                  ? 'border border-accent-400/40 bg-accent-400/20 text-accent-400'
                  : 'border border-transparent text-ink-600 hover:text-ink-900'
              }`}
            >
              03. Pydantic Output Schema
            </button>
          </div>
          <span className="font-mono text-[10px] text-ink-500 hidden sm:inline">
            CrewAI + FastAPI + Neo4j
          </span>
        </div>

        {/* Tab View Contents */}
        <div className="p-6 sm:p-8">
          {activeTab === 'dashboard' && (
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                <span className="font-mono text-xs font-semibold text-ink-800">
                  Agentic Investigation Console
                </span>
                <span className="rounded-full bg-accent-400/15 border border-accent-400/30 px-2.5 py-0.5 font-mono text-[10px] text-accent-400">
                  Status: Complete
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-3 font-mono text-xs">
                <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 p-4 backdrop-blur-md">
                  <span className="text-[10px] text-ink-500 uppercase">Input Compound</span>
                  <p className="mt-1 font-semibold text-ink-900">Metformin Hydrochloride</p>
                  <p className="text-[11px] text-ink-500 mt-1">Target: AMPK / mTOR Signaling</p>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 p-4 backdrop-blur-md">
                  <span className="text-[10px] text-ink-500 uppercase">Crew Execution</span>
                  <p className="mt-1 font-semibold text-ink-900">3 Specialist Agents</p>
                  <p className="text-[11px] text-ink-500 mt-1">14 PubMed Papers Parsed</p>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 p-4 backdrop-blur-md">
                  <span className="text-[10px] text-ink-500 uppercase">Repurposing Target</span>
                  <p className="mt-1 font-semibold text-ink-900">Oncological Pathways</p>
                  <p className="text-[11px] text-ink-500 mt-1">Confidence Score: 0.87</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 p-4 backdrop-blur-md">
                <span className="font-mono text-[11px] font-semibold text-ink-700">
                  Synthesized Hypothesis Summary:
                </span>
                <p className="mt-2 text-xs leading-relaxed text-ink-600 font-sans font-300">
                  "Evidence indicates downstream activation of AMPK pathway by Metformin inhibits mTORC1 complex formation, presenting a reproducible biological rationale for adjuvant therapeutic trials in glioblastoma cellular proliferation assays."
                </p>
              </div>
            </div>
          )}

          {activeTab === 'graph' && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                <span className="font-mono text-xs font-semibold text-ink-800">
                  Neo4j Relational Schema & Cypher Query Engine
                </span>
                <span className="font-mono text-[10px] text-ink-500">Database: Neo4j 5.x</span>
              </div>
              <div className="rounded-2xl bg-black/50 border border-white/[0.08] p-4 text-ink-700 font-mono text-xs overflow-x-auto">
                <span className="text-accent-400">// Cypher Traversal Query</span>
                <pre className="mt-2 text-[11px] leading-relaxed text-ink-700">
{`MATCH (c:Compound {name: "Metformin"})-[:TARGETS]->(p:Protein)-[:REGULATES]->(path:Pathway)
MATCH (path)-[:ASSOCIATED_WITH]->(d:Disease)
WHERE d.name CONTAINS "Glioblastoma"
RETURN c, p, path, d, [(c)-[r]->(p) | r.confidence] AS score
ORDER BY score DESC LIMIT 5`}
                </pre>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono text-xs pt-2">
                <div className="rounded-xl border border-white/[0.07] bg-paper-200/40 p-3 backdrop-blur-md">
                  <span className="font-semibold text-ink-900">Compound</span>
                  <p className="text-[10px] text-ink-500">Properties: SMILES, PubChem CID</p>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-paper-200/40 p-3 backdrop-blur-md">
                  <span className="font-semibold text-ink-900">Target</span>
                  <p className="text-[10px] text-ink-500">Properties: UniProt ID, Gene</p>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-paper-200/40 p-3 backdrop-blur-md">
                  <span className="font-semibold text-ink-900">Pathway</span>
                  <p className="text-[10px] text-ink-500">Properties: KEGG / Reactome</p>
                </div>
                <div className="rounded-xl border border-white/[0.07] bg-paper-200/40 p-3 backdrop-blur-md">
                  <span className="font-semibold text-ink-900">Disease</span>
                  <p className="text-[10px] text-ink-500">Properties: MeSH, ICD-11</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                <span className="font-mono text-xs font-semibold text-ink-800">
                  Deterministic Output Schema (Pydantic / FastAPI)
                </span>
                <span className="font-mono text-[10px] text-accent-400">Schema Validated</span>
              </div>
              <div className="rounded-2xl bg-black/50 border border-white/[0.08] p-4 text-ink-700 font-mono text-[11px] overflow-x-auto">
                <pre className="text-ink-700">
{`{
  "investigation_id": "aidra-capstone-2025-04",
  "compound_name": "Metformin",
  "predicted_indication": "Glioblastoma Multiforme",
  "mechanism_of_action": "AMPK phosphorylation / mTOR downregulation",
  "confidence_score": 0.87,
  "relational_paths_traversed": 42,
  "literature_citations": [
    { "pmid": "31456201", "relevance": "High", "evidence_type": "in_vitro" },
    { "pmid": "29871142", "relevance": "Moderate", "evidence_type": "pathway_review" }
  ],
  "explainability_trace": "Deterministic validation against verified KEGG graph edges."
}`}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ComicDiaryArtifacts() {
  const [activeShot, setActiveShot] = useState<number>(0);
  const [activeStory, setActiveStory] = useState<0 | 1 | 2>(0);

  const comicShots = [
    {
      candidate: 'comic result1.png',
      candidates: ['comic result1.png', 'comic result 1.png', 'comic result1', 'compilercomicdiary having examples  (1).png'],
      title: '01. Compiled Comic Strip Result 01',
      alt: 'Comic Diary Strip Sample 1',
      category: 'Generation Output',
      caption: 'Multi-panel comic output with expressive dialogue bubbles and contextual layouts.',
    },
    {
      candidate: 'comic result 2.png',
      candidates: ['comic result 2.png', 'comic result2.png', 'comic result 2', 'compilercomicdiary having examples  (2).png'],
      title: '02. Compiled Comic Strip Result 02',
      alt: 'Comic Diary Strip Sample 2',
      category: 'Generation Output',
      caption: 'Narrative progression and character emotion visualization across sequence panels.',
    },
    {
      candidate: 'comic compilercomicdiary.png',
      candidates: ['comic-compiler-comicdiary.png', 'comic compilercomicdiary.png', 'comic-compiler-comicdiary', 'comic compilercomicdiary'],
      title: '03. AI Comic Compiler Console',
      alt: 'Comic Diary Compiler Interface',
      category: 'Compiler & Generation',
      caption: 'Prompt parsing engine and automated storyboard generation pipeline with structured dialogue blocks.',
    },
    {
      candidate: 'editorcomicdiary.png',
      candidates: ['editorcomicdiary.png', 'editorcomicdiary'],
      title: '04. Interactive Canvas & Strip Editor',
      alt: 'Comic Diary Canvas Editor',
      category: 'Canvas Studio',
      caption: 'Fine-grained panel manipulation, speech bubble positioning, character asset overlay, and font styling controls.',
    },
    {
      candidate: 'dashboardcomic diary.png',
      candidates: ['dashboard-comicdiary.png', 'dashboardcomic diary.png', 'dashboardcomicdiary.png'],
      title: '05. Journal Archive & Dashboard',
      alt: 'Comic Diary Main Dashboard',
      category: 'Archive & Management',
      caption: 'Chronological strip archive, emotional metrics overview, and quick creation launcher.',
    },
    {
      candidate: 'insightscomic diary.png',
      candidates: ['insights-comicdiary.png', 'insightscomic diary.png', 'insightscomicdiary.png'],
      title: '06. Emotional Trajectory Insights',
      alt: 'Comic Diary Mood & Insights',
      category: 'Analytics & Reflections',
      caption: 'Narrative analytics analyzing mood frequencies, journaling streaks, and reflection summaries over time.',
    },
    {
      candidate: 'messengercomicdiary.png',
      candidates: ['messengercomicdiary.png', 'messengercomicdiary'],
      title: '07. Character Interaction Messenger',
      alt: 'Comic Diary Messenger',
      category: 'Conversational Brainstorming',
      caption: 'Conversational brainstorming interface for generating prompt ideas and scene suggestions.',
    },
    {
      candidate: 'moviesand books comic diary.png',
      candidates: ['movies-books-comicdiary.png', 'moviesand books comic diary.png', 'moviesandbookscomicdiary.png'],
      title: '08. Books & Media Journaling',
      alt: 'Comic Diary Media & Books Logger',
      category: 'Memory & Culture Tracker',
      caption: 'Integrated cultural memory tracker linking books, movies, and reading thoughts into visual entries.',
    },
  ];

  const stories = [
    {
      title: 'Coffee & Code Morning',
      panels: [
        { scene: 'Sunrise at desk', text: 'Another day of turning logic into interfaces.', mood: 'Focus' },
        { scene: 'Coffee mug steam', text: 'First sip... let the creative compilation begin!', mood: 'Energy' },
        { scene: 'Passing test suite', text: 'All units green. Time to ship the feature.', mood: 'Triumph' },
      ],
    },
    {
      title: 'Architecting the Multi-Agent Engine',
      panels: [
        { scene: 'Whiteboard diagram', text: 'Connecting Neo4j nodes to CrewAI specialists.', mood: 'Curiosity' },
        { scene: 'Agent discussion', text: 'Literature agent finds 14 verified citations!', mood: 'Excitement' },
        { scene: 'Structured hypothesis', text: 'Knowledge graph rendered with full explainability.', mood: 'Success' },
      ],
    },
    {
      title: 'Evening Creative Reflection',
      panels: [
        { scene: 'Sunset balcony', text: 'Stepping back to observe what was built today.', mood: 'Calm' },
        { scene: 'Reading recommendations', text: 'AI suggested "Klara and the Sun" for theme match.', mood: 'Inspiration' },
        { scene: 'Journal entry locked', text: 'Comic diary entry saved and compiled to archive.', mood: 'Peace' },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Interactive Screenshot Selector Gallery */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-5 sm:p-7 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-400">
                Interactive Visual Gallery ({comicShots.length} Product Screens)
              </span>
              <span className="rounded-full bg-paper-200/60 border border-white/[0.07] px-2 py-0.5 font-mono text-[10px] text-ink-600">
                {comicShots[activeShot].category}
              </span>
            </div>
            <h3 className="font-display text-lg font-600 text-ink-900 mt-0.5">
              {comicShots[activeShot].title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {comicShots.map((shot, idx) => (
              <button
                key={shot.title}
                onClick={() => setActiveShot(idx)}
                className={`rounded-xl px-2.5 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                  activeShot === idx
                    ? 'border border-accent-400/40 bg-accent-400/20 text-accent-400 font-medium shadow-xs'
                    : 'border border-white/[0.07] bg-paper-200/50 text-ink-600 hover:bg-paper-200/80 hover:text-ink-900'
                }`}
              >
                Screen 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <ProjectScreenshot
            candidates={comicShots[activeShot].candidates}
            alt={comicShots[activeShot].alt}
            badge={`Comic Diary Visual 0${activeShot + 1} · ${comicShots[activeShot].title}`}
            aspectRatio="video"
            caption={comicShots[activeShot].caption}
          />
        </div>
      </div>

      {/* Complete Internal Multi-Image Showcase Grid */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-6 sm:p-8 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="mb-6 border-b border-white/[0.07] pb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
              Complete Internal Screen Architecture
            </span>
            <h3 className="mt-1 font-display text-xl font-600 text-ink-900">
              The 8 Functional Modules of Comic Diary
            </h3>
            <p className="mt-1 text-xs text-ink-500 font-mono">
              Click any screenshot below to inspect the full-resolution interface.
            </p>
          </div>
          <a
            href="https://comic-diary.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-aurora px-4 py-2 font-mono text-xs font-medium text-white transition-opacity hover:opacity-90 shadow-md shadow-accent-400/20"
          >
            <span>Launch Live App</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {comicShots.map((shot, idx) => (
            <div
              key={shot.title}
              className="flex flex-col rounded-2xl border border-white/[0.07] bg-paper-200/40 p-4 backdrop-blur-md transition-all hover:border-accent-400/40"
            >
              <div className="mb-2.5 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-ink-800">
                  {shot.title}
                </span>
                <span className="rounded-full bg-paper-300/40 border border-white/[0.07] px-2 py-0.5 font-mono text-[9px] text-ink-600">
                  {shot.category}
                </span>
              </div>
              <ProjectScreenshot
                candidates={shot.candidates}
                alt={shot.alt}
                badge={`Screen 0${idx + 1}`}
                aspectRatio="video"
                caption={shot.caption}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Storyboard Simulator */}
      <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-paper-100/60 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="flex flex-wrap items-center justify-between border-b border-white/[0.07] bg-paper-200/60 px-5 py-3">
          <div className="flex items-center gap-2">
            <Palette className="h-4 w-4 text-accent-400" />
            <span className="font-mono text-xs font-semibold text-ink-800">
              Interactive Comic Compiler & Storyboard Simulator
            </span>
          </div>
          <div className="flex gap-1.5">
            {stories.map((s, idx) => (
              <button
                key={s.title}
                onClick={() => setActiveStory(idx as 0 | 1 | 2)}
                className={`rounded-xl px-2.5 py-1 text-[11px] font-mono transition-colors ${
                  activeStory === idx
                    ? 'border border-accent-400/40 bg-accent-400/20 text-accent-400 font-medium'
                    : 'border border-transparent text-ink-600 hover:text-ink-900'
                }`}
              >
                Story 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Comic Panels Grid */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
            <h4 className="font-display text-lg font-600 text-ink-900">
              {stories[activeStory].title}
            </h4>
            <a
              href="https://comic-diary.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[11px] text-accent-400 hover:underline font-medium"
            >
              <span>Launch live app</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {stories[activeStory].panels.map((panel, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.12] bg-paper-200/50 backdrop-blur-md p-4 min-h-[170px] shadow-sm"
              >
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink-700">
                    PANEL 0{idx + 1}
                  </span>
                  <span className="rounded-full bg-accent-400/15 border border-accent-400/30 px-2 py-0.5 font-mono text-[9px] text-accent-400">
                    {panel.mood}
                  </span>
                </div>

                {/* Panel visual sketch area */}
                <div className="my-3 flex flex-col items-center justify-center gap-1.5 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper-300/40 text-accent-400 border border-white/[0.08]">
                    {idx === 0 ? <Sparkles className="h-5 w-5" /> : idx === 1 ? <MessageSquare className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                  </div>
                  <span className="font-mono text-[10px] text-ink-400 uppercase">
                    [{panel.scene}]
                  </span>
                </div>

                {/* Speech bubble */}
                <div className="rounded-xl border border-white/[0.09] bg-paper-100/80 p-2.5 text-xs text-ink-800 font-medium">
                  💬 "{panel.text}"
                </div>
              </div>
            ))}
          </div>

          {/* Feature summary toolbar */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/[0.07] font-mono text-xs">
            <div className="rounded-xl bg-paper-200/40 border border-white/[0.07] p-3 text-center backdrop-blur-md">
              <span className="text-[10px] text-ink-400 block">PANEL EDITOR</span>
              <span className="font-semibold text-ink-800">Canvas Overlay</span>
            </div>
            <div className="rounded-xl bg-paper-200/40 border border-white/[0.07] p-3 text-center backdrop-blur-md">
              <span className="text-[10px] text-ink-400 block">AI GENERATION</span>
              <span className="font-semibold text-ink-800">Prompt Parser</span>
            </div>
            <div className="rounded-xl bg-paper-200/40 border border-white/[0.07] p-3 text-center backdrop-blur-md">
              <span className="text-[10px] text-ink-400 block">ANALYTICS</span>
              <span className="font-semibold text-ink-800">Mood Trajectory</span>
            </div>
            <div className="rounded-xl bg-paper-200/40 border border-white/[0.07] p-3 text-center backdrop-blur-md">
              <span className="text-[10px] text-ink-400 block">EXPORT</span>
              <span className="font-semibold text-ink-800">High-Res PNG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TalentSentinelArtifacts() {
  const [activeShot, setActiveShot] = useState<number>(0);
  const [activeMetric, setActiveMetric] = useState<'metrics' | 'factors' | 'departments'>('metrics');

  const talentShots = [
    {
      candidate: 'dashbaordtalent.png',
      candidates: ['dashboardtalent.png', 'dashbaordtalent.png', 'dashboardtalent', 'dashbaordtalent'],
      title: '01. Executive HR Dashboard',
      alt: 'Talent Sentinel Executive Dashboard',
      caption: 'Executive risk distribution, turnover velocity, and active retention telemetry.',
    },
    {
      candidate: 'advance-workforce-talent.png',
      candidates: ['advance-workforce-talent.png', 'advanceworkforceanalysistalent.png', "advanceworkforceanalysistalent'.png", 'advanceworkforceanalysistalent'],
      title: '02. Advanced Workforce Telemetry',
      alt: 'Talent Sentinel Workforce Breakdown',
      caption: 'Multivariate breakdown correlating compensation bands, tenure, and department flight risk.',
    },
    {
      candidate: 'employee-retention-talent.png',
      candidates: ['employee-retention-talent.png', 'employeeretentionanddepartmentperformacetalent.png', 'employeeretentionand departmentperformacetalent.png'],
      title: '03. Retention vs Department Performance',
      alt: 'Talent Sentinel Performance Matrix',
      caption: 'Cross-tabulation of department performance benchmarks against employee retention curves.',
    },
    {
      candidate: 'forecast-risk-talent.png',
      candidates: ['forecast-risk-talent.png', 'forecastriskvssatisfactiontalent.png', 'forecastriskvssatisfactiontalent'],
      title: '04. Satisfaction vs Risk Matrix',
      alt: 'Talent Sentinel Risk Quadrant',
      caption: 'Quadrant model predicting high-impact flight risk vs overall workplace satisfaction.',
    },
    {
      candidate: 'monthly-attrition-talent.png',
      candidates: ['monthly-attrition-talent.png', 'monthlyattritiontrendtalent.png', 'monthlyattritiontrendtalent'],
      title: '05. Monthly Attrition Trend',
      alt: 'Talent Sentinel Time-Series Forecast',
      caption: 'Rolling time-series forecast comparing actual attrition against ML model projections.',
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Interactive Screenshot Gallery for Talent Sentinel */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-5 sm:p-7 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-400">
              Interactive Telemetry Gallery ({talentShots.length} Analytical Views)
            </span>
            <h3 className="font-display text-lg font-600 text-ink-900">
              {talentShots[activeShot].title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {talentShots.map((shot, idx) => (
              <button
                key={shot.title}
                onClick={() => setActiveShot(idx)}
                className={`rounded-xl px-3 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                  activeShot === idx
                    ? 'border border-accent-400/40 bg-accent-400/20 text-accent-400 font-medium shadow-xs'
                    : 'border border-white/[0.07] bg-paper-200/50 text-ink-600 hover:bg-paper-200/80 hover:text-ink-900'
                }`}
              >
                Telemetry 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <ProjectScreenshot
            candidates={talentShots[activeShot].candidates}
            alt={talentShots[activeShot].alt}
            badge={`Talent Sentinel Visual 0${activeShot + 1} · ${talentShots[activeShot].title}`}
            aspectRatio="video"
            caption={talentShots[activeShot].caption}
          />
        </div>
      </div>

      {/* Complete Internal Multi-Image Showcase Grid */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-6 sm:p-8 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="mb-6 border-b border-white/[0.07] pb-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
            Internal Analytical Suite & Model Telemetry
          </span>
          <h3 className="mt-1 font-display text-xl font-600 text-ink-900">
            All 5 Attrition Modeling Dashboards
          </h3>
          <p className="mt-1 text-xs text-ink-500 font-mono">
            Click any telemetry chart below to inspect high-resolution variables.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {talentShots.map((shot, idx) => (
            <div
              key={shot.title}
              className="flex flex-col rounded-2xl border border-white/[0.07] bg-paper-200/40 p-4 backdrop-blur-md transition-all hover:border-accent-400/40"
            >
              <div className="mb-2.5 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-ink-800">
                  {shot.title}
                </span>
                <span className="rounded-full bg-paper-300/40 border border-white/[0.07] px-2 py-0.5 font-mono text-[9px] text-ink-600">
                  Raw Output
                </span>
              </div>
              <ProjectScreenshot
                candidates={shot.candidates}
                alt={shot.alt}
                badge={`Telemetry 0${idx + 1}`}
                aspectRatio="video"
                caption={shot.caption}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Metric Telemetry */}
      <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-paper-100/60 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="flex flex-wrap items-center justify-between border-b border-white/[0.07] bg-paper-200/60 px-5 py-3">
          <div className="flex items-center gap-2">
            <LineChart className="h-4 w-4 text-accent-400" />
            <span className="font-mono text-xs font-semibold text-ink-800">
              Talent Sentinel · Model Evaluation & Retention Telemetry
            </span>
          </div>
          <div className="flex gap-1.5">
            <button
              onClick={() => setActiveMetric('metrics')}
              className={`rounded-xl px-2.5 py-1 text-[11px] font-mono transition-colors ${
                activeMetric === 'metrics'
                  ? 'border border-accent-400/40 bg-accent-400/20 text-accent-400 font-medium'
                  : 'border border-transparent text-ink-600 hover:text-ink-900'
              }`}
            >
              Model Performance
            </button>
            <button
              onClick={() => setActiveMetric('factors')}
              className={`rounded-xl px-2.5 py-1 text-[11px] font-mono transition-colors ${
                activeMetric === 'factors'
                  ? 'border border-accent-400/40 bg-accent-400/20 text-accent-400 font-medium'
                  : 'border border-transparent text-ink-600 hover:text-ink-900'
              }`}
            >
              Feature Importance
            </button>
            <button
              onClick={() => setActiveMetric('departments')}
              className={`rounded-xl px-2.5 py-1 text-[11px] font-mono transition-colors ${
                activeMetric === 'departments'
                  ? 'border border-accent-400/40 bg-accent-400/20 text-accent-400 font-medium'
                  : 'border border-transparent text-ink-600 hover:text-ink-900'
              }`}
            >
              Department Breakdown
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {activeMetric === 'metrics' && (
            <div className="flex flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-4 font-mono text-xs">
                <div className="rounded-2xl border border-accent-400/30 bg-accent-400/10 p-4 backdrop-blur-md">
                  <span className="text-[10px] text-accent-400 uppercase font-bold">PRECISION SCORE</span>
                  <p className="mt-1 font-display text-3xl font-600 text-accent-400">82.4%</p>
                  <p className="text-[11px] text-ink-500 mt-1">Test partition validation</p>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 p-4 backdrop-blur-md">
                  <span className="text-[10px] text-ink-400 uppercase">RECALL RATE</span>
                  <p className="mt-1 font-display text-3xl font-600 text-ink-900">79.1%</p>
                  <p className="text-[11px] text-ink-500 mt-1">Turnover identification</p>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 p-4 backdrop-blur-md">
                  <span className="text-[10px] text-ink-400 uppercase">ROC-AUC SCORE</span>
                  <p className="mt-1 font-display text-3xl font-600 text-ink-900">0.86</p>
                  <p className="text-[11px] text-ink-500 mt-1">Area under curve</p>
                </div>
                <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 p-4 backdrop-blur-md">
                  <span className="text-[10px] text-ink-400 uppercase">ESTIMATOR TYPE</span>
                  <p className="mt-1 font-display text-2xl font-600 text-ink-900">Logit</p>
                  <p className="text-[11px] text-ink-500 mt-1">Interpretable weights</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-ink-600 font-300">
                * The classification pipeline uses L2 regularization to control multicollinearity among satisfaction ratings, overtime hours, and salary steps.
              </p>
            </div>
          )}

          {activeMetric === 'factors' && (
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs font-semibold text-ink-800">
                Top Attrition Correlate Factors (Relative Coefficient Weights)
              </span>
              <div className="flex flex-col gap-2.5 pt-2">
                {[
                  { name: 'Overtime Frequency (Hours > Threshold)', weight: '+0.74', pct: 88, risk: 'high' },
                  { name: 'Monthly Income vs Role Benchmark', weight: '-0.62', pct: 75, risk: 'protective' },
                  { name: 'Years with Current Manager (< 1.5 yrs)', weight: '+0.51', pct: 62, risk: 'high' },
                  { name: 'Job Satisfaction Rating (Scale 1–5)', weight: '-0.48', pct: 58, risk: 'protective' },
                  { name: 'Distance From Home (> 25 km)', weight: '+0.34', pct: 42, risk: 'moderate' },
                ].map((factor) => (
                  <div key={factor.name} className="flex flex-col gap-1 rounded-2xl border border-white/[0.07] bg-paper-200/40 p-3.5 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-ink-800">{factor.name}</span>
                      <span className="font-mono text-xs font-semibold text-accent-400">
                        {factor.weight}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-paper-300/40">
                      <div
                        className="h-full rounded-full bg-gradient-aurora"
                        style={{ width: `${factor.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeMetric === 'departments' && (
            <div className="grid gap-4 sm:grid-cols-3 font-mono text-xs">
              <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 p-4 backdrop-blur-md">
                <span className="text-[10px] text-ink-400 uppercase">Engineering & R&D</span>
                <p className="mt-1 font-semibold text-ink-900">Predicted Flight Risk: 11.2%</p>
                <p className="text-[11px] text-ink-500 mt-1">High retention stability</p>
              </div>
              <div className="rounded-2xl border border-accent-400/30 bg-accent-400/10 p-4 backdrop-blur-md">
                <span className="text-[10px] text-accent-400 uppercase font-bold">Sales & Field Ops</span>
                <p className="mt-1 font-semibold text-accent-400">Predicted Flight Risk: 24.8%</p>
                <p className="text-[11px] text-accent-400/80 mt-1">Driven by travel & quota load</p>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 p-4 backdrop-blur-md">
                <span className="text-[10px] text-ink-400 uppercase">Support & Client Success</span>
                <p className="mt-1 font-semibold text-ink-900">Predicted Flight Risk: 18.5%</p>
                <p className="text-[11px] text-ink-500 mt-1">Overtime correlation</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function OrderMyGiftNowArtifacts() {
  return (
    <div className="flex flex-col gap-6">
      {/* Storefront Screenshot Gallery */}
      <div className="rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-5 sm:p-7 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent-400">
              Live Commercial Website Screenshot
            </span>
            <h3 className="font-display text-lg font-600 text-ink-900">
              ORDERMYGIFTNOW · Commercial Storefront
            </h3>
          </div>
          <a
            href="https://ordermygiftnow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-aurora px-4 py-2 font-mono text-xs text-white hover:opacity-90 transition-opacity shadow-md shadow-accent-400/20"
          >
            <span>Visit ordermygiftnow.com</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="mt-5">
          <ProjectScreenshot
            candidates={[
              'landingpageordermygiftnow.png',
              'landingpageordermygiftnow',
              'landingpageordermygiftnow.jpg',
              'ordermygiftnow.png',
            ]}
            alt="ORDERMYGIFTNOW E-Commerce Storefront"
            badge="ORDERMYGIFTNOW · Commercial Storefront"
            aspectRatio="video"
            caption="Commercial gift delivery platform featuring occasion categories, curated festive gift boxes, and responsive mobile-first checkout."
            fallbackTitle="ORDERMYGIFTNOW Storefront Visual"
            fallbackDescription="Live e-commerce storefront layout for gift ordering."
          />
        </div>
      </div>

      {/* Browser Chrome Bar Showcase */}
      <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-paper-100/60 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between border-b border-white/[0.07] bg-paper-200/60 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="flex items-center justify-center rounded-xl bg-paper-100/70 px-4 py-1 text-[11px] font-mono text-ink-500 border border-white/[0.08]">
            ordermygiftnow.com
          </div>
          <a
            href="https://ordermygiftnow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-mono text-[11px] text-ink-600 hover:text-accent-400 transition-colors"
          >
            <span>Live Store</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Interactive Storefront Showcase Preview */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
              <div>
                <span className="font-mono text-xs font-semibold text-accent-400">
                  COMMERCIAL DESIGN SHOWCASE
                </span>
                <h4 className="font-display text-xl font-600 text-ink-900">
                  ORDERMYGIFTNOW Curated Gift Platform
                </h4>
              </div>
              <span className="rounded-full bg-paper-200/60 border border-white/[0.07] px-3 py-1 font-mono text-xs text-ink-700">
                Live Commercial Website
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 p-5 backdrop-blur-md">
                <span className="font-mono text-[10px] text-ink-400 uppercase">CURATED HAMPERS</span>
                <p className="mt-1 font-semibold text-ink-900">Occasion-Based Discovery</p>
                <p className="text-xs text-ink-500 mt-1 font-300">Birthdays, anniversaries, corporate gifts</p>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 p-5 backdrop-blur-md">
                <span className="font-mono text-[10px] text-ink-400 uppercase">RESPONSIVE STOREFRONT</span>
                <p className="mt-1 font-semibold text-ink-900">Mobile-First Layout</p>
                <p className="text-xs text-ink-500 mt-1 font-300">Optimized touch targets & clear typography</p>
              </div>
              <div className="rounded-2xl border border-white/[0.07] bg-paper-200/40 p-5 backdrop-blur-md">
                <span className="font-mono text-[10px] text-ink-400 uppercase">PURCHASE PATHWAY</span>
                <p className="mt-1 font-semibold text-ink-900">Frictionless Checkout</p>
                <p className="text-xs text-ink-500 mt-1 font-300">Custom notes & delivery scheduling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectPagination({ currentSlug }: { currentSlug: string }) {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const total = projects.length;
  const prevProject = projects[(currentIndex - 1 + total) % total];
  const nextProject = projects[(currentIndex + 1) % total];

  return (
    <div className="grid gap-6 sm:grid-cols-2 border-t border-white/[0.08] pt-10">
      {/* Prev Project */}
      <Link
        to={`/work/${prevProject.slug}`}
        className="group flex flex-col gap-1 rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-6 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all hover:border-accent-400/40 hover:bg-paper-100/75 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
      >
        <span className="font-mono text-xs uppercase tracking-wider text-ink-400 flex items-center gap-1.5">
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          Previous ({prevProject.number})
        </span>
        <span className="font-display text-lg font-600 text-ink-900 group-hover:text-accent-400 transition-colors">
          {prevProject.title}
        </span>
        <span className="font-mono text-xs text-ink-500">{prevProject.category}</span>
      </Link>

      {/* Next Project */}
      <Link
        to={`/work/${nextProject.slug}`}
        className="group flex flex-col gap-1 rounded-[2rem] border border-white/[0.08] bg-paper-100/60 p-6 text-right backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all hover:border-accent-400/40 hover:bg-paper-100/75 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
      >
        <span className="font-mono text-xs uppercase tracking-wider text-ink-400 flex items-center justify-end gap-1.5">
          Next ({nextProject.number})
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </span>
        <span className="font-display text-lg font-600 text-ink-900 group-hover:text-accent-400 transition-colors">
          {nextProject.title}
        </span>
        <span className="font-mono text-xs text-ink-500">{nextProject.category}</span>
      </Link>
    </div>
  );
}
