"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Sparkles, LayoutList, HeartHandshake } from "lucide-react";

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{ flexShrink: 0 }}>
    <path fill="#08A6A0" d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
  </svg>
);

function IntuitivenessAnimation() {
  return (
    <svg
      viewBox="0 0 100 100"
      width="72"
      height="72"
      fill="none"
      style={{ display: "block", marginBottom: "20px" }}
    >
      {/* Static gear in center */}
      <g
        transform="translate(32, 32) scale(1.5)"
        stroke="var(--text-primary)"
        strokeWidth={1.33}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </g>
      {/* Rotating outer ring + nodes */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50px 50px" }}
        stroke="var(--text-primary)"
        strokeWidth={2}
        strokeLinecap="round"
        fill="none"
      >
        <circle cx="50" cy="50" r="37" />
        <circle cx="50" cy="13" r="7" fill="var(--bg-surface)" />
        <circle cx="87" cy="50" r="7" fill="var(--bg-surface)" />
        <circle cx="50" cy="87" r="7" fill="var(--bg-surface)" />
        <circle cx="13" cy="50" r="7" fill="var(--bg-surface)" />
      </motion.g>
    </svg>
  );
}

function RevenueDriverAnimation() {
  // 3.3s cycle: 0.8s draw + 2.5s hold, then instant jump back
  const cycle = 3.3;
  const drawEnd = 0.8 / cycle; // ≈ 0.242 — when curve finishes

  return (
    <svg viewBox="12 12 150 155" width="72" height="72" fill="none" style={{ display: "block", marginBottom: "20px" }}>
      {/* Dashed axes — static */}
      <line x1="20" y1="160" x2="160" y2="160" stroke="var(--text-primary)" strokeWidth={3} strokeDasharray="8,6" strokeLinecap="round" />
      <line x1="20" y1="160" x2="20" y2="20" stroke="var(--text-primary)" strokeWidth={3} strokeDasharray="8,6" strokeLinecap="round" />

      {/* Vertical bars — all start at t=0, each tip meets the curve as it sweeps over */}
      {[
        { x: 50,  targetY: 148, meetSec: 0.16  },  // curve at x=50 ~20% of 0.8s
        { x: 80,  targetY: 128, meetSec: 0.352 },  // ~44%
        { x: 110, targetY: 96,  meetSec: 0.544 },  // ~68%
        { x: 140, targetY: 48,  meetSec: 0.736 },  // ~92%
      ].map(({ x, targetY, meetSec }) => (
        <motion.line
          key={x}
          x1={x} y1={160} x2={x} y2={targetY}
          stroke="var(--text-primary)"
          strokeWidth={3}
          strokeLinecap="round"
          style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 1] }}
          transition={{ duration: cycle, times: [0, meetSec / cycle, 1], repeat: Infinity, ease: ["easeOut", "linear"] }}
        />
      ))}

      {/* Growth curve — 0→1 over 0.8s, holds, then instant reset */}
      <motion.path
        d="M 25 152 C 45 150, 65 140, 85 122 C 105 103, 118 72, 150 30"
        stroke="var(--text-primary)"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: cycle, times: [0, drawEnd, 1], repeat: Infinity, ease: ["easeInOut", "linear"] }}
      />

      {/* Arrowhead — snaps in just after curve finishes, holds, then instant reset */}
      <motion.path
        d="M 138 27 L 152 29 L 150 43"
        stroke="var(--text-primary)"
        strokeWidth={3}
        strokeLinecap="round"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{ duration: cycle, times: [0, drawEnd, drawEnd + 0.03, 1], repeat: Infinity }}
      />
    </svg>
  );
}

