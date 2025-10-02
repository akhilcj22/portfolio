import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Education
          </h2>
          <Card className="p-8 animate-slide-in-left">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  Bachelor of Technology in Computer Science and Engineering
                </h3>
                <p className="text-muted-foreground mb-2">
                  Vimal Jyothi Engineering College, Kerala, India
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">2021 – 2025</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="font-medium">CGPA: 7.0</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
