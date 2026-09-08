"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PROJECTS = [
  {
    title: "SpiderVerse MCU",
    year: "2025",
    description:
      "A cinematic interactive web experience inspired by the Spider-Verse and MCU universe. Atmospheric rain effects, glassmorphism UI, WebGL shaders, and cinematic transitions.",
    tags: ["Next.js", "WebGL", "Framer Motion"],
    link: "https://archivos-bynirmal.vercel.app/",
    github: "https://github.com/bynirmal/ARCHIVE_OS---Multiverse-Archive",
  },
  {
    title: "Bala Aksharam",
    year: "2025",
    description:
      "An interactive educational concept designed to make learning engaging and creative for children, focused on interactive digital experiences.",
    tags: ["Web Design", "Education", "Interactive"],
    link: "https://bynirmal.github.io/bala-aksharam/",
    github: null,
  },
  {
    title: "Personal Portfolio",
    year: "2025",
    description:
      "A modern personal portfolio focused on development, design, and interactive experiences. Showcasing work with cinematic motion design and premium aesthetics.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "https://bynirmal.github.io/info/",
    github: "https://github.com/bynirmal/info",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 md:py-40 bg-[#F0EDE6]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-[#1A1A1A] mb-3">
            Projects
          </h2>
          <div className="w-8 h-[2px] bg-[#B54747] mb-14 md:mb-20" />
        </motion.div>

        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              className="border-t border-[#E5E0D8] py-8 md:py-10"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-bold tracking-[-0.02em] text-[#1A1A1A]">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.6rem] tracking-[0.1em] uppercase text-[#7A7A7A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-[0.875rem] text-[#7A7A7A] leading-relaxed max-w-2xl mb-4">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-5">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.7rem] tracking-[0.1em] uppercase text-[#B54747] font-medium hover:underline underline-offset-4 transition-all duration-200"
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.7rem] tracking-[0.1em] uppercase text-[#7A7A7A] hover:text-[#1A1A1A] transition-colors duration-200"
                  >
                    Source
                  </a>
                )}
              </div>
            </motion.article>
          ))}
          <div className="border-t border-[#E5E0D8]" />
        </div>
      </div>
    </section>
  );
}
