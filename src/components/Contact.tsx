"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Send } from "lucide-react";

const LINKS = [
  { label: "EMAIL ME", href: "mailto:nirmal@example.com" },
  {
    label: "GITHUB",
    href: "https://github.com/bynirmal",
  },
  {
    label: "LINKEDIN",
    href: "https://linkedin.com/in/nirmal-kumar",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-40 border-t border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Huge CTA heading */}
        <motion.div
          className="mb-12 md:mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-7xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-tighter leading-[0.85] text-white"
            style={{ fontStretch: "condensed" }}
          >
            LET&apos;S
            <br />
            BUILD
            <br />
            <span
              className="text-[#c8ff00]"
              style={{ textShadow: "0 0 40px #c8ff0033, 0 0 80px #c8ff0011" }}
            >
              SOMETHING.
            </span>
          </h2>
        </motion.div>

        {/* Subtext + Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <motion.p
              className="text-base md:text-lg text-[#888] mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Have an idea, opportunity or collaboration in mind? Let&apos;s
              connect.
            </motion.p>

            {/* Links */}
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-[#888] hover:text-[#c8ff00] transition-colors duration-300"
                  onMouseEnter={() => setHoveredLink(i)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span
                    className={`inline-block w-8 h-[1px] transition-all duration-300 ${
                      hoveredLink === i ? "bg-[#c8ff00] w-12" : "bg-[#333]"
                    }`}
                  />
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Contact form */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                // Form submission logic
              }}
            >
              <div>
                <label className="text-[10px] tracking-[0.3em] uppercase text-[#555] block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-[#222] text-white text-sm py-3 px-0 outline-none focus:border-[#c8ff00] transition-colors duration-300 placeholder:text-[#333]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.3em] uppercase text-[#555] block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-[#222] text-white text-sm py-3 px-0 outline-none focus:border-[#c8ff00] transition-colors duration-300 placeholder:text-[#333]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.3em] uppercase text-[#555] block mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-[#222] text-white text-sm py-3 px-0 outline-none focus:border-[#c8ff00] transition-colors duration-300 placeholder:text-[#333] resize-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="group mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[#c8ff00] text-[#0a0a0a] text-xs font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300 self-start"
              >
                Send Message
                <Send
                  size={12}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
