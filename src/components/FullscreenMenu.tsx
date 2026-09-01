"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MENU_ITEMS = [
  { num: "01", label: "HOME", href: "#home" },
  { num: "02", label: "ABOUT", href: "#about" },
  { num: "03", label: "PROJECTS", href: "#projects" },
  { num: "04", label: "SKILLS", href: "#skills" },
  { num: "05", label: "EXPERIENCE", href: "#journey" },
  { num: "06", label: "CONTACT", href: "#contact" },
];

export default function FullscreenMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] bg-[#050505] flex flex-col justify-center px-8 md:px-16"
          initial={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 3rem) 2rem)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 3rem) 2rem)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <nav className="flex flex-col gap-2 md:gap-4">
            {MENU_ITEMS.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="group relative flex items-baseline gap-4 md:gap-8"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.2 + i * 0.07,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="text-xs md:text-sm text-[#555] font-mono tabular-nums">
                  {item.num}
                </span>
                <span
                  className={`text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter transition-all duration-300 ${
                    hoveredIndex === i
                      ? "text-[#c8ff00] translate-x-2 md:translate-x-4"
                      : "text-white"
                  }`}
                  style={{ fontStretch: "condensed" }}
                >
                  {item.label}
                </span>
                {/* Arrow on hover */}
                <motion.span
                  className="text-[#c8ff00] text-xl md:text-3xl"
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    hoveredIndex === i
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.2 }}
                >
                  ↗
                </motion.span>
              </motion.a>
            ))}
          </nav>

          {/* Decorative line */}
          <motion.div
            className="absolute bottom-12 left-8 md:left-16 right-8 md:right-16 h-[1px] bg-[#1a1a1a]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
          <motion.p
            className="absolute bottom-6 left-8 md:left-16 text-[10px] tracking-[0.3em] uppercase text-[#444]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            © 2026 Nirmal Kumar
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
