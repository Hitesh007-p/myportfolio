import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "ShetiMitra",
      description: "Shetimitra is a comprehensive platform designed for farmers, providing resources, tools, and support to help them optimize agricultural practices. It focuses on delivering user-friendly features tailored to the farming community.",
      details: "Built with Flutter & Dart for cross-platform mobile application development. This app helps users organize tasks with an intuitive interface.",
      screenshot: "/home.png",
      github: "https://github.com/Hitesh007-p/shetimitra",
    },
    {
      title: "Weather App",
      description: "Real-time weather application using OpenWeather API and Next.js.",
      details: "Displays weather forecasts for multiple locations with a dynamic and responsive design.",
      screenshot: "/screenshots/weather-app.png",
      github: "https://github.com/example/weather-app",
    },
    {
      title: "Blog Platform",
      description: "Full-stack blog platform with markdown support and authentication.",
      details: "Developed with Next.js, Prisma, and Tailwind CSS. Features user authentication and markdown-based blog creation.",
      screenshot: "/screenshots/blog-platform.png",
      github: "https://github.com/example/blog-platform",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application using Socket.io and React.",
      details: "Supports multi-room chat functionality and user presence indicators. Optimized for real-time interactions.",
      screenshot: "/screenshots/chat-application.png",
      github: "https://github.com/example/chat-application",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 gradient-text text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <Image
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                width={200}
                height={200}
                className="rounded-md mx-auto"
              />
              <CardContent>
                <p className="text-sm text-foreground/70">{project.details}</p>
              </CardContent>
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
  );
}
