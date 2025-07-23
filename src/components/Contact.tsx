import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
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

            {/* Social Links */}
            <Card className="p-6 bg-card glow-border">
              <h4 className="text-lg font-semibold mb-4 text-neon-purple">Follow Me</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="interactive-hover" asChild>
                  <a href="https://github.com/addy-47" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="interactive-hover" asChild>
                  <a href="https://www.linkedin.com/in/adhbhut-gupta" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="interactive-hover" asChild>
                  <a href="mailto:adhbutg@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card glow-border">
              <h3 className="text-2xl font-semibold mb-6 text-neon-cyan">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input 
                      placeholder="Your name"
                      className="bg-muted border-border focus:border-neon-blue"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-muted border-border focus:border-neon-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input 
                    placeholder="What's this about?"
                    className="bg-muted border-border focus:border-neon-blue"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="bg-muted border-border focus:border-neon-blue resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full glow-border bg-gradient-primary text-white interactive-hover"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-glow border-neon-purple/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 glow-text">Ready to Build Something Amazing?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can leverage modern DevOps practices to 
              accelerate your development and improve your infrastructure.
            </p>
            <Button size="lg" className="glow-border bg-gradient-secondary text-white" asChild>
              <a href="mailto:adhbutg@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Start the Conversation
              </a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}