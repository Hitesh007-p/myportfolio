"use client";

import { Mail, Phone, Github, Twitter, Linkedin } from "lucide-react";

interface ContactInfo {
  icon: typeof Mail;
  text: string;
  href: string;
}

export function Contact() {
  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      text: "hiteshpatil4000@gmail.com",
      href: "mailto:hiteshpatil4000@gmail.com",
    },
    {
      icon: Phone,
      text: "+91 9921134796",
      href: "tel:+9921134796",
    },
    {
      icon: Github,
      text: "github.com/Hitesh007-p",
      href: "https://github.com/Hitesh007-p",
    },
    {
      icon: Linkedin,
      text: "linkedin.com/in/Hitesh Patil",
      href: "https://www.linkedin.com/in/hitesh-patil-12a272249/",
    },
    {
      icon: Twitter,
      text: "twitter.com/Hitesh Patil",
      href: "https://x.com/x__hitesh",
    },
  ];

  return (
    <div
      id="contact" // Added the id for this section
      className="min-h-screen bg-[#0d1117] flex flex-col items-center justify-center p-4"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12 gradient-text text-center">
        Contact Information
      </h2>
  
      <div className="w-full max-w-2xl space-y-4">
        {contactInfo.map((info, index) => (
          <a
            key={index}
            href={info.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-[#161b22] rounded-lg hover:bg-[#1c2128] transition-colors"
          >
            <info.icon className="h-8 w-8 text-[#58a6ff]" />
            <span className="text-white text-lg">{info.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
}  
