"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// 6 photos: top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
const photos = [
  { src: "/life-1.jpg", alt: "Hiking",       objectPosition: "center center", extraStyle: {} },
  { src: "/life-2.jpg", alt: "Sunset",        objectPosition: "center 30%",   extraStyle: {} },
  { src: "/life-3.jpg", alt: "Group selfie",  objectPosition: "center center", extraStyle: { transform: "scale(1.4)" } },
  { src: "/life-4.jpg", alt: "Garden",        objectPosition: "center 20%",   extraStyle: {} },
  { src: "/life-5.jpg", alt: "Presenting",    objectPosition: "center center", extraStyle: {} },
  { src: "/life-6.jpg", alt: "Celebration",   objectPosition: "center 40%",   extraStyle: {} },
];

// Stacked default: all centered, fanned out with rotations
const stackedPositions = [
  { x: 12,  y: -18, rotate: 14,  zIndex: 1 },
  { x: -8,  y: -30, rotate: -8,  zIndex: 2 },
  { x: 20,  y:  -8, rotate: 20,  zIndex: 3 },
  { x: -18, y:  10, rotate: -14, zIndex: 4 },
  { x: 6,   y:  16, rotate: 6,   zIndex: 5 },
  { x: 0,   y:  0,  rotate: -2,  zIndex: 6 },
];

// Spread final: 2 rows × 3 cols collage
const spreadPositions = [
  { x: -310, y: -120, rotate: -2,  zIndex: 1 },
  { x: -80,  y: -130, rotate:  2,  zIndex: 2 },
  { x:  155, y: -110, rotate: -1,  zIndex: 3 },
  { x: -300, y:  80,  rotate:  1,  zIndex: 4 },
  { x: -70,  y:  90,  rotate: -2,  zIndex: 5 },
  { x:  160, y:  85,  rotate:  1,  zIndex: 6 },
];

// Photo sizes (w × h in px)
const sizes = [
  { w: 200, h: 200 },
  { w: 180, h: 220 },
  { w: 200, h: 190 },
  { w: 180, h: 220 },
  { w: 200, h: 190 },
  { w: 210, h: 200 },
];

export default function LifePhotos() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        height: "420px",
        marginTop: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {photos.map((photo, i) => {
        const from = stackedPositions[i];
        const to = spreadPositions[i];
        const size = sizes[i];
        return (
          <motion.div
            key={photo.src}
            initial={{ x: from.x, y: from.y, rotate: from.rotate, zIndex: from.zIndex }}
            animate={
              inView
                ? { x: to.x, y: to.y, rotate: to.rotate, zIndex: to.zIndex }
                : { x: from.x, y: from.y, rotate: from.rotate, zIndex: from.zIndex }
            }
            transition={{ type: "spring", stiffness: 120, damping: 20, mass: 0.8, delay: i * 0.04 }}
            style={{
              position: "absolute",
              width: size.w,
              height: size.h,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: photo.objectPosition, ...photo.extraStyle }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
