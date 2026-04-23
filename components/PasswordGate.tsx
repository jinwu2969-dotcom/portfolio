"use client";

import { useState, useEffect } from "react";

interface PasswordGateProps {
  projectSlug: string;
  password: string;
  children: React.ReactNode;
}

export default function PasswordGate({ projectSlug, password, children }: PasswordGateProps) {
  const storageKey = `project-unlocked-${projectSlug}`;
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey);
    if (saved === "true") setUnlocked(true);
    setChecking(false);
  }, [storageKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === password) {
      sessionStorage.setItem(storageKey, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-teal border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-black">
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-black flex items-center justify-center mb-6">
            <svg
              className="w-5 h-5 text-[var(--text-label)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-black dark:text-[var(--text-primary)] mb-1">This project is protected</h2>
          <p className="text-sm text-[var(--text-secondary)] dark:text-[var(--text-label)]">Enter the password to view the case study.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Password"
            autoFocus
            className={`w-full px-4 py-3 border text-sm rounded-lg outline-none transition-colors bg-white dark:bg-black text-black dark:text-[var(--text-primary)] ${
              error
                ? "border-red-400 focus:border-red-500"
                : "border-gray-200 dark:border-gray-700 focus:border-teal"
            }`}
          />
          {error && (
            <p className="text-xs text-red-500">Incorrect password. Please try again.</p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-black text-[var(--text-primary)] text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}
