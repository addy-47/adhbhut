
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Code, Cloud, Server, Database } from 'lucide-react';
import ProjectDialog from './ProjectDialog';

const projects = [
  {
    title: "Go Blog Application",
    description: "A full-stack blog application built with Go, featuring Docker containerization and Kubernetes deployment with CI/CD pipeline.",
    fullDescription: "A comprehensive blog application built with Go that demonstrates modern web development practices. Features include user authentication, CRUD operations, real-time comments, and image upload capabilities. The application is fully containerized and deployed using Kubernetes with automated CI/CD pipelines on Google Cloud Platform.",
    challenges: [
      "Implementing secure authentication and authorization",
      "Optimizing database queries for high performance",
      "Setting up automated testing and deployment pipelines on GCP",
      "Managing container security and resource limits"
    ],
    icon: <Code className="h-6 w-6" />,
    technologies: ["Go", "Docker", "Kubernetes", "GitHub Actions", "PostgreSQL"],
    github: "https://github.com/addy-47/go-blog-app",
    highlights: [
      "RESTful API with Gin framework",
      "Containerized with multi-stage Docker builds", 
      "Deployed on GCP GKE with Helm charts",
      "Automated CI/CD with GitHub Actions"
    ],
    techTree: [
      { category: "Backend", items: ["Go", "Gin Framework", "REST API"] },
      { category: "Database", items: ["PostgreSQL", "GORM"] },
      { category: "Containerization", items: ["Docker", "Multi-stage builds"] },
      { category: "Deployment", items: ["Kubernetes", "Helm", "GitHub Actions"] }
    ]
  },
  {
    title: "DevOps Task Management",
    description: "A comprehensive task management system with microservices architecture, focusing on DevOps best practices and automation on GCP.",
    fullDescription: "A scalable task management platform designed with microservices architecture to demonstrate DevOps best practices. Features include real-time collaboration, automated workflows, resource allocation, and comprehensive monitoring across distributed services running on Google Cloud Platform.",
    challenges: [
      "Designing effective inter-service communication patterns",
      "Implementing distributed tracing and monitoring on GCP",
      "Managing data consistency across microservices",
      "Setting up automated scaling and load balancing on GKE"
    ],
    icon: <Cloud className="h-6 w-6" />,
    technologies: ["Go", "Terraform", "GCP", "Docker", "Jenkins"],
    github: "https://github.com/addy-47/task-devops-app",
    highlights: [
      "Microservices architecture",
      "Infrastructure as Code with Terraform",
      "Auto-scaling on GCP GKE",
      "Monitoring with Prometheus & Grafana"
    ],
    techTree: [
      { category: "Microservices", items: ["Go", "gRPC", "Service Discovery"] },
      { category: "Infrastructure", items: ["Terraform", "GCP GKE"] },
      { category: "CI/CD", items: ["Jenkins", "Docker"] },
      { category: "Monitoring", items: ["Prometheus", "Grafana", "ELK Stack"] }
    ]
  },
  {
    title: "Kubernetes Deployment Automation",
    description: "Automated deployment pipeline for Go applications on Kubernetes with advanced monitoring and logging capabilities on GCP.",
    fullDescription: "An advanced Kubernetes deployment automation system that streamlines the deployment process for Go applications on Google Cloud Platform. Features GitOps workflows, custom operators, advanced resource management, and comprehensive observability for production-ready deployments.",
    challenges: [
      "Building custom Kubernetes operators for application lifecycle management",
      "Implementing GitOps workflows with proper security controls on GCP",
      "Setting up comprehensive monitoring and alerting",
      "Managing resource quotas and cluster autoscaling on GKE"
    ],
    icon: <Server className="h-6 w-6" />,
    technologies: ["Kubernetes", "Go", "Prometheus", "Grafana", "ArgoCD"],
    github: "https://github.com/addy-47/go-k8s-deploy",
    highlights: [
      "GitOps workflow with ArgoCD",
      "Custom Kubernetes operators",
      "Advanced resource management on GKE",
      "Comprehensive observability stack"
    ],
    techTree: [
      { category: "Orchestration", items: ["Kubernetes", "Custom Operators"] },
      { category: "GitOps", items: ["ArgoCD", "Git Workflows"] },
      { category: "Monitoring", items: ["Prometheus", "Grafana"] },
      { category: "Applications", items: ["Go", "Helm Charts"] }
    ]
  },
  {
    title: "Lazy Creator Scripts",
    description: "A collection of automation scripts and tools for streamlining development workflows and DevOps processes on GCP.",
    fullDescription: "A comprehensive collection of automation scripts and tools designed to streamline development workflows and DevOps processes on Google Cloud Platform. Includes environment setup automation, infrastructure provisioning tools, configuration management utilities, and development workflow optimizations.",
    challenges: [
      "Creating portable scripts that work across different GCP environments",
      "Implementing proper error handling and logging",
      "Building modular and reusable automation components for GCP",
      "Ensuring security best practices in automation scripts"
    ],
    icon: <Database className="h-6 w-6" />,
    technologies: ["Shell", "Python", "Ansible", "Terraform", "Docker"],
    github: "https://github.com/addy-47/lazy-creator",
    highlights: [
      "GCP environment setup automation",
      "Infrastructure provisioning scripts",
      "Configuration management tools",
      "Development workflow optimization"
    ],
    techTree: [
      { category: "Scripting", items: ["Shell Scripts", "Python"] },
      { category: "Infrastructure", items: ["Terraform", "Ansible"] },
      { category: "Containerization", items: ["Docker", "Docker Compose"] },
      { category: "Automation", items: ["CI/CD Scripts", "Deployment Tools"] }
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my DevOps and cloud engineering projects, demonstrating 
            expertise in modern infrastructure, automation, and scalable systems on Google Cloud Platform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card 
                className="h-full bg-card glow-border interactive-hover overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-accent rounded-lg text-white">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <div className="flex space-x-2 mt-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.github, '_blank');
                            }}
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neon-blue mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-gradient-accent rounded-full mr-3" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-neon-purple mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-neon-purple/10 text-neon-purple border-neon-purple/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gradient overlay at bottom */}
                <div className="h-2 bg-gradient-primary opacity-50" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button size="lg" className="glow-border bg-gradient-secondary text-white" asChild>
            <a href="https://github.com/addy-47" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>

      <ProjectDialog 
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
