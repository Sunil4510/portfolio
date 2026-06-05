'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Clapperboard, Award } from 'lucide-react';

export default function Contact({ theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="relative py-16 border-t border-portfolioBorder/40">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight">
          {theme === 'cinema' ? "Post-Credits Scene" : "Press Conference"}
        </h2>
        <p className="text-portfolioAccent font-accent font-semibold tracking-widest text-sm uppercase mt-2">
          {theme === 'cinema' ? "Book Premiere Seats / Get In Touch" : "Post-Match Interview / Team Scouting"}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
        
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="glass border border-portfolioBorder rounded-2xl p-6 md:p-8 space-y-8 flex-1 flex flex-col justify-center">
            
            <div className="flex items-center space-x-3 text-portfolioAccent pb-4 border-b border-portfolioBorder/30">
              <MessageSquare className="w-6 h-6" />
              <h3 className="font-accent font-black text-lg uppercase tracking-wider">Contact Info</h3>
            </div>

            <div className="space-y-6 font-sans">
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-portfolioAccent/15 text-portfolioAccent rounded-xl border border-portfolioBorder/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-portfolioMuted block font-mono">EMAIL ADDRESS</span>
                  <a href="mailto:skurapatim3100@gmail.com" className="font-semibold text-portfolioText hover:text-portfolioAccent transition-colors">
                    skurapatim3100@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-portfolioAccent/15 text-portfolioAccent rounded-xl border border-portfolioBorder/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-portfolioMuted block font-mono">PHONE NUMBER</span>
                  <a href="tel:+919923838812" className="font-semibold text-portfolioText hover:text-portfolioAccent transition-colors">
                    +91 99238 38812
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-portfolioAccent/15 text-portfolioAccent rounded-xl border border-portfolioBorder/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-portfolioMuted block font-mono">CURRENT BASE</span>
                  <span className="font-semibold text-portfolioText">
                    Bengaluru, India
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="lg:col-span-7">
          <div className="glass border border-portfolioBorder rounded-2xl p-6 md:p-8 relative overflow-hidden h-full flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-portfolioAccent" />
            
            {/* Ticket Tear Notch details for Cinema Theme */}
            {theme === 'cinema' && (
              <>
                <div className="absolute -left-3 top-1/2 w-6 h-6 rounded-full bg-portfolioBg border-r border-portfolioBorder -translate-y-1/2" />
                <div className="absolute -right-3 top-1/2 w-6 h-6 rounded-full bg-portfolioBg border-l border-portfolioBorder -translate-y-1/2" />
              </>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="space-y-1">
                <label className="text-xs font-mono text-portfolioMuted uppercase tracking-wider" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder={theme === 'cinema' ? "e.g. Lead Producer" : "e.g. Head Coach"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-portfolioBg border border-portfolioBorder text-portfolioText focus:outline-none focus:border-portfolioAccent transition-colors font-sans text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-portfolioMuted uppercase tracking-wider" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-portfolioBg border border-portfolioBorder text-portfolioText focus:outline-none focus:border-portfolioAccent transition-colors font-sans text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-portfolioMuted uppercase tracking-wider" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  placeholder={theme === 'cinema' ? "Describe your screenplay/project details..." : "Describe the squad role / contract scope..."}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-portfolioBg border border-portfolioBorder text-portfolioText focus:outline-none focus:border-portfolioAccent transition-colors font-sans text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-portfolioAccent text-portfolioBg font-accent font-black tracking-widest uppercase hover:bg-portfolioAccentHover transition-all flex items-center justify-center space-x-2 text-sm shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>{theme === 'cinema' ? "Submit Ticket" : "Send Press Pitch"}</span>
              </button>

              {isSubmitted && (
                <div className="p-3 bg-portfolioAccent/10 border border-portfolioAccent text-portfolioAccent text-center text-xs font-mono rounded-xl animate-pulse">
                  ✓ Pitch sent successfully! Sunil will return your call in 24 hours.
                </div>
              )}

            </form>
          </div>
        </div>

      </div>

      {/* Footer Credentials */}
      <footer className="mt-20 border-t border-portfolioBorder/45 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-portfolioMuted">
        <p>© 2026 Sunil Kurapati. All Rights Reserved.</p>
        
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          {theme === 'cinema' ? (
            <Clapperboard className="w-4 h-4 text-portfolioAccent" />
          ) : (
            <Award className="w-4 h-4 text-portfolioAccent" />
          )}
          <span>Designed with ❤️ from Bengaluru</span>
        </div>
      </footer>

    </div>
  );
}
