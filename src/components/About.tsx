import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud, 
  Container, 
  GitBranch, 
  Monitor, 
  Settings, 
  Database,
  Shield,
  Zap
} from 'lucide-react';

const skills = [
  {
    category: "Cloud Platforms",
    icon: <Cloud className="h-6 w-6" />,
    items: ["Google Cloud Platform", "GCP GKE", "Multi-cloud Architecture"],
    description: "Expertise in GCP with deep knowledge of cloud-native solutions",
    proficiency: 80
  },
  {
    category: "Container Orchestration", 
    icon: <Container className="h-6 w-6" />,
    items: ["Kubernetes", "Docker", "Helm", "Container Security"],
    description: "Advanced Kubernetes administration and container orchestration",
    proficiency: 80
  },
  {
    category: "Infrastructure as Code",
    icon: <Settings className="h-6 w-6" />,
    items: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
    description: "Automated infrastructure provisioning and configuration management",
    proficiency: 75
  },
  {
    category: "CI/CD & GitOps",
    icon: <GitBranch className="h-6 w-6" />,
    items: ["Jenkins", "GitHub Actions", "ArgoCD", "GitLab CI"],
    description: "Automated deployment pipelines and GitOps workflows",
    proficiency: 70
  },
  {
    category: "Monitoring & Observability",
    icon: <Monitor className="h-6 w-6" />,
    items: ["Prometheus", "Grafana", "ELK Stack", "Jaeger"],
    description: "Comprehensive monitoring, logging, and distributed tracing",
    proficiency: 60
  },
  {
    category: "Database & Storage",
    icon: <Database className="h-6 w-6" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "Cloud Storage"],
    description: "Database administration and cloud storage solutions",
    proficiency: 60
  },
  {
    category: "Security & Compliance",
    icon: <Shield className="h-6 w-6" />,
    items: ["RBAC", "Network Security", "Secrets Management", "Compliance"],
    description: "Security best practices and compliance frameworks",
    proficiency: 75
  },
  {
    category: "Performance & Scaling",
    icon: <Zap className="h-6 w-6" />,
    items: ["Auto-scaling", "Load Balancing", "Performance Tuning", "Cost Optimization"],
    description: "High-performance system design and cost-effective scaling",
    proficiency: 70
  }
];

const certifications = [
  "Google Cloud Assistant Cloud Engineer",
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* About Me Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                About <span className="glow-text">Me</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                I’m a passionate tech enthusiast with a unique journey that began in the vibrant 
                world of textile business in Delhi. Fueled by curiosity and a drive to innovate, 
                I pivoted to technology, diving headfirst into the dynamic fields of DevOps and cloud computing. 
                In just under a month, I earned a Google Cloud certification, showcasing my ability to master 
                complex systems quickly. My expertise now lies in building scalable solutions using 
                tools like Terraform, Docker, and CI/CD pipelines, with hands-on experience in Google Cloud Platform.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond tech, I’m an avid video game enthusiast, often immersing myself in strategic gameplay, 
                and a dedicated chess player, where I enjoy the thrill of outsmarting opponents. 
                My diverse background fuels my creativity, and I’m always eager to tackle new challenges, 
                blending business acumen with technical precision to craft impactful solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-6 bg-card/80 backdrop-blur-sm glow-border">
              <h3 className="text-xl font-bold mb-4 glow-text">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-neon-purple pl-4">
                  <h4 className="font-semibold text-lg">Dev-ops intern</h4>
                  <p className="text-neon-blue">Hypr4 pvt. ltd. (June 2025 - present)</p>
                  <div className="space-y-3 mt-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-accent rounded-full mt-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Design and deploy scalable cloud infrastructure using Terraform on Google Cloud Platform.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-accent rounded-full mt-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Streamline development workflows with CI/CD pipelines using GitHub Actions.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-accent rounded-full mt-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Manage project migrations, ensuring seamless data transitions to modern cloud environments.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-accent rounded-full mt-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Test and optimize applications for performance and reliability in production.</span>
                    </div>
                  </div>
                </div>
                <div className="border-l-2 border-neon-blue pl-4">
                  <h4 className="font-semibold text-lg">Operations & Digital Strategy Manager</h4>
                  <p className="text-neon-blue">Hritik Textiles (Aug 2021 - May 2025)</p>
                  <div className="space-y-3 mt-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-accent rounded-full mt-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Led a team of three to boost operational efficiency and achieve sales targets.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-accent rounded-full mt-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Spearheaded digital transformation, launching online presence via WhatsApp, Meesho, YouTube, and Instagram.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-accent rounded-full mt-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Increased sales by 30% through innovative digital strategies.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-accent rounded-full mt-3 flex-shrink-0" />
                      <span className="text-muted-foreground">Grew client base by 20% with a focus on customer satisfaction and retention.</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm glow-border">
              <h3 className="text-xl font-bold mb-4 glow-text">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full mt-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="text-center mb-16"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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