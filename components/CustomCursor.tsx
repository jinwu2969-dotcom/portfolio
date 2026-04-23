"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [pressed, setPressed] = useState(false);
  const [visible, setVisible] = useState(false);

  const rawX = useRef(0);
  const rawY = useRef(0);

  const springConfig = { stiffness: 180, damping: 22, mass: 0.6 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    let raf: number;

    const onMove = (e: MouseEvent) => {
      rawX.current = e.clientX;
      rawY.current = e.clientY;
      if (!visible) setVisible(true);
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const loop = () => {
      x.set(rawX.current);
      y.set(rawY.current);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [x, y, visible]);

  return (
    <motion.div
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
        opacity: visible ? 1 : 0,
      }}
    >
      <motion.div
        animate={
          pressed
            ? {
                width: 22,
                height: 22,
                backgroundColor: "rgba(255,255,255,0.95)",
                boxShadow: "0 0 18px 8px rgba(255,255,255,0.5), 0 0 40px 16px rgba(255,255,255,0.2)",
                border: "none",
              }
            : {
                width: 24,
                height: 24,
                backgroundColor: "rgba(100,100,100,0.85)",
                boxShadow: "none",
                border: "1px solid rgba(255,255,255,0.25)",
              }
        }
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        style={{ borderRadius: "50%" }}
      />
    </motion.div>
  );
}
