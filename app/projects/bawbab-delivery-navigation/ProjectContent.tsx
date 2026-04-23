"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

function TwoCol({
  label,
  sublabel,
  children,
  className = "",
  labelColor,
}: {
  label: string;
  sublabel?: string;
  children?: ReactNode;
  className?: string;
  labelColor?: string;
}) {
  if (sublabel) {
    return (
      <div className={`grid grid-cols-2 gap-x-10 md:gap-x-16 gap-y-8 ${className}`}>
        <div className="hidden md:block">
          <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400, ...(labelColor ? { color: labelColor } : {}) }}>
            {label}
          </p>
        </div>
        <div />
        <div className="hidden md:block pt-1">
          <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "140%", color: "white" }}>
            {sublabel}
          </p>
        </div>
        {children != null ? <div className="min-w-0">{children}</div> : <div />}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 gap-x-10 md:gap-x-16 ${className}`}>
      <div className="hidden md:block pt-1">
        <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400, ...(labelColor ? { color: labelColor } : {}) }}>
          {label}
        </p>
      </div>
      {children != null ? <div className="min-w-0">{children}</div> : <div />}
    </div>
  );
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" style={{ flexShrink: 0 }}>
    <path fill="#08A6A0" d="M14.72,8.79l-4.29,4.3L8.78,11.44a1,1,0,1,0-1.41,1.41l2.35,2.36a1,1,0,0,0,.71.29,1,1,0,0,0,.7-.29l5-5a1,1,0,0,0,0-1.42A1,1,0,0,0,14.72,8.79ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" />
  </svg>
);

export default function ProjectContent() {
  return (
    <div className="pb-32">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div id="overview" />
      <ScrollReveal>
        <section className="pt-28 pb-12 px-6 md:px-16 text-center max-w-[72rem] mx-auto">
          <h1 className="text-[40px] text-[var(--text-primary)] leading-[1.1] tracking-tight mb-6" style={{ fontWeight: 500 }}>
            Bawbab Package Delivery
          </h1>
          <p className="text-[32px] leading-tight text-[var(--text-primary)]/70" style={{ fontWeight: 400, letterSpacing: "-0.1px" }}>
            Filling the gap of last mile delivery in Nairobi, Africa
          </p>
        </section>
      </ScrollReveal>

      {/* ── Cover image + metadata ────────────────────────────── */}
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto">
          <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]">
            <img
              src="https://framerusercontent.com/images/cKGD2CyV5oUiqdAjbZISYl393YI.png"
              alt="Bawbab Delivery Navigation"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "600px", objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-16 pt-16">
            <p className="text-[32px] text-[var(--text-primary)] leading-[1.3]" style={{ fontWeight: 400, letterSpacing: "-0.1px" }}>
              I led the north star design of the driver's app and developing ideal delivery product by conducting usability testing and handed off the MVP to the engineering team.
            </p>
            <div className="flex flex-col justify-center divide-y divide-[var(--border)]">
              <div className="pb-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">Timeline</p>
                <p className="text-[16px] text-[var(--text-primary)]">2022–2023</p>
              </div>
              <div className="py-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">My Role</p>
                <p className="text-[16px] text-[var(--text-primary)]">Lead Product Designer</p>
                <p className="text-[16px] text-[var(--text-primary)]">Product Strategist</p>
                <p className="text-[16px] text-[var(--text-primary)]">Prototyper</p>
              </div>
              <div className="pt-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">Tools</p>
                <p className="text-[16px] text-[var(--text-primary)]">Figma</p>
                <p className="text-[16px] text-[var(--text-primary)]">Google Maps API</p>
              </div>
            </div>
          </div>

        </section>
      </ScrollReveal>

      {/* ── Banner image — full width ─────────────────────────── */}
      <ScrollReveal>
        <div className="mt-16 overflow-hidden bg-[var(--bg-surface)]">
          <img
            src="https://framerusercontent.com/images/maAdNQtuodpWTKuvSG7nRxXTJGA.png"
            alt="Bawbab app screens"
            className="w-full h-auto"
          />
        </div>
      </ScrollReveal>

      {/* ── CONTEXT ──────────────────────────────────────────── */}
      <div id="context" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <hr style={{ borderColor: "var(--border)", marginBottom: "60px" }} />
          <TwoCol label="Context">
            <div>
              <h2 className="text-[32px] text-[var(--text-primary)] leading-[1.2] mb-6" style={{ fontWeight: 400, letterSpacing: "-0.2px" }}>
                Missing last-mile delivery in Kenya, Africa
              </h2>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Poor road conditions and infrastructure make last-mile delivery navigation challenging. The current system relies on customer self-pickup at post offices, and packages frequently go missing due to infrastructure limitations. Bawbab set out to solve this with a driver-first app built for Nairobi's realities.
              </p>
            </div>
          </TwoCol>

          {/* Context image */}
          <div className="mt-10 rounded-2xl overflow-hidden bg-[var(--bg-surface)]" style={{ height: "450px" }}>
            <img
              src="https://framerusercontent.com/images/xVxq2Keg0mh5WPlKEDacusIjfc.png"
              alt="Bawbab context — 3 challenges"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </ScrollReveal>

      {/* ── CHALLENGE ────────────────────────────────────────── */}
      <div id="challenge-solution" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <hr style={{ borderColor: "var(--border)", marginBottom: "60px" }} />
          <TwoCol label="Challenge">
            <div>
              <h2 className="text-[32px] text-[var(--text-primary)] leading-[1.2] mb-6" style={{ fontWeight: 400, letterSpacing: "-0.2px" }}>
                Poor road conditions and infrastructure make last mile delivery navigation challenging
              </h2>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                When building up the product, the team encountered technical and contextual challenges for residents in Kenya. In addition, we also faced common concerns drivers and package receivers expect during the delivery process.
              </p>
            </div>
          </TwoCol>

          {/* 3 challenge cards */}
          <div className="mt-10 grid grid-cols-3 gap-6">

            {/* Card 1 — Package safety */}
            <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8 flex flex-col gap-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="40" height="40">
                <path d="M 26.25 38.75 L 33.75 38.75 L 33.75 32.5 L 40 32.5 L 40 25 L 33.75 25 L 33.75 18.75 L 26.25 18.75 L 26.25 25 L 20 25 L 20 32.5 L 26.25 32.5 Z M 30 55 C 24.208 53.542 19.427 50.219 15.656 45.031 C 11.885 39.844 10 34.083 10 27.75 L 10 12.5 L 30 5 L 50 12.5 L 50 27.75 C 50 34.083 48.115 39.844 44.344 45.031 C 40.573 50.219 35.792 53.542 30 55 Z M 30 49.75 C 34.333 48.375 37.917 45.625 40.75 41.5 C 43.583 37.375 45 32.792 45 27.75 L 45 15.938 L 30 10.313 L 15 15.938 L 15 27.75 C 15 32.792 16.417 37.375 19.25 41.5 C 22.083 45.625 25.667 48.375 30 49.75 Z M 30 30" fill="rgb(0, 111, 253)"/>
              </svg>
              <div>
                <p className="text-[var(--text-primary)] mb-3" style={{ fontSize: "15px", fontWeight: 500, lineHeight: "1.5" }}>
                  1. Package safety and drivers' eligibility concerns raised by package receivers
                </p>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  It can be disturbing for end users to delegate delivery tasks to a stranger in a big city like Nairobi. The packages can get stolen, damaged and privacy can be compromised.
                </p>
              </div>
            </div>

            {/* Card 2 — Road conditions */}
            <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8 flex flex-col gap-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M8.24253,3.02985 C8.77832,3.1638 9.10408,3.70673 8.97013,4.24253 L4.97013,20.2425 C4.83619,20.7783 4.29325,21.1041 3.75746,20.9701 C3.22166,20.8362 2.8959,20.2933 3.02985,19.7575 L7.02985,3.75746 C7.1638,3.22166 7.70673,2.8959 8.24253,3.02985 Z M16.9701,3.75746 L20.9701,19.7575 C21.1041,20.2933 20.7783,20.8362 20.2425,20.9701 C19.7067,21.1041 19.1638,20.7783 19.0299,20.2425 L15.0299,4.24253 C14.8959,3.70673 15.2217,3.1638 15.7575,3.02985 C16.2933,2.8959 16.8362,3.22166 16.9701,3.75746 Z M12,17 C12.51285,17 12.9355092,17.386027 12.9932725,17.8833761 L13,18 L13,20 C13,20.5523 12.5523,21 12,21 C11.48715,21 11.0644908,20.613973 11.0067275,20.1166239 L11,20 L11,18 C11,17.4477 11.4477,17 12,17 Z M12,9.99999 C12.5523,9.99999 13,10.4477 13,10.99999 L13,12.99999 C13,13.5523 12.5523,13.99999 12,13.99999 C11.4477,13.99999 11,13.5523 11,12.99999 L11,10.99999 C11,10.4477 11.4477,9.99999 12,9.99999 Z M12,2.99999 C12.51285,2.99999 12.9355092,3.38603429 12.9932725,3.88336975 L13,3.99999 L13,5.99999 C13,6.55228 12.5523,6.99999 12,6.99999 C11.48715,6.99999 11.0644908,6.61395434 11.0067275,6.1166121 L11,5.99999 L11,3.99999 C11,3.44771 11.4477,2.99999 12,2.99999 Z" fill="rgb(0, 111, 253)" fillRule="nonzero"/>
              </svg>
              <div>
                <p className="text-[var(--text-primary)] mb-3" style={{ fontSize: "15px", fontWeight: 500, lineHeight: "1.5" }}>
                  2. Inadequate road conditions and poor digital infrastructure
                </p>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  Nairobi's poor road conditions and signage make it difficult for drivers to navigate the city independently. Additionally, the lack of digital infrastructure means GPS navigation is often unavailable in many neighborhoods.
                </p>
              </div>
            </div>

            {/* Card 3 — Driver incentives (real SVG) */}
            <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8 flex flex-col gap-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="40" height="40">
                <path d="M 40 27.5 C 40.708 27.5 41.302 27.26 41.781 26.781 C 42.26 26.302 42.5 25.708 42.5 25 C 42.5 24.292 42.26 23.698 41.781 23.219 C 41.302 22.74 40.708 22.5 40 22.5 C 39.292 22.5 38.698 22.74 38.219 23.219 C 37.74 23.698 37.5 24.292 37.5 25 C 37.5 25.708 37.74 26.302 38.219 26.781 C 38.698 27.26 39.292 27.5 40 27.5 Z M 20 22.5 L 32.5 22.5 L 32.5 17.5 L 20 17.5 Z M 11.25 52.5 C 9.833 47.75 8.438 43.01 7.062 38.281 C 5.687 33.552 5 28.708 5 23.75 C 5 19.917 6.333 16.667 9 14 C 11.667 11.333 14.917 10 18.75 10 L 31.25 10 C 32.458 8.417 33.927 7.188 35.656 6.312 C 37.385 5.438 39.25 5 41.25 5 C 42.292 5 43.177 5.365 43.906 6.094 C 44.635 6.823 45 7.708 45 8.75 C 45 9 44.969 9.25 44.906 9.5 C 44.844 9.75 44.771 9.979 44.688 10.187 C 44.521 10.646 44.365 11.115 44.219 11.594 C 44.073 12.073 43.958 12.562 43.875 13.063 L 49.562 18.75 L 55 18.75 L 55 36.188 L 47.938 38.5 L 43.75 52.5 L 30 52.5 L 30 47.5 L 25 47.5 L 25 52.5 Z M 15 47.5 L 20 47.5 L 20 42.5 L 35 42.5 L 35 47.5 L 40 47.5 L 43.875 34.625 L 50 32.562 L 50 23.75 L 47.5 23.75 L 38.75 15 C 38.75 14.167 38.802 13.365 38.906 12.594 C 39.01 11.823 39.167 11.042 39.375 10.25 C 38.167 10.583 37.104 11.156 36.188 11.969 C 35.271 12.781 34.604 13.792 34.188 15 L 18.75 15 C 16.333 15 14.271 15.854 12.562 17.562 C 10.854 19.271 10 21.333 10 23.75 C 10 27.833 10.563 31.823 11.688 35.719 C 12.813 39.615 13.917 43.542 15 47.5 Z" fill="rgb(0, 111, 253)"/>
              </svg>
              <div>
                <p className="text-[var(--text-primary)] mb-3" style={{ fontSize: "15px", fontWeight: 500, lineHeight: "1.5" }}>
                  3. Insufficient drivers incentives for signing up Bawbab service
                </p>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  Local drivers may be hesitant to sign up because there is not enough motivations. This will hinder local last-mile-delivery service.
                </p>
              </div>
            </div>

          </div>

          {/* Connecting lines */}
          <div className="grid grid-cols-3 gap-6 mt-2">
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
          <div className="grid grid-cols-3 gap-6">
            {[
              "A thorough and discrete background checking to ensure the safety of the end users and drivers.",
              "A step-by-step guide with VUI to aid drivers navigate offline maps and locate household to complete delivery.",
              "A motivation system that helps drivers keep building up their mileage and deliveries with points and leveling up.",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-6" style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: i * 0.1, ease: "easeOut" }}
              >
                <p className="text-[var(--text-label)] mb-2" style={{ fontSize: "13px", fontWeight: 400 }}>Solution:</p>
                <p className="text-[var(--text-primary)]" style={{ fontSize: "15px", fontWeight: 400, lineHeight: "1.6" }}>{text}</p>
              </motion.div>
            ))}
          </div>

        </section>
      </ScrollReveal>

      {/* ── FINAL DESIGN ─────────────────────────────────────── */}
      <div id="final-design" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <hr style={{ borderColor: "var(--border)", marginBottom: "60px" }} />
          <TwoCol label="Final Design">
            <div>
              <h2 className="text-[32px] text-[var(--text-primary)] leading-[1.2] mb-6" style={{ fontWeight: 400, letterSpacing: "-0.2px" }}>
                A web-App that provides localized and safe delivery instructions and offline navigation using Google Map API in Kenya, Africa
              </h2>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                The team proposed to develop a full-stack web-App MVP using react.js, Django and Google Map Platform API to{" "}
                <strong className="text-[var(--text-primary)] font-normal">accurately locate each household</strong>{" "}
                in major cities in Kenya for part-time drivers and end users.
              </p>
            </div>
          </TwoCol>

        {/* ── Design Solution 1 ── */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(24px, 4vw, 64px)", alignItems: "stretch" }}>
            {/* Left — GIF */}
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]" style={{ height: "clamp(260px, 35vw, 400px)", paddingTop: "24px", paddingBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src="https://framerusercontent.com/images/YXQw9EXxeOxtvNeehi15qKouYe4.gif"
                alt="Driver verification flow"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center center", display: "block" }}
              />
            </div>
            {/* Right — text */}
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <div>
                <p style={{ fontSize: "24px", color: "var(--text-primary)", fontWeight: 400, lineHeight: "1.3", letterSpacing: "-0.3px", marginBottom: "8px" }}>
                  Comprehensive driver verification to ensure safety
                </p>
                <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5" }}>
                  The verification flow enables background checks and document validation to ensure only reliable, vetted drivers can accept deliveries — giving package receivers peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Design Solution 2 ── */}
        <div style={{ marginTop: "60px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(24px, 4vw, 64px)", alignItems: "stretch" }}>
            {/* Left — GIF */}
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]" style={{ height: "clamp(260px, 35vw, 400px)", paddingTop: "24px", paddingBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src="https://framerusercontent.com/images/wCgdgNRNvmfLx3MAY2ymgsUs9M.gif"
                alt="Easy delivery proof"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center center", display: "block" }}
              />
            </div>
            {/* Right — text */}
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <div>
                <p style={{ fontSize: "24px", color: "var(--text-primary)", fontWeight: 400, lineHeight: "1.3", letterSpacing: "-0.3px", marginBottom: "8px" }}>
                  Easy delivery proof
                </p>
                <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5" }}>
                  A simple photo-based confirmation step lets drivers capture delivery evidence on the spot — reducing disputes and giving both parties a clear record of completed handoffs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Design Solution 3 ── */}
        <div style={{ marginTop: "60px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(24px, 4vw, 64px)", alignItems: "stretch" }}>
            {/* Left — GIF */}
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]" style={{ height: "clamp(260px, 35vw, 400px)", paddingTop: "24px", paddingBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src="https://framerusercontent.com/images/pvIPDY7ZY3hfiRHhrwpSnMGMe4.gif"
                alt="Accurate offline and online navigation"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center center", display: "block" }}
              />
            </div>
            {/* Right — text */}
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <div>
                <p style={{ fontSize: "24px", color: "var(--text-primary)", fontWeight: 400, lineHeight: "1.3", letterSpacing: "-0.3px", marginBottom: "8px" }}>
                  Accurate offline and online navigation for a smooth experience
                </p>
                <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5" }}>
                  A step-by-step guide with voice UI helps drivers navigate using offline maps and locate households even in areas with poor digital infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Design Solution 4 ── */}
        <div style={{ marginTop: "60px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(24px, 4vw, 64px)", alignItems: "stretch" }}>
            {/* Left — GIF */}
            <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]" style={{ height: "clamp(260px, 35vw, 400px)", paddingTop: "24px", paddingBottom: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img
                src="https://framerusercontent.com/images/VUSBdFyT2ZW9SAHInMfPVUjdIs.gif"
                alt="Maximized earnings for drivers"
                style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center center", display: "block" }}
              />
            </div>
            {/* Right — text */}
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <div>
                <p style={{ fontSize: "24px", color: "var(--text-primary)", fontWeight: 400, lineHeight: "1.3", letterSpacing: "-0.3px", marginBottom: "8px" }}>
                  Maximized earnings for drivers
                </p>
                <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 400, lineHeight: "1.5" }}>
                  A motivation system rewards drivers with points and level-ups as they complete deliveries — creating a transparent incentive structure that encourages consistent participation.
                </p>
              </div>
            </div>
          </div>
        </div>

        </section>
      </ScrollReveal>

      {/* ── RESEARCH ─────────────────────────────────────────── */}
      <div id="research" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <hr style={{ borderColor: "var(--border)", marginBottom: "60px" }} />
          <TwoCol label="Research">
            <div>
              <h2 className="text-[32px] text-[var(--text-primary)] leading-[1.2] mb-6" style={{ fontWeight: 400, letterSpacing: "-0.2px" }}>
                Self-pickup and poor digital infrastructure result in less than ideal delivery experiences
              </h2>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                Our research with local drivers and recipients in Nairobi surfaced three core design priorities: driver identity verification, seamless package pickup with proof, and reliable online/offline navigation with a voice-based interface.
              </p>
            </div>
          </TwoCol>

          {/* Image below research */}
          <div className="mt-10 rounded-2xl overflow-hidden bg-[var(--bg-surface)]">
            <img
              src="https://framerusercontent.com/images/MtcmFiqOdZwyO5OvmT0Dhqa5Sw.png?scale-down-to=2048"
              alt="Existing solution"
              className="w-full h-auto"
            />
          </div>
        </section>
      </ScrollReveal>

      {/* HMW — full width */}
      <ScrollReveal>
        <div style={{ marginTop: "200px", backgroundColor: "#2040B8", padding: "64px clamp(24px, 6vw, 96px)" }}>
          <div className="grid grid-cols-2 gap-x-16 max-w-[72rem] mx-auto">
            <div>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.7)", fontWeight: 400 }}>
                Reframing The Problem
              </p>
            </div>
            <div>
              <p style={{ fontSize: "32px", color: "var(--text-primary)", fontWeight: 400, lineHeight: "1.2", letterSpacing: "-0.2px" }}>
                How might we build a package delivery web-App for drivers in Nairobi, Kenya?
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Driver's User Flow */}
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <TwoCol label="Driver's User Flow">
            <div>
              <h2 className="text-[32px] text-[var(--text-primary)] leading-[1.2] mb-6" style={{ fontWeight: 400, letterSpacing: "-0.2px" }}>
                Analyzing users and drivers flows pinpointed key features
              </h2>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                PM, founders and I worked on the driver flow to map out features point of contact and identify key pain points in the delivery process.
              </p>
            </div>
          </TwoCol>
          <div className="mt-10 rounded-2xl overflow-hidden bg-[var(--bg-surface)]" style={{ padding: "48px" }}>
            <img
              src="https://framerusercontent.com/images/RaPIvrVmxJh3W0RiyehM9Oymu8.png?scale-down-to=2048"
              alt="Driver's user flow diagram"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <TwoCol label="Design Goals">
            <div />
          </TwoCol>
          {/* 3 features */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            {[
              { title: "Driver's identity verification", desc: "Background checks and ID validation to ensure safety for all parties." },
              { title: "Delivery pickup & proof", desc: "Contactless pickup and digital proof of delivery with minimal friction." },
              { title: "Online & offline navigation", desc: "Turn-by-turn navigation with voice assistance that works without internet." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-[var(--bg-surface)] p-8">
                <h3 className="text-[var(--text-primary)] mb-3" style={{ fontSize: "16px", fontWeight: 450, lineHeight: "1.4" }}>{item.title}</h3>
                <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── DESIGN PROCESS ───────────────────────────────────── */}
      <div id="design-process" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <hr style={{ borderColor: "var(--border)", marginBottom: "60px" }} />
          <TwoCol label="Localization & Technical Barrier">
            <div>
              <h2 className="text-[32px] text-[var(--text-primary)] leading-[1.2] mb-6" style={{ fontWeight: 400, letterSpacing: "-0.2px" }}>
                How do we <span style={{ color: "rgb(0,111,253)" }}>adapt and localize</span> for Kenya, Africa?
              </h2>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                After conducting user research with local support team in Kenya, the team discovered unique challenges in the Kenyan context that I needed to bear in mind when designing.
              </p>
            </div>
          </TwoCol>

          {/* 3 technical challenge cards */}
          <div className="grid grid-cols-3 gap-6" style={{ marginTop: "60px" }}>

            {/* Card 1 — Localization */}
            <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8 flex flex-col gap-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none">
                <path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" fill="rgb(0,111,253)"/>
              </svg>
              <div>
                <p className="text-[var(--text-primary)] mb-3" style={{ fontSize: "15px", fontWeight: 500, lineHeight: "1.5" }}>
                  1. Challenging localization due to rich cultures
                </p>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  Africa is home to thousands of dialects, each tied to diverse cultures and customs, making localization a complex task.
                </p>
              </div>
            </div>

            {/* Card 2 — Device compatibility */}
            <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8 flex flex-col gap-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none">
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" fill="rgb(0,111,253)"/>
              </svg>
              <div>
                <p className="text-[var(--text-primary)] mb-3" style={{ fontSize: "15px", fontWeight: 500, lineHeight: "1.5" }}>
                  2. Design for device compatibility
                </p>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  Android devices dominate the market due to their wide price range. However, many of these devices have limited storage and slower processing speeds.
                </p>
              </div>
            </div>

            {/* Card 3 — Road infrastructure */}
            <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8 flex flex-col gap-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M8.24253,3.02985 C8.77832,3.1638 9.10408,3.70673 8.97013,4.24253 L4.97013,20.2425 C4.83619,20.7783 4.29325,21.1041 3.75746,20.9701 C3.22166,20.8362 2.8959,20.2933 3.02985,19.7575 L7.02985,3.75746 C7.1638,3.22166 7.70673,2.8959 8.24253,3.02985 Z M16.9701,3.75746 L20.9701,19.7575 C21.1041,20.2933 20.7783,20.8362 20.2425,20.9701 C19.7067,21.1041 19.1638,20.7783 19.0299,20.2425 L15.0299,4.24253 C14.8959,3.70673 15.2217,3.1638 15.7575,3.02985 C16.2933,2.8959 16.8362,3.22166 16.9701,3.75746 Z M12,17 C12.51285,17 12.9355092,17.386027 12.9932725,17.8833761 L13,18 L13,20 C13,20.5523 12.5523,21 12,21 C11.48715,21 11.0644908,20.613973 11.0067275,20.1166239 L11,20 L11,18 C11,17.4477 11.4477,17 12,17 Z M12,9.99999 C12.5523,9.99999 13,10.4477 13,10.99999 L13,12.99999 C13,13.5523 12.5523,13.99999 12,13.99999 C11.4477,13.99999 11,13.5523 11,12.99999 L11,10.99999 C11,10.4477 11.4477,9.99999 12,9.99999 Z M12,2.99999 C12.51285,2.99999 12.9355092,3.38603429 12.9932725,3.88336975 L13,3.99999 L13,5.99999 C13,6.55228 12.5523,6.99999 12,6.99999 C11.48715,6.99999 11.0644908,6.61395434 11.0067275,6.1166121 L11,5.99999 L11,3.99999 C11,3.44771 11.4477,2.99999 12,2.99999 Z" fill="rgb(0,111,253)" fillRule="nonzero"/>
              </svg>
              <div>
                <p className="text-[var(--text-primary)] mb-3" style={{ fontSize: "15px", fontWeight: 500, lineHeight: "1.5" }}>
                  3. Inadequate road infrastructure
                </p>
                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  Nairobi's poor road conditions and signage make it difficult for drivers to navigate the city independently. Additionally, the lack of digital infrastructure means GPS navigation is often unavailable in many neighborhoods.
                </p>
              </div>
            </div>

          </div>

          {/* Connecting lines */}
          <div className="grid grid-cols-3 gap-6 mt-2">
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
          <div className="grid grid-cols-3 gap-6">
            {[
              "After discussion, the team decided to pilot Nairobi, Kenya, focusing on Swahili.",
              "To address this, I focused on keeping design elements simple and minimal, leveraging Google's Material Design library to optimize the MVP for these devices.",
              "Finding effective ways to provide drivers with accurate navigation information remains a significant challenge.",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="rounded-2xl p-6"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: i * 0.1, ease: "easeOut" }}
              >
                <p className="text-[var(--text-label)] mb-2" style={{ fontSize: "13px", fontWeight: 400 }}>Solution:</p>
                <p className="text-[var(--text-primary)]" style={{ fontSize: "15px", fontWeight: 400, lineHeight: "1.6" }}>{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Overcoming Technical Difficulties */}
          <div style={{ marginTop: "200px" }}>
            <TwoCol label="Overcoming Technical Difficulties">
              <div>
                <h2 className="text-[32px] text-[var(--text-primary)] leading-[1.2] mb-6" style={{ fontWeight: 400, letterSpacing: "-0.2px" }}>
                  Navigating poor road conditions & digital address infrastructure with{" "}
                  <span style={{ color: "rgb(0,111,253)" }}>offline instructions</span>
                </h2>
                <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  After several rounds of brainstorming, I led the team discuss on:<br />
                  1. Turn by turn navigation<br />
                  2. Augmented Reality (AR) navigation<br />
                  3. Audio navigation (VUI)<br />
                  4. Haptic feedback assisted navigation<br />
                  We landed on <strong className="text-[var(--text-primary)] font-normal">Turn by turn navigation with audio assistance</strong> due to technology limitations and team capacity. The instructions are provided by Kenyan citizens when they are registering with Bawbab.
                </p>
              </div>
            </TwoCol>
          </div>

          {/* Exploration 1 */}
          <div className="rounded-2xl bg-[var(--bg-surface)] p-10" style={{ marginTop: "60px" }}>
            <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-4" style={{ fontWeight: 400 }}>Exploration 1</p>
            <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "40px" }}>
              I experimented with 2/3 screen of visual guidance along with audio assistance. It allows drivers to focus on the current road conditions. To enable simple interaction, drivers can swipe up to move to the next instruction and zoom in and out of the picture.
            </p>
            <div className="rounded-xl overflow-hidden mx-auto" style={{ width: "80%" }}>
              <img
                src="https://framerusercontent.com/images/8NEdJQzzCobn52iZ4TTLdaFyN0.png?scale-down-to=2048"
                alt="Exploration 1 screen"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Exploration 2 */}
          <div className="rounded-2xl bg-[var(--bg-surface)] p-10" style={{ marginTop: "60px" }}>
            <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-4" style={{ fontWeight: 400 }}>Exploration 2</p>
            <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "40px" }}>
              I used method with displaying UI interactions and highlighting the current step. This allows the driver to have a better picture of the upcoming step.
            </p>
            <div className="rounded-xl overflow-hidden mx-auto" style={{ width: "80%" }}>
              <img
                src="https://framerusercontent.com/images/F8D8y4ovjOg9kkWJcGyo8reNPM.png?scale-down-to=2048"
                alt="Exploration 2 screen"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Exploration 3 */}
          <div className="rounded-2xl bg-[var(--bg-surface)] p-10" style={{ marginTop: "60px" }}>
            <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-4" style={{ fontWeight: 400 }}>Exploration 3</p>
            <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "40px" }}>
              I leveraged upon the previous exploration and switched between the map and instructions, allowing drivers to have a clear picture of where they need to go and turn ready to take the next step.
            </p>
            <div className="rounded-xl overflow-hidden mx-auto" style={{ width: "80%" }}>
              <img
                src="https://framerusercontent.com/images/0XENCixkOMKusAfFIBpZoYdTL9I.png?scale-down-to=2048"
                alt="Exploration 3 screen"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── NEXT STEPS & REFLECTION ──────────────────────────── */}
      <div id="reflection" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <hr style={{ borderColor: "var(--border)", marginBottom: "60px" }} />
          <TwoCol label="Next Steps">
            <div>
              <h2 className="text-[32px] text-[var(--text-primary)] leading-[1.2] mb-6" style={{ fontWeight: 400, letterSpacing: "-0.2px" }}>
                Google Maps API and localization are key to the success of this MVP
              </h2>
              <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                The engineering team needs to address technical challenges related to integrating the Google Maps API for accurately locating addresses in Kenya. We also need to test the Kenyan-based account to ensure the app is fully compatible with local networks and devices. Additional usability testing should be conducted with local researchers in Kenya with the support of local researchers to gather feedback.
              </p>
            </div>
          </TwoCol>

          <div className="mt-16">
            <TwoCol label="Reflection">
              <div>
                <h2 className="text-[32px] text-[var(--text-primary)] leading-[1.2] mb-6" style={{ fontWeight: 400, letterSpacing: "-0.2px" }}>
                  Research, trials and errors are crucial to early stage startup
                </h2>
                <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.7" }}>
                  Before I began the design phase of this project, we pivoted five times on the product roadmap and direction. Coming from a design background, I wasn't anticipating this as a designer, but I realized embracing it is a normal part of an early stage startup, and I needed to adapt to the constantly evolving environment. Additionally, trying and iterating is crucial to shaping the final product vision.
                </p>
              </div>
            </TwoCol>
          </div>

          {/* Closing quote */}
          <div className="mt-16">
            <TwoCol label="">
              <p className="text-[20px] text-[var(--text-primary)]/60 leading-[1.5] italic" style={{ fontWeight: 400 }}>
                "I strive to simplify digital experience for people bearing accessibility and inclusion in mind."
              </p>
            </TwoCol>
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
