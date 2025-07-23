
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown } from 'lucide-react';
import Hypercube from './Hypercube';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Hypercube Background - Positioned on the right side only */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
        <Hypercube />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left Column - Content (takes up 7 columns on large screens) */}
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            >
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                <Badge 
                  variant="secondary" 
                  className="bg-neon-purple/10 text-neon-purple border-neon-purple/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm glow-border"
                >
                  🚀 Open to DevOps Opportunities
                </Badge>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  <div className="text-foreground">DevOps</div>
                  <div className="glow-text">Engineer</div>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl text-muted-foreground"
                >
                  Transforming ideas into scalable realities with cloud-native solutions
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
              >
                Passionate about building robust CI/CD pipelines, orchestrating 
                containerized applications, and implementing infrastructure as code. 
                Specializing in Kubernetes, Docker, Terraform, and GCP.
              </motion.p>

              {/* Tech Stack Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-3"
              >
                <p className="text-sm text-muted-foreground font-medium tracking-wider">TECH STACK</p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {['Kubernetes', 'Docker', 'GCP', 'Terraform', 'GitHub Actions', 'Prometheus'].map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-neon-blue/10 text-neon-blue border-neon-blue/20 glow-border hover:bg-neon-blue/20 transition-all duration-300 hover:scale-105 text-sm px-3 py-1.5 cursor-pointer"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              >
                <a href="/info/resume.pdf" download>
                  <Button
                    size="lg"
                    className="bg-gradient-primary text-white glow-border px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
                  >
                    <ArrowDown className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  className="glow-border px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection('projects')}
                >
                  View Projects
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Reserved for Hypercube (takes up 5 columns on large screens) */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6"></div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground cursor-pointer hover:text-neon-blue transition-colors"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
