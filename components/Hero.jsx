'use client';

import { Github, Linkedin, Mail, ExternalLink, Download, Sparkles, Award } from 'lucide-react';
import { playCricketShot, playCinemaSwell } from '../utils/audio';

export default function Hero({ theme, isMuted }) {

  const handleCTAClick = () => {
    if (!isMuted) {
      if (theme === 'cricket') {
        playCricketShot();
      } else {
        playCinemaSwell();
      }
    }
    const contactSec = document.getElementById('contact');
    if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[90vh] py-12 md:py-20">
      
      {/* Background Decorative Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full bg-portfolioAccent/5 blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Info Details */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
          
          <div className="inline-flex items-center justify-center lg:justify-start space-x-2 text-portfolioAccent font-accent font-semibold text-sm tracking-widest uppercase">
            {theme === 'cinema' ? (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Now Playing: Sunil Kurapati</span>
              </>
            ) : (
              <>
                <Award className="w-4 h-4 animate-bounce" />
                <span>Match Day: Sunil at the Crease</span>
              </>
            )}
          </div>

          <h1 className="font-display font-black text-5xl md:text-7xl tracking-tight leading-tight select-none">
            Sunil <span className="text-portfolioAccent drop-shadow-[0_0_12px_rgba(212,175,55,0.2)]">Kurapati</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-accent font-bold text-portfolioText/90 tracking-wide">
            {theme === 'cinema' 
              ? 'Full Stack Engineer | Backend & Distributed Systems' 
              : 'Full Stack Player | Scoring Scalable Architectures'}
          </h2>

          <p className="text-lg md:text-xl text-portfolioMuted max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
            {theme === 'cinema' 
              ? 'A curiosity-driven coder crafting bulletproof event-driven SaaS and fintech pipelines. Transforming lines of script into microservice blockbusters.'
              : 'An aggressive coder in the crease, delivering match-winning partnerships between high-throughput NATS/Kafka streams and AWS cloud infrastructure.'}
          </p>

          {/* Social Icons Link List */}
          <div className="flex items-center justify-center lg:justify-start space-x-5 pt-4">
            <a 
              href="https://github.com/Sunil4510" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-portfolioBorder bg-portfolioCard/40 hover:border-portfolioAccent hover:text-portfolioAccent transition-all hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sunil-kurapati-91198a202/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-portfolioBorder bg-portfolioCard/40 hover:border-portfolioAccent hover:text-portfolioAccent transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://leetcode.com/u/Sunil4510/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-portfolioBorder bg-portfolioCard/40 hover:border-portfolioAccent hover:text-portfolioAccent transition-all hover:scale-110 flex items-center space-x-1"
            >
              <span className="text-xs font-accent font-bold">LeetCode</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a 
              href="mailto:skurapatim3100@gmail.com"
              className="p-3 rounded-full border border-portfolioBorder bg-portfolioCard/40 hover:border-portfolioAccent hover:text-portfolioAccent transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Buttons CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
            <button 
              onClick={handleCTAClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-portfolioAccent text-portfolioBg font-accent font-bold tracking-wider hover:bg-portfolioAccentHover hover:shadow-[0_0_15px_var(--portfolio-accent)] hover:scale-105 transition-all text-center uppercase text-sm"
            >
              {theme === 'cinema' ? 'Book Premiere Ticket' : 'Start Match'}
            </button>
            <a 
              href="./Sunil.pdf" 
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-portfolioBorder bg-portfolioCard/50 backdrop-blur-sm text-portfolioText font-accent font-bold tracking-wider hover:border-portfolioAccent hover:scale-105 transition-all text-center flex items-center justify-center space-x-2 uppercase text-sm"
            >
              <Download className="w-4 h-4 text-portfolioAccent" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

        {/* Right Side Theme Slate / Scoreboard */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          {theme === 'cinema' ? (
            /* Cinema Theme: Movie Release Poster */
            <div className="w-full max-w-sm glass rounded-2xl p-6 border-portfolioBorder shadow-glow-gold relative overflow-hidden transition-all hover:rotate-1 hover:scale-102 duration-300">
              <div className="absolute top-0 left-0 right-0 h-2 bg-portfolioAccent" />
              
              <div className="border-b border-portfolioBorder pb-4 mb-4 text-center">
                <span className="text-xs font-accent tracking-widest text-portfolioMuted uppercase">Official Selection 2026</span>
                <h3 className="font-display font-black text-xl text-portfolioAccent mt-1">THE ENGINEER DIARIES</h3>
              </div>

              <div className="space-y-4 font-mono text-sm text-portfolioMuted">
                <div className="flex justify-between border-b border-portfolioBorder/50 pb-2">
                  <span className="text-portfolioAccent">GENRE:</span>
                  <span className="text-portfolioText text-right">Distributed Full Stack</span>
                </div>
                <div className="flex justify-between border-b border-portfolioBorder/50 pb-2">
                  <span className="text-portfolioAccent">RUNTIME:</span>
                  <span className="text-portfolioText">3.5+ Years Experience</span>
                </div>
                <div className="flex justify-between border-b border-portfolioBorder/50 pb-2">
                  <span className="text-portfolioAccent">STARRING:</span>
                  <span className="text-portfolioText text-right">Node, TypeScript, React</span>
                </div>
                <div className="flex justify-between border-b border-portfolioBorder/50 pb-2">
                  <span className="text-portfolioAccent">PROD CO:</span>
                  <span className="text-portfolioText text-right">Neokred | Facctum</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-portfolioAccent">RATING:</span>
                  <span className="text-portfolioText bg-portfolioAccent/10 text-portfolioAccent px-2 py-0.5 rounded text-xs">A+ Highly Scalable</span>
                </div>
              </div>

              <div className="mt-6 border-t border-dashed border-portfolioBorder/60 pt-4 flex flex-col items-center justify-center text-center">
                <span className="text-[10px] tracking-widest font-mono text-portfolioMuted">ADMIT ONE | PREMIUM EDITION</span>
                <div className="w-full bg-portfolioText/5 py-1 px-4 rounded mt-2 border border-portfolioBorder/30">
                  <span className="font-mono text-sm tracking-widest text-portfolioAccent font-bold">★★★ BEST IN CODE ★★★</span>
                </div>
              </div>
            </div>
          ) : (
            /* Cricket Theme: Live Stadium Scoreboard */
            <div className="w-full max-w-sm bg-gradient-to-b from-[#1b2e22] to-[#121f17] border border-portfolioBorder rounded-2xl p-6 shadow-glow-green relative overflow-hidden transition-all hover:-rotate-1 hover:scale-102 duration-300">
              <div className="absolute top-0 left-0 right-0 h-2 bg-portfolioAccent animate-pulse" />
              
              <div className="border-b border-portfolioBorder/80 pb-4 mb-4 flex justify-between items-center">
                <span className="font-mono text-xs text-portfolioAccent font-bold uppercase tracking-wider animate-pulse">● LIVE SCOREBOARD</span>
                <span className="bg-portfolioAccent/20 text-portfolioAccent text-xs px-2 py-0.5 rounded font-mono font-bold">1ST INNINGS</span>
              </div>

              <div className="space-y-5">
                <div className="flex justify-between items-end border-b border-portfolioBorder/40 pb-3">
                  <div>
                    <h3 className="font-accent font-bold text-sm text-portfolioMuted uppercase">BATTER</h3>
                    <p className="font-accent font-black text-2xl text-portfolioText">Sunil Kurapati</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-black text-3xl text-portfolioAccent">3.5* <span className="text-xs text-portfolioMuted">Yrs</span></p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-[#0e1612] p-2.5 rounded-xl border border-portfolioBorder/30">
                    <span className="font-mono text-xs text-portfolioMuted block">STRIKE RATE</span>
                    <span className="font-mono font-black text-xl text-portfolioText">155.4</span>
                    <span className="text-[10px] text-portfolioMuted block">commits/mo</span>
                  </div>
                  <div className="bg-[#0e1612] p-2.5 rounded-xl border border-portfolioBorder/30">
                    <span className="font-mono text-xs text-portfolioMuted block">BAT AVERAGE</span>
                    <span className="font-mono font-black text-xl text-portfolioText">99.9%</span>
                    <span className="text-[10px] text-portfolioMuted block">server uptime</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono border-t border-portfolioBorder/40 pt-4">
                  <div>
                    <span className="text-portfolioMuted block">NATS/KAFKA</span>
                    <span className="text-portfolioAccent font-bold">4s (BOUNDARIES)</span>
                  </div>
                  <div>
                    <span className="text-portfolioMuted block">K8S/AWS</span>
                    <span className="text-portfolioAccent font-bold">6s (MAXIMUMS)</span>
                  </div>
                  <div>
                    <span className="text-portfolioMuted block">WICKET STATUS</span>
                    <span className="text-portfolioAccent font-bold">NOT OUT</span>
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
