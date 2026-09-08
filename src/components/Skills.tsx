"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  "Tailwind CSS",
  "TypeScript",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 md:py-40 bg-[#FAF7F2]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-[#1A1A1A] mb-3">
            Skills
          </h2>
          <div className="w-8 h-[2px] bg-[#B54747] mb-14 md:mb-20" />
        </motion.div>

        <motion.div
          className="flex flex-wrap items-baseline gap-x-4 gap-y-3"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {SKILLS.map((skill, i) => (
            <span key={skill} className="flex items-baseline gap-4">
              <span className="text-sm md:text-base text-[#1A1A1A]">
                {skill}
              </span>
              {i < SKILLS.length - 1 && (
                <span className="text-[#B54747] text-xs">/</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
