import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import Nav from './_components/Nav/';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Brian Galyen's Portfolio",
  description: 'Generated using Nextjs.',
  icons: {
    icon: '/favicon_io/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <div className="flex justify-center">
          <Providers>{children}</Providers>
        </div>
        {/* <NavbarFull /> */}
      </body>
    </html>
  );
}
