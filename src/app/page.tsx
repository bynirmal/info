"use client";

import { useState, useCallback, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function usePrefersReducedMotion() {
  const mq =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;

  return useSyncExternalStore(
    (callback) => {
      if (!mq) return () => {};
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => mq?.matches ?? false,
    () => false,
  );
}

export default function Home() {
  const reducedMotion = usePrefersReducedMotion();
  const [sessionIntroShown, setSessionIntroShown] = useState(() => {
    if (typeof window === "undefined") return false;
    return !!sessionStorage.getItem("intro-shown");
  });

  const introComplete = reducedMotion || sessionIntroShown;

  const handleIntroComplete = useCallback(() => {
    setSessionIntroShown(true);
    sessionStorage.setItem("intro-shown", "1");
  }, []);

  return (
    <>
      <AnimatePresence>
        {!introComplete && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </>
  );
}
