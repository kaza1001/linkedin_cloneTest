import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='flex min-h-screen flex-col'>
          {/* TOaster */}

          <header className='sticky top-0 z-50 border-b bg-white'>
            <Header />
          </header>

          <div className='bg-[#F4F2ED] flex-1 w-full'>
            <main>{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
