"use client";

import type { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

function SectionHeader({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body?: ReactNode;
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

export default function ProjectContent() {
  return (
    <div className="pb-32">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div id="overview" />
      <ScrollReveal>
        <section className="pt-28 pb-12 px-6 md:px-16 text-center max-w-[72rem] mx-auto">
          <h1 className="text-[40px] text-[var(--text-primary)] leading-[1.1] tracking-tight mb-6" style={{ fontWeight: 500 }}>
            The White Show
          </h1>
          <p className="text-[32px] leading-tight text-[var(--text-primary)]/70" style={{ fontWeight: 400, letterSpacing: "-0.1px" }}>
            The White Show Project is a white-themed runway show hosted by first-year Central Saint Martins fashion design students.
          </p>
        </section>
      </ScrollReveal>

      {/* ── Cover image + metadata ────────────────────────────── */}
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto">
          <div className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]">
            <img
              src="https://framerusercontent.com/images/lJWBJloR1OLHLNTL7h3Uzljfi8.png"
              alt="The White Show — cover"
              className="w-full h-auto object-cover"
              style={{ maxHeight: "640px", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>

          {/* Description + metadata */}
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-16 pt-16">
            <p className="text-[32px] text-[var(--text-primary)] leading-[1.3]" style={{ fontWeight: 400, letterSpacing: "-0.1px" }}>
              An avant-garde womenswear collection built around a single color — white — and the expressive
              power of volume, structure, and sculptural silhouette.
            </p>
            <div className="flex flex-col justify-center divide-y divide-[var(--border)]">
              <div className="pb-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">Timeline</p>
                <p className="text-[16px] text-[var(--text-primary)]">2023</p>
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
          <SectionHeader
            label="Inspiration"
            title="My inspiration comes from the dystopian world in Brave New World."
            body="I made illustrations and creative directions based on the dystopian society in the Brave New World, which emphasizes deindividuation and renders docile by happiness."
          />

          <div className="grid grid-cols-2 gap-6">
            {[
              { src: "https://framerusercontent.com/images/bcaiQx1aKPoNFAkPcUJMm8K64.jpeg?scale-down-to=2048", alt: "Inspiration 1" },
              { src: "https://framerusercontent.com/images/M5G09eXBNx4btpDpjcrr7yqP1K0.jpeg", alt: "Inspiration 2" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]" style={{ minHeight: "400px" }}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" style={{ minHeight: "400px" }} />
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── FASHION COLLAGES ─────────────────────────────────── */}
      <div id="collages" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <SectionHeader
            label="Fashion Collages"
            title="I incorporated dystopian elements such as uniforms, gears and mechanical tools in garments."
            body="Drawing deindividuation elements such as uniforms, gloves and biohazard suits I made collages to visualize fashion looks."
          />

          <div className="grid grid-cols-2 gap-6">
            {[
              { src: "https://framerusercontent.com/images/uvaGHAjYLz2TNYIcvFThy2n2N4.jpeg?scale-down-to=2048", alt: "Fashion collage 1" },
              { src: "https://framerusercontent.com/images/HJEWOPBHzxrVLeP0Z5vAnUBtb68.jpeg?scale-down-to=2048", alt: "Fashion collage 2" },
              { src: "https://framerusercontent.com/images/45DgdP8J0UQIIZ9bh7U7HmdYeJo.jpeg?scale-down-to=2048", alt: "Fashion collage 3" },
              { src: "https://framerusercontent.com/images/gjeWDZVZJABsBbzORk13lPvLFEo.jpeg?scale-down-to=2048", alt: "Fashion collage 4" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]" style={{ minHeight: "380px" }}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" style={{ minHeight: "380px" }} />
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── FINAL LOOKS ──────────────────────────────────────── */}
      <div id="final" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <SectionHeader
            label="Final Looks"
            title="I consolidated my sketches and my collages into 4 final looks."
          />

          <div className="flex flex-col gap-6">
            {[
              { src: "https://framerusercontent.com/images/uRuruiiNxHkVlk30USZCRdk1H0U.jpeg", alt: "Final look 1" },
              { src: "https://framerusercontent.com/images/gp7N6CUte8iKarDJlV62l92keTo.jpeg", alt: "Final look 2" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden bg-[var(--bg-surface)] w-full">
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── EXPLORATION ──────────────────────────────────────── */}
      <div id="exploration" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <SectionHeader
            label="Exploration"
            title="I manipulated different materials and made various samples to test out my ideas."
            body="I tried to create structures and space out of metal boning, ruffles and ties."
          />

          <div className="grid grid-cols-3 gap-6">
            {[
              { src: "https://framerusercontent.com/images/ziW7P4Tdu2PDjzqYnVwvCal6kw.jpg?scale-down-to=1024", alt: "Exploration sketch 1" },
              { src: "https://framerusercontent.com/images/UYGYAetVI0pazeDI5dVu2yQqxQ.jpg?scale-down-to=1024", alt: "Exploration sketch 2" },
              { src: "https://framerusercontent.com/images/earQ5YP5FXpD1FFdNI2noCII.jpg?scale-down-to=1024", alt: "Exploration sketch 3" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]" style={{ minHeight: "320px" }}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" style={{ minHeight: "320px" }} />
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── TOILE MAKING ─────────────────────────────────────── */}
      <div id="construction" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <SectionHeader
            label="Toile Making"
            title="I decided the final look and started to make toile to see the fitting."
            body="I decided to use metal boning to support the skirt structure and the sleeves to exaggerate the whole look. The top is inspired by a hooded uniform and I also designed a pair of gloves to represent uniformity and deindividuation. This is the fitting effect on the model."
          />

          <div className="grid grid-cols-3 gap-6">
            {[
              { src: "https://framerusercontent.com/images/cNi5XNbDNlfPzuQVic6ckMMr4LM.jpeg?scale-down-to=2048", alt: "Toile making 1" },
              { src: "https://framerusercontent.com/images/fICabNf4NgChFeFvJW50fczoUs.jpeg?scale-down-to=2048", alt: "Toile making 2" },
              { src: "https://framerusercontent.com/images/yuBlYeG1w7d8XBrIoffF3HgRU.jpeg?scale-down-to=2048", alt: "Toile making 3" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden bg-[var(--bg-surface)]" style={{ minHeight: "360px" }}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" style={{ minHeight: "360px" }} />
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── FINAL DESIGN ─────────────────────────────────────── */}
      <div id="final-design" />
      <ScrollReveal>
        <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "200px" }}>
          <SectionHeader
            label="Final Design"
            title="The complete ensemble I made for the White Show runway."
          />

          <div className="flex flex-col gap-6">
            {[
              { src: "https://framerusercontent.com/images/LHYav4UIhe0fngi4msGgTfxzFVg.jpeg", alt: "Final design 1" },
              { src: "https://framerusercontent.com/images/hdBgbcHb3dEFKEnw5wZHd0jmwo.jpeg", alt: "Final design 2" },
              { src: "https://framerusercontent.com/images/yJnzkZSSFl1Rg96rzfEk3LPIEI.jpeg", alt: "Final design 3" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden bg-[var(--bg-surface)] w-full">
                <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

    </div>
  );
}
