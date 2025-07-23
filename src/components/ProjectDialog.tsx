
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    fullDescription: string;
    challenges: string[];
    technologies: string[];
    github: string;
    techTree: {
      category: string;
      items: string[];
    }[];
  } | null;
}

const techIcons: { [key: string]: string } = {
  // Backend
  'Go': 'https://www.vectorlogo.zone/logos/golang/golang-icon.svg',
  'Gin Framework': 'https://www.vectorlogo.zone/logos/gin-gonic/gin-gonic-icon.svg',
  'REST API': 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  'Node.js': 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  
  // Database
  'PostgreSQL': 'https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg',
  'GORM': 'https://www.vectorlogo.zone/logos/golang/golang-icon.svg',
  'MongoDB': 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg',
  
  // Containerization
  'Docker': 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
  'Multi-stage builds': 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
  
  // Deployment & Orchestration
  'Kubernetes': 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
  'Helm': 'https://www.vectorlogo.zone/logos/helm_sh/helm_sh-icon.svg',
  'GitHub Actions': 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
  'ArgoCD': 'https://www.vectorlogo.zone/logos/argoprojio/argoprojio-icon.svg',
  'Custom Operators': 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
  'Git Workflows': 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
  
  // Cloud & Infrastructure
  'Terraform': 'https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg',
  'GCP GKE': 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
  'GCP': 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
  'Azure': 'https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg',
  
  // Monitoring
  'Prometheus': 'https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg',
  'Grafana': 'https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg',
  'ELK Stack': 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg',
  
  // CI/CD
  'Jenkins': 'https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg',
  
  // Microservices
  'gRPC': 'https://www.vectorlogo.zone/logos/grpcio/grpcio-icon.svg',
  'Service Discovery': 'https://www.vectorlogo.zone/logos/consul/consul-icon.svg',
  
  // Scripting & Automation
  'Shell Scripts': 'https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg',
  'Python': 'https://www.vectorlogo.zone/logos/python/python-icon.svg',
  'Ansible': 'https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg',
  'Docker Compose': 'https://www.vectorlogo.zone/logos/docker/docker-icon.svg',
  'CI/CD Scripts': 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
  'Deployment Tools': 'https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg',
  
  // GitOps
  'GitOps': 'https://www.vectorlogo.zone/logos/argoprojio/argoprojio-icon.svg',
  
  // Applications
  'Helm Charts': 'https://www.vectorlogo.zone/logos/helm_sh/helm_sh-icon.svg'
};

const techDetails: { [key: string]: string } = {
  'Go': 'High-performance backend language',
  'Gin Framework': 'Fast HTTP web framework',
  'REST API': 'RESTful web services',
  'PostgreSQL': 'Advanced relational database',
  'GORM': 'Object-relational mapping',
  'Docker': 'Application containerization',
  'Multi-stage builds': 'Optimized container images',
  'Kubernetes': 'Container orchestration platform',
  'Helm': 'Kubernetes package manager',
  'GitHub Actions': 'CI/CD automation',
  'Terraform': 'Infrastructure as Code',
  'GCP GKE': 'Managed Kubernetes service',
  'GCP': 'Google Cloud Platform',
  'Prometheus': 'Monitoring & alerting',
  'Grafana': 'Data visualization',
  'ELK Stack': 'Logging & search analytics',
  'gRPC': 'High-performance RPC framework',
  'Service Discovery': 'Dynamic service registry',
  'Shell Scripts': 'Automation scripting',
  'Python': 'Versatile programming language',
  'Ansible': 'Configuration management',
  'Docker Compose': 'Multi-container applications',
  'GitOps': 'Git-based deployment',
  'Helm Charts': 'Kubernetes applications'
};

