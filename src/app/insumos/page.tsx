import { Search, MapPin, Filter, Star, Zap, DollarSign } from 'lucide-react';
import Link from 'next/link';
import styles from '@/styles/Insumos.module.css';

const mockInsumos = [
    {
        id: 101,
        title: 'Fertilizante NPK 10-20-10 (Alta Concentração)',
        supplier: 'Química Verde S.A.',
        description: 'Fórmula de nutrição para fase de crescimento. Saco de 50kg.',
        basePrice: 150,
        priceUnit: '/ saco',
        rating: 4.7,
        reviews: 55,
        distance: 15,
        seal: 'OURO',
        category: 'Fertilizante',
    },
    {
        id: 102,
        title: 'Semente de Soja (Cultivar Premium)',
        supplier: 'AgroSeeds Paraná',
        description: 'Alta produtividade e resistência a nematoides. Saco de 45kg.',
        basePrice: 350,
        priceUnit: '/ saco',
        rating: 4.9,
        reviews: 120,
        distance: 30,
        seal: 'OURO',
        category: 'Semente',
    },
    {
        id: 103,
        title: 'Herbicida (Pós-emergente)',
        supplier: 'Defensivos Campo Forte',
        description: 'Amplo espectro de controle de plantas daninhas. Galão de 5L.',
        basePrice: 950,
        priceUnit: '/ galão',
        rating: 4.5,
        reviews: 35,
        distance: 70,
        seal: 'PRATA',
        category: 'Defensivo',
    },
];

function InsumoCard({ insumo }: { insumo: typeof mockInsumos[0] }) {
    return (
        <div className={styles.insumoCard}>
            <div className={styles.infoColumn}>
                <h3 className={styles.title}>
                    <Link href={`/insumos/${insumo.id}`}>{insumo.title}</Link>
                </h3>
                <span className={styles.supplier}>Fornecedor: {insumo.supplier}</span>

                <div className={styles.metaRow}>
                    <span className={styles.sealTag}>
                        <Zap size={14} style={{ marginRight: 4 }} /> Selo {insumo.seal}
                    </span>
                    <span className={styles.location}>
                        <MapPin size={14} style={{ marginRight: 4 }} /> {insumo.distance} km de você
                    </span>
                    <span className={styles.categoryTag}>
                        {insumo.category}
                    </span>
                </div>

                <p className={styles.description}>{insumo.description}</p>
            </div>

            <div className={styles.priceColumn}>
                <div className={styles.ratingBox}>
                    <Star size={16} color="#D97706" /> {insumo.rating} ({insumo.reviews})
                </div>
                <div className={styles.priceValue}>
                    R$ {insumo.basePrice} <span className={styles.priceUnit}>{insumo.priceUnit}</span>
                </div>
                <Link href={`/insumos/${insumo.id}`} className={styles.detailButton}>
                    Ver Detalhes e Pedir
                </Link>
            </div>
        </div>
    );
}

export default function InsumosPage() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.searchBar}>
                <div className={`container ${styles.searchLayout}`}>
                    <div className={styles.inputGroup}>
                        <Search size={20} className={styles.icon} />
                        <input
                            type="text"
                            placeholder="Buscar por nome do insumo ou princípio ativo..."
                            className={styles.searchInput}
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <MapPin size={20} className={styles.icon} />
                        <input
                            type="text"
                            placeholder="Entrega em (Ex: Maringá - PR)"
                            className={styles.searchInput}
                        />
                    </div>
                    <button className={styles.searchButton}>
                        <DollarSign size={18} /> Buscar
                    </button>
                </div>
            </div>

            <div className={`container ${styles.marketplaceLayout}`}>
                <aside className={styles.filterSidebar}>
                    <div className={styles.filterHeader}>
                        <Filter size={20} />
                        <h2>Filtros</h2>
                    </div>
                    <hr className={styles.divider} />

                    <div className={styles.filterGroup}>
                        <h3>Categoria</h3>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" name="category" value="semente" /> Sementes
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" name="category" value="fertilizante" /> Fertilizantes
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" name="category" value="defensivo" /> Defensivos
                        </label>
                    </div>

                    <div className={styles.filterGroup}>
                        <h3>Certificação do Fornecedor</h3>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" name="seal" value="ouro" /> Selo Ouro
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" name="seal" value="prata" /> Selo Prata
                        </label>
                    </div>

                    <div className={styles.filterGroup}>
                        <h3>Avaliação Mínima</h3>
                        <div className={styles.ratingSlider}>
                            <input type="range" min="3.0" max="5.0" step="0.5" defaultValue="4.0" className={styles.sliderInput} />
                            <span className={styles.ratingValue}>4.0 <Star size={16} color="#D97706" /></span>
                        </div>
                    </div>

                    <button className={styles.applyButton}>Aplicar Filtros</button>
                </aside>

                <section className={styles.insumoList}>
                    {mockInsumos.map(insumo => (
                        <InsumoCard key={insumo.id} insumo={insumo} />
                    ))}

                    <div className={styles.placeholderText}>
                        <p>Exibindo 3 de 15 resultados encontrados.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}