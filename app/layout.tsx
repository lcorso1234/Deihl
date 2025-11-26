import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deihl',
  description: 'Next.js + Tailwind starter',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