const InnovativeTechTree = ({ techTree }: { techTree: { category: string; items: string[] }[] }) => {
  const getNodePosition = (categoryIndex: number, itemIndex: number, totalItems: number) => {
    const centerX = 400;
    const centerY = 300;
    
    // Calculate category position in a circle around center
    const categoryAngle = (categoryIndex * 2 * Math.PI) / techTree.length;
    const categoryRadius = 180;
    const categoryX = centerX + Math.cos(categoryAngle) * categoryRadius;
    const categoryY = centerY + Math.sin(categoryAngle) * categoryRadius;
    
    // Calculate item positions around their category
    const itemAngle = (itemIndex * 2 * Math.PI) / totalItems - Math.PI / 2;
    const itemRadius = 80 + (totalItems * 3); // Dynamic radius based on items count
    const itemX = categoryX + Math.cos(itemAngle) * itemRadius;
    const itemY = categoryY + Math.sin(itemAngle) * itemRadius;
    
    return { categoryX, categoryY, itemX, itemY };
  };

  return (
    <div className="w-full h-[700px] relative bg-gradient-to-br from-card/10 to-background/5 rounded-xl border border-neon-purple/20 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 600"
        className="absolute inset-0"
      >
        <defs>
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.5" />
          </radialGradient>
          
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
          </linearGradient>
          
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <filter id="pulse">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Central Core Node */}
        <g transform="translate(400, 300)">
          <circle 
            cx="0" 
            cy="0" 
            r="40" 
            fill="url(#nodeGradient)" 
            filter="url(#glow)"
            className="animate-pulse"
          />
          <circle 
            cx="0" 
            cy="0" 
            r="25" 
            fill="#0F172A" 
            stroke="#8B5CF6" 
            strokeWidth="3"
          />
          <text x="0" y="8" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">
            CORE
          </text>
        </g>

        {/* Dynamic Neural Network */}
        {techTree.map((category, categoryIndex) => {
          const { categoryX, categoryY } = getNodePosition(categoryIndex, 0, category.items.length);
          
          return (
            <g key={category.category}>
              {/* Main connection from core to category */}
              <line
                x1="400"
                y1="300"
                x2={categoryX}
                y2={categoryY}
                stroke="url(#connectionGradient)"
                strokeWidth="4"
                filter="url(#pulse)"
                opacity="0.8"
                className="animate-pulse"
                strokeDasharray="8,4"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-24"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </line>
              
              {/* Category Node */}
              <g transform={`translate(${categoryX}, ${categoryY})`}>
                <circle 
                  cx="0" 
                  cy="0" 
                  r="35" 
                  fill="url(#nodeGradient)" 
                  filter="url(#glow)" 
                  opacity="0.9"
                />
                <circle 
                  cx="0" 
                  cy="0" 
                  r="22" 
                  fill="#1E293B" 
                  stroke="#06B6D4" 
                  strokeWidth="2"
                />
                
                {/* Category Icon */}
                <foreignObject x="-16" y="-16" width="32" height="32">
                  <div className="flex items-center justify-center h-full">
                    <img 
                      src={techIcons[category.items[0]] || 'https://www.vectorlogo.zone/logos/github/github-icon.svg'} 
                      alt={category.category}
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                </foreignObject>
                
                {/* Category Label */}
                <rect x="-50" y="35" width="100" height="20" fill="#0F172A" rx="10" opacity="0.9"/>
                <text x="0" y="48" textAnchor="middle" fill="#94A3B8" fontSize="11" fontWeight="bold">
                  {category.category}
                </text>
              </g>

              {/* Technology Items orbiting around category */}
              {category.items.map((item, itemIndex) => {
                const { itemX, itemY } = getNodePosition(categoryIndex, itemIndex, category.items.length);
                
                return (
                  <g key={item}>
                    {/* Connection from category to item with animation */}
                    <line
                      x1={categoryX}
                      y1={categoryY}
                      x2={itemX}
                      y2={itemY}
                      stroke="#06B6D4"
                      strokeWidth="2"
                      opacity="0.5"
                      strokeDasharray="4,2"
                      filter="url(#pulse)"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.3;0.8;0.3"
                        dur={`${3 + itemIndex * 0.5}s`}
                        repeatCount="indefinite"
                      />
                    </line>
                    
                    {/* Technology Item Node */}
                    <g transform={`translate(${itemX}, ${itemY})`} className="group">
                      <circle 
                        cx="0" 
                        cy="0" 
                        r="25" 
                        fill="url(#nodeGradient)" 
                        filter="url(#glow)" 
                        opacity="0.7"
                        className="hover:opacity-100 transition-opacity duration-300"
                      />
                      <circle 
                        cx="0" 
                        cy="0" 
                        r="18" 
                        fill="#0F172A" 
                        stroke="#EC4899" 
                        strokeWidth="2"
                      />
                      
                      {/* Technology Icon */}
                      <foreignObject x="-12" y="-12" width="24" height="24">
                        <div className="flex items-center justify-center h-full">
                          <img 
                            src={techIcons[item] || 'https://www.vectorlogo.zone/logos/github/github-icon.svg'} 
                            alt={item}
                            className="w-5 h-5 object-contain hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </foreignObject>
                      
                      {/* Hover Information Panel */}
                      <foreignObject 
                        x="-80" 
                        y="35" 
                        width="160" 
                        height="60" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      >
                        <div className="bg-gradient-to-r from-card/95 to-background/95 border border-neon-purple/40 rounded-lg p-3 text-center shadow-2xl backdrop-blur-sm">
                          <div className="text-sm font-bold text-foreground mb-1">{item}</div>
                          {techDetails[item] && (
                            <div className="text-xs text-muted-foreground leading-tight">
                              {techDetails[item]}
                            </div>
                          )}
                        </div>
                      </foreignObject>
                      
                      {/* Pulsing effect for important technologies */}
                      {['Kubernetes', 'Docker', 'GCP', 'Terraform'].includes(item) && (
                        <circle 
                          cx="0" 
                          cy="0" 
                          r="30" 
                          fill="none" 
                          stroke="#8B5CF6" 
                          strokeWidth="1" 
                          opacity="0.4"
                        >
                          <animate
                            attributeName="r"
                            values="18;35;18"
                            dur="4s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.6;0.1;0.6"
                            dur="4s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                    </g>
                  </g>
                );
              })}
            </g>
          );
        })}
        
        {/* Floating particles for ambient effect */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={i}
            cx={100 + i * 80}
            cy={50 + (i % 3) * 200}
            r="2"
            fill="#8B5CF6"
            opacity="0.4"
          >
            <animate
              attributeName="cy"
              values={`${50 + (i % 3) * 200};${450 + (i % 3) * 100};${50 + (i % 3) * 200}`}
              dur={`${8 + i * 2}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.2;0.8;0.2"
              dur={`${4 + i}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default function ProjectDialog({ isOpen, onClose, project }: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto bg-card border border-neon-purple/20 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground mb-6 text-center glow-text">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid lg:grid-cols-2 gap-8 h-full">
          {/* Left Column - Project Details */}
          <div className="space-y-6">
            <div className="bg-gradient-secondary/10 border border-neon-blue/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <div className="w-2 h-2 bg-neon-blue rounded-full mr-3" />
                Project Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div className="bg-gradient-accent/10 border border-neon-purple/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3" />
                Key Challenges
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-glow/10 border border-neon-cyan/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="secondary" 
                    className="bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                className="glow-border flex-1"
                onClick={() => window.open(project.github, '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View on GitHub
              </Button>
            </div>
          </div>

          {/* Right Column - Enhanced Tech Tree */}
          <div className="bg-gradient-glow/5 border border-neon-cyan/20 rounded-xl p-6 h-full">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center glow-text">
              Neural Architecture Map
            </h3>
            
            <InnovativeTechTree techTree={project.techTree} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
