import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "ShetiMitra",
      description: "ShetiMitra is a smart agriculture mobile application designed to empower farmers with real-time insights, essential tools, and digital services to enhance productivity. The app provides weather updates, market prices, AI-powered plant disease detection, equipment rentals, and access to government schemes.",
      tech: "Flutter • Firebase • REST API • AI/ML • Google Maps API.",
      github: "https://github.com/Hitesh007-p/shetimitra",
    },
    {
      title: "E-Commerce App",
      description: "A Flutter-based e-commerce app offering a seamless shopping experience with user-friendly navigation, product browsing, cart management, and secure checkout.",
      tech: "Flutter • Dart • Firebase • REST API",
      github: "https://github.com/Hitesh007-p/vegitable_delivery_apk",
    },
    {
      title: "KML Tracking",
      description: "A mobile application for real-time location tracking that generates KML files for geographic data visualization and mapping.",
      tech: "Flutter • Dart • Location Service • Google Maps API • GPS Tracking ",
      github: "https://github.com/Hitesh007-p/travel_tracker",
    },
    {
      title: "Land Measurement App",
      description: "A mobile application designed to help farmers accurately measure their land using GPS technology. The app allows users to mark boundary points, calculate total land area, and save measurements for future reference. It provides an easy-to-use interface tailored for agricultural needs.",
      tech: "Flutter • Dart • Google Maps API • GPS Tracking ",
      github: "https://github.com/example/chat-application",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
      <h2 className="text-3xl font-bold mb-12 gradient-text text-center">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group p-6 rounded-lg hover:bg-muted/5 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 group-hover:text-foreground/90 transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground/80">
                    {project.tech.split(" • ").map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 py-1 rounded-md bg-muted/30 group-hover:bg-muted/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
