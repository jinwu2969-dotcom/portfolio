"use client";

import { motion, useAnimationControls, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import svgPaths from "./orbit-svg-paths";

function Group4() {
  return (
    <div className="[grid-area:1_/_1] h-[542.739px] ml-[138.72px] mt-[36.7px] relative w-[539.223px]">
      <div className="absolute inset-[0_0_-0.92%_-0.32%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 540.942 547.711">
          <g id="Group 2447">
            <g filter="url(#filter0_d_1_59)" id="Subtract">
              <path d={svgPaths.p39ecc400} fill="white" />
            </g>
            <g filter="url(#filter1_d_1_59)" id="Subtract_2">
              <path d={svgPaths.p1f34f300} fill="white" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="171.326" id="filter0_d_1_59" width="352.401" x="186.984" y="7.43016">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_59" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_59" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="167.42" id="filter1_d_1_59" width="337.055" x="1.19209e-07" y="380.291">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_59" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_59" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] h-[94.676px] inline-grid place-items-start relative w-[138.613px]">
      <div className="[grid-area:1_/_1] flex h-[85.157px] items-center justify-center ml-0 mt-[6.29px] relative w-[130.43px]">
        <div className="flex-none rotate-[345.776deg]">
          <div className="h-[57.433px] relative w-[119.997px]">
            <div className="absolute inset-[-52.69%_-25.22%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180.52 117.955">
                <g filter="url(#filter0_f_1_77)" id="Subtract">
                  <path d={svgPaths.p1562e900} fill={isHovered ? "#ffffff" : "#87559C"} fillOpacity="0.8" style={{ transition: "fill 0.2s" }} />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="117.955" id="filter0_f_1_77" width="180.52" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_77" stdDeviation="15.1307" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[85.157px] items-center justify-center ml-[6.6px] mt-0 relative w-[130.43px]">
        <div className="flex-none rotate-[345.776deg]">
          <div className="h-[57.433px] relative w-[119.997px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.997 57.4326">
              <g id="Subtract">
                <mask fill="white" id="path-1-inside-1_1_71">
                  <path d={svgPaths.p104c8ac0} />
                </mask>
                <path d={svgPaths.p104c8ac0} fill={isHovered ? "#ffffff" : "#87559C"} style={{ transition: "fill 0.2s" }} />
                <path d={svgPaths.pc10b784} fill="#CD70F5" mask="url(#path-1-inside-1_1_71)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[41.02px] items-center justify-center ml-[73.05px] mt-[26.94px] relative translate-x-[-50%] w-[92.955px]">
        <div className="flex-none rotate-[346.367deg]">
          <p
            className={`font-sans font-medium leading-[1.4] text-[16px] text-center tracking-[-0.16px] w-[90.751px] transition-all duration-200 ${
              isHovered ? "opacity-100 text-[#222222]" : "opacity-0 text-[var(--text-primary)]"
            }`}
          >
            Prototyper
          </p>
        </div>
      </div>
    </div>
  );
}

function Group1({ isHovered, isClicked }: { isHovered: boolean; isClicked: boolean }) {
  const circleFill = isHovered ? "#ffffff" : "#BBAD5E";
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative cursor-pointer">
      <div className="[grid-area:1_/_1] ml-[1.88px] mt-[8.58px] relative size-[100px]">
        <div className="absolute inset-[-19.4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138.806 138.806">
            <g filter="url(#filter0_f_1_69)" id="Ellipse 9">
              <circle cx="69.403" cy="69.403" fill={circleFill} fillOpacity="0.8" r="50" style={{ transition: "fill 0.3s" }} />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138.806" id="filter0_f_1_69" width="138.806" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_69" stdDeviation="9.70149" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[100px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
          <circle cx="50" cy="50" fill={circleFill} id="Ellipse 10" r="49.5149" stroke="#F7E47D" strokeWidth="0.970149" style={{ transition: "fill 0.3s" }} />
        </svg>
      </div>
      {/* Centered text overlay — full 100×100 grid cell, flex-centered */}
      <div className="[grid-area:1_/_1] flex items-center justify-center" style={{ width: "100px", height: "100px" }}>
        <div className="flex-none rotate-[11.209deg]">
          <p
            className="font-sans font-medium leading-[1.4] text-[16px] text-center tracking-[-0.16px] transition-all duration-200"
            style={{
              color: "#222222",
              opacity: isHovered ? 1 : 0,
              textDecoration: isHovered ? "underline" : "none",
              textUnderlineOffset: "3px",
            }}
          >
            Sketchbook
          </p>
        </div>
      </div>
    </div>
  );
}

