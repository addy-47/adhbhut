
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Monitor, 
  Settings, 
  Database,
  Zap,
  Code
} from 'lucide-react';

const skills = [
  {
    category: "Languages",
    icon: <Code className="h-6 w-6" />,
    items: ["Bash", "YAML", "C++", "Python", "Go", "TypeScript", "XML", "SQP"],
    description: "Proficient in multiple programming languages.",
    proficiency: 60
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    items: ["GCP", "Kubernetes", "Cloud Build", "Cloudflare", "Docker", "Terraform", "CI/CD", "GitHub Actions"],
    description: "Expertise in GCP with deep knowledge of cloud-native solutions",
    proficiency: 85
  },
  {
    category: "Frameworks",
    icon: <Settings className="h-6 w-6" />,
    items: ["Flask", "Fiber", "React", "Vue.js", "Node.js", "Tailwind CSS", "PeerJS", "WebSockets"],
    description: "Experience with various backend and frontend frameworks.",
    proficiency: 70
  },
  {
    category: "Streaming & Media",
    icon: <Monitor className="h-6 w-6" />,
    items: ["MediaMTX", "WebRTC", "HLS", "FFmpeg", "NGINX RTMP", "Owncast", "Adaptive Bitrate"],
    description: "Knowledge of streaming protocols and media servers.",
    proficiency: 75
  },
  {
    category: "Databases",
    icon: <Database className="h-6 w-6" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Cloud SQL", "RabbitMQ", "Qdrant", "BoltDB", "DuckDB"],
    description: "Database administration and cloud storage solutions",
    proficiency: 65
  },
  {
    category: "Tools & Monitoring",
    icon: <Zap className="h-6 w-6" />,
    items: ["Grafana", "Prometheus", "inotify", "zstd"],
    description: "Experience with monitoring and other tools.",
    proficiency: 70
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center my-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="glow-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the DevOps technology stack with focus on 
            Google Cloud Platform and modern infrastructure practices.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 bg-card/80 backdrop-blur-sm glow-border interactive-hover">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-gradient-accent rounded-lg text-white">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{skill.category}</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {skill.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {skill.items.map((item) => (
                    <Badge 
                      key={item} 
                      variant="secondary" 
                      className="bg-neon-blue/10 text-neon-blue border-neon-blue/20 text-xs"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="relative w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Proficiency: {skill.proficiency}%
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
