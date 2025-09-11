import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projectsData } from "@/data/portfolio"
import { Github, ExternalLink, CheckCircle } from "lucide-react"

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of recent projects that demonstrate my skills and passion for creating 
              impactful digital solutions.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projectsData.map((project) => (
              <Card key={project.id} className="project-card h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        asChild
                        className="hover-glow"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View source code"
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
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key features */}
                  <div className="mb-6 flex-1">
                    <h4 className="text-sm font-medium mb-3 text-foreground">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      variant="outline"
                      className="flex-1 hover-scale"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      className="flex-1 hero-gradient text-white hover-scale hover-glow"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional projects note */}
          <div className="text-center">
            <Card className="glass-effect max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">More Projects</h3>
                <p className="text-muted-foreground mb-6">
                  These are just a few highlights from my portfolio. I have many more projects 
                  showcasing different technologies and problem-solving approaches.
                </p>
                <Button
                  variant="outline"
                  className="hover-scale"
                  asChild
                >
                  <a
                    href="https://github.com/alexchen"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View All Projects
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}