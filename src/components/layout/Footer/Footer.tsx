import Link from 'next/link';
import { MapPin, Phone, Mail, Leaf } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contentWrapper}>
                <div className={styles.column}>
                    <h3 className={styles.logo}>
                        <Leaf size={30} className={styles.logoIcon} />
                        Agro-Connect
                    </h3>
                    <p className={styles.mission}>
                        O Hub de Negócios B2B para o agronegócio. Conectando produtores, serviços e insumos com eficiência e transparência.
                    </p>
                </div>

                <div className={styles.column}>
                    <h4>Marketplace</h4>
                    <nav className={styles.nav}>
                        <Link href="/servicos">Serviços</Link>
                        <Link href="/insumos">Insumos Ociosos</Link>
                        <Link href="/fretes">Bidding de Fretes</Link>
                        <Link href="/dashboard">Painel do Usuário</Link>
                    </nav>
                </div>

                <div className={styles.column}>
                    <h4>Suporte</h4>
                    <nav className={styles.nav}>
                        <Link href="/ajuda">FAQ e Ajuda</Link>
                        <Link href="/termos">Termos de Uso</Link>
                        <Link href="/privacidade">Política de Privacidade</Link>
                        <Link href="/certificacao">Certificação (Selo Ouro)</Link>
                    </nav>
                </div>

                <div className={styles.column}>
                    <h4>Contato</h4>
                    <p className={styles.contactItem}><MapPin size={16} /> <span>Maringá, Paraná - Brasil</span></p>
                    <p className={styles.contactItem}><Phone size={16} /> <span>(44) 9XXXX-XXXX</span></p>
                    <p className={styles.contactItem}><Mail size={16} /> <span>suporte@agroconnectpr.com.br</span></p>
                </div>

            </div>

            <div className={styles.copyrightBar}>
                <div className={styles.contentWrapper}>
                    <p className={styles.copy}>
                        &copy; {new Date().getFullYear()} Agro-Connect. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;