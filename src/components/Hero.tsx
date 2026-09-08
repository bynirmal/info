"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[#FAF7F2]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 md:pt-0 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center min-h-[70vh]">
          {/* Left: Name */}
          <div className="flex flex-col justify-center">
            <motion.h1
              className="font-[family-name:var(--font-space-grotesk)] text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-[0.88] tracking-[-0.04em] uppercase text-[#1A1A1A]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Nirmal
              <br />
              <span className="text-[#B54747]">Kumar</span>
            </motion.h1>
          </div>

          {/* Center: Vertical divider */}
          <motion.div
            className="hidden md:block w-[1px] bg-[#E5E0D8] self-stretch"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "top" }}
          />

          {/* Right: Metadata */}
          <motion.div
            className="flex flex-col justify-center gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div>
              <p className="text-[#7A7A7A] text-sm md:text-base leading-relaxed max-w-xs">
                B.Tech student. Web developer. Android learner.
                <br />
                Building real software.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#7A7A7A]">
                Location
              </span>
              <span className="text-sm text-[#1A1A1A]">India</span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#7A7A7A]">
                Focus
              </span>
              <span className="text-sm text-[#1A1A1A]">
                Full-stack, Android, DSA
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#7A7A7A]">
                Status
              </span>
              <span className="text-sm text-[#1A1A1A]">
                Open to opportunities
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 md:mt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-3 text-[#B54747] text-[0.65rem] tracking-[0.2em] uppercase font-medium hover:underline underline-offset-4 transition-all duration-200"
          >
            <span className="w-6 h-[1px] bg-[#B54747]" />
            View work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
