"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function IntroAnimation({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [done, setDone] = useState(false);

  const run = useCallback(async () => {
    await new Promise((r) => setTimeout(r, 1800));
    onComplete();
    setDone(true);
  }, [onComplete]);

  useEffect(() => {
    void run();
  }, [run]);

  if (done) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1A1A1A]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* Accent line expands then collapses */}
      <motion.div
        className="h-[1px] bg-[#B54747]"
        initial={{ width: 0 }}
        animate={{ width: ["0%", "40%", "40%", "0%"] }}
        transition={{
          duration: 1.6,
          times: [0, 0.4, 0.7, 1],
          ease: "easeInOut",
        }}
        style={{ boxShadow: "0 0 30px #B5474744" }}
      />

      {/* Initials flash briefly */}
      <motion.div
        className="absolute font-[family-name:var(--font-space-grotesk)] text-xl md:text-3xl tracking-[0.15em] uppercase font-bold text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 1.6, times: [0, 0.3, 0.7, 1] }}
      >
        NK
      </motion.div>
    </motion.div>
  );
}
