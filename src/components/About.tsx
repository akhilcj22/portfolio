import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            About Me
          </h2>
          <Card className="p-8 animate-scale-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Computer Science graduate with hands-on experience in building full-stack applications. 
              Skilled in Python (Django/Flask), React, and Flutter, with strong knowledge of SQL/NoSQL databases, 
              REST APIs, and deployment tools. I'm passionate about creating efficient, scalable solutions and 
              continuously learning new technologies to solve real-world problems.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
