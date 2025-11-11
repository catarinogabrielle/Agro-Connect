import Link from 'next/link';
import { Search, MapPin } from 'lucide-react';
import styles from './page.module.css';

function SearchForm() {
  return (
    <form className={styles.searchForm}>
      <div className={styles.inputGroup}>
        <Search size={20} className={styles.icon} />
        <input
          type="text"
          placeholder="Pesquisar por serviço, insumo ou fazenda..."
          className={styles.searchInput}
        />
      </div>
      <div className={styles.inputGroup}>
        <MapPin size={20} className={styles.icon} />
        <input
          type="text"
          placeholder="Localização (Ex: Maringá - PR)"
          className={styles.searchInput}
        />
      </div>
      <button type="submit" className={styles.searchButton}>
        Buscar
      </button>
    </form>
  );
}

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.heroTitle}>A conexão certa para o seu Agronegócio.</h1>
          <p className={styles.heroSubtitle}>Encontre os melhores serviços, maquinários e insumos, com transparência e rastreabilidade.</p>

          <SearchForm />

          <div className={styles.quickLinks}>
            Buscas Populares:
            <Link href="/servicos?q=colheita" className={styles.quickLink}>Colheita</Link>
            <Link href="/servicos?q=plantio" className={styles.quickLink}>Plantio</Link>
            <Link href="/insumos" className={styles.quickLink}>Fertilizantes</Link>
            <Link href="/fretes" className={styles.quickLink}>Fretes</Link>
          </div>
        </div>
      </section>

      <section className={`container ${styles.valueProps}`}>
        <div className={styles.valueItem}>
          <h2>Preços Transparentes</h2>
          <p>Compare preços otimizados por IA, garantindo sempre o melhor valor do mercado.</p>
        </div>
        <div className={styles.valueItem}>
          <h2>Serviços Certificados</h2>
          <p>Contrate apenas prestadores com Selos Ouro ou Prata, com garantia e SLA.</p>
        </div>
        <div className={styles.valueItem}>
          <h2>Logística Inteligente</h2>
          <p>Busque por prestadores próximos à sua fazenda e reduza o tempo de espera.</p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Você é um Prestador de Serviço?</h2>
          <p>Maximize a utilização da sua frota, encontre demanda em sua região e aumente sua lucratividade.</p>
          <Link href="/registrar" className={styles.ctaButton}>
            Cadastre seu Serviço Agora!
          </Link>
        </div>
      </section>

      <section className={`container ${styles.categorySection}`}>
        <h2>Explore Nossas Principais Categorias</h2>
        <div className={styles.categoryGrid}>
          <Link href="/servicos?cat=preparo-solo" className={styles.categoryCard}>
            <h3>Preparo do Solo</h3>
            <p>Plantadeiras, Arados, Grades.</p>
          </Link>
          <Link href="/servicos?cat=aplicacao" className={styles.categoryCard}>
            <h3>Aplicação</h3>
            <p>Drones, Pulverizadores autopropelidos.</p>
          </Link>
          <Link href="/servicos?cat=colheita" className={styles.categoryCard}>
            <h3>Colheita</h3>
            <p>Colheitadeiras de Grãos e Forrageiras.</p>
          </Link>
          <Link href="/insumos" className={styles.categoryCard}>
            <h3>Insumos</h3>
            <p>Sementes, defensivos e fertilizantes.</p>
          </Link>
        </div>
      </section>

    </div>
  );
}