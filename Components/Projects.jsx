'use client';

import { Github, ExternalLink, Film, Award, Star, Activity, Search, Play, Cloud, Music } from 'lucide-react';
import { playAchievementSound } from '../utils/audio';

export default function Projects({ theme, isMuted }) {
  const projects = [
    {
      id: 1,
      title: 'Hulu Clone',
      description: 'Gives latest movies and web-series information with ratings and short descriptions, fetched dynamically.',
      tech: ['React.js', 'Next.js', 'Tailwind CSS', 'TMDB API'],
      live: 'https://hulu-clone-phi-rust.vercel.app/',
      repo: 'https://github.com/Sunil4510/Hulu_Clone',
      rating: '4.8',
      partnershipRuns: '145 Runs',
      genre: 'Entertainment / Media',
      icon: Film
    },
    {
      id: 2,
      title: 'Spotify Clone',
      description: 'Responsive audio streaming dashboard UI loaded with top artist cards, track layouts, and functional player.',
      tech: ['React.js', 'Tailwind CSS', 'Web Audio API', 'Node.js'],
      live: 'https://music-spotify-player.herokuapp.com/',
      repo: 'https://github.com/Sunil4510/Spotify-music',
      rating: '4.7',
      partnershipRuns: '138 Runs',
      genre: 'Music / Streaming',
      icon: Music
    },
    {
      id: 3,
      title: 'Covid-19 Tracker',
      description: 'Real-time dashboard for worldwide tracking of active virus cases, deaths, and recoveries with analytics charts.',
      tech: ['React.js', 'Firebase', 'Chart.js', 'REST APIs'],
      live: 'https://covid-tracker-b70de.web.app/',
      repo: 'https://github.com/Sunil4510',
      rating: '4.6',
      partnershipRuns: '110 Runs',
      genre: 'Medical / Analytics',
      icon: Activity
    },
    {
      id: 4,
      title: 'Google Clone',
      description: 'High-fidelity search engine clone supporting full search query mapping, instant results, and image searches.',
      tech: ['React.js', 'Tailwind CSS', 'Google Search API'],
      live: 'https://clone-a1ba1.web.app/',
      repo: 'https://github.com/Sunil4510/Google-clone',
      rating: '4.5',
      partnershipRuns: '95 Runs',
      genre: 'Utility / Search',
      icon: Search
    },
    {
      id: 5,
      title: 'Weather Report',
      description: 'Accurate weather reporting web application providing real-time local forecasts for cities worldwide.',
      tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeather API'],
      live: 'https://sunil4510.github.io/Weather/',
      repo: 'https://github.com/Sunil4510/Weather',
      rating: '4.4',
      partnershipRuns: '88 Runs',
      genre: 'Utility / Geo',
      icon: Cloud
    }
  ];

  const handleCardHover = () => {
    if (!isMuted) {
      playAchievementSound(theme === 'cricket');
    }
  };

  return (
    <div className="relative py-16 border-t border-portfolioBorder/40">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight">
          {theme === 'cinema' ? "Featured Releases" : "Great Partnerships"}
        </h2>
        <p className="text-portfolioAccent font-accent font-semibold tracking-widest text-sm uppercase mt-2">
          {theme === 'cinema' ? "Blockbuster Applications & Side Projects" : "Match Winning Innings & Side Projects"}
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => {
          const IconComp = proj.icon;

          return (
            <div 
              key={proj.id}
              onMouseEnter={handleCardHover}
              className="glass rounded-2xl border border-portfolioBorder/60 overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:scale-103 group relative min-h-[380px]"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-portfolioAccent" />

              <div className="p-6 space-y-4">
                
                <div className="flex justify-between items-center text-xs font-mono text-portfolioMuted">
                  <span className="bg-portfolioAccent/10 text-portfolioAccent px-2.5 py-1 rounded-full uppercase tracking-wider font-bold">
                    {theme === 'cinema' ? proj.genre : `Proj ID: ${proj.id}`}
                  </span>
                  <div className="flex items-center space-x-1">
                    {theme === 'cinema' ? (
                      <>
                        <Star className="w-3.5 h-3.5 text-portfolioAccent fill-portfolioAccent" />
                        <span className="font-bold text-portfolioText">{proj.rating}/5</span>
                      </>
                    ) : (
                      <>
                        <Award className="w-3.5 h-3.5 text-portfolioAccent" />
                        <span className="font-bold text-portfolioText">{proj.partnershipRuns}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-lg bg-portfolioAccent/15 text-portfolioAccent">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-accent font-black text-xl text-portfolioText leading-tight">
                    {proj.title}
                  </h3>
                </div>

                <p className="text-sm text-portfolioMuted leading-relaxed font-sans">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-portfolioCard/70 border border-portfolioBorder/30 text-portfolioText/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              <div className="p-6 border-t border-portfolioBorder/30 bg-portfolioCard/20 flex items-center justify-between">
                
                <a 
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-accent font-bold uppercase tracking-wider text-portfolioAccent hover:text-portfolioText hover:scale-105 transition-all"
                >
                  <Play className="w-3.5 h-3.5 text-portfolioAccent fill-portfolioAccent" />
                  <span>{theme === 'cinema' ? "Watch Trailer" : "Watch Live"}</span>
                </a>

                {proj.repo && (
                  <a 
                    href={proj.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-accent font-bold uppercase tracking-wider text-portfolioMuted hover:text-portfolioAccent hover:scale-105 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>{theme === 'cinema' ? "Screenplay" : "Scorecard"}</span>
                  </a>
                )}

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
