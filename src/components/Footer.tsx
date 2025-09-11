import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profileData } from "@/data/portfolio"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand/Name */}
            <div>
              <h3 className="text-xl font-bold gradient-text mb-4">
                {profileData.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {profileData.title} passionate about creating exceptional digital experiences 
                through clean code and innovative solutions.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {[
                  { href: "#about", label: "About" },
                  { href: "#skills", label: "Skills" },
                  { href: "#projects", label: "Projects" },
                  { href: "#contact", label: "Contact" }
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-muted-foreground">{profileData.location}</p>
                <a
                  href={`mailto:${profileData.email}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {profileData.email}
                </a>
              </div>
              
              {/* Social links */}
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover-glow"
                >
                  <a
                    href={profileData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover-glow"
                >
                  <a
                    href={profileData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover-glow"
                >
                  <a
                    href={`mailto:${profileData.email}`}
                    aria-label="Send Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} {profileData.name}. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Built with <Heart className="h-4 w-4 text-red-500" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}