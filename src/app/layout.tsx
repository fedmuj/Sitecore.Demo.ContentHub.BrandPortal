import type { Metadata } from 'next';
import { Saira } from 'next/font/google';
import '@/styles/index.css';
import Header from './components/Header';

const saira = Saira({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PLAY! Brands Portal',
  description: 'A one-stop-shop for all PLAY! Brand Guidelines',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={saira.className}>{children}</body>
    </html>
  );
}
