"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid lines background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-[#c8ff00]" />
        <div className="absolute top-0 left-[40%] w-[1px] h-full bg-[#c8ff00]" />
        <div className="absolute top-0 left-[60%] w-[1px] h-full bg-[#c8ff00]" />
        <div className="absolute top-0 left-[80%] w-[1px] h-full bg-[#c8ff00]" />
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-[#c8ff00]" />
        <div className="absolute top-[60%] left-0 w-full h-[1px] bg-[#c8ff00]" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-24 md:pt-0"
        style={{ y, opacity }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center min-h-[80vh]">
          {/* Left: Text */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <motion.p
              className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#888] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.div
              className="leading-[0.82] mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1
                className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-white"
                style={{ fontStretch: "condensed" }}
              >
                NIRMAL
              </h1>
              <h1
                className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-[#c8ff00]"
                style={{
                  fontStretch: "condensed",
                  textShadow: "0 0 40px #c8ff0033",
                }}
              >
                KUMAR
              </h1>
            </motion.div>

            <motion.p
              className="text-sm md:text-base tracking-[0.2em] uppercase text-[#888] mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              B.Tech CSE • Developer • Designer
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-[#666] max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I build modern, interactive and meaningful digital experiences.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#c8ff00] text-[#0a0a0a] text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
              >
                Explore My Work
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 border border-[#333] text-white text-xs font-bold tracking-[0.2em] uppercase hover:border-[#c8ff00] hover:text-[#c8ff00] transition-all duration-300"
              >
                Get In Touch
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <div className="md:col-span-5 relative flex justify-center md:justify-end">
            <motion.div
              className="relative"
              style={{ y: photoY }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-[#1a1a1a]" />
              <div className="absolute -inset-8 border border-[#111]" />

              {/* Neon corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#c8ff00] opacity-60" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#c8ff00] opacity-60" />

              {/* Photo */}
              <div className="relative overflow-hidden w-[280px] h-[350px] md:w-[360px] md:h-[450px] lg:w-[420px] lg:h-[520px]">
                <img
                  src="/profile.jpg"
                  alt="Nirmal Kumar"
                  className="w-full h-full object-cover grayscale-[30%] contrast-[1.1] brightness-[0.9]"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#c8ff00]/5 via-transparent to-transparent" />
              </div>

              {/* Floating label */}
              <motion.div
                className="absolute -bottom-4 -left-4 bg-[#0a0a0a] border border-[#1a1a1a] px-4 py-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#c8ff00]">
                  Based in India
                </span>
              </motion.div>

              {/* Digital fragments */}
              {Array.from({ length: 6 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#c8ff00]/40 rounded-full"
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    delay: Math.random() * 3,
                    repeat: Infinity,
                  }}
                  style={{
                    right: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#c8ff00] to-transparent" />
        <span className="text-[9px] tracking-[0.4em] uppercase text-[#555]">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
