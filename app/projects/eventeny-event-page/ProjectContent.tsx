"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const sections = [
  {
    number: "01",
    title: "Background",
    content: `Eventeny is an all-in-one event management platform combining vendor management, sponsorship coordination, volunteer administration, mapping, and ticket sales.

Target audiences: Event attendees, market sellers (volunteers, vendors, artists), and event sponsors.

Problem statement: The current event page suffered from inefficiency and accessibility issues causing user churn. One organizer noted: "The page feels dull and cluttered with information. It does not help promote my events."`,
  },
  {
    number: "02",
    title: "Challenge",
    content: `Design debt identified:

1. Lack of Clear Information Hierarchy — No distinction for critical details like dates and addresses; no scalability for recurring events
2. Inefficient Layout — Description paragraphs created excessive white space
3. Ineffective Transaction Conversion — Ticket buttons required additional navigation steps
4. Congested Information Cards — Small image thumbnails with excessive descriptive text
5. Static Maps — Non-interactive previews with limited visibility

How might we: Redesign the event page to enhance readability, increase site traffic, and improve transaction conversion?`,
  },
  {
    number: "03",
    title: "Research & Ideation",
    content: `Competitive analysis of TicketLeap, Eventbrite, TicketBud, and TodayTix revealed:
• Prominent CTA buttons highlight purchase actions
• Navigation menus enable quick information consumption
• Information hierarchy prioritizes essential details

Three layout options evaluated:
Option 1: Top nav with image and key info at top (efficient but no focal point)
Option 2: Horizontal three-section with left-side nav (clean but confusing nav position)
Option 3: Existing layout with separated event details (minimal learning curve)

Decision: Option 3 selected — balancing innovation with user familiarity.`,
  },
  {
    number: "04",
    title: "Visual Design",
    content: `Responsive layout system established:
• Desktop: 12-column grid, 40px gutter, 135px margin
• Tablet: 8-column grid, 20px gutter, 40px margin
• Mobile: 4-column grid, 16px gutter, 20px margin

Components: Hero Section, Cards, Schedule, Guests & Tickets, Marketplace, Maps.`,
  },
  {
    number: "05",
    title: "Final Design",
    content: `Key implementation changes:
1. Organized Footer — Improved structure and accessibility
2. Quick Ticket Checkout — Direct cart addition removed extra navigation step
3. Sticky Navigation Bar — Enhanced functionality while preserving familiarity
4. Enhanced CTAs — Added "Get Tickets" button to navigation for visibility
5. Information Restructuring — Clear hierarchy for event overview details
6. Guest Management Section — New section to drive traffic and transactions
7. Redesigned Cards — Improved proportions and content showcasing`,
  },
  {
    number: "06",
    title: "Reflection",
    content: `Initially viewed as a layout update, the project revealed a fundamental need for a comprehensive design system. Expanded scope included establishing a robust style guide benefiting all future designs.

Transitioned from a fixed 12-column grid to a flexible responsive system, and established weekly component backlog additions guiding subsequent projects.

Future plans: Event organizer branding customization, seasonal campaigns, and simplified accessibility-focused experiences.`,
  },
];

export default function ProjectContent() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-6xl mx-auto">
      <ScrollReveal>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-label)] dark:text-[var(--text-secondary)] hover:text-teal transition-colors mb-12"
        >
          ← Back to work
        </Link>
      </ScrollReveal>

      <div className="max-w-3xl mb-16">
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Web", "Redesign", "Research"].map((tag) => (
              <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-black text-[var(--text-secondary)] dark:text-[var(--text-label)] dark:text-[var(--text-secondary)]">
                {tag}
              </span>
            ))}
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-black text-[var(--text-label)] dark:text-[var(--text-secondary)]">
              Dec 2023 – May 2024
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-3xl md:text-5xl font-semibold text-black dark:text-[var(--text-primary)] leading-tight mb-6">
            Revamping the Event Page Experience
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-lg text-[var(--text-secondary)] dark:text-[var(--text-label)] dark:text-[var(--text-secondary)] leading-relaxed mb-8">
            Redesigning Eventeny&apos;s event page to enhance readability, increase site traffic, and improve transaction conversion.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-50 dark:bg-black rounded-2xl">
            <div>
              <p className="text-xs text-[var(--text-label)] dark:text-[var(--text-secondary)] uppercase tracking-wider mb-1">Role</p>
              <p className="text-sm font-medium text-black dark:text-[var(--text-primary)]">Product Design, User Research, Prototyping</p>
            </div>
            <div>
              <p className="text-xs text-[var(--text-label)] dark:text-[var(--text-secondary)] uppercase tracking-wider mb-1">Timeline</p>
              <p className="text-sm font-medium text-black dark:text-[var(--text-primary)]">Dec 2023 – May 2024</p>
            </div>
            <div>
              <p className="text-xs text-[var(--text-label)] dark:text-[var(--text-secondary)] uppercase tracking-wider mb-1">Tools</p>
              <p className="text-sm font-medium text-black dark:text-[var(--text-primary)]">Figma, Userlytics, Mixpanel</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div className="w-full h-64 md:h-96 rounded-2xl bg-[#f0f8fa] dark:bg-black flex items-center justify-center mb-20">
          <span className="text-6xl opacity-20">◻</span>
        </div>
      </ScrollReveal>

      <div className="max-w-3xl mx-auto space-y-16">
        {sections.map((section, i) => (
          <ScrollReveal key={section.number} delay={i * 0.05}>
            <div className="flex gap-6 md:gap-10">
              <div className="flex-shrink-0 pt-1">
                <span className="text-xs font-semibold text-teal tracking-widest">{section.number}</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-[var(--text-primary)] mb-4">{section.title}</h2>
                <p className="text-base text-[var(--text-secondary)] dark:text-[var(--text-label)] dark:text-[var(--text-secondary)] leading-relaxed whitespace-pre-line">{section.content}</p>
                <div className="mt-8 w-full h-48 md:h-64 rounded-xl bg-gray-50 dark:bg-black border border-gray-100 dark:border-[var(--border)] flex items-center justify-center">
                  <span className="text-[var(--text-secondary)] text-sm">Image placeholder</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-20">
        <ScrollReveal>
          <div className="border-l-2 border-teal pl-6">
            <p className="text-xl font-light italic font-serif text-black dark:text-[var(--text-primary)] leading-relaxed">
              &ldquo;I strive to simplify digital experience for people bearing accessibility and inclusivity in mind.&rdquo;
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
