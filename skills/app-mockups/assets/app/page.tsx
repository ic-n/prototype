"use client";

import {useEffect, useRef, useState} from "react";

const sections = [
  {id: "overview", label: "Overview"},
  {id: "features", label: "Features"},
  {id: "details", label: "Details"},
] as const;

type SectionId = (typeof sections)[number]["id"];

function SectionIcon({id}: {id: SectionId}) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="size-5 shrink-0">
      {id === "overview" && <><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="3" width="8" height="8" rx="1.5" /><rect x="3" y="13" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" /></>}
      {id === "features" && <><path d="M12 2.5 14.6 9.4 21.5 12l-6.9 2.6L12 21.5l-2.6-6.9L2.5 12l6.9-2.6L12 2.5Z" /></>}
      {id === "details" && <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>}
    </svg>
  );
}

export default function HomePage() {
  const mainRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState<SectionId>("overview");
  const [scrolled, setScrolled] = useState(false);

  const updateScrollState = () => {
    const main = mainRef.current;
    if (!main) return;

    const marker = main.getBoundingClientRect().top + main.clientHeight * 0.38;
    let current: SectionId = "overview";
    for (const item of sections) {
      const section = document.getElementById(item.id);
      if (section && section.getBoundingClientRect().top <= marker) current = item.id;
    }
    if (main.scrollTop + main.clientHeight >= main.scrollHeight - 2) current = "details";
    setActiveSection(current);
    setScrolled(main.scrollTop > 8);
  };

  useEffect(() => {
    updateScrollState();
  }, []);

  return (
    <div className="flex h-dvh items-center justify-center overflow-hidden bg-ink-999 md:bg-black md:p-2">
      <a href="#main-content" className="skip-link">Skip to content</a>

      <div className="app relative flex size-full min-w-0 overflow-hidden bg-black font-sans text-slate-100 antialiased shadow-2xl md:rounded-[20px]">
        <aside className="group/sidebar relative z-20 hidden h-full w-16 shrink-0 flex-col overflow-hidden border-r border-ink-800 bg-black transition-[width] duration-200 ease-out hover:w-60 focus-within:w-60 md:flex">
          <div aria-hidden="true" className="sidebar-mesh pointer-events-none absolute inset-y-0 left-0 -z-10 w-60" />
          <a href="#overview" aria-label="Go to overview" className="flex h-20 w-60 shrink-0 items-center gap-3 px-4">
            <span aria-hidden="true" className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-400 text-lg font-black text-ink-950">A</span>
            <span className="whitespace-nowrap font-display text-lg font-bold text-white opacity-0 transition-opacity group-hover/sidebar:opacity-100 group-focus-within/sidebar:opacity-100">App name</span>
          </a>
          <div className="mx-3 mb-4 h-px shrink-0 bg-white/10" />
          <nav aria-label="Page sections" className="w-60 flex-1 space-y-1 px-2">
            {sections.map(({id, label}) => {
              const active = activeSection === id;
              return (
                <a key={id} href={`#${id}`} aria-label={label} aria-current={active ? "location" : undefined}
                  className={`relative flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors hover:bg-white/5 hover:text-slate-100 ${active ? "bg-brand-500/8 text-slate-100" : "text-slate-500"}`}>
                  {active && <span aria-hidden="true" className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-brand-400" />}
                  <span className={active ? "text-brand-400" : "text-slate-500"}><SectionIcon id={id} /></span>
                  <span className="whitespace-nowrap opacity-0 transition-opacity group-hover/sidebar:opacity-100 group-focus-within/sidebar:opacity-100">{label}</span>
                </a>
              );
            })}
          </nav>
        </aside>

        <div className="relative flex min-w-0 flex-1 flex-col bg-radial from-black from-20% to-ink-999">
          <header className="header-mesh relative z-30 flex h-[calc(56px+env(safe-area-inset-top))] shrink-0 items-center justify-between border-b border-ink-800 px-3 pt-[env(safe-area-inset-top)] md:h-12 md:px-4 md:pt-0">
            <a href="#overview" className="font-display text-base font-bold text-white md:text-sm">App name</a>
            <div className="flex items-center gap-2">
              <span className="hidden text-xs text-slate-500 sm:inline">Sample workspace</span>
              <a href="#features" className="mockup-accent-button !px-3 !py-1.5 text-xs">Explore</a>
            </div>
          </header>

          <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 top-[calc(56px+env(safe-area-inset-top))] z-10 h-12 bg-gradient-to-b from-ink-950/80 to-transparent transition-opacity md:top-12 ${scrolled ? "opacity-100" : "opacity-0"}`} />

          <main id="main-content" ref={mainRef} onScroll={updateScrollState} className="mobile-main min-h-0 flex-1 scroll-smooth overflow-x-hidden overflow-y-auto overscroll-y-contain">
            <div className="w-full px-5 pt-12 pb-28 sm:px-8 md:px-10 md:pt-16 md:pb-16 xl:px-14">
              <section id="overview" aria-labelledby="overview-heading" className="scroll-mt-8 pb-16">
                <p className="mb-4 font-mono text-[11px] font-semibold tracking-[0.2em] text-brand-400 uppercase">Overview</p>
                <h1 id="overview-heading" className="mockup-section-heading max-w-3xl text-[clamp(2.7rem,5vw,5rem)] text-white">
                  A clear place to start<span className="text-brand-400">.</span>
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
                  Replace this sample with the main message of your mockup. Keep the copy short and focused.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <a href="#features" className="mockup-accent-button">Explore features</a>
                  <a href="#details" className="rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-200 hover:border-brand-400/50 hover:text-brand-300">View details</a>
                </div>
              </section>

              <section id="features" aria-labelledby="features-heading" className="scroll-mt-8 border-t border-white/10 py-16">
                <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="mb-3 font-mono text-[11px] font-semibold tracking-[0.2em] text-brand-400 uppercase">01 / Features</p>
                    <h2 id="features-heading" className="mockup-section-heading text-3xl text-white sm:text-4xl">What belongs here</h2>
                  </div>
                  <p className="max-w-sm text-sm text-slate-500">Use this section for the most important parts of the experience.</p>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {["Primary flow", "Supporting view", "Key detail"].map((title, index) => (
                    <article key={title} className="mockup-card flex min-h-48 flex-col justify-between p-6">
                      <span className="font-mono text-xs text-brand-400">0{index + 1}</span>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">Replace this card with a real mockup element.</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section id="details" aria-labelledby="details-heading" className="scroll-mt-8 border-t border-white/10 py-16">
                <p className="mb-3 font-mono text-[11px] font-semibold tracking-[0.2em] text-brand-400 uppercase">02 / Details</p>
                <h2 id="details-heading" className="mockup-section-heading text-3xl text-white sm:text-4xl">A focused finish</h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400">Use the final section for a closer look, a key decision, or a clear next step.</p>
                <div className="mockup-card mt-8 flex min-h-48 items-center justify-center border-brand-500/20 bg-brand-500/5 p-8 text-center">
                  <p className="font-display text-xl font-semibold text-slate-200">Your content goes here</p>
                </div>
              </section>
            </div>
          </main>

          <nav aria-label="Page sections" className="mobile-dock fixed z-40 flex h-16 items-stretch px-1 md:hidden">
            {sections.map(({id, label}) => {
              const active = activeSection === id;
              return (
                <a key={id} href={`#${id}`} aria-current={active ? "location" : undefined}
                  className={`relative flex min-w-0 flex-1 flex-col items-center justify-center gap-1 text-[10px] font-semibold ${active ? "text-white" : "text-slate-500"}`}>
                  {active && <span aria-hidden="true" className="absolute top-0 h-0.5 w-6 bg-brand-400" />}
                  <SectionIcon id={id} />
                  <span>{label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
