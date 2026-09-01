"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  { num: "01", title: "FRONTEND DEVELOPMENT" },
  { num: "02", title: "BACKEND DEVELOPMENT" },
  { num: "03", title: "UI / UX DESIGN" },
  { num: "04", title: "ANDROID DEVELOPMENT" },
  { num: "05", title: "CREATIVE WEB EXPERIENCES" },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            WHAT I DO
          </h2>
          <div className="h-[2px] w-24 bg-[#c8ff00] mt-4" />
        </motion.div>

        {/* Service rows */}
        <div className="flex flex-col">
          {SERVICES.map((service, i) => (
            <motion.a
              key={service.num}
              href="#contact"
              className="group relative border-t border-[#1a1a1a] py-6 md:py-8 flex items-center justify-between transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background:
                  hoveredIndex === i
                    ? "linear-gradient(90deg, #c8ff0008 0%, transparent 50%)"
                    : "transparent",
                paddingLeft: hoveredIndex === i ? "2rem" : "0",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span
                  className={`text-sm md:text-base font-mono tabular-nums transition-colors duration-300 ${
                    hoveredIndex === i ? "text-[#c8ff00]" : "text-[#444]"
                  }`}
                >
                  {service.num}
                </span>
                <span
                  className={`text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter transition-all duration-300 ${
                    hoveredIndex === i ? "text-[#c8ff00] translate-x-2" : "text-white"
                  }`}
                  style={{ fontStretch: "condensed" }}
                >
                  {service.title}
                </span>
              </div>

              {/* Arrow */}
              <motion.div
                className="text-[#c8ff00]"
                initial={{ opacity: 0, x: -10 }}
                animate={
                  hoveredIndex === i
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -10 }
                }
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight size={20} />
              </motion.div>
            </motion.a>
          ))}
          <div className="border-t border-[#1a1a1a]" />
        </div>
      </div>
    </section>
  );
}
