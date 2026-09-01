"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    if (mq.matches) {
      sessionStorage.setItem("intro-shown", "1");
      setIntroComplete(true);
    }
  }, []);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
    sessionStorage.setItem("intro-shown", "1");
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      {/* Custom cursor */}
      <CustomCursor />

      {/* Intro animation */}
      <AnimatePresence>
        {!introComplete && !reducedMotion && (
          <IntroAnimation onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Navbar visible={introComplete} />

        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Journey />
          <Education />
          <Contact />
        </main>

        <Footer />
      </motion.div>
    </div>
  );
}
