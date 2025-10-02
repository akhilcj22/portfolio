import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Automated Legal Assistance and Advisory System (ALAAS)",
    description: "A comprehensive legal assistance platform that automates legal document analysis and provides advisory services using NLP and machine learning.",
    techStack: ["Flask", "Flutter", "Gmail API", "NLP", "Python"],
    github: "#",
  },
  {
    title: "Fake News Detection Using ML",
    description: "Machine learning model that detects fake news articles with 92% accuracy using TF-IDF vectorization and ensemble learning methods.",
    techStack: ["Flask", "Scikit-learn", "TF-IDF", "Python", "ML"],
    github: "#",
    accuracy: "92%",
  },
  {
    title: "Sentiment Analysis on Yelp Reviews",
    description: "Advanced sentiment analysis system using BERT transformer model to analyze customer reviews and provide business insights.",
    techStack: ["BERT", "PyTorch", "Flask", "REST API", "Python"],
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 flex flex-col animate-scale-in hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                {project.accuracy && (
                  <Badge variant="secondary" className="w-fit mb-3">
                    Accuracy: {project.accuracy}
                  </Badge>
                )}
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
