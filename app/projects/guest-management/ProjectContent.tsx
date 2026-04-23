"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Link2, Key, EyeOff } from "lucide-react";

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
        {/* Row 1: section label | empty */}
        <div className="hidden md:block">
          <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400, ...(labelColor ? { color: labelColor } : {}) }}>
            {label}
          </p>
        </div>
        <div />
        {/* Row 2: sublabel | heading + content */}
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

export default function ProjectContent() {
  return (
    <div className="pb-32">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div id="overview" />
      <ScrollReveal>
      <section className="pt-28 pb-12 px-6 md:px-16 text-center max-w-[72rem] mx-auto">
          <h1 className="text-[40px] text-[var(--text-primary)] leading-[1.1] tracking-tight mb-6" style={{ fontWeight: 500 }}>
            Designing A Guest Management Tool
          </h1>
          <p className="text-[32px] leading-tight text-[var(--text-primary)]/70" style={{ fontWeight: 400, letterSpacing: "-0.1px" }}>
            Empower large-scale event organizers to manage guests
          </p>
      </section>
      </ScrollReveal>

      {/* ── Cover image ──────────────────────────────────────── */}
      <ScrollReveal>
      <section className="px-6 md:px-16 max-w-[72rem] mx-auto" style={{ marginTop: "-144px" }}>
          <div className="rounded-2xl overflow-hidden mb-3 scale-110 origin-top">
            <Image
              src="/light mode.png"
              alt="Guest Management Tool"
              width={4320}
              height={3990}
              className="w-full h-auto block dark:hidden"
            />
            <Image
              src="https://framerusercontent.com/images/joH3hQRLhrkH85Jq5ztvNErLZbU.png"
              alt="Guest Management Tool"
              width={4320}
              height={3990}
              className="w-full h-auto hidden dark:block"
            />
          </div>

        {/* Body text + metadata */}
          <div className="grid md:grid-cols-[3fr_2fr] gap-10 md:gap-16 pt-16 pb-0">
            <p className="text-[32px] text-[var(--text-primary)] leading-[1.3]" style={{ fontWeight: 400, letterSpacing: "-0.1px" }}>
              I led this project by developing product strategies, creating multiple iterations
              of wireframes, and conducting user interviews and usability testing.
            </p>
            <div className="flex flex-col justify-center divide-y divide-[var(--border)]">
              <div className="pb-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">Timeline</p>
                <p className="text-[16px] text-[var(--text-primary)]">2023-2024</p>
              </div>
              <div className="py-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">My Role</p>
                <p className="text-[16px] text-[var(--text-primary)]">Lead Product Designer</p>
                <p className="text-[16px] text-[var(--text-primary)]">Product Owner</p>
                <p className="text-[16px] text-[var(--text-primary)]">Prototyper</p>
              </div>
              <div className="pt-5">
                <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-2">Tools</p>
                <p className="text-[16px] text-[var(--text-primary)]">Figma</p>
                <p className="text-[16px] text-[var(--text-primary)]">Userlytics</p>
                <p className="text-[16px] text-[var(--text-primary)]">Mixpanel</p>
              </div>
            </div>
          </div>
      </section>
      </ScrollReveal>

      {/* ── 3 intro mockup images ────────────────────────────── */}
      <ScrollReveal>
      <div className="grid grid-cols-3 px-6 md:px-8" style={{ gap: "24px", marginTop: "120px", marginBottom: "200px" }}>
        {[
          { src: "https://framerusercontent.com/images/gmagMuz9o2y1up1NL4rBwDHaJY.png", w: 1954, h: 1556, maxH: "280px" },
          { src: "https://framerusercontent.com/images/bQ06f7CCKTB04DsEiOW4khGMUs.png", w: 3026, h: 2406, maxH: "280px" },
          { src: "/final-design-share.png", w: 1100, h: 1200, maxH: "280px" },
        ].map((img, i) => (
            <div key={img.src} className="rounded-2xl bg-[var(--bg-surface)] pt-8 px-8 md:pt-6 md:px-6 sm:pt-4 sm:px-4 flex items-end justify-center" style={{ minHeight: "360px" }}>
              <Image
                src={img.src}
                alt=""
                width={img.w}
                height={img.h}
                className="w-auto"
                style={{
                  maxHeight: img.maxH,
                  maxWidth: "100%",
                  borderRadius: "4px",
                }}
              />
            </div>
        ))}
      </div>
      </ScrollReveal>

      {/* ── 01 BACKGROUND ────────────────────────────────────── */}
      <div id="context" />
      <div className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <section className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <ScrollReveal>
        {/* Header row: label (50%) | heading + description (50%) */}
        <TwoCol label="CONTEXT">
            <h2 className="text-[32px] leading-[1.3] text-[var(--text-primary)] mb-8" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              Eventeny helps event organizers manage events
            </h2>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal mb-4">
              Founded in 2020, Eventeny is a startup that{" "}
              <strong className="text-[var(--text-primary)] font-normal">builds B2B tool to help event organizers manage events, connect to vendors and sell tickets.</strong>{" "}
              The company&apos;s vision is to dominate the organizing market with an all-in-one platform designed to streamline event management. It aims to simplify event planning, coordination, and on-site operations.
            </p>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
              Eventeny software is designed to{" "}
              <strong className="text-[var(--text-primary)] font-normal">support multiple stakeholders</strong>{" "}
              such as event organizers, vendors, sponsors and guests. These stakeholders use Eventeny direct and indirectly{" "}
              <strong className="text-[var(--text-primary)] font-normal">to form a seamless experience</strong>.
            </p>
        </TwoCol>

        {/* Full-width content */}
        <div className="mt-16">
          {/* 3 illustration cards */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {[
              { svg: "/organizing-projects-dark.svg", title: "Event organizers, handlers and agents", desc: "They use Eventeny to organize events. Handlers and agents manage on-site guest logistics specifically.", titleStyle: { letterSpacing: "-0.6px", whiteSpace: "nowrap" as const } },
              { svg: "https://framerusercontent.com/images/a3Zsfa8r1hSouUta5Pv6nNuc5j0.svg", title: "Event attendees", desc: "They browse events they are interested in, purchase tickets on Eventeny and go enjoy the events.", titleStyle: {} },
              { svg: "https://framerusercontent.com/images/lveEPNlFvfBwfPCiQkbg7EgfhjU.svg", title: "Guests (Celebrities, speakers, talents)", desc: "They may not use Eventeny software directly, but they are invited to perform, speak or meet attendees.", titleStyle: { letterSpacing: "-0.6px", whiteSpace: "nowrap" as const } },
            ].map((card, i) => (
                <div key={card.title} className="rounded-2xl bg-[var(--bg-surface)] overflow-hidden flex flex-col h-full">
                  <div className="flex-1 p-8 flex items-center justify-center" style={{ minHeight: "240px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={card.svg} alt="" className="w-full h-auto max-h-[180px] object-contain" />
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-[16px] font-normal text-[var(--text-primary)] mb-1" style={card.titleStyle}>{card.title}</p>
                    <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">{card.desc}</p>
                  </div>
                </div>
            ))}
          </div>

        </div>
        </ScrollReveal>

        <div style={{ height: "80px" }} />

        {/* Existing Solution sub-section */}
        <ScrollReveal>
        <TwoCol label="Existing Solution">
            <h3 className="text-[32px] leading-[1.2] text-[var(--text-primary)]" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              Event organizers struggle with fragmented workflows stored across various software tools
            </h3>
        </TwoCol>
        <div className="mt-12">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/9IjkvieiozyCUoh513UDHgg6zs.png"
                alt="Existing fragmented workflow"
                width={4076}
                height={2116}
                className="w-full h-auto"
              />
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
            <h2 className="text-[32px] leading-[1.2] text-[var(--text-primary)] mb-6" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              Inefficient event management workflows add stress and anxiety for event organizers
            </h2>
        </TwoCol>

        <div className="mt-12">
          {/* Challenge cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: 1, t: "Time-consuming data inputting and sharing", d: "Currently, event organizers rely on external softwares and spreadsheets to manage and share guest information and schedules manually, increasing workload for team members" },
              { n: 2, t: "Challenging information retrieval and management", d: "Information retrieval becomes challenging when organizers switch and transfer data between different tools. Data can go missing or incomplete" },
              { n: 3, t: "Fragmented planning experience", d: "Event organizers face challenges due to disconnected systems, leading to a lack of cohesion in the planning and branding process. They must juggle multiple tools and platforms, which results in inefficiencies, miscommunication, and errors." },
            ].map((c, i) => (
                <div key={c.n} className="p-5 rounded-xl bg-[var(--bg-surface-2)] h-full">
                  <h4 className="text-[16px] font-medium text-[var(--text-primary)] mb-2">{c.n}.{"  "}{c.t}</h4>
                  <p className="text-[15px] text-[var(--text-label)] leading-relaxed font-normal">{c.d}</p>
                </div>
            ))}
          </div>

          {/* Connecting lines from challenge to solution */}
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center py-3 gap-0">
              <div className="w-px bg-gray-700" style={{ height: "52px" }} />
              <div className="w-2 h-2 rounded-full bg-gray-600" />
            </div>
            <div className="flex flex-col items-center py-3 gap-0">
              <div className="w-px bg-gray-700" style={{ height: "52px" }} />
              <div className="w-2 h-2 rounded-full bg-gray-600" />
            </div>
            <div className="flex flex-col items-center py-3 gap-0">
              <div className="w-px bg-gray-700" style={{ height: "52px" }} />
              <div className="w-2 h-2 rounded-full bg-gray-600" />
            </div>
          </div>

          {/* Solution cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              "Easy and simple steps for data entry and bulk import",
              "Master data table with quick and convenience actions to help expedite tasks.",
              "Guest data branding integrated into overall event programming features like tickets, schedule, maps, etc..",
            ].map((t, i) => (
                <div key={t} className="p-5 rounded-xl border border-[var(--border)] h-full">
                  <p className="text-[12px] text-[var(--text-secondary)] mb-2">Solution:</p>
                  <p className="text-[16px] font-normal text-[var(--text-primary)] leading-snug">{t}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <div style={{ height: "80px" }} />

      {/* Design Solution section */}
      <ScrollReveal>
      <section className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <TwoCol label="Design Solution">
            <h3 className="text-[32px] leading-[1.1] text-[var(--text-primary)] mb-5" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              Guest management feature, integrated into event planning
            </h3>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal mb-6">
              Eventeny introduced a guest management feature to{" "}
              <strong className="text-[var(--text-primary)] font-normal no-underline">create an all-in-one platform that helps event organizers streamline guest logistics and enhance overall event coordination</strong>.{" "}
              Slated to launch in October, its potential impacts include generating core revenue and attracting larger events, significantly boosting the event page&apos;s traffic and appeal.
            </p>
        </TwoCol>

        {/* Persona + quote */}
          <div className="flex flex-col items-center text-center mt-14 mb-10">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-5">
              <Image src="https://framerusercontent.com/images/n30kpGlj3a8pGwNSInm0egvBswg.png" alt="" width={300} height={300} className="w-full h-full object-cover" />
            </div>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed max-w-xl">
              As an <strong className="font-normal text-[var(--text-primary)]" style={{ fontWeight: 400 }}>event coordinator</strong>, I want to add and edit guest information with easy access, and have permission control over internal information
            </p>
          </div>

        {/* Video Section 0 — new */}
        <div className="mb-[60px]">
            <div className="w-full rounded-2xl overflow-hidden" style={{ backgroundColor: "#FC895F", padding: "40px 40px 46px" }}>
              <div className="relative w-full" style={{ paddingBottom: "calc(56.25% + 24px)", height: 0, marginBottom: "-30px", marginTop: "-24px" }}>
                <iframe
                  src="https://player.vimeo.com/video/1059490254?background=1&autoplay=1&loop=1&muted=1"
                  style={{ position: "absolute", top: 0, left: 0, width: "110%", height: "110%", marginLeft: "-5%", border: "none" }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 mt-6">
              <h3 className="text-[24px] leading-[1.25] text-[var(--text-primary)]" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
                Easy and simple steps for data entry and bulk import
              </h3>
              <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
                Instead of manually inputing information in excel sheets in great details and export to various formats, event organizers can now easily create guest profile by entering first and last legal name and finalize details anytime they want to the Guest repository and share in a single format.
              </p>
          </div>
        </div>

        {/* Video Section 1 — video + text below */}
        <div className="mb-[60px]">
            <div className="w-full rounded-2xl overflow-hidden" style={{ backgroundColor: "#FC895F", padding: "40px 40px 46px" }}>
              <div className="relative w-full" style={{ paddingBottom: "calc(56.25% + 24px)", height: 0, marginBottom: "-30px", marginTop: "-24px" }}>
                <iframe
                  src="https://player.vimeo.com/video/1166913928?background=1&autoplay=1&loop=1&muted=1"
                  style={{ position: "absolute", top: 0, left: 0, width: "110%", height: "110%", marginLeft: "-5%", border: "none" }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 mt-6">
              <h3 className="text-[24px] leading-[1.25] text-[var(--text-primary)]" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
                Master data table with quick and convenience actions to help expedite tasks.
              </h3>
              <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
                Organizers can quickly filter, sort, and act on guest data in bulk — reducing the time spent on repetitive manual actions and enabling faster, more confident decision-making.
              </p>
          </div>
        </div>

        {/* Video Section 2 — video + text below */}
        <div className="mb-0">
            <div className="w-full rounded-2xl overflow-hidden" style={{ backgroundColor: "#FC895F", padding: "40px 40px 46px" }}>
              <div className="relative w-full" style={{ paddingBottom: "calc(56.25% + 24px)", height: 0, marginBottom: "-30px", marginTop: "-24px" }}>
                <iframe
                  src="https://player.vimeo.com/video/1167207120?background=1&autoplay=1&loop=1&muted=1"
                  style={{ position: "absolute", top: 0, left: 0, width: "110%", height: "110%", marginLeft: "-5%", border: "none" }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-4 mt-6">
              <h3 className="text-[24px] leading-[1.25] text-[var(--text-primary)]" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
                Sensitive guest data with easy password protection management
              </h3>
              <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
                In lieu of managing and branding guest information on different social media and platform, event organizers can now integrate the information easily in features such as schedule to allow for more seamless experience and build consumer recognition.
              </p>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <div style={{ height: "200px" }} />

      {/* ── 03 RESEARCH ──────────────────────────────────────── */}
      <div id="research" />
      <div className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <section className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <ScrollReveal>
        <TwoCol label="Why Is It Important?">
            <h2 className="text-[32px] leading-[1.2] text-[var(--text-primary)] mb-6" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              Guest Management tool can help organizers generate more revenue and grow community
            </h2>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
              Most people come for talents and celebrities. It is imperative to handle guests&apos; travel
              logistics efficiently. Guest management can potentially generate more revenue and reduce
              churn by providing an all-in-one platform for large events.
            </p>
        </TwoCol>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              { group: "Pride event organizers", logo: "https://framerusercontent.com/images/4PkQD1AFBIejv9Axzm68nrndY0.png", quote: "Photo ops sales and guarantee tells us how popular a celebrity is.", fill: false },
              { group: "Festival event organizers", logo: "https://framerusercontent.com/images/BHogu8yFhNUu1XnNokEVcRjvk.png", quote: "People come for the talent, so and so is going to be there Saturday on 3pm and I need to be there.", fill: true },
              { group: "Pride event organizers", logo: "https://framerusercontent.com/images/i556t11AKAyRPQ4IAB4u93k9gQ.png", quote: "The benefit of a celebrity management tool is allowing us to build those schedules, export them, presentable, email them to the agent.", fill: false },
              { group: "Community event organizers", logo: "https://framerusercontent.com/images/nNJgAuqnJmmTSsnD026mvmJIweg.png", quote: "It is also a way to grow the community when people can apply and register for panelists.", fill: true },
            ].map((q, i) => (
                <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-[var(--bg-surface-2)] h-full">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-[#2a2a2a]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={q.logo} alt={q.group} className={`w-full h-full object-cover${q.fill ? " scale-[1.6]" : ""}`} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                  </div>
                  <div>
                    <p className="text-[15px] font-normal text-[var(--text-primary)] mb-1">{q.group}</p>
                    <p className="text-[14px] text-[var(--text-label)] leading-relaxed italic">&ldquo;{q.quote}&rdquo;</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
        </ScrollReveal>

          {/* Competitive Analysis */}
          <div style={{ height: "200px" }} />
          <ScrollReveal>
          <div>
            <TwoCol label="Competitive Analysis">
                <h3 className="text-[32px] leading-[1.15] text-[var(--text-primary)] mb-5" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
                  Integrating Guest Management tool boosts sales and reduce customer churn, making Eventeny stand out
                </h3>
                <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
                  I sought to better understand the guest management tool provided by{" "}
                  <strong className="text-[var(--text-primary)] font-normal no-underline">auditing existing 4 management software</strong>.{" "}
                  Eventeny&apos;s strengths lie in its existing event management and ticketing tools along with the large base of audience it has.
                </p>
            </TwoCol>
              <div className="mt-8 rounded-2xl overflow-hidden">
                <Image src="https://framerusercontent.com/images/Dg4oqCcTeQ1BoTMGcYxxpQAbnS0.png" alt="Competitive analysis" width={2948} height={1346} className="w-full h-auto" />
              </div>
          </div>
          </ScrollReveal>

          {/* Design Goals */}
          <div style={{ height: "200px" }} />
          <ScrollReveal>
          <div>
            <TwoCol label="Design Goals">
                <h2 className="text-[32px] leading-[1.1] text-[var(--text-primary)] mb-5" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
                  I focused on allowing organizers to optimize their workflows with efficiency and convenience
                </h2>
                <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
                  Event organizers process and manage a vast amount of guest and event logistics information daily. The goal is to systematically catalog this data and enable seamless actions for efficient event management.
                </p>
            </TwoCol>
            <div className="mt-[60px]">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { gif: "https://framerusercontent.com/images/XiaFT9ErFb6qyzIP8Ox0KD7A8po.gif", t: "Convenience", d: "Allow event organizers to perform quick actions on the information" },
                  { gif: "https://framerusercontent.com/images/0rToZPDxqJxEFzZ0H7eGS7Tic4.gif", t: "Efficiency", d: "Easy access and permission control to guest databases and schedule" },
                ].map((g, i) => (
                    <div key={g.t} className="flex gap-4 items-start p-4 rounded-2xl bg-[var(--bg-surface-2)]">
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={g.gif} alt={g.t} className="w-full h-full object-cover" />
                      </div>
                      <div className="pt-1">
                        <p className="text-[17px] font-normal text-[var(--text-primary)] mb-2">{g.t}</p>
                        <p className="text-[15px] text-[var(--text-label)] leading-relaxed font-normal">{g.d}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
          </ScrollReveal>

      </section>

      <div style={{ height: "200px" }} />

      {/* Discovery — full-width orange section */}
      <ScrollReveal>
      <div className="w-full py-28 px-6 md:px-16" style={{ backgroundColor: "#CE5A25" }}>
        <div className="max-w-[72rem] mx-auto">
          <TwoCol label="Discovery" labelColor="#ffffff">
              <h2 className="text-[32px] leading-[1.15]" style={{ fontWeight: 400, letterSpacing: "-0.3px", color: "#ffffff" }}>
                The design will improve guest management efficiency by enabling{" "}
                <strong className="font-medium" style={{ color: "#ffffff" }}>data integration</strong>{" "}
                and{" "}
                <strong className="font-medium" style={{ color: "#ffffff" }}>seamless actions</strong>
              </h2>
              <p className="text-[16px] leading-relaxed" style={{ color: "#ffffff" }}>
                By summarizing at user research and competitive analysis insights, I consolidated some{" "}
                <strong style={{ color: "#ffffff", fontWeight: 400 }}>design themes that caters to Eventeny&apos;s customers.</strong>
              </p>
          </TwoCol>
        </div>
      </div>
      </ScrollReveal>

      <div style={{ height: "200px" }} />

      {/* ── 04 EXPLORATION ───────────────────────────────────── */}
      <div id="design-decisions" />
      <div className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <section className="px-6 md:px-16 max-w-[72rem] mx-auto">

        {/* Challenge 1 */}
        <ScrollReveal>
        <TwoCol label="Challenge 1">
            <h3 className="text-[32px] text-[var(--text-primary)] mb-3" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              Cataloguing and managing information in a streamlined approach
            </h3>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
              Event organizers process and manage a vast amount of guest and event logistics information daily.
              The goal is to systematically catalog this data and enable seamless actions for efficient event management.
              <span style={{ color: "var(--text-primary)" }}>I created different tables with different emphasis of prioritizing quick actions or presenting useful information.</span>
            </p>
        </TwoCol>
        <div className="mt-[60px]">
          {/* Exploration wrapper card */}
          <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8 mb-0">
            <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)] mb-6" style={{ fontWeight: 400 }}>Design exploration: Master table</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Maximizing space to display full information", src: "/option1.svg", pros: ["Users can view vast information in one glance and save time"], cons: ["Users may need some time to locate actions such as export, delete and set up filters"] },
                { label: "Prioritizing quick actions and filters", src: "/option2.svg", pros: ["Users can manage information more efficiently by setting up recurring actions and filters and find them upfront"], cons: ["The quick actions can be distracting for users who want to focus on the table information"] },
                { label: "Filter island for quick information", src: "/option3.svg", pros: ["Users who are familiar with the table information can quickly find filters in the filter island"], cons: ["The table has limited space and can be less helpful for the users"] },
              ].map((opt, i) => (
                  <div key={opt.label} className="flex flex-col">
                    <div className="overflow-hidden mb-3" style={{ borderRadius: "4px" }}>
                      <Image src={opt.src} alt={opt.label} width={600} height={450} className="w-full h-auto" />
                    </div>
                    <p className="text-[14px] text-[var(--text-primary)] mb-3 text-center" style={{ fontWeight: 450 }}>{opt.label}</p>
                    <div className="space-y-1">
                      {opt.pros.map((p, j) => <p key={j} className="text-[14px] text-[var(--text-secondary)] leading-snug font-normal">✅ {p}</p>)}
                      {opt.cons.map((c, j) => <p key={j} className="text-[14px] text-[var(--text-secondary)] leading-snug font-normal">❌ {c}</p>)}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final design 1 */}
        <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8 mt-[60px]">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-start-2">
              <div className="overflow-hidden" style={{ borderRadius: "4px" }}>
                <Image src="/final.svg" alt="Final iteration" width={600} height={450} className="w-full h-auto" />
              </div>
              <p className="text-[14px] text-[var(--text-primary)] mt-3 text-center" style={{ fontWeight: 450 }}>Final: Maximize data display and enable quick actions</p>
            </div>
          </div>
        </div>

        {/* Final design card */}
        <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8 mt-[60px]">
          <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)] mb-6" style={{ fontWeight: 400 }}>Final design</p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Bulk select to enable quick action", src: "https://framerusercontent.com/images/bQ06f7CCKTB04DsEiOW4khGMUs.png", w: 3026, h: 2406 },
              { label: "Displaying selected filters", src: "https://framerusercontent.com/images/gmagMuz9o2y1up1NL4rBwDHaJY.png", w: 1954, h: 1556 },
            ].map((item, i) => (
                <div key={item.label}>
                  <div className="overflow-hidden bg-[var(--bg-surface)]" style={{ borderRadius: "4px" }}>
                    <Image src={item.src} alt={item.label} width={item.w} height={item.h} className="w-full h-auto" />
                  </div>
                  <p className="text-[14px] text-[var(--text-primary)] mt-3 text-center" style={{ fontWeight: 450 }}>{item.label}</p>
                </div>
            ))}
          </div>
        </div>
        </ScrollReveal>

        <div style={{ height: "200px" }} />

        {/* Challenge 2 */}
        <ScrollReveal>
        <TwoCol label="Challenge 2">
            <h3 className="text-[32px] text-[var(--text-primary)] mb-3" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              Finding a balance between digestable and actionable information
            </h3>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal mb-2">
              Current table design can only accommodate limited data. I need to find a way to display important information and yet not overwhelm event organizers. <span style={{ color: "var(--text-primary)" }}>I explored 4 different ways to store more information in the table by merging and hiding information.</span>
            </p>
        </TwoCol>
        <div className="mt-[60px] flex flex-col gap-[60px]">
          {[
            { label: "Merging information", desc: "Combine columns or using fixed column to house more information", images: [{ src: "/table-opt1-v2.png", title: "Combined column", w: 310, h: 295 }, { src: "/table-opt3-v2.png", title: "Fixed column", w: 310, h: 295 }] },
            { label: "Hiding information", desc: "Using card or hidden row to store more information", images: [{ src: "/table-option3.png", title: "Popover card", w: 310, h: 295 }, { src: "/table-option4.png", title: "Expandable row", w: 310, h: 295 }] },
          ].map((group) => (
            <div key={group.label} className="rounded-2xl bg-[var(--bg-surface-2)] p-8">
              <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)] mb-6" style={{ fontWeight: 400 }}>{group.label}</p>
              <div style={{ display: "flex", gap: "32px", alignItems: "flex-end" }}>
                <div style={{ display: "flex", gap: "16px", flexShrink: 0, alignItems: "flex-start" }}>
                  {group.images.map((img) => (
                    <div key={img.title} style={{ width: `${img.w}px` }}>
                      <Image
                        src={img.src}
                        alt={img.title}
                        width={img.w}
                        height={img.h}
                        style={{ display: "block", width: "100%", height: "auto", borderRadius: "4px" }}
                      />
                      <p className="text-[14px] text-[var(--text-primary)] mt-3" style={{ fontWeight: 450, textAlign: "center" }}>{img.title}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[var(--text-label)]" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "1.6" }}>{group.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final design 2 */}
        <div className="flex flex-col gap-[60px]" style={{ marginTop: "60px" }}>
          <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8">
            <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)] mb-6" style={{ fontWeight: 400 }}>Final design: table with popover</p>
            <div className="overflow-hidden" style={{ borderRadius: "4px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/guest-table-popover.png" alt="Guest table with popover" className="w-full h-auto" />
            </div>
          </div>
          <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8">
            <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)] mb-6" style={{ fontWeight: 400 }}>Scalable components</p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Table specs", src: "/table-specs.png" },
                { label: "Popover specs", src: "/popover-specs.png" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="overflow-hidden" style={{ borderRadius: "4px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.src} alt={item.label} className="w-full h-auto" />
                  </div>
                  <p className="text-[14px] text-[var(--text-primary)] mt-3 text-center" style={{ fontWeight: 450 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </ScrollReveal>

        <div style={{ height: "200px" }} />

        {/* Challenge 3 — new */}
        <ScrollReveal>
        <TwoCol label="Challenge 3">
            <h3 className="text-[32px] text-[var(--text-primary)] mb-3" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              Allow users to customize and share content securely
            </h3>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
              From Event organizer&apos;s perspective, leaking a celebrity&apos;s private schedule could severely damage the company&apos;s reputation and cause financial loss. Different team members have different access to the schedule data based on their roles. <span style={{ color: "var(--text-primary)" }}>I tested out various methods to allow safe sharing.</span>
            </p>
        </TwoCol>
        <div className="mt-[60px]">
          <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8">
            <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)] mb-4" style={{ fontWeight: 400 }}>Design exploration</p>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal mb-8">I proposed 3 data protection solutions — unique links, password protection, and data masking. The team aligned on unique links for low dev effort and comparable security, but I flagged a UX concern: without visual cues, users may not feel confident their data is protected.</p>
            <div className="grid grid-cols-3 gap-6">

              {/* Option 1 — Generating unique link */}
              <div>
                <div className="flex flex-col items-center gap-5">
                  <div className="w-full rounded-[5px] overflow-hidden shadow-md" style={{ border: "0.6px solid #555" }}>
                    <div className="h-3 w-full" style={{ background: "#73777c" }} />
                    <div className="p-5" style={{ background: "#cfcfcf", minHeight: "190px" }}>
                      <div className="bg-white rounded-sm p-3 mx-auto" style={{ width: "72%" }}>
                        <div className="h-[4px] w-16 mb-4" style={{ background: "#73777c" }} />
                        <div className="h-2 w-full mb-2" style={{ border: "0.3px solid #d4d4d4" }} />
                        <div className="flex items-center justify-between mb-2">
                          <div className="h-4 w-24" style={{ border: "0.3px solid #d4d4d4" }} />
                          <div className="h-3 w-10" style={{ background: "#d4d4d4" }} />
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <Link2 size={10} strokeWidth={1.5} color="#73777c" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center justify-center w-14 h-14 rounded-[30px]" style={{ background: "#5e6463" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <Link2 size={22} strokeWidth={1.5} color="#ffffff" />
                    </div>
                    <p className="text-[14px] font-medium text-center" style={{ color: "#fd632b" }}>Generating unique link</p>
                  </div>
                </div>
              </div>

              {/* Option 2 — Password protection */}
              <div>
                <div className="flex flex-col items-center gap-5">
                  <div className="w-full rounded-[5px] overflow-hidden shadow-md" style={{ border: "0.6px solid #555" }}>
                    <div className="h-3 w-full" style={{ background: "#73777c" }} />
                    <div className="flex items-center justify-center p-5" style={{ background: "#cfcfcf", minHeight: "190px" }}>
                      <div className="bg-white rounded-sm p-4 mx-auto" style={{ width: "72%" }}>
                        <div className="h-[4px] w-14 mb-5 mx-auto" style={{ background: "#73777c" }} />
                        <div className="flex justify-center mb-4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <Key size={22} strokeWidth={1.5} color="#73777c" />
                        </div>
                        <div className="h-2 w-full mb-2" style={{ border: "0.3px solid #d4d4d4" }} />
                        <div className="h-2 mx-auto" style={{ width: "75%", border: "0.3px solid #d4d4d4" }} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center justify-center w-14 h-14 rounded-[30px]" style={{ background: "#5e6463" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <Key size={22} strokeWidth={1.5} color="#ffffff" />
                    </div>
                    <p className="text-[14px] font-medium text-center text-[var(--text-primary)]">Password protection</p>
                  </div>
                </div>
              </div>

              {/* Option 3 — Masked data */}
              <div>
                <div className="flex flex-col items-center gap-5">
                  <div className="w-full rounded-[5px] overflow-hidden shadow-md" style={{ border: "0.6px solid #555" }}>
                    <div className="h-3 w-full" style={{ background: "#73777c" }} />
                    <div className="bg-white" style={{ minHeight: "190px" }}>
                      <div className="px-2 py-1" style={{ background: "#cfcfcf" }}>
                        <div className="flex items-center justify-between">
                          <div className="h-2 flex-1" style={{ border: "0.3px solid #d4d4d4" }} />
                          <div className="flex gap-1 ml-2">
                            {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-1.5" style={{ background: "#d4d4d4" }} />)}
                          </div>
                        </div>
                      </div>
                      <div className="px-2 py-1">
                        <div className="flex gap-1 mb-1">
                          {[...Array(4)].map((_, i) => <div key={i} className="flex-1 h-4" style={{ background: "#f1f1f1" }} />)}
                        </div>
                        <div className="flex items-center" style={{ background: "#cfcfcf", borderBottom: "0.5px solid #ddd" }}>
                          <div className="flex-1 p-1"><div className="w-1.5 h-1.5" style={{ background: "#f7f7f7" }} /></div>
                          <div className="w-14 p-1"><div className="h-[3px] w-5" style={{ background: "#f7f7f7" }} /></div>
                          <div className="w-14 p-1"><div className="h-[3px] w-8" style={{ background: "#f7f7f7" }} /></div>
                          <div className="w-12 p-1"><div className="h-[3px] w-5" style={{ background: "#f7f7f7" }} /></div>
                        </div>
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="flex items-center" style={{ borderBottom: "0.5px solid #ececec" }}>
                            <div className="flex-1 p-1"><div className="w-1.5 h-1.5" style={{ background: "#d4d4d4" }} /></div>
                            <div className="w-14 p-1 flex items-center justify-center">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <EyeOff size={10} strokeWidth={1.5} color="#73777c" />
                            </div>
                            <div className="w-14 p-1"><div className="h-[3px] w-8" style={{ background: "#d4d4d4" }} /></div>
                            <div className="w-12 p-1"><div className="h-[3px] w-5" style={{ background: "#d4d4d4" }} /></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center justify-center w-14 h-14 rounded-[30px]" style={{ background: "#5e6463" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <EyeOff size={22} strokeWidth={1.5} color="#ffffff" />
                    </div>
                    <p className="text-[14px] font-medium text-center text-[var(--text-primary)]">Masked data</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* User testing */}
        <div className="mt-[60px]">
          <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8 flex flex-col gap-8">
            <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400 }}>User testing</p>
            <div className="flex gap-6 items-stretch">

              {/* Left: Share & embed modal image */}
              <div className="w-1/2 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/modal-share-embed.png" alt="Share & embed modal" className="w-full h-auto" />
                <p className="text-center text-[var(--text-primary)] mt-0" style={{ fontSize: "14px", fontWeight: 450 }}>Unique share link</p>
              </div>

              {/* Right: quote at top, description at bottom */}
              <div className="flex-1 flex flex-col justify-between pt-2">
                <blockquote className="border-l-2 pl-5" style={{ borderColor: "#FD632B" }}>
                  <p className="text-sm text-[var(--text-label)] italic leading-relaxed">
                    &ldquo;I get that it&apos;s supposed to protect my data, but honestly, it still doesn&apos;t feel secure.&rdquo;
                  </p>
                </blockquote>
                <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
                  As expected, customers didn&apos;t respond well to the unique link design. Even though it was secure, it didn&apos;t feel safe to them. User perception matters as much as technical security. The team agreed that I should pivot to password protection — a more familiar and trusted method — and extended the design deadline.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* 2nd iteration */}
        <div className="mt-[60px]">
          <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8 flex flex-col gap-8">
            <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400 }}>2nd iteration</p>

            {/* 2nd iteration image + caption wrapped together to avoid gap-8 */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/2nd-iteration.png" alt="2nd iteration: Share & embed modal with password toggle" className="w-full h-auto" />
              <p className="text-center text-[var(--text-primary)] mt-0" style={{ fontSize: "14px", fontWeight: 450 }}>Password protection toggle</p>
            </div>

            {/* Description */}
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal">
              I created 2nd iteration with the optional password toggle to protect content. However, the share link modal didn&apos;t flow very well. The users need to jump around the page to complete the process.
            </p>
          </div>
        </div>

        {/* Final design */}
        <div className="mt-[60px]">
          <div className="rounded-2xl bg-[var(--bg-surface-2)] p-8">
            <p className="text-[14px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400 }}>Final design</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="flex gap-6 mt-8">
              <div className="w-[calc(50%-12px)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/final-design-share.png" alt="Final design: Share tab with password setup" className="w-full h-auto rounded" />
                <p className="text-center text-[var(--text-primary)] mt-3" style={{ fontSize: "14px", fontWeight: 450 }}>Share modal with optional password fields</p>
              </div>
              <div className="w-[calc(50%-12px)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/final-design-shared-link-manager.png" alt="Final design: Shared link manager tab" className="w-full h-auto rounded" />
                <p className="text-center text-[var(--text-primary)] mt-3" style={{ fontSize: "14px", fontWeight: 450 }}>Shared link manager to help users remember</p>
              </div>
            </div>
          </div>
        </div>
        </ScrollReveal>

      </section>

      <div style={{ height: "200px" }} />

      {/* ── 05 IMPACT & LEARNING ─────────────────────────────── */}
      <div id="reflection" />
      <div className="px-6 md:px-16 max-w-[72rem] mx-auto">
        <hr className="border-[var(--border)] mb-10" />
      </div>
      <section className="px-6 md:px-16 max-w-[72rem] mx-auto">

        <ScrollReveal>
        <TwoCol label="Impacts">
            <h2 className="text-[32px] leading-[1.2] text-[var(--text-primary)] mb-8" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              With this new feature, we plan to make big impacts
            </h2>
        </TwoCol>
        <div className="mt-10">
          <div className="grid grid-cols-3 gap-6">
            {[
              { n: "5", l: "More big customers", d: "Attracting big events with guest management needs" },
              { n: "7.5%", l: "CRR increased", d: "Increase customer retention rate" },
              { n: "3.5%", l: "More revenue generated", d: "Generate more revenue next quarter" },
            ].map((m, i) => (
                <div key={m.n}>
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
            <h3 className="text-[32px] text-[var(--text-primary)] mb-4" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
              Think holistically and big!
            </h3>
            <p className="text-[16px] text-[var(--text-label)] leading-relaxed font-normal max-w-xl mb-8">
              This was the first massive project that I took on and I really appreciate this opportunity.
              I initiated a lot of bold and innovative UX methodologies that were never implemented on the
              platform and luckily my stakeholders bought into my ideas and incorporated them into other
              places on the platform. I am glad I took a step forward and pitched my vision.
            </p>
        </TwoCol>
        </ScrollReveal>
      </section>

    </div>
  );
}
