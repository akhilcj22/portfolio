import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "Java", "C", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["Django", "Flask", "React", "Flutter"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "SQLite", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "REST APIs", "JSON"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Render", "PythonAnywhere", "VS Code", "Android Studio", "Eclipse"],
  },
  {
    title: "Operating Systems",
    skills: ["Linux", "Windows"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-lg font-semibold mb-4 text-foreground">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
