'use client';

import { useState } from 'react';
import { CheckCircle, Leaf } from 'lucide-react';
import styles from '@/styles/Auth.module.css';
import { useSearchParams } from 'next/navigation';

const LoginForm: React.FC = () => (
    <>
        <h2 className={styles.formTitle}>Acesse sua Conta</h2>
        <p className={styles.formSubtitle}>Entre com seu e-mail e senha.</p>

        <div className={styles.inputGroup}>
            <input type="email" placeholder="E-mail" className={styles.input} required />
        </div>

        <div className={styles.inputGroup}>
            <input type="password" placeholder="Senha" className={styles.input} required />
        </div>

        <div className={styles.formActions}>
            <a href="#" className={styles.forgotPassword}>Esqueceu sua senha?</a>
        </div>

        <button type="submit" className={styles.authButton}>
            Entrar no Agro-Connect
        </button>
    </>
);

const RegisterForm: React.FC = () => (
    <>
        <h2 className={styles.formTitle}>Crie sua Conta</h2>
        <p className={styles.formSubtitle}>Cadastre-se para começar a negociar.</p>

        <div className={styles.inputGroup}>
            <input type="text" placeholder="Nome Completo / Razão Social" className={styles.input} required />
        </div>

        <div className={styles.inputGroup}>
            <input type="email" placeholder="E-mail" className={styles.input} required />
        </div>

        <div className={styles.inputGroup}>
            <input type="password" placeholder="Crie uma Senha" className={styles.input} required />
        </div>

        <div className={styles.checkboxGroup}>
            <input type="checkbox" id="terms" required />
            <label style={{ marginLeft: 10 }} htmlFor="terms">Eu concordo com os Termos de Serviço</label>
        </div>

        <button type="submit" className={styles.authButton} style={{ backgroundColor: 'var(--color-secondary)' }}>
            <CheckCircle size={20} style={{ marginRight: 8 }} />
            Cadastrar
        </button>
    </>
);

export default function AuthPage() {
    const searchParams = useSearchParams();
    const initialTab = searchParams.get('tab');

    const [isLogin, setIsLogin] = useState(initialTab !== 'register');

    return (
        <div className={styles.authContainer}>

            <div className={styles.centralCard}>
                <div className={styles.identityHeader}>
                    <Leaf size={36} className={styles.identityIcon} />
                    <h1 className={styles.identityTitle}>Agro-Connect</h1>
                </div>

                <div className={styles.switchTabs}>
                    <button
                        onClick={() => setIsLogin(true)}
                        className={isLogin ? styles.activeTab : styles.inactiveTab}
                    >
                        LOGIN
                    </button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={!isLogin ? styles.activeTab : styles.inactiveTab}
                    >
                        CADASTRO
                    </button>
                </div>

                <form className={styles.authForm} onSubmit={(e) => e.preventDefault()}>
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                </form>

                <div className={styles.socialAuth}>
                    <p>Ou continue com:</p>
                    <div className={styles.socialButtonsContainer}>
                        <button className={styles.socialButton}>Google</button>
                        <button className={styles.socialButton}>Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
}