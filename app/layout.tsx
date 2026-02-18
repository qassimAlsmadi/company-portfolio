import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import ClientPageTransition from './ClientPageTransition';
import { LangProvider } from './components/LangProvider';
import { ThemeProvider } from './components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Qasim Al-Smadi | Backend Developer & AI Automation Specialist',
  description:
    'Professional Backend Developer specializing in PHP, Laravel, Node.js, and AI automation with N8N. Expert in API development, database management, and creating scalable backend solutions with artificial intelligence integration.',
  keywords: [
    'Backend Developer',
    'AI Automation Specialist',
    'N8N Expert',
    'PHP Developer',
    'Laravel Developer',
    'Node.js Developer',
    'API Development',
    'Database Management',
    'AI Integration',
    'Machine Learning',
    'DevOps Engineer',
    'Python Developer',
    'REST APIs',
    'GraphQL',
    'Backend Architecture',
  ],
  authors: [{ name: 'Qasim Al-Smadi' }],
  openGraph: {
    title: 'Backend Developer & AI Automation Specialist | Qasim Al-Smadi',
    description:
      'Expert Backend Developer and AI Automation Specialist. Specializing in PHP, Laravel, Node.js, N8N automation, and creating intelligent backend solutions with artificial intelligence integration.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='en'
      dir='ltr'
    >
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          name='theme-color'
          content='#3b82f6'
        />
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
      </head>
      <body className='antialiased'>
        <ThemeProvider>
          <LangProvider>
            <ClientPageTransition>{children}</ClientPageTransition>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
