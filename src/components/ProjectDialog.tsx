
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LazyCreatorTechTree from '@/components/ui/LazyCreatorTechTree';
import StreamletTechTree from '@/components/ui/StreamletTechTree';
import DockerzTechTree from '@/components/ui/DockerzTechTree';
import UCliTechTree from '@/components/ui/UCliTechTree';
import GoBlogAppGKETechTree from '@/components/ui/GoBlogAppGKETechTree';
import GoBlogAppHelmTechTree from '@/components/ui/GoBlogAppHelmTechTree';
import { Project } from './Projects';

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const techTreeComponents: { [key: string]: React.ComponentType } = {
  "LazyCreator": LazyCreatorTechTree,
  "Streamlet": StreamletTechTree,
  "Dockerz v2": DockerzTechTree,
  "u-cli": UCliTechTree,
  "Go Blog App on GKE": GoBlogAppGKETechTree,
  "Go Blog App with Helm": GoBlogAppHelmTechTree,
};

export default function ProjectDialog({ isOpen, onClose, project }: ProjectDialogProps) {
  if (!project) return null;

  const TechTreeComponent = techTreeComponents[project.title];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl max-h-[95vh] overflow-y-auto bg-card border border-neon-purple/20 shadow-2xl
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-black/20
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-neon-purple/70
        hover:[&::-webkit-scrollbar-thumb]:bg-neon-purple">
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
                <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg mb-4" />
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
              Architecture Flow
            </h3>
            
            {TechTreeComponent && <TechTreeComponent />}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
