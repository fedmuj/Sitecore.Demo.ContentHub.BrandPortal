import type { Metadata } from 'next';
import { Saira } from 'next/font/google';
import '@/styles/index.css';
import Header from './components/Header';

const saira = Saira({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LamdaDev Tenants Portal',
  description: 'A one-stop-portal for all LamdaDev Campaigns and Content',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={saira.className}>{children}</body>
    </html>
  );
}
