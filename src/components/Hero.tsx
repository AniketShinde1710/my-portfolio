import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profileData } from "@/data/portfolio"
import professionalAvatar from "../assets/aniimag.jpg"

// If TypeScript complains about importing images, add the following declaration at the top of the file or in a global.d.ts file:
// declare module "*.jpg" { const value: string; export default value; }

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <img
                src={professionalAvatar}
                alt={profileData.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 animate-glow" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in">
            Hi, I'm{" "}
            <span className="gradient-text">{profileData.name}</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            {profileData.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {profileData.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              size="lg"
              className="hero-gradient text-white hover-scale hover-glow"
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="hover-scale"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button
              variant="ghost"
              size="icon"
              className="hover-scale hover-glow"
              asChild
            >
              <a
                href={profileData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover-scale hover-glow"
              asChild
            >
              <a
                href={profileData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover-scale hover-glow"
              asChild
            >
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Send Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}