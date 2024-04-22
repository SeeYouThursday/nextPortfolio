import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import HomeBtns from './_components/Nav/HomeNav';
import { Menu, MenuItem } from './_components/Nav/Nav-Menu/navbar-menu';
import NavbarFull from '@/app/_components/Nav/Whole-Nav';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Brian Galyen's Portfolio",
  description: 'Generated using Nextjs.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavbarFull />
        </header>
        <Providers>{children}</Providers>
        <div className="flex justify-center items-end">
          <HomeBtns />
        </div>
      </body>
    </html>
  );
}
