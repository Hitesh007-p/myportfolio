import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";


export function Experience() {
  return (
    <section id=" " className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-16 gradient-text text-center hover:scale-105 transition-transform">
          🚀 Experience as Intern
        </h2>

        <div className="group/card relative">
          <Card className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-primary/20 hover:border-primary/30">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />

            <CardHeader className="pb-3">
              <CardTitle className="text-2xl font-extrabold flex items-center gap-2">
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Flutter Developer Intern
                </span>
                <span className="text-muted-foreground/80 text-lg">@ MR Network web solution</span>
              </CardTitle>
              <CardDescription className="text-sm mt-2 font-medium text-foreground/80">
                February 2024 - February 2025 • Full-time • Remote
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-4">
                {[
                  "Developed and maintained Flutter applications for Android",
                  "Built UI components and integrated RESTful APIs",
                  "Integrated RESTful APIs and Firebase services",
                  "Collaborated with the development team to optimize app performance",
                  "Debugged and tested functionalities for a seamless user experience"
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="shrink-0 text-primary mt-1">▹</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-muted-foreground/90 hover:text-foreground/90 transition-colors duration-200 leading-relaxed mt-6 transform hover:scale-[1.02] transition-transform duration-300">
                This journey has been a great learning experience, enhancing my skills in mobile app development. Looking forward to more exciting opportunities ahead! 🚀
              </p>

              <div className="mt-8 flex justify-end">
                <a
                  href="Internship Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl hover:rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 transform-gpu origin-center"
                >
                  <span className="bg-white/10 p-1.5 rounded-lg">
                    📜
                  </span>
                  <span className="font-semibold">View Certificate</span>
                  <span className="ml-2 opacity-0 group-hover/button:opacity-100 transition-opacity">
                    ↗
                  </span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
