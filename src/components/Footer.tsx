"use client";

import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/bynirmal" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nirmal-kumar-a43a56392/" },
  { label: "Email", href: "mailto:nirmal@example.com" },
];

export default function Footer() {
  return (
    <footer className="relative py-12 md:py-16 border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Large name */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-[#111]"
            style={{ fontStretch: "condensed" }}
          >
            NIRMAL KUMAR
          </span>
        </motion.div>

        {/* Links + copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.25em] uppercase text-[#555] hover:text-[#c8ff00] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#444]">
              © 2026 Nirmal Kumar
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#333]">
              Built with Code + Creativity
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
