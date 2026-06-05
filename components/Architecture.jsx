'use client';

import { GitBranch, Layers, Cpu, ToyBrick, Milestone, Sparkles } from 'lucide-react';

export default function Architecture({ theme, isMuted }) {
  const blueprints = [
    {
      id: 'event-driven',
      title: 'Event-Driven & Serverless',
      cinemaSubtitle: 'Scene Sequencing (Async Flow)',
      cricketSubtitle: 'Running between Wickets (Speed)',
      icon: Cpu,
      description: 'Decoupling services through high-throughput asynchronous message queues. Designing systems that process events dynamically without locking operational threads.',
      details: [
        'Ingestion Rate: 100K+ events/day processed via NATS JetStream and Kafka pipelines.',
        'Fail-safe mechanisms: Configured ACK/NACK retries and Dead Letter Queues (DLQ).',
        'Serverless execution: Optimizing AWS Lambda compute boundaries for dynamic operations.'
      ]
    },
    {
      id: 'microservices',
      title: 'Microservices & Monoliths',
      cinemaSubtitle: 'Cast Ensemble (Decoupled Services)',
      cricketSubtitle: 'Field Placements (Modular Coverage)',
      icon: GitBranch,
      description: 'Designing modular services that work in harmony. Transitioning massive monolithic applications to clean, decoupled microservices for high horizontal scale.',
      details: [
        'Multi-tenant isolated routing: Serving 10K+ active users across multi-tenant RBAC nodes.',
        'Kubernetes scalability: Tuning container OOM parameters by converting in-memory processes to streams.',
        'gRPC communication: Implementing low-latency internal communication between distributed servers.'
      ]
    },
    {
      id: 'design-patterns',
      title: 'Design Patterns & MVC',
      cinemaSubtitle: 'Screenplay Script (Reusability)',
      cricketSubtitle: 'Captaincy Decisions (Tactical Logic)',
      icon: ToyBrick,
      description: 'Utilizing structural and behavioral patterns to ensure codebase readability, testability, and fast iteration. Sticking to MVC rules for clean separation of concerns.',
      details: [
        'Mediator Pattern: Handling decoupled async message routing between independent services.',
        'Singleton Pattern: Securing single-point connection pools (PostgreSQL/Redis) to avoid exhaustion.',
        'MVC & State: Separating business models, Express routes, and Zustand frontend state layers.'
      ]
    }
  ];

  return (
    <div className="relative py-16 border-t border-portfolioBorder/40">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight">
          {theme === 'cinema' ? "The Blueprints" : "The Playbook"}
        </h2>
        <p className="text-portfolioAccent font-accent font-semibold tracking-widest text-sm uppercase mt-2">
          {theme === 'cinema' ? "System Architecture & Design Patterns" : "Match Strategy & Tactical Layouts"}
        </p>
      </div>

      {/* Blueprints Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {blueprints.map((item) => {
          const IconComp = item.icon;

          return (
            <div 
              key={item.id}
              className="glass border border-portfolioBorder/60 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:scale-103 group relative"
            >
              {/* Top accent border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-portfolioAccent rounded-t-2xl" />

              <div className="space-y-4">
                
                {/* Header info */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-portfolioAccent/15 text-portfolioAccent rounded-xl border border-portfolioBorder/20">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-portfolioMuted bg-portfolioCard px-2 py-0.5 rounded border border-portfolioBorder/30 uppercase tracking-widest">
                    {theme === 'cinema' ? item.cinemaSubtitle : item.cricketSubtitle}
                  </span>
                </div>

                <h3 className="font-accent font-black text-xl text-portfolioText leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-portfolioMuted leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Bullets */}
                <div className="pt-2 border-t border-portfolioBorder/35 space-y-2">
                  <span className="text-xs font-accent font-bold tracking-widest text-portfolioAccent uppercase block">
                    Key Implementations
                  </span>
                  <ul className="space-y-2 text-xs font-mono text-portfolioMuted/90 leading-relaxed">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Milestone className="w-3.5 h-3.5 text-portfolioAccent/80 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom design accent */}
              <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-portfolioMuted border-t border-portfolioBorder/20 pt-4">
                <span>STABILITY INDEX: A+</span>
                <span className="flex items-center space-x-1">
                  <Sparkles className="w-3 h-3 text-portfolioAccent" />
                  <span>SCALABLE PLAY</span>
                </span>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
