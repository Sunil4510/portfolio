'use client';

import { Briefcase, Calendar, Building2, ChevronRight, Award, Film } from 'lucide-react';

export default function Experience({ theme }) {
  const experiences = [
    {
      company: 'Neokred Technologies',
      location: 'Bengaluru',
      role: 'Software Engineer II (Backend / Full Stack)',
      period: 'Feb 2026 – Apr 2026',
      cricketTitle: 'Neokred Series (Innings 2 - SE II)',
      cinemaTitle: 'Production: Neokred Blockbusters',
      highlights: [
        'Led end-to-end frontend development of the APOS (Point-of-Sale) platform using Next.js, React, Zustand, Tailwind CSS, and TypeScript, building billing, inventory, customer management, onboarding, and product administration systems.',
        'Collaborated across cross-functional teams to define reusable frontend architecture patterns and accelerate feature delivery.',
        'Leveraged AI-assisted engineering workflows using Claude Code and structured agentic development practices to accelerate development, testing, and code reviews.',
        'Developed secure fintech integration workflows for the CollectBot platform by integrating external banking APIs, building wrapper services, and protecting sensitive financial data using symmetric and asymmetric encryption techniques.'
      ]
    },
    {
      company: 'Facctum Solutions',
      location: 'Bengaluru',
      role: 'Software Engineer (Full Stack Engineer)',
      period: 'Dec 2022 – Feb 2026',
      cricketTitle: 'Facctum Championship (Innings 1 - SE)',
      cinemaTitle: 'Production: Facctum Features',
      highlights: [
        'Designed and led development of a centralized event-driven Audit Logging Platform using NATS JetStream and PostgreSQL, reliably processing 50K–100K events/day across multiple SaaS products.',
        'Architected configurable audit pipelines with ACK/NACK retries, dead-letter queue handling, and controlled batch-based asynchronous processing, improving ingestion reliability and preventing PostgreSQL connection pool exhaustion under burst traffic.',
        'Contributed significantly to the development of a centralized multi-tenant RBAC Admin Platform supporting 10K+ users, enabling tenant onboarding, feature management, and role-based access control during the organization’s transition from SaaS to PaaS.',
        'Built tenant-aware authorization middleware enforcing feature entitlements, role-based permissions, and API-level access validation across distributed backend services.',
        'Optimized high-latency APIs operating on 100K+ row datasets using indexing, pagination, and request throttling, reducing database load and improving response latency.',
        'Resolved Kubernetes OOM failures in a dynamic Excel export service by redesigning workflows from full in-memory processing to chunked streaming-based processing, enabling stable exports of 200K+ records compared to the previous implementation failing beyond 5K records.',
        'Collaborated with cross-functional teams to deliver scalable SaaS platform capabilities, while mentoring interns and junior engineers in backend development and distributed systems fundamentals.'
      ]
    }
  ];

  return (
    <div className="relative py-16 border-t border-portfolioBorder/40">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight">
          {theme === 'cinema' ? "Filmography" : "Match History"}
        </h2>
        <p className="text-portfolioAccent font-accent font-semibold tracking-widest text-sm uppercase mt-2">
          {theme === 'cinema' ? "Chronological Releases & Productions" : "Career scorecards & Highlights"}
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative max-w-4xl mx-auto px-4">
        
        {/* Timeline Center Line */}
        <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-[4px] -translate-x-1/2 ${
          theme === 'cinema' 
            ? 'bg-portfolioAccent/30 border-r border-l border-portfolioAccent/10' 
            : 'bg-[#52b788]/20 border-r border-l border-[#52b788]/10'
        }`} />

        {/* Sprocket Holes layout for Cinema Theme */}
        {theme === 'cinema' && (
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[20px] -translate-x-1/2 opacity-25 pointer-events-none select-none flex flex-col justify-between py-10 z-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="w-2 h-2.5 bg-portfolioBg border border-portfolioAccent rounded-sm my-2 mx-auto" />
            ))}
          </div>
        )}

        <div className="space-y-16">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={exp.company} 
                className={`relative flex flex-col md:flex-row items-stretch md:justify-between z-10 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                
                {/* Center Circle Indicator */}
                <div className="absolute left-4 md:left-1/2 top-6 w-8 h-8 rounded-full bg-portfolioBg border-4 border-portfolioAccent shadow-md -translate-x-1/2 flex items-center justify-center">
                  {theme === 'cinema' ? (
                    <Film className="w-3 h-3 text-portfolioAccent" />
                  ) : (
                    <Award className="w-3.5 h-3.5 text-portfolioAccent" />
                  )}
                </div>

                {/* Card Container */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                  isEven ? 'md:pr-10' : 'md:pl-10'
                }`}>
                  <div className="glass rounded-2xl border border-portfolioBorder p-6 hover:shadow-lg transition-all duration-300 hover:scale-101 relative group">
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-portfolioAccent rounded-t-2xl" />
                    
                    <div className="flex flex-col space-y-2 border-b border-portfolioBorder/40 pb-4 mb-4">
                      
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center space-x-1.5 font-accent font-bold text-sm text-portfolioAccent">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </span>
                        
                        <span className="inline-flex items-center space-x-1 text-xs font-mono text-portfolioMuted">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>
                      </div>

                      <h3 className="font-accent font-black text-lg text-portfolioText leading-tight">
                        {theme === 'cinema' ? exp.cinemaTitle : exp.cricketTitle}
                      </h3>
                      
                      <p className="text-xs font-mono text-portfolioMuted uppercase tracking-wider">
                        Role: {exp.role} • {exp.location}
                      </p>
                    </div>

                    <ul className="space-y-3 font-sans text-sm text-portfolioMuted leading-relaxed">
                      {exp.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2.5">
                          <ChevronRight className="w-4 h-4 text-portfolioAccent flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>

                {/* Empty Spacer Column for Desktop */}
                <div className="hidden md:block w-[45%]" />

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
