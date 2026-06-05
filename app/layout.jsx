import { Inter, Outfit } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata = {
  title: 'Sunil Kurapati | Full Stack & Distributed Systems Engineer',
  description: 'Portfolio of Sunil Kurapati, a Software Engineer specializing in building scalable SaaS, fintech platforms, and event-driven distributed architectures.',
  keywords: 'Full Stack Developer, Distributed Systems, Software Engineer, Node.js, Next.js, Kafka, NATS, Kubernetes, Bengaluru',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
