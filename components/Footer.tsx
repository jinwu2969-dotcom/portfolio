"use client";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-[var(--border)] mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>
          All rights reserved @jinyu.design
        </p>
        <p style={{ fontSize: "14px", color: "var(--text-secondary)" }} className="text-center md:text-right max-w-xs">
          Designed and engineered by Jinyu
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontSize: "14px", color: "var(--text-secondary)" }}
          className="hover:text-teal transition-colors cursor-pointer"
        >
          Back to the top ↑
        </button>
      </div>
    </footer>
  );
}
