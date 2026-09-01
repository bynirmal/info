"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const SKILLS = [
  "C",
  "C++",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "Git",
  "GitHub",
  "Android Studio",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" ref={ref} className="relative py-24 md:py-40 border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Heading */}
        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-white"
            style={{ fontStretch: "condensed" }}
          >
            SKILLS
          </h2>
          <div className="h-[2px] w-24 bg-[#c8ff00] mt-4" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill}
              className="group relative border border-[#1a1a1a] p-4 md:p-6 flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 + i * 0.04, duration: 0.5 }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              style={{
                borderColor: hoveredSkill === skill ? "#c8ff0044" : "#1a1a1a",
                background:
                  hoveredSkill === skill
                    ? "linear-gradient(135deg, #c8ff0008, transparent)"
                    : "transparent",
                transition: "all 0.3s ease",
              }}
            >
              <span
                className={`text-sm md:text-base font-semibold tracking-[0.15em] uppercase transition-all duration-300 ${
                  hoveredSkill === skill ? "text-[#c8ff00] scale-110" : "text-[#888]"
                }`}
              >
                {skill}
              </span>

              {/* Corner accent on hover */}
              {hoveredSkill === skill && (
                <motion.div
                  className="absolute top-0 right-0 w-2 h-2 bg-[#c8ff00]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
