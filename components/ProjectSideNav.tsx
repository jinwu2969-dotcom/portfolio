"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const defaultSections = [
  { id: "overview", label: "Overview" },
  { id: "context", label: "Context" },
  { id: "challenge-solution", label: "Challenge & Solution" },
  { id: "research", label: "Research" },
  { id: "design-decisions", label: "Design Decisions" },
  { id: "reflection", label: "Reflection" },
];

export default function ProjectSideNav({
  sections = defaultSections,
}: {
  sections?: { id: string; label: string }[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.innerHeight / 2;
      let current = sections[0]?.id ?? "";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= mid) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="project-side-nav"
      style={{
        position: "fixed",
        left: "16px",
        top: "88px",
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
        gap: "0",
      }}
    >
      <style>{`
        @media (max-width: 1280px) {
          .project-side-nav { display: none !important; }
        }
      `}</style>

      {/* Back button */}
      <Link
        href="/"
        style={{
          fontSize: "14px",
          fontWeight: 400,
          color: "var(--text-label)",
          textDecoration: "none",
          marginBottom: "32px",
          display: "block",
          transition: "color 0.2s ease",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-label)")}
      >
        ← Back
      </Link>

      {/* Section links */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: activeId === id ? "var(--text-primary)" : "var(--text-label)",
              transition: "color 0.2s ease",
              textAlign: "left",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              lineHeight: "1.5",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={e => (e.currentTarget.style.color = activeId === id ? "var(--text-primary)" : "var(--text-label)")}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
