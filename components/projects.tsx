import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Task Manager",
      description: "A React-based task management application with drag-and-drop functionality",
      github: "#",
    },
    {
      title: "Weather App",
      description: "Real-time weather application using OpenWeather API and Next.js",
      github: "#",
    },
    {
      title: "Blog Platform",
      description: "Full-stack blog platform with markdown support and authentication",
      github: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application using Socket.io and React",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 gradient-text">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" asChild>
                  <a href={project.github} className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

