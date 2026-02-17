import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import ClientPageTransition from './ClientPageTransition';
import { LangProvider } from './components/LangProvider';

export const metadata: Metadata = {
  title: 'Qasim Al-Smadi | AI-Assisted Graphic Designer | Visual Storyteller',
  description:
    'Creative Graphic Designer specializing in AI-powered design solutions. Leveraging MidJourney, DALL·E, and AI tools to create stunning brand identities, digital designs, and visual experiences.',
  keywords: [
    'AI-Assisted Graphic Designer',
    'Visual Storyteller',
    'Brand Identity Design',
    'Digital Design',
    'AI Design Tools',
    'MidJourney Designer',
    'DALL·E Artist',
    'Motion Graphics',
    'Visual Branding',
    'Creative Direction',
    'AI-Powered Design',
    'Modern Graphic Design',
  ],
  authors: [{ name: 'Qasim Al-Smadi' }],
  openGraph: {
    title: 'AI-Assisted Graphic Designer Portfolio | Qasim Al-Smadi',
    description:
      'Transforming ideas into visual excellence with AI-powered design. Specializing in brand identity, digital design, and creative direction using cutting-edge AI tools.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body className='bg-slate-950 text-white'>
        <LangProvider>
          <ClientPageTransition>{children}</ClientPageTransition>
        </LangProvider>
      </body>
    </html>
  );
}
