"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TIMELINE = [
  {
    title: "B.Tech — Computer Science Engineering",
    period: "2023 — Present",
    description:
      "Pursuing B.Tech in Computer Science Engineering with focus on software development and modern technologies.",
  },
  {
    title: "Project Development",
    period: "2024 — Present",
    description:
      "Building real-world projects including web applications, Android apps, and interactive experiences.",
  },
  {
    title: "Hackathons",
    period: "2024 — Present",
    description:
      "Actively participating in hackathons, developing innovative solutions under time pressure.",
  },
  {
    title: "Technical Learning",
    period: "2023 — Present",
    description:
      "Continuously learning modern frameworks, tools, and technologies across the development stack.",
  },
  {
    title: "Certifications",
    period: "2024 — Present",
    description:
      "Earning certifications in various technologies to strengthen technical foundations.",
  },
];

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" ref={ref} className="relative py-24 md:py-40 border-t border-[#1a1a1a]">
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
            MY
            <br />
            <span className="text-[#c8ff00]" style={{ textShadow: "0 0 30px #c8ff0022" }}>
              JOURNEY
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-[#c8ff00] mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-8">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#1a1a1a]" />

          <div className="flex flex-col gap-8 md:gap-12">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.title}
                className="relative pl-8 md:pl-12"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              >
                {/* Dot */}
                <div className="absolute left-0 top-1 w-2 h-2 -translate-x-[3.5px] bg-[#c8ff00] rounded-full" />

                <div className="flex flex-col md:flex-row md:items-baseline md:gap-6 mb-2">
                  <h3
                    className="text-xl md:text-2xl font-black uppercase tracking-tight text-white"
                    style={{ fontStretch: "condensed" }}
                  >
                    {item.title}
                  </h3>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#555] font-mono">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-[#666] leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
