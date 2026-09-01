"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-40 border-t border-[#1a1a1a]">
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
            EDUCATION
          </h2>
          <div className="h-[2px] w-24 bg-[#c8ff00] mt-4" />
        </motion.div>

        {/* Education card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 border border-[#1a1a1a] p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="md:col-span-8">
            <span className="text-xs tracking-[0.3em] uppercase text-[#c8ff00] mb-4 block">
              Currently Pursuing
            </span>
            <h3
              className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white mb-4"
              style={{ fontStretch: "condensed" }}
            >
              B.TECH — COMPUTER SCIENCE
              <br />
              ENGINEERING
            </h3>
            <p className="text-sm text-[#666] leading-relaxed max-w-2xl">
              Focused on software development, data structures, algorithms, web
              technologies, and modern development practices. Actively engaged
              in building real-world projects and participating in hackathons.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end">
            <div className="flex flex-col gap-2 md:text-right">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#555]">
                Degree
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#888]">
                B.Tech
              </span>
            </div>
            <div className="flex flex-col gap-2 mt-4 md:mt-0 md:text-right">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#555]">
                Field
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-[#888]">
                Computer Science Engineering
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
