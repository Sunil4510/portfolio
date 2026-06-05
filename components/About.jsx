'use client';

import { GraduationCap, MapPin, Trophy, CheckCircle, Code, Server } from 'lucide-react';
import { playAchievementSound } from '../utils/audio';

export default function About({ theme, isMuted }) {

  const handleMilestoneHover = () => {
    if (!isMuted) {
      playAchievementSound(theme === 'cricket');
    }
  };

  return (
    <div className="relative py-16 border-t border-portfolioBorder/40">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight">
          {theme === 'cinema' ? "Director's Cut" : "The Pavilion"}
        </h2>
        <p className="text-portfolioAccent font-accent font-semibold tracking-widest text-sm uppercase mt-2">
          {theme === 'cinema' ? "Behind The Scenes" : "Player Profile & Stats"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Profile Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group max-w-sm w-full">
            
            {/* Aesthetic Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-portfolioAccent to-portfolioAccentHover rounded-2xl blur-lg opacity-20 group-hover:opacity-45 transition-opacity duration-500" />
            
            <div className="relative glass rounded-2xl overflow-hidden border border-portfolioBorder/80 p-6 flex flex-col items-center">
              
              <div className="w-48 h-48 rounded-full border-4 border-portfolioAccent/80 overflow-hidden relative shadow-lg group-hover:scale-102 transition-transform duration-300">
                <div className="absolute inset-0 bg-portfolioCard flex flex-col items-center justify-center text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-portfolioAccent/20 flex items-center justify-center text-portfolioAccent mb-2">
                    {theme === 'cinema' ? <Code className="w-6 h-6" /> : <Server className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-bold font-accent text-portfolioText uppercase tracking-widest">Sunil Kurapati</span>
                  <span className="text-[10px] text-portfolioMuted mt-1">Full Stack Engineer</span>
                </div>
              </div>

              <div className="mt-6 text-center space-y-2 w-full">
                <h3 className="font-accent font-bold text-xl text-portfolioText">Sunil Kurapati</h3>
                <p className="text-sm text-portfolioAccent font-mono uppercase tracking-wide">Bengaluru, Karnataka, India</p>
                
                <div className="flex justify-center items-center space-x-2 pt-2 text-xs font-mono text-portfolioMuted border-t border-portfolioBorder/40 mt-4">
                  <MapPin className="w-3.5 h-3.5 text-portfolioAccent" />
                  <span>Available for Remote / Hybrid / Onsite</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Info Details */}
        <div className="lg:col-span-7 space-y-6">
          {theme === 'cinema' ? (
            /* Cinema Narrative Screenplay Theme */
            <div className="space-y-6">
              
              <div className="border-l-4 border-portfolioAccent pl-6 space-y-4">
                <p className="font-mono text-xs text-portfolioAccent tracking-widest uppercase">SCENE 1: THE INCEPTION — SOLAPUR TO PUNE</p>
                <div className="font-mono text-sm leading-relaxed text-portfolioMuted p-4 bg-portfolioCard/40 rounded-xl border border-portfolioBorder/20">
                  <span className="text-portfolioAccent">SUNIL (V.O.):</span>
                  <p className="mt-1 pl-4">
                    &quot;I stepped into the tech ecosystem with a simple goal: to build scalable tools that solve everyday friction. Completing my B.E. in IT at Savitribai Phule Pune University (graduating with a 9.20/10 CGPA) laid the groundwork. That is where I discovered my fascination with distributed architectures.&quot;
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-portfolioAccent pl-6 space-y-4">
                <p className="font-mono text-xs text-portfolioAccent tracking-widest uppercase">SCENE 2: THE SCALE-UP — BENGALURU DEVELOPER HUB</p>
                <div className="font-mono text-sm leading-relaxed text-portfolioMuted p-4 bg-portfolioCard/40 rounded-xl border border-portfolioBorder/20">
                  <span className="text-portfolioAccent">NARRATOR:</span>
                  <p className="mt-1 pl-4">
                    Cut to Bengaluru. Sunil leads end-to-end POS interfaces and optimizes heavy NATS queues processing 100K+ events daily. The code becomes robust, the servers run clean, and CPU usage stays flat.
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3 pt-4">
                <h4 className="font-accent font-bold text-sm text-portfolioAccent tracking-widest uppercase">Accolades & Box Office Hits</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onMouseEnter={handleMilestoneHover}
                    className="p-4 rounded-xl bg-portfolioCard/40 border border-portfolioBorder/30 hover:border-portfolioAccent hover:shadow-glow-gold transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-5 h-5 text-portfolioAccent" />
                      <div>
                        <span className="text-xs text-portfolioMuted uppercase tracking-wider block font-mono">LeetCode Tournament</span>
                        <span className="font-accent font-bold text-portfolioText text-sm">300+ Problems Solved</span>
                      </div>
                    </div>
                  </div>

                  <div 
                    onMouseEnter={handleMilestoneHover}
                    className="p-4 rounded-xl bg-portfolioCard/40 border border-portfolioBorder/30 hover:border-portfolioAccent hover:shadow-glow-gold transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-portfolioAccent" />
                      <div>
                        <span className="text-xs text-portfolioMuted uppercase tracking-wider block font-mono">Distributed Throughput</span>
                        <span className="font-accent font-bold text-portfolioText text-sm">100K+ Events Processed/Day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* Cricket Narrative Player Analysis Theme */
            <div className="space-y-6">
              
              <div className="space-y-4">
                <h3 className="font-accent font-black text-2xl text-portfolioText">Innings Assessment</h3>
                <p className="text-portfolioMuted leading-relaxed">
                  Sunil is a middle-order engine room player. Graduating from Savitribai Phule Pune University in 2022 (where he scored an outstanding academic record of 9.20 CGPA), he immediately transitioned to the fast-paced Bengaluru league. Over 3.5+ years of core play, he has demonstrated top-tier abilities in anchoring event-driven backend services and protecting the frontend crease.
                </p>
                <p className="text-portfolioMuted leading-relaxed">
                  Whether building secure fintech APIs at Neokred or optimizing out-of-memory memory exhaustion at Facctum Solutions, he bats with a high strike rate and minimizes runtime errors (wickets lost).
                </p>
              </div>

              {/* Education details */}
              <div className="p-4 rounded-xl bg-[#0e1612] border border-portfolioBorder/40 space-y-2">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-portfolioAccent" />
                  <span className="font-accent font-bold text-portfolioText text-sm uppercase tracking-wider">Academy Background</span>
                </div>
                <div className="pl-8 text-sm text-portfolioMuted">
                  <p className="font-bold text-portfolioText">B.E. in Information Technology (2022)</p>
                  <p>Savitribai Phule Pune University — CGPA: 9.20 / 10</p>
                </div>
              </div>

              {/* Milestones */}
              <div className="space-y-3 pt-2">
                <h4 className="font-accent font-bold text-xs text-portfolioAccent tracking-widest uppercase">Match Milestones (Hover to Trigger Cheers)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  <div 
                    onMouseEnter={handleMilestoneHover}
                    className="p-4 rounded-xl bg-[#0e1612] border border-portfolioBorder/30 hover:border-portfolioAccent hover:shadow-glow-green transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <Trophy className="w-5 h-5 text-portfolioAccent" />
                      <div>
                        <span className="text-xs text-portfolioMuted uppercase tracking-wider block font-mono">Tournament Score</span>
                        <span className="font-accent font-bold text-portfolioText text-sm">300+ LeetCode Boundaries</span>
                      </div>
                    </div>
                  </div>

                  <div 
                    onMouseEnter={handleMilestoneHover}
                    className="p-4 rounded-xl bg-[#0e1612] border border-portfolioBorder/30 hover:border-portfolioAccent hover:shadow-glow-green transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-portfolioAccent" />
                      <div>
                        <span className="text-xs text-portfolioMuted uppercase tracking-wider block font-mono">Runs Processed</span>
                        <span className="font-accent font-bold text-portfolioText text-sm">100K+ Runs/Day (Ingest Event Rate)</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
