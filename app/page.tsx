import { NavBar } from "@/components/nav-bar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
// import { Work } from "@/components/work"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      {/* <Work /> */}
      <Projects />
      <Contact />
    </main>
  )
}

