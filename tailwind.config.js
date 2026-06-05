module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        portfolioBg: 'var(--portfolio-bg)',
        portfolioCard: 'var(--portfolio-card)',
        portfolioText: 'var(--portfolio-text)',
        portfolioMuted: 'var(--portfolio-muted)',
        portfolioAccent: 'var(--portfolio-accent)',
        portfolioAccentHover: 'var(--portfolio-accent-hover)',
        portfolioBorder: 'var(--portfolio-border)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        accent: ['var(--font-accent)', 'sans-serif'],
        display: ['var(--font-display)', 'serif']
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.15)',
        'glow-green': '0 0 20px rgba(82, 183, 136, 0.15)',
      }
    },
  },
  plugins: [],
}