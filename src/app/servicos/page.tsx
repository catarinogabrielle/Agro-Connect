import ServiceCard from '@/components/marketplace/ServiceCard/ServiceCard';
import { Search, MapPin, Filter, Star, DollarSign } from 'lucide-react';
import styles from '@/styles/Servicos.module.css';
import { ServiceItem } from '@/lib/types';

const mockServices: ServiceItem[] = [
    {
        id: 1,
        title: 'Colheita de Soja - John Deere S790',
        provider: 'AgroFazenda Sol',
        basePrice: 350,
        priceUnit: 'R$ 350 / hectare',
        rating: 4.8,
        reviews: 120,
        distance: 45,
        seal: 'OURO',
        description: 'Colheitadeira de alta capacidade, com telemetria e agricultura de precisão (AP) embarcada.',
    },
    {
        id: 2,
        title: 'Pulverização com Drone - Agras T30',
        provider: 'Maringá Drones',
        basePrice: 80,
        priceUnit: 'R$ 80 / hectare',
        rating: 4.9,
        reviews: 85,
        distance: 15,
        seal: 'PRATA',
        description: 'Drone de pulverização de precisão.'
    },
    {
        id: 3,
        title: 'Trator Plantio Direto (200HP)',
        provider: 'Sítio Progresso',
        basePrice: 150,
        priceUnit: 'R$ 150 / hora',
        rating: 4.5,
        reviews: 50,
        distance: 60,
        seal: 'BRONZE',
        description: 'Trator com plantadeira para plantio direto.'
    },
];

export default function ServicesPage() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.searchBar}>
                <div className={`container ${styles.searchLayout}`}>
                    <div className={styles.inputGroup}>
                        <Search size={20} className={styles.icon} />
                        <input
                            type="text"
                            placeholder="Buscar por tipo de serviço ou equipamento..."
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
                    <button className={styles.searchButton}>
                        <DollarSign size={18} /> Buscar
                    </button>
                </div>
            </div>

            <div className={`container ${styles.listingLayout}`}>
                <aside className={styles.filterSidebar}>
                    <div className={styles.filterHeader}>
                        <Filter size={20} />
                        <h2>Filtros</h2>
                    </div>
                    <hr className={styles.divider} />

                    <div className={styles.filterGroup}>
                        <h3>Avaliação Mínima</h3>
                        <div className={styles.ratingSlider}>
                            <input type="range" min="3.0" max="5.0" step="0.5" defaultValue="4.5" className={styles.sliderInput} />
                            <span className={styles.ratingValue}>4.5 <Star size={16} color="#D97706" /></span>
                        </div>
                    </div>

                    <div className={styles.filterGroup}>
                        <h3>Certificação do Prestador</h3>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" name="seal" value="ouro" /> Selo Ouro
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" name="seal" value="prata" /> Selo Prata
                        </label>
                    </div>

                    <div className={styles.filterGroup}>
                        <h3>Categoria de Serviço</h3>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" name="category" value="colheita" /> Colheita
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" name="category" value="plantio" /> Plantio
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" name="category" value="pulverizacao" /> Pulverização
                        </label>
                    </div>

                    <button className={styles.applyButton}>Aplicar Filtros</button>
                </aside>

                <section className={styles.serviceList}>
                    {mockServices.map(service => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                        />
                    ))}
                    <div className={styles.placeholderText}>
                        <p>Exibindo 3 de 8 resultados encontrados.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}