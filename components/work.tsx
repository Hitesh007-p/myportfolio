import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"; // Removed CardContent
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Work() {
  const works = [
    {
      title: "E-commerce Platform",
      description: "Built a scalable e-commerce platform using Next.js and Stripe integration",
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Developed a real-time analytics dashboard for social media management",
      link: "#",
    },
    {
      title: "Healthcare Portal",
      description: "Created a secure healthcare portal with appointment scheduling system",
      link: "#",
    },
  ];

  return (
    <section id="work" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 gradient-text">Freelance Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <Card key={index} className="bg-secondary">
              <CardHeader>
                <CardTitle>{work.title}</CardTitle>
                <CardDescription>{work.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link" asChild>
                  <a href={work.link} className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                    View Case Study
                    <ExternalLink className="h-4 w-4" />
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
