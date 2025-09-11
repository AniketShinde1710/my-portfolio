import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { profileData } from "@/data/portfolio"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const mailtoLink = `mailto:${profileData.email}?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
    
    toast({
      title: "Opening email client...",
      description: "Your default email client should open with the message pre-filled.",
    })
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: profileData.email,
      href: `mailto:${profileData.email}`
    },
    {
      icon: Phone,
      label: "Phone",
      value: profileData.phone,
      href: `tel:${profileData.phone}`
    },
    {
      icon: MapPin,
      label: "Location",
      value: profileData.location,
      href: null
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? 
              I'd love to hear from you. Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full hero-gradient text-white hover-scale hover-glow"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact info */}
            <div className="space-y-8">
              <Card className="project-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <p className="text-muted-foreground">
                    Feel free to reach out through any of these channels.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{item.value}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Social links */}
              <Card className="project-card">
                <CardHeader>
                  <CardTitle className="text-xl">Let's Connect</CardTitle>
                  <p className="text-muted-foreground">
                    Follow me on social media for updates and insights.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 hover-scale hover-glow"
                      asChild
                    >
                      <a
                        href={profileData.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-5 w-5" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 hover-scale hover-glow"
                      asChild
                    >
                      <a
                        href={profileData.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick note */}
              <Card className="glass-effect">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Response Time</h3>
                  <p className="text-sm text-muted-foreground">
                    I typically respond to messages within 24 hours during business days. 
                    For urgent inquiries, feel free to call directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}