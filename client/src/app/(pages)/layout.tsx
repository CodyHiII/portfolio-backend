import type { Metadata } from 'next';
import { poppins } from '@/fonts';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Personal Portfolio',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${poppins.variable}`}
      style={{ fontFamily: 'var(--primary-font)' }}
    >
      <Header />
      {children}
    </div>
  );
}
