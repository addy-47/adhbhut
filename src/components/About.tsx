
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Download
} from 'lucide-react';


export default function About() {
  return (
    <section id="about" className="py-8 relative overflow-hidden">
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
      </div>
    </section>
  );
}