function Group2({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <div className="[grid-area:1_/_1] h-[103px] ml-0 mt-[5px] relative w-[146px]">
        <div className="absolute inset-[-17.08%_-12.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181.184 138.184">
            <g filter="url(#filter0_f_1_55)" id="Vector 12">
              <path d={svgPaths.p258873e0} fill={isHovered ? "#ffffff" : "#FF2FA0"} fillOpacity="0.4" style={{ transition: "fill 0.2s" }} />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="138.184" id="filter0_f_1_55" width="181.184" x="6.63762e-07" y="-1.212e-07">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_55" stdDeviation="8.79603" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[103px] ml-[7px] mt-0 relative w-[146px]">
        <div className="absolute inset-[-0.43%_-0.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146.88 103.879">
            <path d={svgPaths.p393bf540} fill={isHovered ? "#ffffff" : "#7C174D"} id="Vector 13" stroke="#FF2FA0" strokeWidth="0.879602" style={{ transition: "fill 0.2s" }} />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[50.822px] items-center justify-center ml-[81.11px] mt-[28.89px] relative translate-x-[-50%] w-[90.858px]">
        <div className="flex-none rotate-[4.786deg]">
          <div
            className={`font-sans font-medium leading-[1.4] text-[16px] text-center tracking-[-0.16px] w-[87.519px] transition-all duration-200 ${
              isHovered ? "opacity-100 text-[#222222]" : "opacity-0 text-[var(--text-primary)]"
            }`}
          >
            <p className="mb-0">Full-AI</p>
            <p>Fluency</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group3({ isHovered }: { isHovered: boolean }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative cursor-pointer">
      <div className="[grid-area:1_/_1] h-[86.4px] ml-0 mt-[10.23px] relative w-[120px]">
        <div className="absolute inset-[-19.29%_-13.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153.333 119.733">
            <g filter="url(#filter0_f_1_57)" id="Vector 14">
              <path d={svgPaths.p1a9a5c00} fill={isHovered ? "#ffffff" : "#2FC862"} fillOpacity="0.4" style={{ transition: "fill 0.2s" }} />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="119.733" id="filter0_f_1_57" width="153.333" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_57" stdDeviation="8.33333" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[87.086px] ml-[0.85px] mt-0 relative w-[120px]">
        <div className="absolute inset-[-0.61%_-0.58%_-0.63%_-0.59%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121.396 88.1694">
            <path d={svgPaths.p39444580} fill={isHovered ? "#ffffff" : "#6F8B6D"} id="Vector 15" stroke="#2FC862" strokeWidth="0.852273" style={{ transition: "fill 0.2s" }} />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex items-center justify-center" style={{ width: "120px", height: "87px" }}>
        <div className="flex-none rotate-[353.855deg]">
          <p
            className="font-sans font-medium leading-[1.4] text-[16px] text-center tracking-[-0.16px] transition-all duration-200"
            style={{
              color: "#222222",
              opacity: isHovered ? 1 : 0,
              textDecoration: isHovered ? "underline" : "none",
              textUnderlineOffset: "3px",
            }}
          >
            Photography
          </p>
        </div>
      </div>
    </div>
  );
}

const CENTER_X = 408.32;
const CENTER_Y = 308.07;
const ORBIT_RADIUS_X = 240;
const ORBIT_RADIUS_Y = 320;
const ROTATION_DEG = 45;
const ROTATION_RAD = (ROTATION_DEG * Math.PI) / 180;
const ORBIT_DURATION = 30;
const START_ANGLES = [0, 90, 180, 270];

function getOrbitKeyframes(startAngleDeg: number) {
  const frames: { x: number; y: number }[] = [];
  for (let i = 0; i <= 360; i++) {
    const angle = ((startAngleDeg + i) * Math.PI) / 180;
    const x = ORBIT_RADIUS_X * Math.cos(angle);
    const y = ORBIT_RADIUS_Y * Math.sin(angle);
    const rotatedX = x * Math.cos(ROTATION_RAD) - y * Math.sin(ROTATION_RAD);
    const rotatedY = x * Math.sin(ROTATION_RAD) + y * Math.cos(ROTATION_RAD);
    frames.push({ x: CENTER_X + rotatedX, y: CENTER_Y + rotatedY });
  }
  return frames;
}

function OrbitingShapes({ onPanelToggle, onClose, activePanel }: { onPanelToggle: (panel: 'sketchbook' | 'photography') => void; onClose: () => void; activePanel: 'sketchbook' | 'photography' | null }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const ctrl0 = useAnimationControls();
  const ctrl1 = useAnimationControls();
  const ctrl2 = useAnimationControls();
  const ctrl3 = useAnimationControls();
  const controls = [ctrl0, ctrl1, ctrl2, ctrl3];

  // Track total elapsed orbit time across pause/resume cycles
  const totalElapsedRef = useRef(0);
  const lastResumeRef = useRef(Date.now());

  const startAll = useCallback(() => {
    lastResumeRef.current = Date.now();
    controls.forEach((ctrl, i) => {
      const degreesElapsed = (totalElapsedRef.current / ORBIT_DURATION) * 360;
      const currentAngle = (START_ANGLES[i] + degreesElapsed) % 360;
      const frames = getOrbitKeyframes(currentAngle);
      ctrl.start({
        x: frames.map((p) => p.x),
        y: frames.map((p) => p.y),
        transition: { duration: ORBIT_DURATION, repeat: Infinity, ease: "linear" },
      });
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    startAll();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleHoverStart = (index: number) => {
    const now = Date.now();
    totalElapsedRef.current += (now - lastResumeRef.current) / 1000;
    setHoveredIndex(index);
    controls.forEach((ctrl) => ctrl.stop());
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
    startAll();
  };

  const shapes = [
    <Group key={0} isHovered={hoveredIndex === 0} />,
    <Group1 key={1} isHovered={hoveredIndex === 1} isClicked={activePanel === 'sketchbook'} />,
    <Group2 key={2} isHovered={hoveredIndex === 2} />,
    <Group3 key={3} isHovered={hoveredIndex === 3} />,
  ];

  return (
    <div className="[grid-area:1_/_1] inline-grid grid-cols-[max-content] grid-rows-[max-content] ml-0 mt-0 place-items-start relative">
      <Group4 />

      {/* Orbit track */}
      <div
        className="[grid-area:1_/_1] absolute pointer-events-none"
        style={{ left: CENTER_X, top: CENTER_Y, transform: "translate(-50%, -50%)" }}
      >
        <svg width={ORBIT_RADIUS_X * 2} height={ORBIT_RADIUS_Y * 2} style={{ overflow: "visible" }}>
          <ellipse
            cx={ORBIT_RADIUS_X}
            cy={ORBIT_RADIUS_Y}
            rx={ORBIT_RADIUS_X}
            ry={ORBIT_RADIUS_Y}
            fill="none"
            stroke="var(--border)"
            strokeWidth="1"
            strokeDasharray="5,5"
            transform={`rotate(${ROTATION_DEG} ${ORBIT_RADIUS_X} ${ORBIT_RADIUS_Y})`}
          />
        </svg>
      </div>

      {controls.map((ctrl, i) => (
        <motion.div
          key={i}
          animate={ctrl}
          style={{ position: "absolute", left: 0, top: 0 }}
          onHoverStart={() => handleHoverStart(i)}
          onHoverEnd={handleHoverEnd}
          onClick={(e) => {
            e.stopPropagation();
            if (i === 1) onPanelToggle('sketchbook');
            else if (i === 3) onPanelToggle('photography');
            else onClose();
          }}
        >
          <div style={{ transform: "translate(-50%, -50%)" }}>{shapes[i]}</div>
        </motion.div>
      ))}
    </div>
  );
}

const PANEL_STYLE: React.CSSProperties = { flex: 1, minWidth: 0, marginLeft: "64px", paddingRight: "48px", alignSelf: "flex-start", height: "calc(100vh - 96px - 140px)" };
const PANEL_INNER: React.CSSProperties = { backgroundColor: "var(--bg-surface)", borderRadius: "16px", padding: "20px", height: "100%", overflow: "hidden", display: "flex", flexDirection: "column" };

function PanelShell({ onClose, children }: { onClose: () => void; children: React.ReactNode }) {
  return (
    <div style={PANEL_INNER} onClick={(e) => e.stopPropagation()}>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "12px", flexShrink: 0 }}>
        <button onClick={onClose} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-[14px]">✕</button>
      </div>
      <div style={{ overflowX: "scroll", overflowY: "hidden", flex: 1 }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "flex-start", height: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function OrbitingAnimation() {
  const [activePanel, setActivePanel] = useState<'sketchbook' | 'photography' | null>(null);

  const handlePanelToggle = (panel: 'sketchbook' | 'photography') => {
    setActivePanel((v) => (v === panel ? null : panel));
  };

  return (
    <div
      className="w-full flex flex-row items-start pt-24 relative overflow-hidden min-h-screen" style={{ backgroundColor: "var(--bg-page)" }}
      onClick={() => setActivePanel(null)}
    >
      {/* Left — hero + orbiting shapes */}
      <div className="inline-grid grid-cols-[max-content] grid-rows-[max-content] leading-[0] place-items-start relative shrink-0 pb-[16px] px-[2px]">
        <p
          className="[grid-area:1_/_1] font-sans font-normal leading-[1.2] ml-[173px] mt-[169px] relative text-[40px] text-[var(--text-primary)] tracking-[-0.4px] w-[477px] z-10"
          style={{ height: "285px" }}
        >
          Jinyu designs enterprise tools that drive efficiency and product growth, currently crafting experiences{" "}
          <span className="text-[#08a6a0]">@Eventeny</span>.
        </p>
        <OrbitingShapes
          activePanel={activePanel}
          onPanelToggle={handlePanelToggle}
          onClose={() => setActivePanel(null)}
        />
      </div>

      <AnimatePresence mode="wait">
        {activePanel === 'sketchbook' && (
          <motion.div key="sketchbook" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} transition={{ duration: 0.4, ease: "easeOut" }} style={PANEL_STYLE}>
            <PanelShell onClose={() => setActivePanel(null)}>
              {[
                { src: "/sketchbook-utopia.jpg", alt: "Utopia" },
                { src: "/sketchbook-color.jpg", alt: "Color" },
                { src: "/sketchbook-owl.jpg", alt: "Owl" },
                { src: "/sketchbook-figure1.jpg", alt: "Figure 1" },
                { src: "/sketchbook-figure2.jpg", alt: "Figure 2" },
                { src: "/sketchbook-figure3.jpg", alt: "Figure 3" },
              ].map(({ src, alt }) => (
                <div key={src} style={{ width: "420px", flexShrink: 0, borderRadius: "8px", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={alt} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              ))}
            </PanelShell>
          </motion.div>
        )}

        {activePanel === 'photography' && (
          <motion.div key="photography" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} transition={{ duration: 0.4, ease: "easeOut" }} style={PANEL_STYLE}>
            <PanelShell onClose={() => setActivePanel(null)}>
              {["/photo-1.jpg", "/photo-2.jpg", "/photo-3.jpg", "/photo-4.jpg", "/photo-5.jpg"].map((src, i) => (
                <div key={src} style={{ width: "400px", flexShrink: 0, borderRadius: "8px", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`Photography ${i + 1}`} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
              ))}
            </PanelShell>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
