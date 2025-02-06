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
    subSkills: ["Dart Programming", "State Management", "Responsive Layouts", "Custom Widgets"],
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
    subSkills: ["Navigator 1.0 & 2.0", "Nested Routing", "Dynamic Routing", "Deep Linking"],
  },
  {
    name: "Advanced Concepts",
    description: "Mastery of advanced Flutter techniques",
    icon: <Code className="w-6 h-6 text-blue-400" />,
    proficiency: 60,
    subSkills: ["Custom Paint & Graphics", "API Integration", "Unit & Widget Testing", "Performance Optimization"],
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
    proficiency: 93,
    subSkills: ["Google Play Store", "CI/CD", "App Size Optimization"],
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
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
          Flutter Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flutterSkills.map((skill, index) => (
            <Card
              key={index}
              className="h-full bg-background/50 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                  {skill.icon}
                  <span>{skill.name}</span>
                </CardTitle>
                <CardDescription>{skill.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-blue-400">Proficiency</span>
                    <span className="text-sm font-semibold text-blue-400">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2 bg-gray-700 rounded-full" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.subSkills.map((subSkill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition"
                    >
                      {subSkill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
