import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Gitlab as GitlabLogo, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16">
      {/* Profile Image */}
      <Image
        src="/me.jpg"
        alt="Hitesh Patil"
        width={150}
        height={150}
        className="rounded-full mx-auto hover:scale-105 transition-transform duration-300"
      />

      {/* Title and Description */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
        <span className="gradient-text hover:animate-pulse">Hitesh Patil</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-blue-400 mb-6 hover:text-blue-300 transition-colors duration-300">
        Flutter & Dart Developer
      </h2>
      <p className="max-w-2xl text-lg text-foreground/80 mb-8 mx-auto hover:text-foreground hover:translate-y-1 transition-all duration-300">
        Crafting seamless cross-platform mobile experiences with Flutter.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <a href="/hitesh.pdf" target="_blank" rel="noopener noreferrer" download>
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 hover:scale-105 transition-transform duration-300">
            View Resume
          </Button>
        </a>
        <Button size="lg" variant="outline" className="border-blue-500 hover:bg-blue-500/10 hover:border-blue-400 hover:text-blue-300 hover:scale-105 transition-all duration-300">
          <Link href="#contact">
            Contact Me
          </Link>
        </Button>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-8 mb-24">
        <SocialLink href="https://github.com/Hitesh007-p" icon={<Github className="hover:scale-125 transition-transform duration-300" />} label="GitHub" />
        <SocialLink href="https://x.com/x__hitesh" icon={<Twitter className="hover:scale-125 transition-transform duration-300" />} label="Twitter" />
        <SocialLink href="https://www.linkedin.com/in/hitesh-patil-12a272249/" icon={<Linkedin className="hover:scale-125 transition-transform duration-300" />} label="LinkedIn" />
        <SocialLink href="https://gitlab.com/hiteshpatil4000" icon={<GitlabLogo className="hover:scale-125 transition-transform duration-300" />} label="GitLab" />
      </div>

      {/* Explore Work Link */}
      <Link
        href="#projects"
        className="group text-pink-500 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2"
      >
        Explore my work
        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
      </Link>
    </section>
  );
}

// Helper component for social links
type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <Link
    href={href}
    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center"
    aria-label={label}
  >
    {icon}
    <span className="sr-only">{label}</span>
  </Link>
);
