import type { Metadata } from "next";
import { Network, Target, Wand2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import LifePhotos from "@/components/LifePhotos";

export const metadata: Metadata = {
  title: "About — Jinyu Wu",
  description: "Data-driven product designer skilled at harnessing analytical insights to optimize tool efficiency.",
};

const skills = [
  {
    title: "Systems Thinking",
    description:
      "I specialize in breaking down complex enterprise workflows to find where users get stuck and where systems break down. By mapping the full picture — people, processes, and touchpoints — I design clear, intuitive paths that feel simple without sacrificing depth.",
    icon: Network,
  },
  {
    title: "Strategic Decision-Making",
    description:
      "Good design isn't just about solving the problem in front of you — it's about knowing which problem to solve. I evaluate tradeoffs, pressure-test ideas with research and stakeholder input, and align teams around decisions that are both user-centered and business-grounded.",
    icon: Target,
  },
  {
    title: "AI-Augmented Design",
    description:
      "I integrate AI fluency and vibe coding into my design practice — using tools like Claude Code to build and calibrate design systems with greater speed and precision. This allows me to move faster across design and operations without compromising quality or craft.",
    icon: Wand2,
  },
];

const tools = [
  "Figma", "Framer", "Maze", "Userlytics", "Mixpanel",
  "Lovable", "Gemini", "ChatGPT", "Make", "Notion",
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-6xl mx-auto">

      {/* Header image — orbit portrait (scaled to 64% of Figma original) */}
      <div className="relative" style={{ height: "210px", width: "398px", margin: "0 auto 60px" }}>

        {/* Orbit ring — thin ellipse rotated 110.34° to create diagonal orbit effect */}
        <div style={{ position: "absolute", left: "14px", top: 0, width: "370px", height: "210px", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <div style={{ flexShrink: 0, transform: "rotate(110.34deg)" }}>
            <div style={{ height: "362px", width: "90px", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: "-1.7%", right: "-1.7%", bottom: "-0.76%" }}>
                <svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" viewBox="0 0 145.591 570.344" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="72.7954" cy="283.255" rx="70.3994" ry="282.776" stroke="currentColor" strokeWidth="0.958427" shapeRendering="crispEdges" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Portrait circle */}
        <div style={{ position: "absolute", left: "109px", top: "26px", width: "179px", height: "183px", borderRadius: "90px", border: "2px solid currentColor", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/about-portrait.jpg" alt="Jinyu Wu" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", transform: "scale(2.2) translateY(18%)", transformOrigin: "center center" }} />
        </div>

        {/* Subtract — front arc of orbit ring layered on top of portrait */}
        <div style={{ position: "absolute", left: "4px", top: "43px", width: "386px", height: "142px", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: 0, left: "-0.32%", right: "-0.32%", bottom: "-1.72%" }}>
            <svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" viewBox="0 0 607.552 226.258" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M178.722 53.2275C139.452 66.7769 104.852 81.8292 76.9183 97.2831C51.4764 111.358 31.5386 125.78 18.6389 139.722C5.75192 153.65 -0.193696 167.194 2.5901 179.477C5.37395 191.759 16.5782 201.416 34.2111 208.427C51.8613 215.444 76.0688 219.861 105.093 221.591C163.148 225.052 240.588 217.772 323.661 198.944C406.733 180.115 479.744 153.294 530.634 125.141C556.075 111.066 576.013 96.6438 588.913 82.7019C601.8 68.7737 607.746 55.2297 604.962 42.9473C602.178 30.665 590.974 21.008 573.341 13.9973C555.691 6.97961 531.483 2.56322 502.459 0.833016C471.166 -1.03243 434.24 0.222657 393.837 4.72495C393.675 5.06557 393.512 5.40543 393.348 5.74453C433.937 1.19341 471.016 -0.0806653 502.401 1.79028C531.375 3.51749 555.469 7.92328 572.986 14.8878C590.52 21.8592 601.349 31.3445 604.027 43.1593C606.704 54.9742 601.023 68.2013 588.209 82.0514C575.407 95.8878 555.567 110.252 530.169 124.303C479.379 152.401 406.458 179.195 323.449 198.01C240.439 216.824 163.092 224.089 105.15 220.635C76.1755 218.908 52.0817 214.501 34.565 207.537C17.0311 200.565 6.20228 191.08 3.52441 179.265C0.846591 167.45 6.52752 154.223 19.3422 140.373C32.1442 126.536 51.9839 112.173 77.3819 98.1223C105.396 82.6244 140.142 67.5234 179.6 53.9393C179.306 53.7032 179.014 53.4659 178.722 53.2275Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Planet circle — left */}
        <div style={{ position: "absolute", left: "72px", top: "72px", width: "37px", height: "37px" }}>
          <svg viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <circle cx="28.5" cy="28.5" r="28" fill="#000000" stroke="#ffffff" strokeWidth="1" />
          </svg>
        </div>

        {/* Planet circle — right */}
        <div style={{ position: "absolute", left: "258px", top: "132px", width: "37px", height: "37px" }}>
          <svg viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <circle cx="28.5" cy="28.5" r="28" fill="#000000" stroke="#ffffff" strokeWidth="1" />
          </svg>
        </div>

        {/* Star shape */}
        <div style={{ position: "absolute", left: 0, top: "149px", width: "42px", height: "41px", transform: "rotate(-6.13deg)" }}>
          <svg viewBox="0 0 59.9585 59.2983" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
            <path d="M46.0292 17.9397C35.8952 -9.14335 20.1311 -1.14101 14.1258 17.9397C-10.7964 29.2655 4.11683 39.8951 14.5011 43.7937C22.3831 64.1066 40.7745 63.491 46.0292 43.7927C70.3509 32.4667 56.1633 21.8382 46.0292 17.9397Z" fill="#000000" stroke="#ffffff" strokeWidth="1" />
          </svg>
        </div>

      </div>

      {/* Divider */}
      <hr className="border-[var(--border)] mb-[30px]" />

      {/* Header */}
      <div className="mb-20">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-x-10 md:gap-x-16">
            <div className="hidden md:block pt-1">
              <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)]" style={{ fontWeight: 400 }}>
                About Me
              </p>
            </div>
            <div className="min-w-0">
              <h1 className="text-[32px] leading-[1.3] text-black dark:text-[var(--text-primary)] mb-8" style={{ fontWeight: 400, letterSpacing: "-0.3px" }}>
                Designing clarity out of complexity, turning friction into flow.
              </h1>
              <p className="text-[16px] text-[var(--text-secondary)] dark:text-[var(--text-label)] leading-relaxed font-normal mb-4">
                I specialize in{" "}
                <strong className="text-black dark:text-[var(--text-primary)] font-normal">untangling complex enterprise workflows</strong>{" "}
                — finding where users get stuck, where systems break down, and designing clear, intuitive paths forward.
                Whether it&apos;s a dense data tool, a multi-stakeholder platform, or an operationally heavy process,
                I translate complexity into experiences that{" "}
                <strong className="text-black dark:text-[var(--text-primary)] font-normal">feel simple without sacrificing depth</strong>.
              </p>
              <p className="text-[16px] text-[var(--text-secondary)] dark:text-[var(--text-label)] leading-relaxed font-normal mb-4">
                I accelerate this work through{" "}
                <strong className="text-black dark:text-[var(--text-primary)] font-normal">AI-fluency and vibe coding</strong>,
                building and calibrating design systems with{" "}
                <strong className="text-black dark:text-[var(--text-primary)] font-normal">Claude Code</strong>{" "}
                to increase efficiency across design and operations.
                A background in fashion design and marketing rounds out my lens —
                keeping brand, culture, and the human experience at the center of every decision.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Skills */}
      <div className="mb-20">
        <ScrollReveal>
          <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-10" style={{ fontWeight: 400 }}>
            I&apos;m good at
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <div className="rounded-2xl" style={{ backgroundColor: "var(--bg-surface)", padding: "40px 48px" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {skills.map((skill) => (
                <div key={skill.title}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "var(--bg-surface-2)" }}>
                    <skill.icon size={18} strokeWidth={1.5} color="var(--text-primary)" />
                  </div>
                  <h3 className="text-[var(--text-primary)] mb-3" style={{ fontSize: "16px", fontWeight: 450 }}>{skill.title}</h3>
                  <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.6" }}>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Tools */}
      <div className="mb-20">
        <ScrollReveal>
          <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-8" style={{ fontWeight: 400 }}>
            Tools
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-black"
              >
                {tool}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* When not designing */}
      <div className="mb-20">
        <ScrollReveal>
          <p className="text-[16px] uppercase tracking-widest text-[var(--text-label)] mb-10" style={{ fontWeight: 400 }}>
            When Not Designing
          </p>
        </ScrollReveal>
        <LifePhotos />
      </div>
    </div>
  );
}
