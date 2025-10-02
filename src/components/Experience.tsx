import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Jr. Python Intern",
    company: "Knovista Technologies Pvt Ltd",
    location: "Kerala, India",
    period: "June 2025 – Present",
    responsibilities: [
      "Training in Django/Flask + React",
      "Worked on REST APIs, SQL databases, frontend-backend integration",
    ],
  },
  {
    title: "Freelance Python Developer",
    company: "Ash Infomatics",
    location: "Remote",
    period: "June 2025 – Present",
    responsibilities: [
      "Delivered Django modules",
      "Designed & integrated REST APIs with PostgreSQL",
      "Improved applications via bug fixes & new features",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <Badge variant="secondary" className="w-fit mt-2 md:mt-0">{exp.period}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {exp.company} • {exp.location}
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
