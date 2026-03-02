import Image from "next/image";
import { Twitter, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "Twitter / X",
    href: "https://x.com/fanar_ai",
    icon: Twitter,
  },
  {
    label: "GitHub",
    href: "https://github.com/fanar-ai",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/fanar-ai",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        {/* Left: Logo + Copyright */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/fanar-logo-light.png"
            alt="Fanar"
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Fanar
          </span>
        </div>

        {/* Right: Socials + Email */}
        <div className="flex items-center gap-5">
          <a
            href="mailto:hello@fanar.ai"
            className="text-sm text-white/40 transition-colors hover:text-white"
          >
            <Mail className="inline-block h-4 w-4 mr-1.5 -mt-0.5" />
            hello@fanar.ai
          </a>
          <span className="h-4 w-px bg-white/10" />
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-white/60 transition-colors hover:text-white"
            >
              <link.icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
