import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skillsData } from "@/data/portfolio"
import { Code, Wrench, Users } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: skillsData.technical,
      description: "Programming languages, frameworks, and technologies I work with"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: skillsData.tools,
      description: "Development tools and platforms I use daily"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: skillsData.soft,
      description: "Interpersonal and professional skills that drive collaboration"
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical abilities and professional competencies.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="project-card h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="skill-tag cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <Card className="glass-effect max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Always Learning</h3>
                <p className="text-muted-foreground">
                  I'm constantly exploring new technologies and methodologies to stay current 
                  in the rapidly evolving world of web development. Currently diving deeper 
                  into AI/ML integration and advanced cloud architectures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}