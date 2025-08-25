import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Nunito_Sans } from 'next/font/google'
<<<<<<< HEAD
import { Footer } from '@/components/footer';
=======
import HomeFooter from '@/components/home-footer'
import { ThemeProvider } from '@/components/theme-provider'
>>>>>>> origin/master

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Design Dile',
  description: 'A premium design agency.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={`font-sans antialiased ${nunitoSans.variable}`}>
<<<<<<< HEAD
        {children}
        <Toaster />
        <Footer />
=======
        <ThemeProvider>
          {children}
          <HomeFooter />
          <Toaster />
        </ThemeProvider>
>>>>>>> origin/master
      </body>
    </html>
  );
}