function SocializationAnimation() {
  const cycle = 3.5;
  // Each step's end time in seconds
  const lEnd  = 0.25;   // left circle done
  const l2t   = 0.65;   // line left→top done
  const tEnd  = 0.85;   // top circle done
  const t2r   = 1.25;   // line top→right done
  const rEnd  = 1.45;   // right circle done
  const r2l   = 1.85;   // line right→left done (triangle complete)

  const f = (s: number) => s / cycle; // convert seconds to fraction

  return (
    <svg viewBox="0 0 100 100" width="72" height="72" fill="none" style={{ display: "block", marginBottom: "20px" }}>
      {/* Bottom-left circle */}
      <motion.circle cx={13} cy={83} r={8} stroke="var(--text-primary)" strokeWidth={2} fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: cycle, times: [0, f(lEnd), 1], repeat: Infinity, ease: ["easeInOut", "linear"] }}
      />
      {/* Line: left → top */}
      <motion.line x1={17} y1={76} x2={46} y2={23} stroke="var(--text-primary)" strokeWidth={2} strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: cycle, times: [f(lEnd), f(l2t), 1], repeat: Infinity, ease: ["easeOut", "linear"] }}
      />
      {/* Top circle */}
      <motion.circle cx={50} cy={16} r={8} stroke="var(--text-primary)" strokeWidth={2} fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: cycle, times: [f(l2t), f(tEnd), 1], repeat: Infinity, ease: ["easeInOut", "linear"] }}
      />
      {/* Line: top → right */}
      <motion.line x1={54} y1={23} x2={83} y2={76} stroke="var(--text-primary)" strokeWidth={2} strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: cycle, times: [f(tEnd), f(t2r), 1], repeat: Infinity, ease: ["easeOut", "linear"] }}
      />
      {/* Bottom-right circle */}
      <motion.circle cx={87} cy={83} r={8} stroke="var(--text-primary)" strokeWidth={2} fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: cycle, times: [f(t2r), f(rEnd), 1], repeat: Infinity, ease: ["easeInOut", "linear"] }}
      />
      {/* Line: right → left (closes the triangle) */}
      <motion.line x1={79} y1={83} x2={21} y2={83} stroke="var(--text-primary)" strokeWidth={2} strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: cycle, times: [f(rEnd), f(r2l), 1], repeat: Infinity, ease: ["easeOut", "linear"] }}
      />
    </svg>
  );
}

