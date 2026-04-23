import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Fun — Jinyu Wu",
  description: "Side projects, articles, and creative explorations by Jinyu Wu.",
};

export default function FunPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <ScrollReveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--text-label)] mb-6">
            Fun
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-semibold text-black leading-tight mb-8">
            Projects &amp; Articles
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-12">
            Side projects, creative explorations, and things I find interesting outside of
            client work.
          </p>
        </ScrollReveal>

        {/* Placeholder content */}
        <ScrollReveal delay={0.3}>
          <div className="rounded-2xl border border-dashed border-gray-200 p-12 text-center">
            <p className="text-[var(--text-label)] text-sm">Content coming soon</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
