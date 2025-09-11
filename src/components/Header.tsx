import { Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { profileData } from "@/data/portfolio"

export function Header() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <a href="#" className="text-xl font-bold gradient-text">
            {profileData.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300 hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
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
                <Github className="h-5 w-5" />
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
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="sm"
              asChild
              className="hidden sm:inline-flex hover-glow"
            >
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-center space-x-6 mt-4 pt-4 border-t border-border">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}