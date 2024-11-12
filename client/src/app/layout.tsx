import type { Metadata } from 'next';
import './globals.css';
import { poppins } from '@/fonts';
import Header from '@/components/Header.tsx';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
