"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

function SectionHeader({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-x-10 md:gap-x-16 mb-10">
      <div className="hidden md:block pt-1">
        <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400 }}>
          {label}
        </p>
      </div>
      <div className="min-w-0">
        <h2 className="text-[32px] text-[var(--text-primary)] leading-[1.2]" style={{ fontWeight: 400, letterSpacing: "-0.2px" }}>
          {title}
        </h2>
        {body && (
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7", marginTop: "16px" }}>
            {body}
          </p>
        )}
      </div>
    </div>
  );
}

function Placeholder({ height = 400, label = "Image placeholder" }: { height?: number; label?: string }) {
  return (
    <div className="rounded-2xl bg-[var(--bg-surface)] w-full flex items-center justify-center" style={{ minHeight: height }}>
      <span className="text-[var(--text-secondary)] text-sm">{label}</span>
    </div>
  );
}

const PHOTO_WIDTH = 380;

function PhotoshootCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: "left" | "right") {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? PHOTO_WIDTH + 16 : -(PHOTO_WIDTH + 16), behavior: "smooth" });
  }

  return (
    <ScrollReveal>
      <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
        <hr style={{ borderColor: "var(--border)", marginBottom: "60px" }} />
        <div className="flex items-end justify-between" style={{ marginBottom: "24px" }}>
          <SectionHeader label="Photoshoot" title="Documenting the final collection." body="I started with toile making and fitting to make sure I get the effect and patterns I wanted." />
          <div className="flex gap-2 flex-shrink-0 pb-1">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[var(--text-primary)] hover:bg-white/10 transition-colors"
              aria-label="Previous"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[var(--text-primary)] hover:bg-white/10 transition-colors"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex flex-row gap-4 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {[1,2,3,4,5,6].map((n) => (
            <div key={n} className="rounded-2xl overflow-hidden bg-[var(--bg-surface)] flex-shrink-0" style={{ width: PHOTO_WIDTH, height: 560 }}>
              <img src={`/thesis-photoshoot-${n}.jpg`} alt={`Photoshoot ${n}`} className="w-full h-full" style={{ display: "block", objectFit: "cover" }} />
            </div>
          ))}
        </div>

        {/* Final photoshoot — stacked vertically, centered */}
        <div style={{ marginTop: "100px" }}>
          <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-6" style={{ fontWeight: 400 }}>Final photoshoots</p>
          <div className="flex flex-col gap-6 mx-auto" style={{ width: "66%" }}>
            {[1,2,3,4].map((n) => (
              <div key={n} className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]">
                <img src={`/thesis-final-${n}.jpg`} alt={`Final photoshoot ${n}`} className="w-full h-auto" style={{ display: "block" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export default function ProjectContent() {
  return (
    <div className="pb-32">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div id="overview" />
      <ScrollReveal>
        <section className="pt-28 pb-12 px-6 md:px-16 text-center max-w-[72rem] mx-auto">
          <h1 className="text-[40px] text-[var(--text-primary)] leading-[1.1] tracking-tight mb-6" style={{ fontWeight: 500 }}>
            Thesis: Metamorphosis
          </h1>
          <p className="text-[32px] leading-tight text-[var(--text-primary)]/70" style={{ fontWeight: 400, letterSpacing: "-0.1px" }}>
            A metamorphosis of humanity and machine — reconsidering our distance from complete digitalization.
          </p>
        </section>
      </ScrollReveal>

      {/* ── Cover + metadata ─────────────────────────────────── */}
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto">
          <div className="rounded-2xl overflow-hidden w-full" style={{ position: "relative", paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/G76zhmPOhfQ?autoplay=1&mute=1&controls=0&loop=1&playlist=G76zhmPOhfQ&modestbranding=1&rel=0"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            />
            {/* Overlay to block YouTube hover controls */}
            <div style={{ position: "absolute", inset: 0, zIndex: 10 }} />
          </div>

          <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-16 pt-16">
            <p className="text-[32px] text-[var(--text-primary)] leading-[1.3]" style={{ fontWeight: 400, letterSpacing: "-0.1px" }}>
              A thesis collection exploring the tension between human and machine — questioning what we lose as technology pulls us toward complete digitalization.
            </p>
            <div className="flex flex-col justify-center divide-y divide-[var(--border)]">
              <div className="pb-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">Timeline</p>
                <p className="text-[16px] text-[var(--text-primary)]">2020</p>
              </div>
              <div className="py-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">My Role</p>
                <p className="text-[16px] text-[var(--text-primary)]">Concept & Art Direction</p>
                <p className="text-[16px] text-[var(--text-primary)]">Pattern Making</p>
                <p className="text-[16px] text-[var(--text-primary)]">Garment Construction</p>
              </div>
              <div className="pt-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">Medium</p>
                <p className="text-[16px] text-[var(--text-primary)]">Fabric & Thread</p>
                <p className="text-[16px] text-[var(--text-primary)]">Fashion Illustration</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── INSPIRATION ──────────────────────────────────────── */}
      <div id="inspiration" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <hr style={{ borderColor: "var(--border)", marginBottom: "60px" }} />
          <SectionHeader
            label="Inspiration"
            title="Blade Runner silhouettes and 1940s femininity."
            body="I drew from Rachel in Blade Runner — suits with hyper-exaggerated shoulders, a feminine waist, and a dull, desaturated palette. I also researched 1940s female vintage tailoring, where femininity and elegance define the decade's essence."
          />
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]">
              <img src="/thesis-inspiration-1.jpg" alt="Blade Runner reference collage" className="w-full h-auto" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]">
              <img src="/thesis-inspiration-2.jpg" alt="Bio-mechanization mood board" className="w-full h-auto" />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]">
              <img src="/thesis-inspiration-collage.jpg" alt="Eifman Ballet inspiration collage" className="w-full h-auto" />
            </div>
          </div>
        </section>
      </ScrollReveal>


      {/* ── EXPLORATION ──────────────────────────────────────── */}
      <div id="exploration" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <hr style={{ borderColor: "var(--border)", marginBottom: "60px" }} />
          <SectionHeader
            label="Exploration"
            title="Prints, soft structures, and mechanical forms."
            body="I created prints from photos of mechanical parts and hardware, aiming to convey stiffness through fabric. I also created soft structures to imitate the shape of machine parts — placing them on the form to explore how they could be assimilated into the body."
          />
          <div className="grid grid-cols-2 gap-6">
            {/* Row 1 */}
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]">
              <img src="/thesis-exploration-1.jpg" alt="Sketch explorations" className="w-full h-auto" style={{ display: "block" }} />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]">
              <img src="/thesis-exploration-2.jpg" alt="Construction and toile work" className="w-full h-auto" style={{ display: "block" }} />
            </div>
            {/* Row 2 — left distorted to match right height of 323px */}
            <div className="rounded-lg overflow-hidden bg-[var(--bg-surface)]" style={{ height: "323px" }}>
              <img src="/thesis-exploration-3.jpg" alt="Draping explorations" className="w-full h-full" style={{ objectFit: "cover", display: "block" }} />
            </div>
            <div className="rounded-lg overflow-hidden bg-[var(--bg-surface)]" style={{ height: "323px" }}>
              <img src="/thesis-exploration-4.jpg" alt="Garment samples on form" className="w-full h-full" style={{ objectFit: "cover", display: "block" }} />
            </div>
            {/* Row 3 — single image full width */}
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)] col-span-2">
              <img src="/thesis-exploration-5.jpg" alt="Final toile fitting" className="w-full h-auto" style={{ display: "block" }} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── FINAL LINEUP ─────────────────────────────────────── */}
      <div id="final-design" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <hr style={{ borderColor: "var(--border)", marginBottom: "60px" }} />
          <SectionHeader
            label="Final Lineup"
            title="The complete lineup for the Metamorphosis thesis collection."
          />
          <div className="flex flex-col gap-6">
            {/* Fabrication images in container */}
            <div className="rounded-2xl bg-[var(--bg-surface)] p-10 flex flex-col gap-0">
              {/* fab-a: crop 60px top and bottom */}
              <div className="overflow-hidden rounded-t-2xl">
                <img src="/thesis-lineup-fab-a.png" alt="Fabrication materials and prints" className="w-full h-auto" style={{ display: "block", marginTop: "-92px", marginBottom: "-92px" }} />
              </div>
              <img src="/thesis-lineup-fab-b.png" alt="Fabrication hardware samples" className="w-full h-auto rounded-b-2xl" style={{ display: "block" }} />
            </div>
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]">
              <img src="/thesis-lineup-sketches.png" alt="Final lineup illustration" className="w-full h-auto" style={{ display: "block" }} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── PHOTOSHOOT ───────────────────────────────────────── */}
      <div id="photoshoot" />
      <PhotoshootCarousel />

    </div>
  );
}
