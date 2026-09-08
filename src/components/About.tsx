"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-40 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 md:gap-20">
          {/* Left: Heading + copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-[#1A1A1A] mb-3">
                About
              </h2>
              <div className="w-8 h-[2px] bg-[#B54747] mb-10 md:mb-14" />
            </motion.div>

            <motion.div
              className="space-y-5 text-[#1A1A1A] text-[0.95rem] md:text-base leading-[1.75] max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p>
                I&apos;m a B.Tech student who builds real software rather than
                just studying it. I develop portfolio and informational websites
                as a web developer, and I&apos;m currently learning Android
                development in Android Studio to expand into mobile.
              </p>
              <p>
                I placed as a semi-finalist in my very first hackathon. I keep an
                active GitHub with ongoing projects, and I&apos;m deliberately
                strengthening my DSA and problem-solving fundamentals alongside
                the building.
              </p>
              <p>
                I&apos;m self-taught by habit. I pick up new technologies by
                shipping real-world projects with them, not just following
                tutorials. My long-term aim is to become a software engineer and
                eventually build my own products.
              </p>
            </motion.div>
          </div>

          {/* Right: Quick facts */}
          <motion.div
            className="flex flex-col gap-0 border-t border-[#E5E0D8]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="py-4 border-b border-[#E5E0D8]">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#7A7A7A] block mb-1.5">
                Education
              </span>
              <span className="text-sm text-[#1A1A1A]">
                B.Tech CSE, 2025 — Present
              </span>
            </div>

            <div className="py-4 border-b border-[#E5E0D8]">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#7A7A7A] block mb-1.5">
                Based in
              </span>
              <span className="text-sm text-[#1A1A1A]">India</span>
            </div>

            <div className="py-4 border-b border-[#E5E0D8]">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#7A7A7A] block mb-1.5">
                Status
              </span>
              <span className="text-sm text-[#1A1A1A]">
                Open to opportunities
              </span>
            </div>

            <div className="py-4">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#7A7A7A] block mb-1.5">
                Approach
              </span>
              <span className="text-sm text-[#1A1A1A]">
                Ship, then learn from shipping
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
