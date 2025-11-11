import { Suspense } from 'react';
import React from 'react';

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Suspense fallback={
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--color-primary-dark)' }}>
                Carregando formulário de autenticação...
            </div>
        }>
            {children}
        </Suspense>
    );
}