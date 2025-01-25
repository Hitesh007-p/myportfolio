import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
 

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 gradient-text text-center">
          Internship Experience
        </h2>
         
          <Card>
            <CardHeader>
              <CardTitle>Flutter Developer Intern</CardTitle>
              <CardDescription>
              MR Network Web Solutions | August 2024 - Present
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Developed and maintained multiple Flutter applications for
                  Android platforms.
                </li>
                <li>
                  Collaborated with the design team to implement responsive and
                  intuitive user interfaces.
                </li>
                <li>
                  Integrated RESTful APIs and Firebase services for real-time
                  data synchronization.
                </li>
                <li>
                  Participated in code reviews and implemented best practices
                  for clean, maintainable code.
                </li>
                <li>
                  Assisted in troubleshooting and resolving bugs, improving
                  overall app performance.
                </li>
              </ul>
            </CardContent>
          </Card>
        
      </div>
    </section>
  );
}
