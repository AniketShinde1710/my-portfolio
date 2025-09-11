// Portfolio Data Configuration
// Customize this file with your personal information

export const profileData = {
  name: "Aniket Shinde",
  title: "Full Stack Developer",
  tagline: "Building scalable web applications with modern technologies",
  bio: "Passionate full-stack developer eager to build efficient and user-friendly applications. Skilled in React, Node.js, and cloud technologies, with a focus on writing clean code and optimizing performance. Ready to contribute, learn, and grow in a dynamic development environment.",
  email: "aniketshinde1710@gmail.com",
  phone: "+91 9075015914", 
  location: "Handewadi pune, India",
  resumeUrl: "public/anuuukettt (4).pdf", // Add your resume file to the public folder
  social: {
    github: "https://github.com/AniketShinde1710",
    linkedin: "https://www.linkedin.com/in/aniketshinde1710/",
    twitter: "https://twitter.com/aniketshinde"
  }
}

export const skillsData = {
  technical: [
    "Java" ,"HTML", "CSS", "JavaScript", "React",
    "MySQL", "Machine Learning", "N8N"
  ],
  tools: [
    "Git","GitHub", "VS Code", "Figma","N8N",
  ],
  soft: [
    "Problem Solving", "Team Leadership", "Agile Methodology", "Project Management"
  ]
}

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    features: [
      "Real-time inventory tracking",
      "Secure payment processing",
      "Admin dashboard with analytics",
      "Mobile-responsive design"
    ],
    githubUrl: "https://github.com/alexchen/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.alexchen.dev",
    imageUrl: "/project-ecommerce.jpg"
  },
  {
    id: 2,
    title: "Car Garage Management System ",
    description: "Collaborative task management application with real-time updates, team workspaces, and progress tracking. Features drag-and-drop interface and deadline notifications.",
technologies: ["Java", "OOP", "Encapsulation", "Abstraction", "Inheritance", "File Handling"],
features: [
  "Customer and vehicle management",
  "Service tracking and invoice generation",
  "Data persistence with file handling",
  "Scalable and maintainable OOP-based design"
],
    githubUrl: "https://github.com/AniketShinde1710/CarGarageManagement/tree/main/CarGarageBilling/out",
    liveUrl: "https://taskmanager.alexchen.dev",
    imageUrl: "/project-taskmanager.jpg"
  },
{
  id: 3,
  title: "Personal Portfolio Website",
  description: "A responsive personal portfolio website to showcase my skills, projects, and professional experience. Built with modern web technologies for performance and scalability.",
  technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn-ui"],
  features: [
    "About Me section highlighting experience and background",
    "Skills & Expertise with technical and soft skills",
    "Featured Projects with live demos and code links",
    "Contact form for easy communication",
    "Mobile-responsive and interactive UI components"
  ],
  githubUrl: "https://github.com/AniketShinde1710/my-portfolio",
  liveUrl: "https://my-portfolio.netlify.app/",
  imageUrl: ""
}

]

export const experienceData = [
  {
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    description: "Lead development of enterprise web applications serving 100k+ users. Mentor junior developers and drive technical architecture decisions.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led migration to microservices architecture",
      "Mentored 5 junior developers"
    ]
  },
  {
    company: "StartupXYZ",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: "Built core features for SaaS platform from MVP to Series A. Worked closely with product team to deliver user-focused solutions.",
    achievements: [
      "Developed authentication and billing systems",
      "Implemented real-time features using WebSockets",
      "Reduced API response times by 60%"
    ]
  },
  {
    company: "Digital Agency Inc",
    position: "Frontend Developer",
    duration: "2019 - 2020",
    description: "Created responsive websites and web applications for diverse clients. Focused on performance optimization and accessibility.",
    achievements: [
      "Delivered 15+ client projects on time",
      "Achieved 98+ Lighthouse scores",
      "Implemented WCAG 2.1 accessibility standards"
    ]
  }
]