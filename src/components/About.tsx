import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { profileData, experienceData } from "@/data/portfolio"
import { MapPin, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, experience, and what drives my passion for development.
            </p>
          </div>

          {/* Bio section */}
          <div className="mb-16">
            <Card className="glass-effect hover-scale">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  {profileData.bio}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {profileData.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Available for new opportunities
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Experience section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Professional Experience</h3>
            <div className="space-y-6">
              {experienceData.map((experience, index) => (
                <Card key={index} className="project-card">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          {experience.position}
                        </h4>
                        <p className="text-primary font-medium mb-2">
                          {experience.company}
                        </p>
                      </div>
                      <Badge variant="outline" className="self-start">
                        {experience.duration}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {experience.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm text-foreground">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}