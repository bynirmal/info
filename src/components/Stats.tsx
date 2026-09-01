"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STATS = [
  { number: "10+", label: "PROJECTS" },
  { number: "5+", label: "HACKATHONS" },
  { number: "3+", label: "CERTIFICATIONS" },
  { number: "200+", label: "HOURS OF CODE" },
];

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 md:py-24 border-t border-b border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <span
                className="block text-4xl md:text-6xl lg:text-7xl font-black text-[#c8ff00] tracking-tighter leading-none"
                style={{
                  fontStretch: "condensed",
                  textShadow: "0 0 30px #c8ff0022",
                }}
              >
                {stat.number}
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#666] mt-2 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
