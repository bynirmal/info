"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAME_STAGES = [
  "N",
  "NI",
  "NIR",
  "NIRM",
  "NIRMA",
  "NIRMAL",
  "NIRMAL K",
  "NIRMAL KU",
  "NIRMAL KUM",
  "NIRMAL KUMA",
  "NIRMAL KUMAR",
];

export default function IntroAnimation({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [stage, setStage] = useState<"black" | "line" | "name" | "subtitle" | "exit">("black");
  const [nameIndex, setNameIndex] = useState(0);
  const [showFinalName, setShowFinalName] = useState(false);

  const runIntro = useCallback(async () => {
    // Scene 1: Black screen
    await delay(800);

    // Scene 2: Neon line sweep
    setStage("line");
    await delay(1200);

    // Scene 3: Name reveal
    setStage("name");
    for (let i = 0; i < NAME_STAGES.length; i++) {
      setNameIndex(i);
      await delay(80);
    }

    await delay(300);
    setShowFinalName(true);
    await delay(1500);

    // Subtitle
    setStage("subtitle");
    await delay(2000);

    // Exit
    setStage("exit");
    await delay(800);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    // Check if intro was already shown this session
    if (sessionStorage.getItem("intro-shown")) {
      onComplete();
      return;
    }
    runIntro();
  }, [onComplete, runIntro]);

  // Allow skipping
  const handleSkip = () => {
    sessionStorage.setItem("intro-shown", "1");
    onComplete();
  };

  if (stage === "exit") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 z-[110] text-xs tracking-[0.3em] uppercase text-[#555] hover:text-[#c8ff00] transition-colors duration-300"
      >
        Skip ↵
      </button>

      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Floating particles */}
      {(stage === "black" || stage === "line") &&
        Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-[#c8ff00] rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -80 - Math.random() * 120],
              x: [0, (Math.random() - 0.5) * 60],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${40 + Math.random() * 20}%`,
            }}
          />
        ))}

      {/* Neon line sweep */}
      <AnimatePresence>
        {stage === "line" && (
          <motion.div
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#c8ff00] to-transparent"
            initial={{ width: "0%", opacity: 0 }}
            animate={{
              width: ["0%", "60%", "60%", "0%"],
              opacity: [0, 1, 1, 0],
              left: ["20%", "20%", "20%", "20%"],
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              boxShadow: "0 0 20px #c8ff00, 0 0 40px #c8ff0055, 0 0 80px #c8ff0022",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Name reveal - typing effect */}
      {stage === "name" && !showFinalName && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            className="font-[family-name:var(--font-geist-sans)] text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tight text-white"
            style={{ fontStretch: "condensed" }}
          >
            {NAME_STAGES[nameIndex]}
            <motion.span
              className="inline-block w-[3px] h-[0.8em] bg-[#c8ff00] ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}

      {/* Final name with glitch effect */}
      {showFinalName && (
        <motion.div
          className="text-center relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main text */}
          <div className="relative">
            <motion.div
              className="font-[family-name:var(--font-geist-sans)] text-5xl md:text-7xl lg:text-[9rem] font-black uppercase leading-[0.85] tracking-tighter"
              animate={{
                scaleX: [0.85, 1.02, 1],
                scaleY: [1.15, 0.98, 1],
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-white">NIRMAL</span>
              <br />
              <span
                className="text-[#c8ff00]"
                style={{
                  textShadow: "0 0 30px #c8ff0044, 0 0 60px #c8ff0022",
                }}
              >
                KUMAR
              </span>
            </motion.div>

            {/* Glitch layer 1 */}
            <motion.div
              className="absolute inset-0 font-[family-name:var(--font-geist-sans)] text-5xl md:text-7xl lg:text-[9rem] font-black uppercase leading-[0.85] tracking-tighter text-[#c8ff00] mix-blend-screen pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.7, 0, 0.3, 0] }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{ animation: "glitch-1 0.4s linear" }}
            >
              <span className="text-[#c8ff00]">NIRMAL</span>
              <br />
              <span className="text-white">KUMAR</span>
            </motion.div>

            {/* Glitch layer 2 */}
            <motion.div
              className="absolute inset-0 font-[family-name:var(--font-geist-sans)] text-5xl md:text-7xl lg:text-[9rem] font-black uppercase leading-[0.85] tracking-tighter text-white mix-blend-screen pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0, 0.2, 0] }}
              transition={{ duration: 0.4, delay: 0.15 }}
              style={{ animation: "glitch-2 0.4s linear" }}
            >
              <span className="text-white">NIRMAL</span>
              <br />
              <span className="text-[#c8ff00]">KUMAR</span>
            </motion.div>
          </div>

          {/* Subtitle appears after name settles */}
          {stage === "subtitle" && (
            <motion.div
              className="mt-8 md:mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-sm md:text-base tracking-[0.4em] uppercase text-[#888] mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Computer Science Engineer
              </motion.p>
              <motion.p
                className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#555]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Developer • Designer • Creative Technologist
              </motion.p>
              <motion.div
                className="mt-6 mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#c8ff00] to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
