"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LINKS = [
  {
    label: "Email",
    href: "mailto:nirmal@example.com",
    note: "[PLACEHOLDER — replace with your email]",
  },
  {
    label: "GitHub",
    href: "https://github.com/bynirmal",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nirmal-kumar-a43a56392/",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-40 bg-[#F0EDE6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-[-0.04em] leading-[0.95] text-[#1A1A1A] mb-6">
            Let&apos;s work
            <br />
            <span className="text-[#B54747]">together.</span>
          </h2>
        </motion.div>

        <motion.p
          className="text-[#7A7A7A] text-[0.95rem] md:text-base leading-relaxed max-w-md mb-10"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I&apos;m open to collaborations, freelance work, and new
          opportunities. Reach out anytime.
        </motion.p>

        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline gap-3 text-[#1A1A1A] hover:text-[#B54747] transition-colors duration-200"
            >
              <span className="w-5 h-[1px] bg-[#E5E0D8] group-hover:bg-[#B54747] group-hover:w-8 transition-all duration-200" />
              <span className="text-sm tracking-wide">{link.label}</span>
              {link.note && (
                <span className="text-[0.6rem] text-[#B54747] opacity-70 hidden md:inline">
                  {link.note}
                </span>
              )}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
