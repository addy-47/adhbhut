import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "adhbutg@gmail.com",
    href: "mailto:adhbutg@gmail.com"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/adhbhut-gupta",
    href: "https://www.linkedin.com/in/adhbhut-gupta"
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "github.com/addy-47",
    href: "https://github.com/addy-47"
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Delhi, India",
    href: null
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="glow-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or explore opportunities? 
            I'm always excited to collaborate on innovative DevOps solutions.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card glow-border">
              <h3 className="text-2xl font-semibold mb-6 text-neon-blue">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently open to new opportunities and interesting projects. 
                Whether you want to discuss DevOps strategies, cloud architecture, 
                or just say hello, feel free to reach out.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-3 bg-gradient-accent rounded-lg text-white">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-neon-blue transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}