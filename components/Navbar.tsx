"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "Fun", href: "/fun" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1rFKVnMKhWRrmBxn1qS12G-urUXxZlTQ1/view?usp=sharing",
    external: true,
  },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className="flex items-center rounded-full cursor-pointer select-none"
      style={{
        backgroundColor: isDark ? "#eaeaea" : "#b8b8b8",
        gap: "4px",
        padding: "4px",
        transition: "background-color 0.3s ease",
      }}
      onClick={toggle}
    >
      {/* Light label — visible in dark mode */}
      {isDark && (
        <span
          className="text-[14px] font-normal text-black leading-none"
          style={{ fontFamily: "DM Sans, sans-serif", padding: "4px 16px" }}
        >
          Light
        </span>
      )}

      {/* Active pill */}
      <span
        className="text-[14px] font-normal rounded-full leading-none"
        style={{
          fontFamily: "DM Sans, sans-serif",
          padding: "4px 16px",
          backgroundColor: isDark ? "#000000" : "#ffffff",
          color: isDark ? "#ffffff" : "#222222",
          boxShadow: "0px 3px 20px 0px rgba(0,0,0,0.4)",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        {isDark ? "Dark" : "Light"}
      </span>

      {/* Dark label — visible in light mode */}
      {!isDark && (
        <span
          className="text-[14px] font-normal text-[var(--text-primary)] leading-none"
          style={{ fontFamily: "DM Sans, sans-serif", padding: "4px 16px" }}
        >
          Dark
        </span>
      )}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        {!pathname.startsWith("/projects/") && (
          <Link
            href="/"
            className="font-sans font-semibold text-base tracking-tight text-black dark:text-[var(--text-primary)] hover:opacity-70 transition-opacity"
          >
            jinyu.design
          </Link>
        )}
        {/* On project pages, left side is empty — back button lives in ProjectSideNav */}
        {pathname.startsWith("/projects/") && <div />}

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = !link.external && pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group text-sm font-medium block overflow-hidden"
                  style={{ height: "1.4em" }}
                >
                  <span className="flex flex-col" style={{ transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)" }}>
                    <span
                      className="block group-hover:-translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ color: isActive ? "var(--text-label)" : "var(--text-primary)" }}
                    >
                      {link.label}
                    </span>
                    <span
                      className="block translate-y-0 group-hover:-translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {link.label}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-black dark:bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-black border-b border-gray-100 dark:border-[var(--border)] ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = !link.external && pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`text-base font-medium block ${
                    isActive ? "text-teal" : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
