import './globals.css';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agro-Connect',
  description: 'Conectando o campo à tecnologia. Encontre os melhores serviços, insumos e fretes com inteligência e proximidade.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}