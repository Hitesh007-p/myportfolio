import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Smartphone, Palette, Navigation, Database, Lock, Zap, Rocket, GitBranch } from "lucide-react";

interface Skill {
  name: string;
  description: string;
  icon: React.ReactNode;
  proficiency: number;
  subSkills: string[];
}

const flutterSkills: Skill[] = [
  {
    name: "Core Flutter",
    description: "Fundamental Flutter development skills",
    icon: <Smartphone className="w-6 h-6 text-blue-400" />,
    proficiency: 80,
    subSkills: ["Dart Programming", "State Management", "API Integration","Responsive Layouts", "Custom Widgets"],
  },
  {
    name: "UI/UX Design",
    description: "Creating beautiful and responsive user interfaces",
    icon: <Palette className="w-6 h-6 text-blue-400" />,
    proficiency: 90,
    subSkills: ["Material Design", "Cupertino Widgets", "Custom Animations", "Responsive Layouts"],
  },
  {
    name: "Navigation",
    description: "Implementing complex navigation patterns",
    icon: <Navigation className="w-6 h-6 text-blue-400" />,
    proficiency: 80,
    subSkills: [ "Nested Routing", "Dynamic Routing"],
  },
  {
    name: "Advanced Concepts",
    description: "advanced Flutter techniques",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    proficiency: 60,
    subSkills: ["Custom Paint & Graphics", "Unit & Widget Testing"],
  },
  {
    name: "Data Management",
    description: "Efficient data handling and storage solutions",
    icon: <Database className="w-6 h-6 text-blue-400" />,
    proficiency: 85,
    subSkills: ["Firebase Realtime Database", "REST & GraphQL APIs"],
  },
  {
    name: "Authentication",
    description: "Secure user authentication implementation",
    icon: <Lock className="w-6 h-6 text-blue-400" />,
    proficiency: 87,
    subSkills: ["Firebase Auth", "OAuth", "Social Login", "Custom Auth Solutions"],
  },
  {
    name: "Third-Party Integrations",
    description: "Seamless integration with external services",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    proficiency: 89,
    subSkills: ["Firebase Services", "Payment Gateways", "Maps & Location Services", "Push Notifications"],
  },
  {
    name: "Deployment",
    description: "Publishing and maintaining Flutter apps",
    icon: <Rocket className="w-6 h-6 text-blue-400" />,
    proficiency: 90,
    subSkills: ["Google Play Store", "App Size Optimization"],
  },
  {
    name: "Version Control",
    description: "Efficient code management and collaboration",
    icon: <GitBranch className="w-6 h-6 text-blue-400" />,
    proficiency: 95,
    subSkills: ["Git", "GitHub", "GitLab"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
      <h2 className="text-3xl font-bold mb-12 gradient-text text-center">
          Flutter Development Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flutterSkills.map((skill, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl hover:bg-muted/20 transition-colors group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-muted-foreground/80 group-hover:text-blue-500 transition-colors">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {skill.subSkills.map((subSkill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-muted/40 text-foreground/80"
                  >
                    {subSkill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
