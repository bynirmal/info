"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    num: "01",
    title: "SPIDERVERSE MCU",
    description:
      "A cinematic interactive web experience inspired by the Spider-Verse and MCU universe. Featuring atmospheric rain effects, glassmorphism UI, WebGL shaders and cinematic transitions.",
    tags: ["Next.js", "WebGL", "Tailwind CSS", "Framer Motion", "MD3"],
    link: "https://archivos-bynirmal.vercel.app/",
    github: "https://github.com/bynirmal/ARCHIVE_OS---Multiverse-Archive",
  },
  {
    num: "02",
    title: "BALA AKSHARAM",
    description:
      "An educational interactive concept designed to make learning engaging and fun for children. Focused on creative education through interactive digital experiences.",
    tags: ["Web Design", "Education", "Interactive UI"],
    link: "https://bynirmal.github.io/bala-aksharam/",
    github: "#",
  },
  {
    num: "03",
    title: "MEDISPHERE",
    description:
      "A healthcare-focused digital solution designed around prescription and medical information management. Streamlining healthcare data with modern technology.",
    tags: ["Healthcare", "Full Stack", "UI/UX"],
    link: "#",
    github: "#",
  },
  {
    num: "04",
    title: "PERSONAL PORTFOLIO",
    description:
      "A modern personal portfolio focused on development, design and interactive experiences. Showcasing work with cinematic motion design and premium aesthetics.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "https://bynirmal.github.io/info/",
    github: "https://github.com/bynirmal/info",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-40 border-t border-[#1a1a1a]">
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
            SELECTED
            <br />
            <span className="text-[#c8ff00]" style={{ textShadow: "0 0 30px #c8ff0022" }}>
              WORK
            </span>
          </h2>
          <div className="h-[2px] w-24 bg-[#c8ff00] mt-4" />
        </motion.div>

        {/* Projects list */}
        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.num}
              className="group border-t border-[#1a1a1a] py-8 md:py-12"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span
                    className={`text-4xl md:text-5xl font-black transition-colors duration-300 ${
                      hoveredIndex === i ? "text-[#c8ff00]" : "text-[#222]"
                    }`}
                    style={{ fontStretch: "condensed" }}
                  >
                    {project.num}
                  </span>
                </div>

                {/* Title + Description */}
                <div className="md:col-span-6">
                  <h3
                    className={`text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4 transition-all duration-300 ${
                      hoveredIndex === i
                        ? "text-white translate-x-2"
                        : "text-[#ccc]"
                    }`}
                    style={{ fontStretch: "condensed" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#666] leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>

                {/* Tags + Link */}
                <div className="md:col-span-5 flex flex-col gap-4 items-start md:items-end">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-[0.15em] uppercase px-3 py-1 border border-[#222] text-[#666]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-2">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase text-[#888] hover:text-[#c8ff00] transition-colors duration-300"
                      >
                        GitHub
                        <ArrowUpRight
                          size={12}
                          className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        />
                      </a>
                    )}
                    {project.link && project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase text-[#888] hover:text-[#c8ff00] transition-colors duration-300"
                      >
                        View Project
                        <ArrowUpRight
                          size={12}
                          className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover reveal bar */}
              <motion.div
                className="h-[1px] bg-[#c8ff00] mt-6"
                initial={{ width: "0%" }}
                animate={{
                  width: hoveredIndex === i ? "100%" : "0%",
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
          <div className="border-t border-[#1a1a1a]" />
        </div>
      </div>
    </section>
  );
}
