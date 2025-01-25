import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "ShetiMitra",
      description: "Shetimitra is a comprehensive platform designed for farmers, providing resources, tools, and support to help them optimize agricultural practices. It focuses on delivering user-friendly features tailored to the farming community.",
      details: "Built with Flutter & Dart for cross-platform mobile application development. This app helps users organize tasks with an intuitive interface.Displays weather forecasts for multiple locations with a dynamic and responsive design.",
      screenshot: "/home.png",
      github: "https://github.com/Hitesh007-p/shetimitra",
    },
    {
      title: "E-Commerce App",
      description: "This Flutter-based e-commerce app provides a seamless shopping experience for users, featuring a user-friendly interface, easy product navigation, and a secure checkout system. It supports a variety of products, customizable options, and integrates with payment gateways for a smooth transaction process.",
      details: "Displays weather forecasts for multiple locations with a dynamic and responsive design.",
      screenshot: "/screenshots/weather-app.png",
      github: "https://github.com/example/weather-app",
    },
    {
      title: "KML Real-Time Tracking App",
      description: "A mobile application built with Flutter, designed to provide real-time tracking of locations and generate KML (Keyhole Markup Language) files for geographic data visualization. The app allows users to track and visualize locations on a map in real-time, offering a seamless experience for monitoring movement.",
      details: "This app is ideal for use in logistics, delivery services, and personal tracking, providing real-time visibility of assets or people while allowing data to be easily shared and analyzed.",
      screenshot: "/travel.jpg",
      github: "https://github.com/Hitesh007-p/travel_tracker",
    },
    {
      title: "Login Pages",
      description: "The login page provides users with a simple, secure, and efficient way to access their accounts. Built using Flutter and Firebase Authentication, this page ensures a smooth user experience and high security.",
      details: "Flutter, Firebase Authentication, Dart",
      screenshot: "/login.jpg",
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
