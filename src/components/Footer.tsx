"use client";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/bynirmal" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nirmal-kumar-a43a56392/" },
  { label: "Email", href: "mailto:nirmal@example.com" },
];

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-[#FAF7F2] border-t border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Ghosted name */}
        <div className="mb-8 md:mb-12">
          <span className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.03em] uppercase text-[#E5E0D8] select-none">
            Nirmal Kumar
          </span>
        </div>

        {/* Links + copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.65rem] tracking-[0.1em] uppercase text-[#7A7A7A] hover:text-[#B54747] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <span className="text-[0.6rem] tracking-[0.1em] uppercase text-[#7A7A7A]">
            &copy; {new Date().getFullYear()} Nirmal Kumar
          </span>
        </div>
      </div>
    </footer>
  );
}
