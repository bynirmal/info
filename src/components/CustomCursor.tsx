"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isProjectHover, setIsProjectHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for mobile/touch device
    const checkMobile = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    },
    [isVisible]
  );

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener("mousemove", handleMouseMove);

    // Detect hovering over buttons/links
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      }
      if (target.closest(".project-card")) {
        setIsProjectHover(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(false);
      }
      if (target.closest(".project-card")) {
        setIsProjectHover(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [handleMouseMove, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 z-[200] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>

      {/* Cursor ring */}
      <motion.div
        className="fixed top-0 left-0 z-[199] pointer-events-none"
        animate={{
          x: position.x - (isProjectHover ? 32 : isHovering ? 24 : 16),
          y: position.y - (isProjectHover ? 32 : isHovering ? 24 : 16),
          width: isProjectHover ? 64 : isHovering ? 48 : 32,
          height: isProjectHover ? 64 : isHovering ? 48 : 32,
          borderColor: isProjectHover ? "#c8ff00" : isHovering ? "#c8ff00" : "#ffffff44",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          border: `1px solid ${
            isProjectHover ? "#c8ff00" : isHovering ? "#c8ff00" : "rgba(255,255,255,0.25)"
          }`,
          borderRadius: "50%",
        }}
      />

      {/* VIEW text on project hover */}
      {isProjectHover && (
        <motion.div
          className="fixed z-[201] pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: position.x - 16,
            y: position.y + 24,
          }}
          exit={{ opacity: 0 }}
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#c8ff00] font-bold">
            VIEW
          </span>
        </motion.div>
      )}
    </>
  );
}
