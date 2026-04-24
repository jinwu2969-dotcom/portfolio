"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import OrbitingAnimation from "@/components/OrbitingAnimation";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    slug: "guest-management",
    title: "Guest Management",
    hoverTitle: "Managing guest logistics",
    tags: ["B2B Management Tool", "Desktop"],
    date: "Feb, 2024",
    image: "https://framerusercontent.com/images/qtTWrr7dzQOS7tCl5eonwTM11ys.png?width=1120&height=908",
  },
  {
    slug: "eventeny-app",
    title: "Eventeny App",
    hoverTitle: "Seamless event experiences",
    tags: ["2C Mobile App"],
    date: "Feb, 2026",
    image: "https://framerusercontent.com/images/wKeS1Jc5EdgdM9CXQs3A6NCk.png?width=1874&height=908",
  },
  {
    slug: "eventeny-event-page",
    title: "Smart Data Migration",
    hoverTitle: "Agentic Migration Wizard",
    tags: ["Agentic Flow", "API Connection"],
    date: "April, 2026",
    image: "/migration-wizard-cover.png",
  },
  {
    slug: "bawbab-delivery-navigation",
    title: "Bawbab Delivery Navigation",
    hoverTitle: "Last-mile delivery for Nairobi",
    tags: ["Mobile", "Logistics"],
    date: "Jun, 2023",
    image: "https://framerusercontent.com/images/cKGD2CyV5oUiqdAjbZISYl393YI.png?width=1120&height=908",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — Orbiting Animation */}
      <section className="w-full relative">
        <OrbitingAnimation />
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3 z-10">
          <span className="text-sm text-[var(--text-label)] tracking-wide">Welcome to my planet</span>
          <img
            src="https://framerusercontent.com/images/uC13UID5Y8KMVS6hfByiQ8OdJog.gif?width=150&height=150"
            alt="Scroll down"
            width={60}
            height={60}
            className="opacity-50"
          />
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-10 max-w-[79rem] mx-auto w-full py-16 md:py-24">
        <ScrollReveal>
          <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-12" style={{ fontWeight: 400 }}>
            Selected Work
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.08}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-3xl bg-[var(--bg-surface)] transition-all duration-300"
              >
                {/* Title row */}
                <div className="px-8 pt-8 pb-5">
                  <h3 className="text-[32px] font-normal text-[var(--text-primary)] leading-tight">
                    <span className="relative overflow-hidden block" style={{ height: "1.3em" }}>
                      <span className="inline-flex items-center gap-4 whitespace-nowrap transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                        {project.title}
                        <ArrowUpRight size={28} strokeWidth={1.5} className="flex-shrink-0" />
                      </span>
                      <span className="inline-flex items-center gap-4 whitespace-nowrap absolute inset-0 translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                        {project.hoverTitle}
                        <ArrowUpRight size={28} strokeWidth={1.5} className="flex-shrink-0" />
                      </span>
                    </span>
                  </h3>
                </div>

                {/* Image area */}
                <div className="relative mx-6 rounded-2xl overflow-hidden bg-[var(--bg-surface-2)] h-72 md:h-96">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${project.slug === "guest-management" ? "scale-105 group-hover:scale-110" : "group-hover:scale-105"}`}
                  />

                  {/* Hover: circular buttons */}
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-black">
                      <ArrowUpRight size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Footer: date + tags */}
                <div className="px-8 py-6 flex items-center justify-between">
                  <span className="text-xs text-[var(--text-secondary)] tracking-wide">{project.date}</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full border border-[var(--text-primary)] text-[var(--text-primary)] text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Fashion Design */}
      <section className="max-w-6xl mx-auto w-full border-t border-gray-100 dark:border-[var(--border)]">
        <ScrollReveal>
          <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] pt-16 md:pt-24 mb-10" style={{ fontWeight: 400 }}>
            Fashion Design
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16 md:pb-24">
          <ScrollReveal delay={0}>
            <Link href="/projects/the-white-show" className="flex items-start gap-5 group">
              {/* Thumbnail */}
              <div className="overflow-hidden rounded-xl bg-[var(--bg-surface-2)]" style={{ width: 160, height: 160, flexShrink: 0 }}>
                <img
                  src="https://framerusercontent.com/images/lJWBJloR1OLHLNTL7h3Uzljfi8.png"
                  alt="The White Show"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ transformOrigin: "right center" }}
                />
              </div>
              {/* Text */}
              <div>
                <h3 className="text-[var(--text-primary)] mb-1" style={{ fontSize: "22px", fontWeight: 400, letterSpacing: "-0.2px" }}>
                  <span className="relative overflow-hidden block" style={{ height: "1.3em" }}>
                    <span className="inline-block whitespace-nowrap transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                      The White Show
                    </span>
                    <span className="inline-block whitespace-nowrap absolute inset-0 translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                      First year runway show
                    </span>
                  </span>
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-primary)", lineHeight: 1.5 }}>
                  Central Saint Martins White show project for first year students.
                </p>
              </div>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link href="/projects/fashion-project-2" className="flex items-start gap-5 group">
              {/* Thumbnail */}
              <div className="overflow-hidden rounded-xl bg-[var(--bg-surface-2)]" style={{ width: 160, height: 160, flexShrink: 0 }}>
                <img
                  src="/thesis-final-3.jpg"
                  alt="Thesis: Metamorphosis"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ transformOrigin: "right center" }}
                />
              </div>
              {/* Text */}
              <div>
                <h3 className="text-[var(--text-primary)] mb-1" style={{ fontSize: "22px", fontWeight: 400, letterSpacing: "-0.2px" }}>
                  <span className="relative overflow-hidden block" style={{ height: "1.3em" }}>
                    <span className="inline-block whitespace-nowrap transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                      Thesis: Metamorphosis
                    </span>
                    <span className="inline-block whitespace-nowrap absolute inset-0 translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                      Thesis: Metamorphosis
                    </span>
                  </span>
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-primary)", lineHeight: 1.5 }}>
                  A metamorphosis of humanity and machine — reconsidering our distance from complete digitalization.
                </p>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
