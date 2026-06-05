'use client';

import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Clapperboard, Award, Sparkles } from 'lucide-react';
import { playCricketShot, playCinemaSwell } from '../utils/audio';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ theme, setTheme, isMuted, setIsMuted }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  // Tracking current scrolling section for highlight (Scroll Spy)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 150; // offset
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Audio toggle click handler
  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      if (theme === 'cricket') {
        playCricketShot();
      } else {
        playCinemaSwell();
      }
    }
  };

  const handleScrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-portfolioBg/80 backdrop-blur-md border-b border-portfolioBorder shadow-md' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Brand Logo */}
          <div 
            onClick={() => handleScrollTo('hero')}
            className="flex items-center space-x-2 cursor-pointer font-accent font-bold text-xl tracking-wider text-portfolioAccent hover:scale-105 transition-transform"
          >
            {theme === 'cinema' ? (
              <Clapperboard className="w-5 h-5 animate-pulse" />
            ) : (
              <Award className="w-5 h-5 animate-pulse" />
            )}
            <span>{`<SK />`}</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className={`relative font-accent font-medium text-sm tracking-wide transition-colors py-1 ${
                  activeSection === item.id 
                    ? 'text-portfolioAccent' 
                    : 'text-portfolioMuted hover:text-portfolioText'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-portfolioAccent rounded-full shadow-[0_0_8px_var(--portfolio-accent)]" />
                )}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            
            {/* Audio Toggle Button */}
            <button
              onClick={toggleMute}
              title={isMuted ? "Unmute sound effects" : "Mute sound effects"}
              className={`p-2 rounded-full border border-portfolioBorder hover:bg-portfolioCard transition-all hover:scale-105 ${
                !isMuted ? 'text-portfolioAccent border-portfolioAccent' : 'text-portfolioMuted'
              }`}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 animate-bounce" />}
            </button>

            {/* Cinema vs Cricket Toggle */}
            <button
              onClick={() => setTheme(theme === 'cinema' ? 'cricket' : 'cinema')}
              className="px-3 py-1.5 rounded-full border border-portfolioBorder bg-portfolioCard/50 backdrop-blur-sm text-xs font-bold tracking-wider hover:border-portfolioAccent transition-all flex items-center space-x-2 shadow-inner"
            >
              {theme === 'cinema' ? (
                <>
                  <span>Cinema 🎥</span>
                  <span className="text-portfolioAccent">🍿</span>
                </>
              ) : (
                <>
                  <span>Cricket 🏟️</span>
                  <span className="text-portfolioAccent">🏏</span>
                </>
              )}
            </button>

            {/* Mobile Menu Toggle button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-portfolioMuted hover:text-portfolioText hover:bg-portfolioCard transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 bg-portfolioBg/95 backdrop-blur-lg z-40 border-t border-portfolioBorder px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className={`block w-full text-left py-3 px-4 rounded-xl font-accent font-semibold text-lg transition-all ${
                activeSection === item.id 
                  ? 'bg-portfolioCard text-portfolioAccent border-l-4 border-portfolioAccent' 
                  : 'text-portfolioMuted hover:text-portfolioText hover:bg-portfolioCard/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
