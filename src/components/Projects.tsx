
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Code, Cloud, Server, Database } from 'lucide-react';
import ProjectDialog from './ProjectDialog';

const projects = [
  {
    title: "LazyCreator",
    description: "AI-powered YouTube Shorts automation platform.",
    fullDescription: "Built full-stack app (Flask, React) to generate and upload Shorts via YouTube API. Generates scripts, backgrounds , subtitles ,thumbnail and uploads directly to user channel reducing the content generation time to just 5mins. Used FFmpeg, GCP Cloud Run, MongoDB; real-time updates via WebSocket.",
    challenges: [
      "Automated video generation for YouTube Shorts",
      "AI-powered voiceover generation",
      "Direct YouTube upload integration"
    ],
    icon: <Code className="h-6 w-6" />,
    technologies: ["Flask", "React", "FFmpeg", "GCP Cloud Run", "MongoDB", "WebSocket"],
    github: "https://lazycreator.in",
    highlights: [
      "AI-powered video generation",
      "Customizable video styles",
      "Secure authentication with Firebase",
      "Responsive design"
    ],
    techTree: [
      { category: "Backend", items: ["Flask", "MongoDB"] },
      { category: "Frontend", items: ["React", "Vite"] },
      { category: "Cloud", items: ["GCP Cloud Run", "Firebase"] },
      { category: "Media", items: ["FFmpeg", "WebSocket"] }
    ],
    image: "/lazycreator.png"
  },
  {
    title: "Streamlet",
    description: "Scalable P2P live education streaming.",
    fullDescription: "A POC designed to support upto 300K concurrent users via HLS + WebRTC P2P mesh; 50--95% bandwidth saved . Fully functional features like private chat, public chat , stage invite , broadcast. Go Fiber backend, React frontend, MediaMTX, PostgreSQL,Coturn,PeerJS, Redis; fully Dockerized and deployed on VM",
    challenges: [
      "Supporting 300K concurrent users",
      "Reducing bandwidth costs by 50-95%",
      "Implementing a hybrid HLS and WebRTC P2P mesh"
    ],
    icon: <Cloud className="h-6 w-6" />,
    technologies: ["Go", "Fiber", "React", "WebRTC", "HLS", "MediaMTX", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/addy-47/streamlet",
    highlights: [
      "Scalable to 300K concurrent users",
      "50-95% bandwidth savings",
      "P2P mesh network",
      "Real-time chat and interaction"
    ],
    techTree: [
      { category: "Backend", items: ["Go", "Fiber", "PostgreSQL", "Redis"] },
      { category: "Frontend", items: ["React", "WebRTC", "HLS"] },
      { category: "Streaming", items: ["MediaMTX", "PeerJS", "Coturn"] },
      { category: "Deployment", items: ["Docker", "Nginx"] }
    ],
    image: "/streamlet.png"
  },
  {
    title: "Dockerz v2",
    description: "Smart multi-service Docker builder CLI.",
    fullDescription: "Go CLI with Git + SHA256 change detection; parallel builds cut CI/CD time by 70%+. Multi-level caching, GAR integration, and output for downstream pipelines.",
    challenges: [
      "Cutting CI/CD time by 70%+",
      "Implementing Git + SHA256 change detection",
      "Supporting multi-level caching"
    ],
    icon: <Server className="h-6 w-6" />,
    technologies: ["Go", "Docker", "Google Artifact Registry"],
    github: "https://github.com/addy-47/scripts/tree/dockerz",
    highlights: [
      "Parallel builds",
      "Smart change detection",
      "Multi-level caching",
      "Google Artifact Registry integration"
    ],
    techTree: [
      { category: "CLI", items: ["Go", "Cobra"] },
      { category: "CI/CD", items: ["Docker", "GitHub Actions"] },
      { category: "Cloud", items: ["Google Artifact Registry"] }
    ],
    image: "/dockerz.png"
  },
  {
    title: "u-cli",
    description: "Universal Linux undo command.",
    fullDescription: "Single Go binary undoes last mv, rm, cp via shell hooks. inotify + zstd backups; works in bash/zsh/fish with one-liner install.",
    challenges: [
      "Creating a universal undo command for Linux",
      "Using inotify and zstd for backups",
      "Supporting bash, zsh, and fish"
    ],
    icon: <Database className="h-6 w-6" />,
    technologies: ["Go", "inotify", "zstd", "BoltDB"],
    github: "https://github.com/addy-47/scripts/tree/u-cli",
    highlights: [
      "Undo for mv, rm, cp",
      "inotify + zstd backups",
      "Works in bash, zsh, fish",
      "Single Go binary"
    ],
    techTree: [
      { category: "CLI", items: ["Go", "Cobra"] },
      { category: "System", items: ["inotify", "zstd"] },
      { category: "Database", items: ["BoltDB"] }
    ],
    image: "/u.png"
  },
  {
    title: "Go Blog App on GKE",
    description: "Microservices CI/CD pipeline.",
    fullDescription: "Deployed Go services to GKE via GitHub Actions; used GAR and Workload Identity. Incremental builds, Cloud SQL, auto-rollouts with zero downtime.",
    challenges: [
      "Deploying Go services to GKE via GitHub Actions",
      "Using GAR and Workload Identity",
      "Incremental builds, Cloud SQL, auto-rollouts with zero downtime"
    ],
    icon: <Code className="h-6 w-6" />,
    technologies: ["Go", "GKE", "GitHub Actions", "Google Artifact Registry", "Cloud SQL"],
    github: "https://github.com/addy-47/go-blog-app/tree/ci-cd",
    highlights: [
      "CI/CD pipeline for Go microservices",
      "Deployment to GKE using GitHub Actions",
      "Integration with Google Artifact Registry and Workload Identity",
      "Zero-downtime deployments"
    ],
    techTree: [
      { category: "Backend", items: ["Go"] },
      { category: "Cloud", items: ["GKE", "Cloud SQL", "Google Artifact Registry"] },
      { category: "CI/CD", items: ["GitHub Actions"] }
    ],
    image: "/go-blog-app-github-actions.png"
  },
  {
    title: "Go Blog App with Helm",
    description: "Kubernetes components with Helm, CRDs, and Istio on Minikube.",
    fullDescription: "A Go-based blogging platform demonstrating Kubernetes components with Helm, CRDs, and Istio on Minikube.",
    challenges: [
      "Packaging Kubernetes resources with Helm",
      "Extending Kubernetes API with CRDs",
      "Implementing a service mesh with Istio for mTLS and traffic management"
    ],
    icon: <Code className="h-6 w-6" />,
    technologies: ["Go", "Kubernetes", "Helm", "Istio", "Minikube"],
    github: "https://github.com/addy-47/go-blog-app/tree/helm",
    highlights: [
      "Simplified deployment with Helm",
      "Custom Resource Definitions (CRDs) for blog posts",
      "Secure service mesh with Istio",
      "mTLS between services"
    ],
    techTree: [
      { category: "Backend", items: ["Go"] },
      { category: "Orchestration", items: ["Kubernetes", "Helm", "Minikube"] },
      { category: "Service Mesh", items: ["Istio"] },
      { category: "API", items: ["CRDs"] }
    ],
    image: "/go-blog-app-helm.png"
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
