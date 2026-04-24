import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Data Migration — Jinyu Wu",
};

export default function SmartDataMigrationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1
        style={{
          fontSize: "clamp(40px, 7vw, 80px)",
          fontWeight: 400,
          letterSpacing: "-1px",
          color: "var(--text-primary)",
          lineHeight: 1.1,
          marginBottom: "24px",
        }}
      >
        Still cooking...
      </h1>
      <p
        style={{
          fontSize: "18px",
          color: "var(--text-secondary)",
          maxWidth: "480px",
          lineHeight: 1.6,
          marginBottom: "16px",
        }}
      >
        I am still working on the nitty gritty of this project. Be sure to come back and check it out!
      </p>
      <p style={{ fontSize: "16px", color: "var(--text-label)", lineHeight: 1.6 }}>
        If you have any questions, please contact{" "}
        <a
          href="mailto:jinwu2969@gmail.com"
          style={{ color: "var(--text-primary)", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          jinwu2969@gmail.com
        </a>
      </p>
    </div>
  );
}
