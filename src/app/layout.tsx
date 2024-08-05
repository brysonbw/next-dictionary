import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StoreProvider from './StoreProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dictionary | Home',
  description:
    'Search for word definitions. Find detailed meanings, synonyms, antonyms, and more to enhance your vocabulary and understanding of language.',
  // Open Graph Metadata
  openGraph: {
    title: 'Dictionary | Home',
    description:
      'Search for word definitions. Find detailed meanings, synonyms, antonyms, and more to enhance your vocabulary and understanding of language.',
    url: 'https://next-dictionary-app.vercel.app/',
    images: [
      {
        url: 'https://res.cloudinary.com/ddlhtsgmp/image/upload/v1722821033/dictionary_app.png',
      },
    ],
    type: 'website',
  },
  // Twitter Card Metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Dictionary | Home',
    description:
      'Search for word definitions. Find detailed meanings, synonyms, antonyms, and more to enhance your vocabulary and understanding of language.',
    images: [
      {
        url: 'https://res.cloudinary.com/ddlhtsgmp/image/upload/v1722821033/dictionary_app.png',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className="flex flex-col items-center justify-center min-h-screen">
            {/** Navbar */}
            <Navbar />
            {/** Main Content */}
            <div className="main-container">{children}</div>
            {/** Footer */}
            <Footer />
          </main>
          {/** Toast Notify */}
          <Toaster />
        </body>
      </html>
    </StoreProvider>
  );
}
