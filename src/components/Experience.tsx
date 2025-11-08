import React, { useRef, useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Experience {
  id: string;
  company: string;
  logo: string;
  position: string;
  duration: string;
  description: string[];
  techStack: string[];
  type: "maxima" | "minima";
}

const experiences: Experience[] = [
  {
    id: "3",
    company: "Hritik Textiles",
    logo: "🏭",
    position: "Operations and Digital Strategy Manager",
    duration: "Aug 2021 - May 2025",
    description: [
      "Led team of 3; increased sales 30% via WhatsApp, Meesho, YouTube, Instagram.",
      "Grew client base 20% through targeted sales and retention initiatives.",
    ],
    techStack: ["WhatsApp Business", "Meesho", "YouTube", "Instagram", "Digital Marketing"],
    type: "maxima",
  },
  {
    id: "2",
    company: "HYPR4 Cloud Tech",
    logo: "🔧",
    position: "Pre-Sales Intern",
    duration: "Jun 2025 - Aug 2025",
    description: [
      "Deployed GCP environments using pre-built Terraform modules",
      "Handled manual deployments using yaml files and docker",
      "Setup VMs and firewalls for new services",
    ],
    techStack: ["GCP", "Terraform", "Docker"],
    type: "minima",
  },
  {
    id: "1",
    company: "HYPR4 Cloud Tech",
    logo: "☁️",
    position: "Associate Cloud Engineer",
    duration: "Sep 2025 - Present",
    description: [
      "Designed and deployed scalable microservices architecture on GKE with internal networking and service mesh integration.",
      "Automated CI/CD pipelines using Cloud Build and GitHub Actions for seamless build, test, and production deployments.",
      "Managed complete infrastructure lifecycle — from local development to production — ensuring reliability and cost efficiency.",
    ],
    techStack: ["GKE", "Terraform", "Cloud Build", "GitHub Actions", "Docker", "Kubernetes"],
    type: "maxima",
  },
];

export const ExperienceTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [screenSize, setScreenSize] = useState({ width: 1200, height: 600 });
  
  const waveWidth = 4800; // Keep wave scrollable
  const waveHeight = 150;
  const amplitude = 40; // Reduced to prevent card cutoff
  const frequency = 0.005; // Increased frequency for more pronounced wave
  const cardSpacing = 500; // Spacing so 3 cards fit in viewport
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollPos(container.scrollLeft);
    };

    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    container.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Generate wave path
  const generateWavePath = () => {
    let path = `M 0 ${waveHeight / 2}`;
    for (let x = 0; x <= waveWidth; x += 10) {
      const y = waveHeight / 2 + Math.sin(x * frequency) * amplitude;
      path += ` L ${x} ${y}`;
    }
    return path;
  };

  // Calculate Y position on wave for a given X
  const getYOnWave = (x: number) => {
    return waveHeight / 2 + Math.sin(x * frequency) * amplitude;
  };

  // Calculate card opacity based on position
  const getCardOpacity = (cardX: number, viewportWidth: number) => {
    const relativeX = cardX - scrollPos;

    // Fade in from right
    if (relativeX > viewportWidth - 200) {
      return Math.max(0, (viewportWidth - relativeX) / 200);
    }

    // Fade out on left
    if (relativeX < 200) {
      return Math.max(0, relativeX / 200);
    }

    return 1;
  };

  // Calculate wave opacity (fade out on left)
  const getWaveGradient = () => {
    return (
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--neon-blue))" stopOpacity="0.3" />
          <stop offset="25%" stopColor="hsl(var(--neon-purple))" stopOpacity="0.4" />
          <stop offset="50%" stopColor="hsl(var(--neon-pink))" stopOpacity="0.5" />
          <stop offset="75%" stopColor="hsl(var(--neon-cyan))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--neon-blue))" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    );
  };

  return (
    <section id="experience" className="relative w-full py-8">
      <div className="px-6">
        <div className="timeline-header-container mb-8">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Work <span className="glow-text">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A timeline of my professional growth and accomplishments.
            </p>
          </div>
        </div>

        <div className="timeline-content-container">
          <div
            ref={containerRef}
            className="relative w-full overflow-x-auto overflow-y-hidden scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              height: '540px', /* Adjusted height to accommodate wave and cards */
            }}
          >
          <div
            className="relative flex items-center justify-start"
            style={{
              width: `${waveWidth}px`,
              height: '540px', /* Adjusted height to accommodate wave and cards */
              overflow: 'visible'
            }}
          >
            {/* SVG Wave - centered vertically in container */}
            <svg
              className="absolute"
              width={waveWidth}
              height={waveHeight}
              style={{
                pointerEvents: 'none',
                overflow: 'visible',
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              {getWaveGradient()}
              <path
                d={generateWavePath()}
                stroke="url(#waveGradient)"
                strokeWidth="3"
                fill="none"
                filter="url(#glow)"
                style={{
                  transition: 'opacity 0.3s ease'
                }}
              />

              {/* Start point indicator */}
              <circle
                cx="0"
                cy={getYOnWave(0)}
                r="6"
                fill="hsl(var(--primary))"
                opacity={scrollPos < 100 ? 0.8 : 0}
                style={{ transition: 'opacity 0.3s ease' }}
              />

              {/* End point indicator */}
              <circle
                cx={waveWidth}
                cy={getYOnWave(waveWidth)}
                r="6"
                fill="hsl(var(--primary))"
                opacity="0.8"
              />
            </svg>

            {/* Cards positioned on wave */}
            {experiences.map((exp, idx) => {
              const cardX = 400 + idx * cardSpacing;
              // Cards positioned to fit within 500px container
              const waveY = getYOnWave(cardX); // Wave Y position ranges from ~35 to ~115 (with amplitude 40 on 150px wave height)
              const cardY = 195 + waveY; // Position cards centered in 540px container (base 195 + wave variation)
              
              // Dynamic card sizing based on screen size
              const cardWidth = screenSize.width >= 1536 ? '350px' :
                               screenSize.width >= 1024 ? '320px' :
                               screenSize.width >= 768 ? '280px' : '260px';
              const opacity = getCardOpacity(cardX, screenSize.width);

              return (
                <div
                  key={exp.id}
                  className="absolute interactive-hover glow-border bg-card/90 backdrop-blur-sm"
                  style={{
                    left: `${cardX}px`,
                    top: `${cardY}px`,
                    transform: 'translate(-50%, -50%)',
                    width: cardWidth,
                    opacity: opacity,
                    transition: 'opacity 0.3s ease',
                    zIndex: 10
                  }}
                >
                  <Card className="h-full border-0 shadow-none bg-transparent">
                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                          {exp.logo}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-semibold text-foreground mb-1 leading-tight">{exp.position}</h3>
                          <p className="text-sm text-muted-foreground font-medium mb-2">{exp.company}</p>
                          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary text-xs font-medium">
                            <Calendar className="w-3 h-3" />
                            {exp.duration}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-4 pt-0">
                      <ul className="space-y-2 mb-4">
                        {exp.description.slice(0, 3).map((desc, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed">
                            <span className="text-primary mt-0.5 text-xs font-bold">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs font-medium bg-secondary/50 hover:bg-secondary/70 border border-border/50 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
      
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};