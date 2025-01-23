import { NavBar } from "@/components/nav-bar"
import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Skills } from "@/components/skills"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <NavBar />
      <Hero />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </main>
  )
}

