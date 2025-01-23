"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Twitter, Linkedin, GitlabIcon as GitlabLogo } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <footer id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-12 gradient-text text-center">Get in Touch</h2>
        <form className="space-y-6">
          <div>
            <Input placeholder="Name" />
          </div>
          <div>
            <Input type="email" placeholder="Email" />
          </div>
          <div>
            <Textarea placeholder="Message" className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90">
            Send Message
          </Button>
        </form>
        <div className="flex justify-center gap-6 mt-12">
          <Link href="https://github.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://twitter.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://linkedin.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://gitlab.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            <GitlabLogo className="h-6 w-6" />
            <span className="sr-only">GitLab</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

