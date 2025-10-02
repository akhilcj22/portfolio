import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Photo Section */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src="/placeholder.svg" 
                alt="Akhil C J - Python Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Hi, I'm <span className="text-primary">Akhil C J</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold mb-6 text-muted-foreground">
              Python Full Stack Developer
            </h2>
            <p className="text-base md:text-xl mb-8 text-muted-foreground">
              Passionate about building web & mobile applications with Python, React, and Flutter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="gap-2" onClick={scrollToContact}>
                <Mail className="h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
