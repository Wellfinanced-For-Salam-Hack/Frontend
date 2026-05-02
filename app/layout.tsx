import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, Familjen_Grotesk } from 'next/font/google';
import '@/app/globals.css';
import BottomNav from '@/components/layout/BottomNav';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display'
});

const body = Familjen_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'WellFinanced',
  description: 'Financial advisor PWA',
  applicationName: 'WellFinanced',
  appleWebApp: {
    capable: true,
    title: 'WellFinanced',
    statusBarStyle: 'black-translucent'
  }
};

export const viewport: Viewport = {
  themeColor: '#0b0f1f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover'
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <div className="app-shell">
          <main className="main-content">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
