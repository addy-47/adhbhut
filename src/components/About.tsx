
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Monitor, 
  Settings, 
  Database,
  Shield,
  Zap,
  Download,
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

const certifications = [
  "Google Cloud Associate Cloud Engineer",
];


export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* About Me Section */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-4xl"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="glow-text">Me</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Cloud & DevOps Engineer skilled in automating multi-service CI/CD pipelines and deploying scalable workloads on GCP and Kubernetes. Built internal tools to streamline Docker builds, improve caching, and reduce deployment time. Known for logical problem-solving, practical design, and a drive to simplify complex workflows.
              </p>
              <Button size="lg" className="glow-border bg-gradient-secondary text-white" asChild>
                <a href="/resume.pdf" download="resume.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center">
              Work <span className="glow-text">Experience</span>
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-purple to-neon-blue rounded-full"></div>
              <div className="space-y-16">
                <div className="flex items-center w-full">
                  <div className="w-1/2 pr-8 text-right">
                    <h4 className="font-semibold text-lg">Associate Cloud Engineer</h4>
                    <p className="text-neon-blue">HYPR4 Cloud Tech</p>
                    <p className="text-sm text-muted-foreground">Sep 2025 - Present</p>
                  </div>
                  <div className="w-12 h-12 bg-card border-2 border-neon-purple rounded-full flex-shrink-0 z-10 flex items-center justify-center">
                    <Cloud className="h-6 w-6 text-neon-purple" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <Card className="p-6 bg-card/80 backdrop-blur-sm glow-border">
                      <ul className="space-y-2">
                        <li className="flex items-start"><div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 mr-3"></div><span className="text-muted-foreground">Designed and deployed scalable microservices architecture on GKE.</span></li>
                        <li className="flex items-start"><div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 mr-3"></div><span className="text-muted-foreground">Automated CI/CD pipelines using Cloud Build and GitHub Actions.</span></li>
                        <li className="flex items-start"><div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 mr-3"></div><span className="text-muted-foreground">Managed complete infrastructure lifecycle.</span></li>
                      </ul>
                    </Card>
                  </div>
                </div>

                <div className="flex items-center w-full">
                  <div className="w-1/2 pr-8 text-right">
                    <h4 className="font-semibold text-lg">Pre-Sales Intern</h4>
                    <p className="text-neon-blue">HYPR4 Cloud Tech</p>
                    <p className="text-sm text-muted-foreground">Jun 2025 - Aug 2025</p>
                  </div>
                  <div className="w-12 h-12 bg-card border-2 border-neon-blue rounded-full flex-shrink-0 z-10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-neon-blue" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <Card className="p-6 bg-card/80 backdrop-blur-sm glow-border">
                      <ul className="space-y-2">
                        <li className="flex items-start"><div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 mr-3"></div><span className="text-muted-foreground">Deployed GCP environments using pre-built Terraform modules.</span></li>
                        <li className="flex items-start"><div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 mr-3"></div><span className="text-muted-foreground">Handled manual deployments using yaml files and docker.</span></li>
                        <li className="flex items-start"><div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 mr-3"></div><span className="text-muted-foreground">Delivered technical demos to clients.</span></li>
                      </ul>
                    </Card>
                  </div>
                </div>

                <div className="flex items-center w-full">
                  <div className="w-1/2 pr-8 text-right">
                    <h4 className="font-semibold text-lg">Operations & Digital Strategy Manager</h4>
                    <p className="text-neon-blue">Hritik Textiles</p>
                    <p className="text-sm text-muted-foreground">Aug 2021 - May 2025</p>
                  </div>
                  <div className="w-12 h-12 bg-card border-2 border-neon-purple rounded-full flex-shrink-0 z-10 flex items-center justify-center">
                    <Settings className="h-6 w-6 text-neon-purple" />
                  </div>
                  <div className="w-1/2 pl-8">
                    <Card className="p-6 bg-card/80 backdrop-blur-sm glow-border">
                      <ul className="space-y-2">
                        <li className="flex items-start"><div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 mr-3"></div><span className="text-muted-foreground">Led a team of three to boost operational efficiency and achieve sales targets.</span></li>
                        <li className="flex items-start"><div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 mr-3"></div><span className="text-muted-foreground">Increased sales by 30% through innovative digital strategies.</span></li>
                      </ul>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

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