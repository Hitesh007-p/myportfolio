import Link from "next/link"

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Hitesh
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#skills" className="text-foreground/80 hover:text-foreground transition-colors">
              Skill
            </Link>
            <Link href="#work" className="text-foreground/80 hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="#projects" className="text-foreground/80 hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

