"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "AWS", "Docker", "GraphQL", "Tailwind CSS", "Framer Motion", "Prisma"
];

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    period: "2023 - Present",
    description: "Led development of scalable web applications using modern technologies."
  },
  {
    title: "Frontend Developer",
    company: "Startup",
    period: "2021 - 2023", 
    description: "Built responsive user interfaces and optimized performance for web applications."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I&apos;m a passionate developer who loves creating beautiful, functional, and user-centered digital experiences. 
            With expertise in modern web technologies, I bring ideas to life through clean code and thoughtful design.
          </motion.p>
        </div>

        {/* Skills Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">Skills & Technologies</CardTitle>
              <p className="text-muted-foreground">Technologies I work with on a daily basis</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  >
                    <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">Experience</CardTitle>
              <p className="text-muted-foreground">My professional journey in tech</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="border-l-4 border-primary/20 pl-6 py-2"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-1">{exp.company}</p>
                  <p className="text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.section>

        {/* Personal Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-2">Beyond Code</CardTitle>
              <p className="text-muted-foreground">When I&apos;m not coding</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Interests</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I enjoy exploring new technologies, contributing to open source projects, 
                    and staying up-to-date with the latest industry trends.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Goals</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    I&apos;m passionate about creating impactful solutions that make a difference 
                    and helping others grow in their development journey.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </motion.div>
    </div>
  );
} 