function TwoCol({
  label,
  children,
  className = "",
}: {
  label: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-16 ${className}`}>
      <div className="hidden md:block pt-1">
        <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400 }}>
          {label}
        </p>
      </div>
      {children != null ? <div className="min-w-0">{children}</div> : <div />}
    </div>
  );
}

function PhoneCard({ src, alt, align = "flex-start" }: { src: string; alt: string; align?: "flex-start" | "flex-end" }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.22, 1.05, 0.88]);

  return (
    <div
      ref={ref}
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#E6F3F2",
        height: "clamp(240px, 33vw, 400px)",
        display: "flex",
        alignItems: align,
        justifyContent: "center",
        paddingTop: align === "flex-start" ? "20%" : 0,
        paddingBottom: align === "flex-end" ? "20%" : 0,
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{
          scale,
          width: "54%",
          height: "auto",
          display: "block",
          flexShrink: 0,
        }}
      />
    </div>
  );
}

function Placeholder({ height = "300px", label = "Image placeholder" }: { height?: string; label?: string }) {
  return (
    <div
      className="w-full rounded-2xl bg-[var(--bg-surface)] flex items-center justify-center"
      style={{ minHeight: height }}
    >
      <p className="text-[var(--text-secondary)] text-sm">{label}</p>
    </div>
  );
}

export default function ProjectContent() {
  return (
    <div className="pb-32">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div id="overview" />
      <ScrollReveal>
      <section className="pt-28 pb-12 px-6 md:px-16 text-center max-w-[64rem] mx-auto">
        <h1 className="text-[40px] text-[var(--text-primary)] leading-[1.1] tracking-tight mb-6" style={{ fontWeight: 500 }}>
          Eventeny App for Attendees
        </h1>
        <p className="text-[32px] leading-tight text-[var(--text-primary)]/70" style={{ fontWeight: 400, letterSpacing: "-0.1px" }}>
          Create seamless event experiences for attendees
        </p>
      </section>
      </ScrollReveal>

      {/* ── Hero image ───────────────────────────────────────── */}
      <ScrollReveal>
      <section className="px-6 md:px-16 max-w-[64rem] mx-auto">
        <div className="rounded-2xl overflow-hidden mb-12">
          <Image
            src="https://framerusercontent.com/images/wKeS1Jc5EdgdM9CXQs3A6NCk.png"
            alt="Eventeny App for Attendees"
            width={2400}
            height={1600}
            className="w-full h-auto"
          />
        </div>

        {/* Body text + metadata */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16 pb-0">
          <p className="text-[32px] text-[var(--text-primary)] leading-[1.3]" style={{ fontWeight: 400, letterSpacing: "-0.1px" }}>
            I owned mobile app design from user interviews to shipped interactions, accelerating exploration through vibe coding.
          </p>
          <div className="flex flex-col justify-center divide-y divide-[var(--border)]">
            <div className="pb-5">
              <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">Timeline</p>
              <p className="text-[16px] text-[var(--text-primary)]">Oct 2025 – Feb 2026</p>
            </div>
            <div className="py-5">
              <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">My Role</p>
              <p className="text-[16px] text-[var(--text-primary)]">Lead Product Designer</p>
              <p className="text-[16px] text-[var(--text-primary)]">Design System Designer</p>
              <p className="text-[16px] text-[var(--text-primary)]">Prototyper</p>
            </div>
            <div className="pt-5">
              <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">Tools</p>
              <p className="text-[16px] text-[var(--text-primary)]">Figma</p>
              <p className="text-[16px] text-[var(--text-primary)]">Lovable</p>
              <p className="text-[16px] text-[var(--text-primary)]">Make</p>
            </div>
          </div>
        </div>
      </section>
      </ScrollReveal>

      {/* ── 2 phone mockup cards ─────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 max-w-[64rem] mx-auto" style={{ gap: "24px", marginTop: "80px" }}>
        <PhoneCard
          src="https://framerusercontent.com/images/gIPCMo4FVXRzM9ej5sgj1TTCXCQ.png"
          alt="Eventeny schedule screen"
          align="flex-start"
        />
        <PhoneCard
          src="https://framerusercontent.com/images/ZqKiIagmmgqYjjIaGCtsXiaeZNg.png"
          alt="Eventeny discovery screen"
          align="flex-end"
        />
      </div>

      <div style={{ height: "200px" }} />

      {/* ── 01 CONTEXT ───────────────────────────────────────── */}
      <div id="context" />
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <ScrollReveal>
      <section className="px-6 md:px-16 max-w-[64rem] mx-auto">
        <TwoCol label="CONTEXT">
          <div />
        </TwoCol>

        {/* Full-width image with quote overlay */}
        <div className="relative mt-10 rounded-2xl overflow-hidden" style={{ minHeight: "400px" }}>
          <img
            src="https://framerusercontent.com/images/7km6apxllYJwZxSOLxaV3Ci3Iuc.png"
            alt="Event crowd"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          <div className="relative z-10" style={{ minHeight: "400px" }} />
        </div>
      </section>
      </ScrollReveal>

      <div style={{ height: "200px" }} />

      {/* ── 02 CHALLENGE & SOLUTION ───────────────────────────── */}
      <div id="challenge-solution" />
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <ScrollReveal>
      <section className="px-6 md:px-16 max-w-[64rem] mx-auto">
        <TwoCol label="Challenge">
          <div>
            <h2 className="text-[32px] leading-[1.2] text-[var(--text-primary)] mb-6" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              Fragmented event experience for attendees
            </h2>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal mb-2">
              Founded in 2020, Eventeny is a startup that{" "}
              <strong className="text-[var(--text-primary)] font-normal">helps event organizers manage events, connect to vendors and sell tickets.</strong>
            </p>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
              In addition to event management, another company goal is to{" "}
              <strong className="text-[var(--text-primary)] font-normal">allow attendees save and show their tickets, view event schedules, and connect with other people</strong>{" "}
              who share similar interests during the event.
            </p>
          </div>
        </TwoCol>

        <div className="mt-12">
          {/* Challenge cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: 1, t: "Discovery limitations", d: "Users rely on external platforms like Facebook and Discord rather than in-app recommendations to find events." },
              { n: 2, t: "Fragmented planning", d: "The journey from purchase to event day involves multiple disconnected tools: emails, PDFs, maps, and separate scheduling apps." },
              { n: 3, t: "Limited networking", d: "Platforms don't facilitate meaningful attendee connections; networking depends on chance encounters rather than intentional design." },
            ].map((c) => (
              <div key={c.n} className="p-5 rounded-xl bg-[var(--bg-surface)] h-full">
                <h4 className="text-[16px] font-normal text-[var(--text-primary)] mb-2">{c.n}.{"  "}{c.t}</h4>
                <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">{c.d}</p>
              </div>
            ))}
          </div>

          {/* Connecting lines */}
          <div className="grid grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col items-center py-3">
                <motion.div
                  className="w-px bg-gray-700"
                  style={{ height: "52px", transformOrigin: "top", scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.3, delay: i * 0.1, ease: "easeOut" }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-gray-600"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.2, delay: i * 0.1 + 0.28, ease: "easeOut" }}
                />
              </div>
            ))}
          </div>

          {/* Solution cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Sparkles size={26} strokeWidth={1.5} color="#4A6FA5" />,
                iconBg: "#E8EFF8",
                label: "Explore events in-app",
              },
              {
                icon: <LayoutList size={26} strokeWidth={1.5} color="#4A8C66" />,
                iconBg: "#E8F2EC",
                label: "Customize event agenda",
              },
              {
                icon: <HeartHandshake size={26} strokeWidth={1.5} color="#7B5EA7" />,
                iconBg: "#EDE8F5",
                label: "Connect with event communities",
              },
            ].map((s) => (
              <div key={s.label} className="rounded-xl p-6 flex flex-col items-center gap-6" style={{ border: "1px solid rgb(46, 46, 46)" }}>
                <div
                  className="flex items-center justify-center"
                  style={{ width: "64px", height: "64px", backgroundColor: s.iconBg, borderRadius: "50%" }}
                >
                  {s.icon}
                </div>
                <p className="text-[16px] font-normal text-[var(--text-primary)] leading-snug text-center">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <div style={{ height: "200px" }} />

      {/* ── DESIGN SOLUTION ──────────────────────────────────── */}
      <ScrollReveal>
      <section className="px-6 md:px-16 max-w-[64rem] mx-auto">
        <TwoCol label="Design Solution">
          <h3 className="text-[32px] leading-[1.1] text-[var(--text-primary)] mb-5" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
            Event Attendee mobile app
          </h3>
          <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
            We designed a dedicated mobile app for Eventeny attendees that{" "}
            <strong className="text-[var(--text-primary)] font-normal">brings discovery, scheduling, and community into a single cohesive experience.</strong>{" "}
            The app is designed to reduce friction at every stage — from finding an event to sharing memories after.
          </p>
        </TwoCol>
      </section>
      </ScrollReveal>

      {/* Design Solution — editorial layout: image container left, text right */}
      <ScrollReveal>
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(24px, 4vw, 64px)", alignItems: "stretch" }}>

          {/* Left — video container with crowd photo background */}
          <div className="relative rounded-2xl overflow-hidden" style={{ height: "clamp(260px, 35vw, 400.6px)" }}>
            {/* Vimeo iframe fills container */}
            <iframe
              src="https://player.vimeo.com/video/1164016686?background=1&autoplay=1&loop=1&muted=1"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: "block", transform: "scale(1.0)", transformOrigin: "center center" }}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            {/* Crowd photo overlay — same image, gradient-masked to only show edges (hiding gray bars) while center stays transparent (phone shows through) */}
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage: "url('/eventeny-mockup-bg.png')",
              backgroundSize: "auto 120%",
              backgroundPosition: "center -10px",
              backgroundRepeat: "no-repeat",
              maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath fill-rule='evenodd' fill='white' d='M0,0 H100 V100 H0 Z M37.9,6 H63.6 A7.4,8.2 0 0 1 71,14.2 V85.8 A7.4,8.2 0 0 1 63.6,94 H37.9 A7.4,8.2 0 0 1 30.5,85.8 V14.2 A7.4,8.2 0 0 1 37.9,6 Z'/%3E%3C/svg%3E")`,
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath fill-rule='evenodd' fill='white' d='M0,0 H100 V100 H0 Z M37.9,6 H63.6 A7.4,8.2 0 0 1 71,14.2 V85.8 A7.4,8.2 0 0 1 63.6,94 H37.9 A7.4,8.2 0 0 1 30.5,85.8 V14.2 A7.4,8.2 0 0 1 37.9,6 Z'/%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Right — text at bottom */}
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div>
              <p style={{ fontSize: "24px", color: "var(--text-primary)", fontWeight: 400, lineHeight: "1.3", letterSpacing: "-0.3px", fontFamily: "DM Sans, sans-serif", marginBottom: "8px" }}>
                Customized onboarding
              </p>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5", fontFamily: "DM Sans, sans-serif" }}>
                Customized onboarding flow to tailor event experience for each attendee
              </p>
            </div>
          </div>

        </div>
      </div>
      </ScrollReveal>

      {/* Design Solution — section 2 */}
      <ScrollReveal>
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "60px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(24px, 4vw, 64px)", alignItems: "stretch" }}>

          {/* Left — video container with crowd photo background */}
          <div className="relative rounded-2xl overflow-hidden" style={{ height: "clamp(260px, 35vw, 398.6px)" }}>
            <iframe
              src="https://player.vimeo.com/video/1170441583?background=1&autoplay=1&loop=1&muted=1"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: "block", transform: "scale(0.885) translateX(3px)", transformOrigin: "center center" }}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage: "url('/eventeny-mockup-bg2.png')",
              backgroundSize: "auto 120%",
              backgroundPosition: "center -10px",
              backgroundRepeat: "no-repeat",
              maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath fill-rule='evenodd' fill='white' d='M0,0 H100 V100 H0 Z M37.8,6.25 H63.7 A7.1,8 0 0 1 70.8,14.25 V85.25 A7.1,8 0 0 1 63.7,93.25 H37.8 A7.1,8 0 0 1 30.7,85.25 V14.25 A7.1,8 0 0 1 37.8,6.25 Z'/%3E%3C/svg%3E")`,
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath fill-rule='evenodd' fill='white' d='M0,0 H100 V100 H0 Z M37.8,6.25 H63.7 A7.1,8 0 0 1 70.8,14.25 V85.25 A7.1,8 0 0 1 63.7,93.25 H37.8 A7.1,8 0 0 1 30.7,85.25 V14.25 A7.1,8 0 0 1 37.8,6.25 Z'/%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Right — text at bottom */}
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div>
              <p style={{ fontSize: "24px", color: "var(--text-primary)", fontWeight: 400, lineHeight: "1.3", letterSpacing: "-0.3px", fontFamily: "DM Sans, sans-serif", marginBottom: "8px" }}>
                Easy event discovery
              </p>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5", fontFamily: "DM Sans, sans-serif" }}>
                Forget scrolling Facebook or Instagram to find something to do. Eventeny surfaces <span style={{ color: "var(--text-primary)" }}>personalized event recommendations</span> based on your interests and past attendance — plus nearby events happening around you.
              </p>
            </div>
          </div>

        </div>
      </div>
      </ScrollReveal>

      {/* Design Solution — section 3 */}
      <ScrollReveal>
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "60px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(24px, 4vw, 64px)", alignItems: "stretch" }}>

          {/* Left — video container with crowd photo background */}
          <div className="relative rounded-2xl overflow-hidden" style={{ height: "clamp(260px, 35vw, 398.6px)" }}>
            <iframe
              src="https://player.vimeo.com/video/1170466125?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: "block", transform: "scale(0.882) translateX(3px) translateY(-1px)", transformOrigin: "center center" }}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage: "url('/eventeny-mockup-bg3.png')",
              backgroundSize: "auto 120%",
              backgroundPosition: "center -10px",
              backgroundRepeat: "no-repeat",
              maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath fill-rule='evenodd' fill='white' d='M0,0 H100 V100 H0 Z M37.8,6.25 H63.7 A7.1,8 0 0 1 70.8,14.25 V85.25 A7.1,8 0 0 1 63.7,93.25 H37.8 A7.1,8 0 0 1 30.7,85.25 V14.25 A7.1,8 0 0 1 37.8,6.25 Z'/%3E%3C/svg%3E")`,
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath fill-rule='evenodd' fill='white' d='M0,0 H100 V100 H0 Z M37.8,6.25 H63.7 A7.1,8 0 0 1 70.8,14.25 V85.25 A7.1,8 0 0 1 63.7,93.25 H37.8 A7.1,8 0 0 1 30.7,85.25 V14.25 A7.1,8 0 0 1 37.8,6.25 Z'/%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Right — text at bottom */}
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div>
              <p style={{ fontSize: "24px", color: "var(--text-primary)", fontWeight: 400, lineHeight: "1.3", letterSpacing: "-0.3px", fontFamily: "DM Sans, sans-serif", marginBottom: "8px" }}>
                Customize your schedule
              </p>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5", fontFamily: "DM Sans, sans-serif" }}>
                Event days can be hectic. Attendees can <span style={{ color: "var(--text-primary)" }}>build a personal schedule</span> by saving the sessions they care about, making it easy to navigate the day and stay on top of any last-minute changes.
              </p>
            </div>
          </div>

        </div>
      </div>
      </ScrollReveal>

      {/* Design Solution — section 4 */}
      <ScrollReveal>
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "60px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(24px, 4vw, 64px)", alignItems: "stretch" }}>

          {/* Left — video container with crowd photo background */}
          <div className="relative rounded-2xl overflow-hidden" style={{ height: "clamp(260px, 35vw, 398.6px)" }}>
            <iframe
              src="https://player.vimeo.com/video/1182876804?background=1&autoplay=1&loop=1&muted=1"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: "block", transform: "scale(0.9) translateX(5px) translateY(-2px)", transformOrigin: "center center" }}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage: "url('/eventeny-mockup-bg4.png')",
              backgroundSize: "auto 120%",
              backgroundPosition: "center -10px",
              backgroundRepeat: "no-repeat",
              maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath fill-rule='evenodd' fill='white' d='M0,0 H100 V100 H0 Z M37.8,6.25 H63.7 A7.1,8 0 0 1 70.8,14.25 V85.25 A7.1,8 0 0 1 63.7,93.25 H37.8 A7.1,8 0 0 1 30.7,85.25 V14.25 A7.1,8 0 0 1 37.8,6.25 Z'/%3E%3C/svg%3E")`,
              WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath fill-rule='evenodd' fill='white' d='M0,0 H100 V100 H0 Z M37.8,6.25 H63.7 A7.1,8 0 0 1 70.8,14.25 V85.25 A7.1,8 0 0 1 63.7,93.25 H37.8 A7.1,8 0 0 1 30.7,85.25 V14.25 A7.1,8 0 0 1 37.8,6.25 Z'/%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Right — text at bottom */}
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <div>
              <p style={{ fontSize: "24px", color: "var(--text-primary)", fontWeight: 400, lineHeight: "1.3", letterSpacing: "-0.3px", fontFamily: "DM Sans, sans-serif", marginBottom: "8px" }}>
                Find and connect with your community safely
              </p>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5", fontFamily: "DM Sans, sans-serif" }}>
                The experience doesn't have to end when the event does. Eventeny lets <span style={{ color: "var(--text-primary)" }}>verified ticket holders</span> connect with fellow attendees, share moments, and comment on experiences — with community guidelines and safety tools to keep interactions trustworthy.
              </p>
            </div>
          </div>

        </div>
      </div>
      </ScrollReveal>

      {/* ── Customize your schedule ──────────────────────────── */}
      <ScrollReveal>
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "80px" }}>
        <div className="grid grid-cols-2 gap-x-10 md:gap-x-16 mb-6">
          <p className="text-[24px] text-[var(--text-primary)] leading-[1.25]" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
            Customize your schedule
          </p>
          <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
            Event days can be hectic. Attendees can{" "}
            <strong className="text-[var(--text-primary)] font-normal">build a personal schedule</strong>{" "}
            by saving the sessions they care about, making it easy to navigate the day and stay on top of any last-minute changes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6" style={{ alignItems: "stretch" }}>
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#EDE8F5", minHeight: "560px", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1170466125?muted=1&autoplay=1&autopause=0&controls=0&loop=1&app_id=122963"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", display: "block" }}
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-2xl flex flex-col p-6" style={{ backgroundColor: "#FDF2E9", flex: 1, minHeight: "260px" }}>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-sm" style={{ color: "#d4b89a" }}>Microinteraction placeholder</p>
              </div>
              <p className="text-[14px] text-center mt-4" style={{ fontWeight: 450, color: "#333" }}>Like microinteraction</p>
            </div>

            <div className="rounded-2xl flex flex-col p-6" style={{ backgroundColor: "#EDFFFD", flex: 1, minHeight: "260px" }}>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-sm" style={{ color: "#b0ccc9" }}>Photo placeholder</p>
              </div>
              <p className="text-[14px] mt-4 text-center" style={{ fontWeight: 450, color: "#333" }}>View guests</p>
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>

      <div style={{ height: "200px" }} />

      {/* ── MARKET RESEARCH ──────────────────────────────────── */}
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <div id="research" />
      <ScrollReveal>
      <section className="px-6 md:px-16 max-w-[64rem] mx-auto">
        <TwoCol label="Market research">
          <h2 className="text-[32px] leading-[1.2] text-[var(--text-primary)]" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
            Eventeny positions itself as simple yet powerful for events of all scales
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5", fontFamily: "DM Sans, sans-serif", marginTop: "24px" }}>
            Eventeny's attendee mobile app is designed to be intuitive and user-friendly, catering to the needs of medium to large-scale events. Event organizers have full flexibility in customizing event information, while the app remains tightly integrated with our web platform for a seamless experience.
          </p>
        </TwoCol>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "40px" }}>
        <div className="rounded-2xl overflow-hidden flex items-center justify-center" style={{ backgroundColor: "var(--bg-surface)", padding: "24px 48px" }}>
          <img src="/eventeny-competitive-analysis.png" alt="Competitive analysis" style={{ maxWidth: "100%", height: "auto", display: "block", transform: "scale(0.9)" }} />
        </div>
      </div>
      </ScrollReveal>

      <ScrollReveal>
      <section className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "200px" }}>
        <TwoCol label="INTERVIEWS & FINDINGS">
          <h2 className="text-[32px] leading-[1.2] text-[var(--text-primary)]" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
            Satisfying both event organizers and attendees
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5", fontFamily: "DM Sans, sans-serif", marginTop: "24px" }}>
            The UX researcher and I interviewed 4 organizers and 6 attendees, uncovering a shared goal but different priorities. Attendees cared most about the <span style={{ color: "var(--text-primary)" }}>social experience</span> and <span style={{ color: "var(--text-primary)" }}>navigating events effortlessly,</span> while organizers focused on <span style={{ color: "var(--text-primary)" }}>driving on-site revenue</span> through merchandise and experience purchases.
          </p>
        </TwoCol>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "40px" }}>
        <div className="rounded-2xl overflow-hidden flex items-center justify-center" style={{ backgroundColor: "var(--bg-surface)", padding: "24px 48px" }}>
          <img src="/eventeny-venn-diagram.png" alt="Event organizer vs attendee goals" style={{ maxWidth: "100%", height: "auto", display: "block", transform: "scale(0.9)" }} />
        </div>
      </div>
      </ScrollReveal>

      <ScrollReveal>
      <section className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "200px" }}>
        <TwoCol label="MVP Vision">
          <h2 className="text-[32px] leading-[1.2] text-[var(--text-primary)]" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
            Discover events, buy tickets, plan your schedule, and connect with like-minded communities — all in one place
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5", fontFamily: "DM Sans, sans-serif", marginTop: "24px" }}>
            Designed for the Eventeny community, the app bridges existing platform services with a richer attendee experience — featuring personalized event discovery, intuitive schedule building, fast ticket checkout, and safe in-app networking.
          </p>
        </TwoCol>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "40px" }}>
        <div className="rounded-2xl" style={{ backgroundColor: "var(--bg-surface)", padding: "40px 48px" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Intuitiveness", body: "The app should be easy to navigate with low learning curve.", before: <IntuitivenessAnimation /> },
              { title: "Revenue driver", body: "We aim to offer faster and smoother check-out for tickets & experiences.", before: <RevenueDriverAnimation /> },
              { title: "Socialization", body: "Allow attendees to connect with like-minded communities safely.", before: <SocializationAnimation /> },
            ].map(({ title, body, before }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.5, ease: "easeOut" }}
              >
                {before}
                <p style={{ fontSize: "24px", fontWeight: 500, color: "var(--text-primary)", fontFamily: "DM Sans, sans-serif", marginBottom: "12px" }}>{title}</p>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5", fontFamily: "DM Sans, sans-serif" }}>{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </ScrollReveal>

      <div style={{ height: "200px" }} />

      {/* ── 03 DESIGN PROCESS ────────────────────────────────── */}
      <div id="design-process" />
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <ScrollReveal>
      <section className="px-6 md:px-16 max-w-[64rem] mx-auto">
        <TwoCol label="Challenge 1">
          <h2 className="text-[32px] leading-[1.2] text-[var(--text-primary)]" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
            Retaining Users on Eventeny Through Native Social Features
          </h2>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5", fontFamily: "DM Sans, sans-serif", marginTop: "24px" }}>
            Attendees want to connect with like-minded people — but without social tools on Eventeny, they're turning to Facebook, Instagram, and Discord to do it.
          </p>
        </TwoCol>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "40px" }}>
        <div className="rounded-2xl" style={{ backgroundColor: "var(--bg-surface)", padding: "40px 48px" }}>
          <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400, marginBottom: "16px" }}>EXPLORATION</p>
          <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5", fontFamily: "DM Sans, sans-serif", marginBottom: "32px" }}>
            During exploration, I prototyped 4 levels of social interaction and presented them to the team. After aligning with the product manager, UX researcher, and leadership, we narrowed scope to <span style={{ color: "var(--text-primary)" }}>Redirection</span> and <span style={{ color: "var(--text-primary)" }}>Spontaneity</span> — prioritizing in-person connection over a full social media experience.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { img: "/eventeny-awareness.png", label: "Awareness", desc: "See attendee list", highlight: false },
              { img: "/eventeny-redirection.png", label: "Redirection", desc: "Connection happens on other social media", highlight: true },
              { img: "/eventeny-community.png", label: "Community", desc: "Share & chat within Eventeny", highlight: false },
              { img: "/eventeny-spontaneity.png", label: "Spontaneity", desc: "Meet up in-person", highlight: true },
            ].map(({ img, label, desc, highlight }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <div className="relative w-[80px] h-[168px] shrink-0">
                  <Image src={img} alt={label} fill className="object-cover" />
                </div>
                <div className="text-center w-full">
                  <p style={{ fontSize: "14px", fontWeight: 500, color: highlight ? "#08A6A0" : "#ffffff", fontFamily: "DM Sans, sans-serif", lineHeight: "1.57", marginBottom: "4px", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                    {highlight && <CheckCircleIcon />}
                    {label}
                  </p>
                  <p style={{ fontSize: "14px", fontWeight: 400, color: "var(--text-secondary)", fontFamily: "DM Sans, sans-serif", lineHeight: "1.57" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </ScrollReveal>


      <ScrollReveal>
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "60px" }}>
        <div className="rounded-2xl" style={{ backgroundColor: "var(--bg-surface)", padding: "40px 48px" }}>
          <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400, marginBottom: "32px" }}>PROTOTYPES</p>
          <div className="flex justify-center flex-wrap" style={{ gap: "clamp(24px, 5vw, 60px)" }}>
            {[
              { src: "/eventeny-view-attendees.mov", label: "View attendee details" },
              { src: "/eventeny-invite-meet.mov", label: "Invite to meet up" },
            ].map(({ src, label }) => (
              <div key={label} style={{ flex: "0 1 194px", maxWidth: "194px" }}>
                <div className="relative overflow-hidden w-full" style={{ aspectRatio: "194 / 398.6", borderRadius: "34px", backgroundColor: "var(--bg-surface)" }}>
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", marginRight: "3px" }}
                  />
                </div>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-primary)", fontFamily: "DM Sans, sans-serif", marginTop: "12px", textAlign: "center" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </ScrollReveal>

      <ScrollReveal>
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "60px" }}>
        <div className="rounded-2xl" style={{ backgroundColor: "var(--bg-surface)", padding: "40px 48px" }}>
          <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400, marginBottom: "32px" }}>DESIGN VALIDATION</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
              <img src="/eventeny-dv-1.jpg" alt="Design validation 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
              <img src="/eventeny-dv-2.jpg" alt="Design validation 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
              <img src="/eventeny-dv-3.jpg" alt="Design validation 3" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="rounded-xl overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
              <img src="/eventeny-dv-4.jpg" alt="Design validation 4" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>

      {/* ── Find and connect with your community ─────────────── */}
      <ScrollReveal>
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto" style={{ marginTop: "60px" }}>
        <div className="grid grid-cols-2 gap-x-10 md:gap-x-16 mb-6">
          <p className="text-[24px] text-[var(--text-primary)] leading-[1.25]" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
            Find and connect with your community safely
          </p>
          <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
            The experience doesn't have to end when the event does. Eventeny lets{" "}
            <strong className="text-[var(--text-primary)] font-normal">verified ticket holders</strong>{" "}
            connect with fellow attendees, share moments, and comment on experiences — with community guidelines and safety tools to keep interactions trustworthy.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-2xl flex flex-col p-6" style={{ backgroundColor: "#DCE8F5", minHeight: "480px" }}>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-sm" style={{ color: "#a0b8d4" }}>Phone mockup placeholder</p>
            </div>
            <p className="text-[14px] mt-4 text-center" style={{ fontWeight: 450, color: "#333" }}>Interact with the community safely</p>
          </div>

          <div className="rounded-2xl flex flex-col p-6" style={{ backgroundColor: "#DCE8F5", minHeight: "480px" }}>
            <p className="text-[14px] mb-4 text-center" style={{ fontWeight: 450, color: "#333" }}>Share with YOUR community</p>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-sm" style={{ color: "#a0b8d4" }}>Phone mockup placeholder</p>
            </div>
          </div>
        </div>
      </div>
      </ScrollReveal>

      <div style={{ height: "200px" }} />

      {/* ── 04 REFLECTION ────────────────────────────────────── */}
      <div id="reflection" />
      <div className="px-6 md:px-16 max-w-[64rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <section className="px-6 md:px-16 max-w-[64rem] mx-auto">

        <ScrollReveal>
        <TwoCol label="Impacts">
          <div>
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { n: "47s", l: "Average time to find an event to attend" },
                { n: "68%", l: "Day-of retention" },
                { n: "3.2x", l: "More post-event engagement" },
              ].map((m) => (
                <div key={m.n}>
                  <p className="text-5xl md:text-6xl font-semibold leading-none mb-2" style={{ color: "#FD632B" }}>{m.n}</p>
                  <p className="text-sm font-medium text-[var(--text-primary)]">{m.l}</p>
                </div>
              ))}
            </div>
            <p className="text-[32px] leading-[1.2] text-[var(--text-primary)]" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              Becoming the dominating event app in the market
            </p>
          </div>
        </TwoCol>
        </ScrollReveal>

        <div style={{ height: "80px" }} />

        <ScrollReveal>
        <TwoCol label="Takeaways">
          <div>
            <h3 className="text-[32px] text-[var(--text-primary)] mb-4" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              Balancing business asks and user needs
            </h3>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal mb-4">
              This project pushed me to think beyond the organizer side of Eventeny and deeply understand the attendee perspective. Designing for consumers required a different lens — one focused on delight, speed, and emotional resonance rather than utility alone.
            </p>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
              I learned to advocate for user needs while keeping business viability in view, and to move quickly by prototyping in code — letting real interactions drive decisions faster than static mockups could.
            </p>
          </div>
        </TwoCol>
        </ScrollReveal>

      </section>

    </div>
  );
}
