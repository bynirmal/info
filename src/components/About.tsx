"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const METADATA = [
  "BASED IN INDIA",
  "COMPUTER SCIENCE ENGINEERING",
  "AVAILABLE FOR COLLABORATION",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-40">
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
            ABOUT
          </h2>
          <div className="h-[2px] w-24 bg-[#c8ff00] mt-4" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left: Main text */}
          <div className="md:col-span-7 md:col-start-1">
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-[#ccc] leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I&apos;m <span className="text-white font-semibold">Nirmal Kumar</span>, a
              Computer Science Engineering student passionate about software
              development, modern web experiences and creative technology.
            </motion.p>

            <motion.div
              className="space-y-4 text-[#888] leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p>
                From building interactive web applications to developing Android
                apps, I love turning ideas into reality through code. I work
                across the stack — crafting responsive frontends, designing
                intuitive user interfaces, and building robust backend systems.
              </p>
              <p>
                I&apos;m experienced with modern frameworks like React, Next.js, and
                Node.js, and I&apos;m always exploring new technologies. I actively
                participate in hackathons, contribute to open-source projects,
                and continuously sharpen my skills through real-world projects
                and certifications.
              </p>
              <p>
                Whether it&apos;s UI/UX design, full-stack development, or creative
                web experiences — I&apos;m driven by the desire to build things that
                matter.
              </p>
            </motion.div>
          </div>

          {/* Right: Metadata */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end">
            {METADATA.map((item, i) => (
              <motion.div
                key={item}
                className="border-t border-[#1a1a1a] py-4"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              >
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#666]">
                  {item}
                </span>
              </motion.div>
            ))}

            {/* Decorative element */}
            <motion.div
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="h-[1px] flex-1 bg-[#1a1a1a]" />
              <span className="text-[10px] tracking-[0.2em] text-[#444]">
                EST. 2024
              </span>
              <div className="h-[1px] flex-1 bg-[#1a1a1a]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
