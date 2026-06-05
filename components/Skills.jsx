'use client';

import { useState } from 'react';
import { Terminal, Database, ShieldAlert, Cpu, Palette, Settings, CheckCircle2, GitFork } from 'lucide-react';

export default function Skills({ theme, isMuted }) {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillsData = [
    {
      category: 'Languages',
      icon: Terminal,
      cinemaRole: 'Starring Cast',
      cricketRole: 'Top Order Batsmen',
      skills: [
        { name: 'TypeScript', level: 95, cricketStat: 'Batting Avg: 95 (Clean Typing)' },
        { name: 'JavaScript', level: 98, cricketStat: 'Strike Rate: 160 (Agile Execution)' },
        { name: 'SQL', level: 88, cricketStat: 'Running between wickets: 88 (Fast queries)' }
      ]
    },
    {
      category: 'Backend',
      icon: Cpu,
      cinemaRole: 'Executive Producer',
      cricketRole: 'Middle Order Powerhouses',
      skills: [
        { name: 'Node.js', level: 96, cricketStat: 'Strike Rate: 155 (Fast Event Loops)' },
        { name: 'Express.js', level: 92, cricketStat: 'Partnership: 92% (Clean Routing)' },
        { name: 'REST & GraphQL', level: 90, cricketStat: 'Shot selection: 90% (Perfect APIs)' },
        { name: 'gRPC & Microservices', level: 85, cricketStat: 'Running average: 85 (Decoupled load)' },
        { name: 'Kafka & NATS', level: 92, cricketStat: 'Batting power: 92 (High Ingestion)' }
      ]
    },
    {
      category: 'Frontend',
      icon: Palette,
      cinemaRole: 'Costume & Production Design',
      cricketRole: 'Agile Fielders & Keepers',
      skills: [
        { name: 'React.js', level: 94, cricketStat: 'Catching efficiency: 94% (Dom updates)' },
        { name: 'Next.js 15', level: 92, cricketStat: 'Direct Hit Rate: 92% (SEO optimization)' },
        { name: 'Zustand & Redux', level: 88, cricketStat: 'Stumping speed: 88 (State locking)' },
        { name: 'Tailwind CSS', level: 95, cricketStat: 'Field placement: 95 (Fluid styling)' }
      ]
    },
    {
      category: 'Databases',
      icon: Database,
      cinemaRole: 'Set Construction',
      cricketRole: 'Pitch Curators',
      skills: [
        { name: 'PostgreSQL', level: 90, cricketStat: 'Dry pitch score: 90 (Solid relations)' },
        { name: 'MongoDB', level: 92, cricketStat: 'Wet pitch score: 92 (Flexible document speed)' },
        { name: 'Redis', level: 88, cricketStat: 'Outfield speed: 94 (Caching spikes)' }
      ]
    },
    {
      category: 'DevOps & Tools',
      icon: Settings,
      cinemaRole: 'Special Effects / SFX',
      cricketRole: 'Death Overs Finishers',
      skills: [
        { name: 'AWS', level: 85, cricketStat: 'Helicopter Shot: 85 (Powerful deployments)' },
        { name: 'Docker & Kubernetes', level: 88, cricketStat: 'Boundary Cleared: 88 (Secure containers)' },
        { name: 'CI/CD & Jenkins', level: 84, cricketStat: 'Run Rate: 84 (Rapid integration)' },
        { name: 'Git & Postman', level: 92, cricketStat: 'Wicket-taking ability: 92 (Clean merges)' }
      ]
    },
    {
      category: 'Security & Auth',
      icon: ShieldAlert,
      cinemaRole: 'Screenplay Security',
      cricketRole: 'Match Referees & DRS',
      skills: [
        { name: 'OAuth2 & JWT', level: 90, cricketStat: 'Crease line boundary check: 90' },
        { name: 'Multi-Tenant RBAC', level: 92, cricketStat: 'DRS Review Accuracy: 92' },
        { name: 'Distributed Encryption', level: 86, cricketStat: 'Leg Before Wicket validation: 86' }
      ]
    },
    {
      category: 'Arch & Patterns',
      icon: GitFork,
      cinemaRole: 'Screenplay Structure & Formats',
      cricketRole: 'Tactical Playbook & Fielding',
      skills: [
        { name: 'Monolithic & Microservices', level: 94, cricketStat: 'Field placements: 94 (Decoupled systems)' },
        { name: 'Event-Driven & Serverless', level: 92, cricketStat: 'Match strategy: 92 (Async flow rate)' },
        { name: 'Layered & MVC Architecture', level: 90, cricketStat: 'Batting order setup: 90 (Clear concerns)' },
        { name: 'Design Patterns (Singleton, Mediator)', level: 88, cricketStat: 'Captaincy decisions: 88 (Code reuse)' }
      ]
    }
  ];

  return (
    <div className="relative py-16 border-t border-portfolioBorder/40">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight">
          {theme === 'cinema' ? "Cast & Crew" : "Team Sheet & Stats"}
        </h2>
        <p className="text-portfolioAccent font-accent font-semibold tracking-widest text-sm uppercase mt-2">
          {theme === 'cinema' ? "Core Technical Competencies" : "Tactical Player Lineup"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Categories Tab List */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible space-x-4 lg:space-x-0 lg:space-y-3 pb-4 lg:pb-0">
          {skillsData.map((data, index) => {
            const IconComp = data.icon;
            const isActive = activeCategory === index;

            return (
              <button
                key={data.category}
                onClick={() => setActiveCategory(index)}
                className={`flex-shrink-0 flex items-center space-x-3 w-auto lg:w-full px-5 py-4 rounded-xl border text-left font-accent font-bold tracking-wide transition-all ${
                  isActive
                    ? 'bg-portfolioAccent text-portfolioBg border-portfolioAccent shadow-lg scale-102'
                    : 'bg-portfolioCard/40 border-portfolioBorder text-portfolioMuted hover:text-portfolioText hover:border-portfolioAccent/60'
                }`}
              >
                <IconComp className="w-5 h-5" />
                <div className="flex flex-col">
                  <span className="text-sm uppercase tracking-wider">{data.category}</span>
                  <span className="text-[10px] opacity-70 font-mono">
                    {theme === 'cinema' ? data.cinemaRole : data.cricketRole}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Skills Details */}
        <div className="lg:col-span-8 glass border border-portfolioBorder rounded-2xl p-6 md:p-8 min-h-[320px] transition-all">
          <div className="flex items-center justify-between border-b border-portfolioBorder/40 pb-4 mb-6">
            <h3 className="font-accent font-black text-xl text-portfolioText uppercase tracking-wider">
              {skillsData[activeCategory].category} Details
            </h3>
            <span className="text-xs font-mono text-portfolioAccent uppercase tracking-widest font-bold">
              {theme === 'cinema' 
                ? skillsData[activeCategory].cinemaRole 
                : skillsData[activeCategory].cricketRole}
            </span>
          </div>

          <div className="space-y-6">
            {skillsData[activeCategory].skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2 group">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-accent font-bold text-portfolioText group-hover:text-portfolioAccent transition-colors flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-portfolioAccent/80" />
                    <span>{skill.name}</span>
                  </span>
                  
                  {/* Stats detail */}
                  <span className="font-mono text-xs text-portfolioMuted">
                    {theme === 'cinema' ? `${skill.level}% Proficiency` : skill.cricketStat}
                  </span>
                </div>

                {/* Animated Level Bar */}
                <div className="w-full h-3 bg-portfolioBg border border-portfolioBorder/30 rounded-full overflow-hidden p-[1px]">
                  <div
                    className="h-full bg-gradient-to-r from-portfolioAccent to-portfolioAccentHover rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
