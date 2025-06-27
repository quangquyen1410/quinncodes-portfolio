"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    image: "/api/placeholder/400/250",
    link: "#",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Framer Motion"],
    image: "/api/placeholder/400/250",
    link: "#",
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations and optimal performance.",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Contentlayer"],
    image: "/api/placeholder/400/250",
    link: "#",
    featured: false
  },
  {
    title: "Weather Dashboard",
    description: "A weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation API"],
    image: "/api/placeholder/400/250",
    link: "#",
    featured: false
  },
  {
    title: "Blog Platform",
    description: "A content management system for blogs with markdown support, SEO optimization, and analytics dashboard.",
    technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL", "Vercel"],
    image: "/api/placeholder/400/250",
    link: "#",
    featured: false
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling features.",
    technologies: ["React", "Node.js", "Twitter API", "Chart.js", "Redis"],
    image: "/api/placeholder/400/250",
    link: "#",
    featured: false
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My Projects
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A collection of projects that showcase my skills in modern web development, 
            from full-stack applications to interactive user experiences.
          </motion.p>
        </div>

        {/* Featured Projects */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-background to-muted/20 overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-4xl text-muted-foreground">📱</div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Link 
                      href={project.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View Project →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Projects Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
                whileHover={{ y: -3 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-md bg-gradient-to-br from-background to-muted/10 overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                    <div className="text-3xl text-muted-foreground">💻</div>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <Link 
                      href={project.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      View Project →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Let&apos;s discuss your project and see how I can help bring your ideas to life.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
              >
                Get In Touch
              </Link>
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  );
} 