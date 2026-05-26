"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

function TwoCol({
  label,
  children,
  className = "",
  labelColor,
}: {
  label: string;
  children?: ReactNode;
  className?: string;
  labelColor?: string;
}) {
  return (
    <div className={`grid grid-cols-2 gap-x-10 md:gap-x-16 ${className}`}>
      <div className="hidden md:block pt-1">
        <p
          className="text-[16px] uppercase tracking-widest text-[var(--text-label)]"
          style={{ fontWeight: 400, ...(labelColor ? { color: labelColor } : {}) }}
        >
          {label}
        </p>
      </div>
      {children != null ? <div className="min-w-0">{children}</div> : <div />}
    </div>
  );
}

function Placeholder({ label, height = 280 }: { label: string; height?: number }) {
  return (
    <div
      style={{
        height,
        borderRadius: "12px",
        border: "1.5px dashed var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-label)",
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: "0.02em",
      }}
    >
      {label}
    </div>
  );
}

export default function ProjectContent() {
  return (
    <div className="pb-32">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div id="overview" />
      <ScrollReveal>
        <section className="pt-28 pb-8 px-6 md:px-16 text-center max-w-[72rem] mx-auto">
          <h1
            className="text-[40px] text-[var(--text-primary)] leading-[1.1] tracking-tight mb-6"
            style={{ fontWeight: 500 }}
          >
            Smart Data Migration
          </h1>
          <p
            className="text-[32px] leading-tight text-[var(--text-primary)]/70"
            style={{ fontWeight: 400, letterSpacing: "-0.1px" }}
          >
            An agentic migration wizard for seamless data transfer
          </p>
        </section>
      </ScrollReveal>

      {/* ── Cover image ──────────────────────────────────────── */}
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto">
          <div className="rounded-2xl overflow-hidden mb-3">
            <Image
              src="/migration-wizard-cover-v2.png"
              alt="Smart Data Migration"
              width={840}
              height={681}
              className="w-full h-auto"
            />
          </div>

          {/* Body text + metadata */}
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-16 pt-16 pb-0">
            <p
              className="text-[32px] text-[var(--text-primary)] leading-[1.3]"
              style={{ fontWeight: 400, letterSpacing: "-0.1px" }}
            >
              I led end-to-end design from mapping user flows and technical constraints to a validated vision, leveraging Claude Code to prototype the LLM-driven migration experience — currently in MVP development.
            </p>
            <div className="flex flex-col justify-center divide-y divide-[var(--border)]">
              <div className="pb-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">Timeline</p>
                <p className="text-[16px] text-[var(--text-primary)]">Feb 2026 – May 2026</p>
              </div>
              <div className="py-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">My Role</p>
                <p className="text-[16px] text-[var(--text-primary)]">Lead Product Designer</p>
                <p className="text-[16px] text-[var(--text-primary)]">Prototyper</p>
              </div>
              <div className="pt-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">Tools</p>
                <p className="text-[16px] text-[var(--text-primary)]">Figma</p>
                <p className="text-[16px] text-[var(--text-primary)]">Make</p>
                <p className="text-[16px] text-[var(--text-primary)]">Claude Code</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── 3 intro mockup images ────────────────────────────── */}
      <ScrollReveal>
        <div
          className="grid grid-cols-3 px-6 md:px-8"
          style={{ gap: "24px", marginTop: "120px", marginBottom: "200px" }}
        >
          {[
            "Mockup 1 — [ add image ]",
            "Mockup 2 — [ add image ]",
            "Mockup 3 — [ add image ]",
          ].map((label) => (
            <div
              key={label}
              className="rounded-2xl bg-[var(--bg-surface)] pt-8 px-8 md:pt-6 md:px-6 flex items-end justify-center"
              style={{ minHeight: "360px" }}
            >
              <Placeholder label={label} height={280} />
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* ── 01 CONTEXT ───────────────────────────────────────── */}
      <div id="context" />
      <div className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <section className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <ScrollReveal>
          <TwoCol label="Why Introducing Data Migration?">
            <h2
              className="text-[32px] leading-[1.3] text-[var(--text-primary)] mb-8"
              style={{ fontWeight: 400, letterSpacing: "-0.3px" }}
            >
              The bridge between switching and staying
            </h2>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
              For event organizers switching to Eventeny, the first real test isn&apos;t the product — it&apos;s getting their existing data in. Data migration is the bridge between where they are and where they need to be. Get it wrong and{" "}
              <strong className="text-[var(--text-primary)] font-normal">organizers churn before they see any value</strong>. Get it right and it becomes a{" "}
              <strong className="text-[var(--text-primary)] font-normal">competitive moat</strong>{" "}
              — once their data is in, switching costs flip in Eventeny&apos;s favor.
            </p>
          </TwoCol>

          {/* Journey SVG */}
          <div className="mt-16">
            <div className="rounded-2xl bg-[var(--bg-surface)] p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/eventeny-journey.svg" alt="Eventeny customer journey" className="w-full h-auto" />
            </div>
          </div>
        </ScrollReveal>

      </section>

      <div style={{ height: "200px" }} />

      {/* ── 02 CHALLENGE & SOLUTION ───────────────────────────── */}
      <div id="challenge-solution" />
      <div className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto">
          <TwoCol label="CHALLENGE">
            <h2
              className="text-[32px] leading-[1.2] text-[var(--text-primary)] mb-6"
              style={{ fontWeight: 400, letterSpacing: "-0.3px" }}
            >
              The current migration process creates more work, not less
            </h2>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
              Switching to Eventeny means starting from scratch. Organizers had to{" "}
              <strong className="text-[var(--text-primary)] font-normal">manually reformat data into a custom Excel template</strong>,{" "}
              <strong className="text-[var(--text-primary)] font-normal">navigate a buried import feature</strong>, and{" "}
              <strong className="text-[var(--text-primary)] font-normal">discover errors only after an upload failed — with a hard cap of 100 rows at a time</strong>. Vendors had to create a new account just to be imported. The result:{" "}
              <strong className="text-[var(--text-primary)] font-normal">7 months to see value</strong>, and{" "}
              <strong className="text-[var(--text-primary)] font-normal">11% of deals lost</strong>{" "}
              because the switching cost felt too high.
            </p>
          </TwoCol>

          <div className="mt-12">
            <div className="rounded-2xl bg-[var(--bg-surface)] p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/challenge.svg" alt="Challenge diagram" className="w-full h-auto" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <div style={{ height: "200px" }} />

      {/* Vision — full-width accent section */}
      <ScrollReveal>
        <div className="w-full py-28 px-6 md:px-16" style={{ backgroundColor: "rgba(3, 133, 128, 0.6)" }}>
          <div className="max-w-[72rem] mx-auto">
            <TwoCol label="Vision" labelColor="#ffffff">
              <h2
                className="text-[32px] leading-[1.15]"
                style={{ fontWeight: 400, letterSpacing: "-0.3px", color: "#ffffff" }}
              >
                [ Insight headline — the key design direction that emerged from research ]
              </h2>
              <p className="text-[16px] leading-relaxed" style={{ color: "#ffffff" }}>
                [ Paragraph — connect research findings to the design themes you pursued. ]
              </p>
            </TwoCol>
          </div>
        </div>
      </ScrollReveal>

      <div style={{ height: "200px" }} />

      {/* ── 03 RESEARCH ──────────────────────────────────────── */}
      <div id="research" />
      <div className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <section className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <ScrollReveal>
          <TwoCol label="Understanding the Technical Workflow">
            <h2
              className="text-[32px] leading-[1.2] text-[var(--text-primary)] mb-6"
              style={{ fontWeight: 400, letterSpacing: "-0.3px" }}
            >
              AI-assisted exploration led to automated import with validation
            </h2>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
              I used Claude and ChatGPT to map out two candidate workflows, then stress-tested them with the engineering team. The first is a{" "}
              <strong className="text-[var(--text-primary)] font-normal">fully automated flow</strong>{" "}
              — the system ingests a raw data dump and handles all mapping with minimal organizer input. The second is a{" "}
              <strong className="text-[var(--text-primary)] font-normal">guided step-by-step flow</strong>{" "}
              — organizers validate at each stage, trading speed for higher accuracy and lower risk. Both shaped the MVP scope and design decisions that followed.
            </p>
          </TwoCol>

          <div className="mt-10">
            <div className="rounded-2xl bg-[var(--bg-surface)] p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/technical-workflows.svg"
                alt="Technical workflows"
                className="w-full h-auto block"
                style={{ marginTop: "-4.4%", marginBottom: "-5.1%" }}
              />
              <div style={{ display: "flex", marginTop: "24px" }}>
                <p
                  className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal"
                  style={{ marginLeft: "7.5%", width: "39.6%", textAlign: "center" }}
                >
                  This workflow simplifies migration for organizers, but places greater responsibility on the system to accurately identify and categorize data types.
                </p>
                <p
                  className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal"
                  style={{ marginLeft: "auto", marginRight: "7.5%", width: "39.6%", textAlign: "center" }}
                >
                  This approach requires more steps from organizers, but yields higher accuracy and meaningfully lower risk of data loss or mismatches.
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-[var(--bg-surface)] p-8 mt-6">
              <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)] mb-4" style={{ fontWeight: 400 }}>
                Final MVP flow
              </p>
              <div style={{ overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/migration-wizard-horizontal.svg"
                  alt="Migration wizard flow"
                  className="w-full h-auto block"
                  style={{ marginTop: "-4.5%" }}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Exploration */}
        <div style={{ height: "200px" }} />
        <ScrollReveal>
          <TwoCol label="exploration">
            <h3
              className="text-[32px] leading-[1.15] text-[var(--text-primary)] mb-5"
              style={{ fontWeight: 400, letterSpacing: "-0.3px" }}
            >
              Generating quick MVP prototypes
            </h3>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
              I used Claude and Figma Make to rapidly prototype the data migration flow — iterating on prompts, reviewing the generated code, and refining the output to ensure visual consistency and accuracy across each step.
            </p>
          </TwoCol>

          {/* v1 container */}
          <div className="rounded-2xl bg-[var(--bg-surface)] p-8 mt-[60px]">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400 }}>
                Step 1
              </p>
              <p className="text-[var(--text-primary)]" style={{ fontSize: "14px", fontWeight: 500 }}>
                Refining prompt
              </p>
            </div>

            {/* Two-col: Prompt + Output */}
            <div className="grid items-start gap-3" style={{ gridTemplateColumns: "1fr auto 2fr", padding: "2px" }}>
              {/* Prompt card — 1/3 */}
              <div className="rounded-xl p-5 flex flex-col gap-3" style={{ position: "relative", height: "280px", overflow: "hidden" }}>
                <svg
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
                  fill="none"
                  overflow="visible"
                >
                  <rect
                    x="0" y="0"
                    width="100%" height="100%"
                    rx="12" ry="12"
                    stroke="#909090" strokeWidth="1.5" strokeDasharray="8" strokeLinecap="square"
                  />
                </svg>
                <p
                  className="text-[12px] uppercase tracking-widest text-[var(--text-label)]"
                  style={{ fontWeight: 500 }}
                >
                  Prompt
                </p>
                <p
                  className="text-[var(--text-primary)]"
                  style={{ fontSize: "14px", fontWeight: 400, lineHeight: "1.55" }}
                >
                  Create a working HTML/React prototype (importable to Figma) for Eventeny&rsquo;s data migration flow. This is an MVP — only vendor list and ticket imports are supported. The prototype should follow Eventeny&rsquo;s design system, feel smooth and professional, and use clear, simple UX writing throughout.
                </p>
              </div>

              {/* Arrow connector */}
              <div className="flex items-center justify-center self-start mt-[60px]">
                <svg width="56" height="16" viewBox="0 0 56 16" fill="none">
                  {/* Circle at left */}
                  <circle cx="5" cy="8" r="4" fill="#909090" />
                  {/* Line */}
                  <line x1="9" y1="8" x2="46" y2="8" stroke="#909090" strokeWidth="1.5" />
                  {/* Filled arrowhead */}
                  <path d="M46 4L54 8L46 12Z" fill="#909090" />
                </svg>
              </div>

              {/* Output card — 2/3, fixed 400px scrollable */}
              <div
                className="rounded-xl flex flex-col"
                style={{ backgroundColor: "rgba(3, 133, 128, 0.6)", outline: "1.5px solid #038580", height: "280px" }}
              >
                {/* Fixed label */}
                <div className="px-5 pt-5 pb-3 shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                  <p className="text-[12px] uppercase tracking-widest" style={{ fontWeight: 500, color: "#ffffff" }}>
                    Claude Output
                  </p>
                </div>

                {/* Scrollable content */}
                <div className="flex flex-col gap-4 p-5 overflow-y-auto flex-1" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.3) transparent" }}>

                  {/* Intro */}
                  <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "1.6", color: "#ffffff" }}>
                    Create a working, interactive HTML or React prototype for Eventeny&rsquo;s data migration flow based on the attached flow diagram. This is the MVP scope — only two import types are supported: <strong style={{ fontWeight: 600 }}>Vendor List</strong> and <strong style={{ fontWeight: 600 }}>Tickets</strong>.
                  </p>

                  {/* Prototype requirements */}
                  <div className="flex flex-col gap-2">
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", letterSpacing: "0.04em", textTransform: "uppercase" }}>Prototype requirements</p>
                    {[
                      "Follow the flow exactly as diagrammed — respect every step, branch, and decision point",
                      "Apply Eventeny's design system from Figma precisely: correct color tokens, typography, spacing, component styles, and iconography",
                      "Fully interactive and navigable — users can click through the entire flow from start to finish",
                      "UX writing should be clear, concise, and professional with helpful empty states, error messages, and confirmation copy",
                      "Optimize for a smooth, intuitive experience with logical information hierarchy and no unnecessary friction",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", marginTop: "2px", flexShrink: 0 }}>—</span>
                        <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "1.55", color: "rgba(255,255,255,0.9)" }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Column mapping */}
                  <div className="flex flex-col gap-2">
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", letterSpacing: "0.04em", textTransform: "uppercase" }}>Column mapping states</p>
                    {[
                      "Auto-matched — system confidently maps column to a known Eventeny field",
                      "Unmatched — surface unmatched columns; let user assign manually or skip",
                      "Ambiguous match — show suggestion the user can confirm or override",
                      "Required field missing — block progression and explain what's needed",
                      "Duplicate column — flag conflict and prompt resolution",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", marginTop: "2px", flexShrink: 0 }}>—</span>
                        <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "1.55", color: "rgba(255,255,255,0.9)" }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Data preview */}
                  <div className="flex flex-col gap-2">
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", letterSpacing: "0.04em", textTransform: "uppercase" }}>Data preview states</p>
                    {[
                      "Clean rows — data is valid and ready to import",
                      "Rows with errors — highlight specific cells with inline explanation",
                      "Skipped rows — show count and allow report download",
                      "Duplicate rows — surface distinctly; let user skip or overwrite",
                      "Empty preview — clear empty state with guidance",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", marginTop: "2px", flexShrink: 0 }}>—</span>
                        <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "1.55", color: "rgba(255,255,255,0.9)" }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Technical constraints */}
                  <div className="flex flex-col gap-2">
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", letterSpacing: "0.04em", textTransform: "uppercase" }}>Technical constraints</p>
                    {[
                      "Single self-contained file (HTML with embedded CSS/JS, or React component) importable into Figma",
                      "MVP scope only: Vendor List and Tickets — do not add or imply other options",
                      "All interactive states implemented: hover, active, disabled, loading, error, success",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", marginTop: "2px", flexShrink: 0 }}>—</span>
                        <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "1.55", color: "rgba(255,255,255,0.9)" }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Reference material */}
                  <div className="flex flex-col gap-2">
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#ffffff", letterSpacing: "0.04em", textTransform: "uppercase" }}>Reference material</p>
                    {[
                      "Flow diagram: [attach SVG/image]",
                      "Design system: [link to Figma file or component library]",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px", marginTop: "2px", flexShrink: 0 }}>—</span>
                        <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "1.55", color: "rgba(255,255,255,0.7)", fontStyle: "italic" }}>{item}</p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* Critique blockquote */}
            <blockquote
              className="mt-6 border-l-2 pl-5"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="text-[14px] text-[var(--text-label)] leading-relaxed" style={{ fontWeight: 400 }}>
                This prototype helped me quickly validate the migration flow, but it lacked design system fidelity and didn&rsquo;t handle edge cases. To get more consistent results, I worked with Claude to refine the prompt — covering design guidelines, technical constraints, and edge case handling.
              </p>
            </blockquote>
          </div>

          {/* v2 container */}
          <div className="rounded-2xl bg-[var(--bg-surface)] p-8 mt-[60px]">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400 }}>
                Step 2
              </p>
              <p className="text-[var(--text-primary)]" style={{ fontSize: "14px", fontWeight: 500 }}>
                Generating prototypes
              </p>
            </div>

            {/* Two-col: Prompt + Output */}
            <div className="grid items-start gap-3" style={{ gridTemplateColumns: "1fr auto 2fr", padding: "2px" }}>
              {/* Prompt card — 1/3, scrollable */}
              <div className="rounded-xl flex flex-col" style={{ position: "relative", height: "280px" }}>
                <svg
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
                  fill="none"
                  overflow="visible"
                >
                  <rect
                    x="0" y="0"
                    width="100%" height="100%"
                    rx="12" ry="12"
                    stroke="#909090" strokeWidth="1.5" strokeDasharray="8" strokeLinecap="square"
                  />
                </svg>
                {/* Fixed label */}
                <div className="px-5 pt-5 pb-3 shrink-0">
                  <p className="text-[12px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 500 }}>
                    Prompt
                  </p>
                </div>
                {/* Scrollable prompt text */}
                <div className="px-5 pb-5 overflow-y-auto flex-1" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(144,144,144,0.4) transparent" }}>
                  <div className="flex flex-col gap-3">
                    <p className="text-[var(--text-primary)]" style={{ fontSize: "14px", fontWeight: 400, lineHeight: "1.6" }}>
                      Create a working, interactive HTML or React prototype for Eventeny&rsquo;s data migration flow based on the attached flow diagram. This is the MVP scope — only two import types are supported: <strong style={{ fontWeight: 600 }}>Vendor List</strong> and <strong style={{ fontWeight: 600 }}>Tickets</strong>.
                    </p>
                    {[
                      { heading: "Prototype requirements", items: [
                        "Follow the flow exactly as diagrammed — every step, branch, and decision point",
                        "Apply Eventeny's design system from Figma precisely",
                        "Fully interactive — all states: hover, active, disabled, loading, error, success",
                        "Clear, professional UX writing with helpful error and empty states",
                        "Single self-contained file importable to Figma",
                      ]},
                      { heading: "Column mapping states", items: ["Auto-matched", "Unmatched", "Ambiguous match", "Required field missing", "Duplicate column"] },
                      { heading: "Data preview states", items: ["Clean rows", "Rows with errors", "Skipped rows", "Duplicate rows", "Empty preview"] },
                      { heading: "Design constraints", items: [
                        "Follow Eventeny design system strictly — use existing tokens and components only",
                        "Do not create new components unless necessary",
                        "Smooth, accessible UX with aesthetic and logical information hierarchy",
                        "Match text styles and info hierarchy from previous prompts",
                      ]},
                    ].map(({ heading, items }) => (
                      <div key={heading} className="flex flex-col gap-1">
                        <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{heading}</p>
                        {items.map((item, i) => (
                          <div key={i} className="flex gap-2 items-start">
                            <span style={{ color: "var(--text-label)", fontSize: "12px", flexShrink: 0 }}>—</span>
                            <p style={{ fontSize: "12px", fontWeight: 400, lineHeight: "1.5", color: "var(--text-label)" }}>{item}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow connector */}
              <div className="flex items-center justify-center self-start mt-[60px]">
                <svg width="56" height="16" viewBox="0 0 56 16" fill="none">
                  <circle cx="5" cy="8" r="4" fill="#909090" />
                  <line x1="9" y1="8" x2="46" y2="8" stroke="#909090" strokeWidth="1.5" />
                  <path d="M46 4L54 8L46 12Z" fill="#909090" />
                </svg>
              </div>

              {/* Output card — 2/3, video placeholder */}
              <div
                className="rounded-xl flex flex-col overflow-hidden"
                style={{ backgroundColor: "rgba(3, 133, 128, 0.6)", outline: "1.5px solid #038580" }}
              >
                {/* Fixed label */}
                <div className="px-5 pt-5 pb-3 shrink-0">
                  <p className="text-[12px] uppercase tracking-widest" style={{ fontWeight: 500, color: "#ffffff" }}>
                    Figma Make Output
                  </p>
                </div>
                {/* Vimeo embed */}
                <div style={{ padding: "24px" }}>
                  <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "8px", overflow: "hidden", position: "relative" }}>
                    <iframe
                      src="https://player.vimeo.com/video/1195485558?background=1&autoplay=1&loop=1&muted=1&autopause=0"
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                      allow="autoplay; fullscreen"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Critique blockquote */}
            <blockquote
              className="mt-6 border-l-2 pl-5"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="text-[14px] text-[var(--text-label)] leading-relaxed" style={{ fontWeight: 400 }}>
                The first prototype established the core flow, but fell short on design system compliance and didn&rsquo;t fully account for edge case scenarios.
              </p>
            </blockquote>
          </div>

          {/* v3 container */}
          <div className="rounded-2xl bg-[var(--bg-surface)] p-8 mt-[60px]">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400 }}>
                Step 3
              </p>
              <p className="text-[var(--text-primary)]" style={{ fontSize: "14px", fontWeight: 500 }}>
                Handling data ambiguity
              </p>
            </div>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal mb-6">
              After aligning with the PM and engineering team, we identified a key challenge: handling ambiguous data types such as <strong className="text-[var(--text-primary)] font-normal">Tags</strong> and <strong className="text-[var(--text-primary)] font-normal">Custom Questions</strong>{" "}in the vendor list. These fields vary event by event — and if an equivalent doesn&rsquo;t already exist in Eventeny, new fields may need to be created on the fly. We explored solutions through targeted prompt iteration.
            </p>

            {/* Two-col: Prompt + Output */}
            <div className="grid items-start gap-3" style={{ gridTemplateColumns: "1fr auto 2fr", padding: "2px" }}>
              {/* Prompt card — 1/3, scrollable */}
              <div className="rounded-xl flex flex-col" style={{ position: "relative", height: "280px" }}>
                <svg
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
                  fill="none"
                  overflow="visible"
                >
                  <rect x="0" y="0" width="100%" height="100%" rx="12" ry="12"
                    stroke="#909090" strokeWidth="1.5" strokeDasharray="8" strokeLinecap="square" />
                </svg>
                <div className="px-5 pt-5 pb-3 shrink-0">
                  <p className="text-[12px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 500 }}>
                    Prompt
                  </p>
                </div>
                <div className="px-5 pb-5 overflow-y-auto flex-1" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(144,144,144,0.4) transparent" }}>
                  <div className="flex flex-col gap-3">

                    <p className="text-[var(--text-primary)]" style={{ fontSize: "14px", fontWeight: 400, lineHeight: "1.6" }}>
                      Design a data mapping step for a vendor import wizard. The organizer has uploaded a CSV with vendor data. This step handles two types of ambiguous data that need organizer review: <strong style={{ fontWeight: 600 }}>tags</strong> and <strong style={{ fontWeight: 600 }}>custom questions</strong>.
                    </p>

                    {[
                      { heading: "Layout", items: [
                        "Full-width step panel with header 'Step 3 — Review & Map Data' and a progress bar at 60%",
                        "Two collapsible sections: Tags and Custom Questions — each expandable with a chevron",
                        "Badge count on each header showing items needing attention (e.g. 'Tags · 3 need review')",
                      ]},
                      { heading: "Section 1 — Tags", items: [
                        "Matched (green border): exact tag matches — show tag name, vendor count, green checkmark. Auto-confirmed.",
                        "Ambiguous (yellow border): similar but not exact — dropdown: 'Map to existing', 'Create new', or 'Skip'. Show vendor count.",
                        "New (teal border): tags not in library — show name, vendor count, toggle 'Add to library' (on by default) or 'Skip'.",
                      ]},
                      { heading: "Section 2 — Custom Questions", items: [
                        "Matched (green border): exact column match — show question name, column name, vendor count, checkmark. Auto-confirmed.",
                        "Ambiguous (yellow border): similar columns — dropdown: 'Map to existing question', 'Create new', or 'Skip'. Show vendor count.",
                        "New (teal border): no matching question — show column name, sample value, vendor count, toggle 'Create as new question' (on by default) or 'Skip'.",
                      ]},
                      { heading: "Sticky bottom bar", items: [
                        "Two bulk actions: 'Auto-resolve all — map to closest match' and 'Skip all unmatched'",
                        "Summary line: 'X vendors ready to import · Y items need review'",
                      ]},
                      { heading: "Design constraints", items: [
                        "Follow Eventeny design system strictly — use existing tokens and components only",
                        "Do not create new components unless necessary",
                        "Smooth, accessible UX with aesthetic and logical information hierarchy",
                        "Match text styles and info hierarchy from previous prompts",
                      ]},
                    ].map(({ heading, items }) => (
                      <div key={heading} className="flex flex-col gap-1">
                        <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-primary)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{heading}</p>
                        {items.map((item, i) => (
                          <div key={i} className="flex gap-2 items-start">
                            <span style={{ color: "var(--text-label)", fontSize: "12px", flexShrink: 0 }}>—</span>
                            <p style={{ fontSize: "12px", fontWeight: 400, lineHeight: "1.5", color: "var(--text-label)" }}>{item}</p>
                          </div>
                        ))}
                      </div>
                    ))}

                  </div>
                </div>
              </div>

              {/* Arrow connector */}
              <div className="flex items-center justify-center self-start mt-[60px]">
                <svg width="56" height="16" viewBox="0 0 56 16" fill="none">
                  <circle cx="5" cy="8" r="4" fill="#909090" />
                  <line x1="9" y1="8" x2="46" y2="8" stroke="#909090" strokeWidth="1.5" />
                  <path d="M46 4L54 8L46 12Z" fill="#909090" />
                </svg>
              </div>

              {/* Output card — 2/3 */}
              <div
                className="rounded-xl flex flex-col overflow-hidden"
                style={{ backgroundColor: "rgba(3, 133, 128, 0.6)", outline: "1.5px solid #038580" }}
              >
                <div className="px-5 pt-5 pb-3 shrink-0">
                  <p className="text-[12px] uppercase tracking-widest" style={{ fontWeight: 500, color: "#ffffff" }}>
                    Figma Make Output
                  </p>
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "4px", overflow: "hidden", position: "relative" }}>
                    <iframe
                      src="https://player.vimeo.com/video/1195658567?background=1&autoplay=1&loop=1&muted=1&autopause=0"
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                      allow="autoplay; fullscreen"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Reflection blockquote */}
            <blockquote className="mt-6 border-l-2 pl-5" style={{ borderColor: "var(--border)" }}>
              <p className="text-[14px] text-[var(--text-label)] leading-relaxed" style={{ fontWeight: 400 }}>
                AI surfaced a viable solution to the ambiguity challenges, but not necessarily the strongest UX. I continued with more targeted prompts and manual adjustments to refine the experience.
              </p>
            </blockquote>
          </div>
        </ScrollReveal>

        {/* Competitive Analysis */}
        <div style={{ height: "200px" }} />
        <ScrollReveal>
          <div>
            <TwoCol label="Crafting design">
              <h3
                className="text-[32px] leading-[1.15] text-[var(--text-primary)] mb-5"
                style={{ fontWeight: 400, letterSpacing: "-0.3px" }}
              >
                Fine-tuning the design
              </h3>
              <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
                [ Paragraph — summarize competitive landscape and Eventeny's opportunity. ]
              </p>
            </TwoCol>
            <div
              className="mt-8 rounded-2xl bg-[var(--bg-surface)] p-6"
              style={{ height: "500px", overflowX: "auto", overflowY: "hidden" }}
            >
              <div
                className="flex items-center gap-0 h-full"
                style={{ minWidth: "max-content" }}
              >
                {/* V1 */}
                <div className="h-full flex-shrink-0" style={{ width: "420px" }}>
                  <img
                    src="/migration-flow-v1.png"
                    alt="Migration flow V1"
                    className="h-full w-full object-contain object-top rounded-lg"
                  />
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center flex-shrink-0 px-4">
                  <svg width="56" height="16" viewBox="0 0 56 16" fill="none">
                    <circle cx="5" cy="8" r="4" fill="#909090" />
                    <line x1="9" y1="8" x2="46" y2="8" stroke="#909090" strokeWidth="1.5" />
                    <path d="M46 4L54 8L46 12Z" fill="#909090" />
                  </svg>
                </div>

                {/* V2 */}
                <div className="h-full flex-shrink-0" style={{ width: "420px" }}>
                  <img
                    src="/migration-flow-v2.png"
                    alt="Migration flow V2"
                    className="h-full w-full object-contain object-top rounded-lg"
                  />
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center flex-shrink-0 px-4">
                  <svg width="56" height="16" viewBox="0 0 56 16" fill="none">
                    <circle cx="5" cy="8" r="4" fill="#909090" />
                    <line x1="9" y1="8" x2="46" y2="8" stroke="#909090" strokeWidth="1.5" />
                    <path d="M46 4L54 8L46 12Z" fill="#909090" />
                  </svg>
                </div>

                {/* V3 */}
                <div className="h-full flex-shrink-0" style={{ width: "420px" }}>
                  <img
                    src="/migration-flow-v3.png"
                    alt="Migration flow V3"
                    className="h-full w-full object-contain object-top rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </section>

      <div style={{ height: "200px" }} />

      {/* ── 05 REFLECTION ────────────────────────────────────── */}
      <div id="reflection" />
      <div className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <section className="px-6 md:px-16 max-w-[72rem] mx-auto">

        <ScrollReveal>
          <TwoCol label="Impacts">
            <h2
              className="text-[32px] leading-[1.2] text-[var(--text-primary)] mb-8"
              style={{ fontWeight: 400, letterSpacing: "-0.3px" }}
            >
              [ Heading — impact and outcomes of this project ]
            </h2>
          </TwoCol>
          <div className="mt-10">
            <div className="grid grid-cols-3 gap-6">
              {[
                { n: "—", l: "Impact metric 1", d: "[ What this metric represents ]" },
                { n: "—", l: "Impact metric 2", d: "[ What this metric represents ]" },
                { n: "—", l: "Impact metric 3", d: "[ What this metric represents ]" },
              ].map((m) => (
                <div key={m.l}>
                  <p className="text-5xl md:text-6xl font-semibold text-orange leading-none mb-1">{m.n}</p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-1">{m.l}</p>
                  <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div style={{ height: "80px" }} />

        <ScrollReveal>
          <TwoCol label="Takeaways">
            <h3
              className="text-[32px] text-[var(--text-primary)] mb-4"
              style={{ fontWeight: 400, letterSpacing: "-0.3px" }}
            >
              [ Takeaway headline ]
            </h3>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal max-w-xl mb-8">
              [ Reflect on what you learned — about the problem space, the process, stakeholder dynamics,
              or your own growth as a designer. ]
            </p>
          </TwoCol>
        </ScrollReveal>

      </section>

    </div>
  );
}
