import './globals.css';
import { Suspense } from 'react';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <Suspense fallback={<div>Carregando...</div>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}