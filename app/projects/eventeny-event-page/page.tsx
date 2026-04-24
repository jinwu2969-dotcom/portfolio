"use client";

import Link from "next/link";
import { useState } from "react";
import { Copy } from "lucide-react";

const EMAIL = "jinwu2969@gmail.com";

export default function SmartDataMigrationPage() {
  const [toast, setToast] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setToast(true);
    setTimeout(() => setToast(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">

      {/* Toast */}
      {toast && (
        <div
          style={{
            position: "fixed",
            top: "88px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "var(--text-primary)",
            color: "var(--bg-page)",
            fontSize: "14px",
            fontWeight: 450,
            padding: "8px 20px",
            borderRadius: "100px",
            zIndex: 100,
            whiteSpace: "nowrap",
          }}
        >
          Copied to clipboard
        </div>
      )}

      {/* Back button */}
      <div style={{ position: "absolute", top: "88px", left: "40px" }}>
        <Link
          href="/"
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: "var(--text-label)",
            textDecoration: "none",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-label)")}
        >
          ← Back
        </Link>
      </div>

      {/* Content */}
      <h1
        style={{
          fontSize: "24px",
          fontWeight: 400,
          letterSpacing: "-0.3px",
          color: "var(--text-primary)",
          marginBottom: "16px",
        }}
      >
        🧑‍🍳 Still cooking...
      </h1>

      <p
        style={{
          fontSize: "16px",
          color: "var(--text-secondary)",
          maxWidth: "420px",
          lineHeight: 1.6,
          marginBottom: "12px",
        }}
      >
        I am still working on the nitty gritty of this project. Be sure to come back and check it out!
      </p>

      <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
        If you have any questions, please contact{" "}
        <a
          href={`mailto:${EMAIL}`}
          style={{ color: "var(--text-primary)", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          {EMAIL}
        </a>
        <button
          onClick={copyEmail}
          title="Copy email"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0 0 0 6px",
            color: "var(--text-label)",
            verticalAlign: "middle",
            lineHeight: 1,
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-label)")}
        >
          <Copy size={14} strokeWidth={1.5} />
        </button>
      </p>
    </div>
  );
}
