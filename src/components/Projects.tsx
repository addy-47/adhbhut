
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Youtube, Network, Container, Undo, GitMerge, Ship } from 'lucide-react';
import ProjectDialog from './ProjectDialog';

export interface Project {
  title: string;
  description: string;
  fullDescription: string;
  challenges: string[];
  icon: React.ReactElement;
  technologies: string[];
  github: string;
  highlights: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: "LazyCreator",
    description: "AI-powered YouTube Shorts automation platform.",
    fullDescription: "Built full-stack app (Flask, React) to generate and upload Shorts via YouTube API. Generates scripts, backgrounds , subtitles ,thumbnail and uploads directly to user channel reducing the content generation time to just 5mins. Used FFmpeg, GCP Cloud Run, MongoDB; real-time updates via WebSocket.",
    challenges: [
      "Automated video generation for YouTube Shorts",
      "AI-powered voiceover generation",
      "Direct YouTube upload integration",
      "Real-time progress updates with WebSocket",
      "Synchronising subtitles with AI-generated voiceovers"
    ],
    icon: <Youtube className="h-6 w-6" />,
    technologies: ["Flask", "React", "FFmpeg", "GCP Cloud Run", "MongoDB", "WebSocket","Cloud Storage","OAuth2", "YouTube Data API","Automation", "Video Processing", "AI-generated Content", "Text-to-Speech", "Image Generation"],
    github: "https://lazycreator.in",
    highlights: [
      "AI-powered video generation",
      "Customizable video styles",
      "Secure authentication with Firebase",
      "Responsive design"
    ],
    image: "lazycreator.png"
  },
  {
    title: "Streamlet",
    description: "Scalable P2P live education streaming.",
    fullDescription: "A POC designed to support upto 300K concurrent users via HLS + WebRTC P2P mesh; 50--95% bandwidth saved . Fully functional features like private chat, public chat , stage invite , broadcast. Go Fiber backend, React frontend, MediaMTX, PostgreSQL,Coturn,PeerJS, Redis; fully Dockerized and deployed on VM",
    challenges: [
      "Scaling challenges with high user concurrency",
      "Reducing bandwidth costs by 50-95% with P2P ",
      "Implementing a hybrid HLS and WebRTC P2P mesh",
      "Real-time video mixing and broadcasting",
      "Building interactive features like chat and stage invites"
    ],
    icon: <Network className="h-6 w-6" />,
    technologies: ["Go", "Fiber", "React", "WebRTC", "HLS", "MediaMTX", "PostgreSQL", "Redis", "Docker", "Coturn", "PeerJS", "P2P Networking", "Video Streaming", "WebSockets", "Real-time Communication", "Exceldraw Integration"],
    github: "https://github.com/addy-47/streamlet",
    highlights: [
      "Scalable to 300K concurrent users",
      "50-95% bandwidth savings",
      "P2P mesh network",
      "Real-time chat and interaction"
    ],
    image: "streamlet.png"
  },
  {
    title: "Dockerz v2",
    description: "Smart multi-service Docker builder CLI.",
    fullDescription: "Go CLI with Git + SHA256 change detection; parallel builds cut CI/CD time by 70%+. Multi-level caching, GAR integration, and output for downstream pipelines.",
    challenges: [
      "Cutting CI/CD time by 70%+",
      "Implementing Git + SHA256 change detection",
      "Supporting multi-level caching",
      "Different environments compatibility",
      "Packaging and distributing the CLI tool for simpple UX"
    ],
    icon: <Container className="h-6 w-6" />,
    technologies: ["Go", "Docker", "Google Artifact Registry", "Git", "SHA256", "CLI","Cobra","Debian packaging","CI/CD", "Release Automation"],
    github: "https://github.com/addy-47/scripts/tree/dockerz",
    highlights: [
      "Parallel builds",
      "Smart change detection",
      "Multi-level caching",
      "Google Artifact Registry integration"
    ],
    image: "dockerz.png"
  },
  {
    title: "u-cli",
    description: "Universal Linux undo command.",
    fullDescription: "Single Go binary undoes last mv, rm, cp via shell hooks. inotify + zstd backups; works in bash/zsh/fish with one-liner install.",
    challenges: [
      "Creating a universal undo command for Linux",
      "Using inotify and zstd for backups",
      "Supporting bash, zsh, and fish",
      "Ensuring minimal performance overhead",
      "Kernel level changes without corrupting user data"
    ],
    icon: <Undo className="h-6 w-6" />,
    technologies: ["Go", "inotify", "zstd", "BoltDB", "Linux Shells", "Bash", "Zsh", "Fish", "File System Monitoring", "Command Line Tools", "Data Compression"],
    github: "https://github.com/addy-47/scripts/tree/u-cli",
    highlights: [
      "Undo for mv, rm, cp",
      "inotify + zstd backups",
      "Works in bash, zsh, fish",
      "Single Go binary"
    ],
    image: "u.png"
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
    icon: <GitMerge className="h-6 w-6" />,
    technologies: ["Go", "GKE", "GitHub Actions", "Google Artifact Registry", "Cloud SQL"],
    github: "https://github.com/addy-47/go-blog-app/tree/ci-cd",
    highlights: [
      "CI/CD pipeline for Go microservices",
      "Deployment to GKE using GitHub Actions",
      "Integration with Google Artifact Registry and Workload Identity",
      "Zero-downtime deployments"
    ],
    image: "go-blog-app-gke.png"
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
    icon: <Ship className="h-6 w-6" />,
    technologies: ["Go", "Kubernetes", "Helm", "Istio", "Minikube"],
    github: "https://github.com/addy-47/go-blog-app/tree/helm",
    highlights: [
      "Simplified deployment with Helm",
      "Custom Resource Definitions (CRDs) for blog posts",
      "Secure service mesh with Istio",
      "mTLS between services"
    ],
    image: "go-blog-app-helm.png"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
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
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-accent rounded-lg text-white flex-shrink-0">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                      </div>
                    </div>
                    <div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
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
