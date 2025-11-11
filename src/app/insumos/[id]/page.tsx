import Link from 'next/link';
import { MapPin, Star, Truck, Zap, ClipboardList, Package } from 'lucide-react';
import styles from '@/styles/DetailInsumo.module.css';

const mockInsumoDetail = {
    id: 101,
    title: 'Fertilizante NPK 10-20-10 (Alta Concentração)',
    supplier: 'Química Verde S.A.',
    basePrice: 150.00,
    priceUnit: 'R$ 150 / saco (50kg)',
    rating: 4.7,
    reviews: 55,
    distance: 15,
    seal: 'OURO',
    description: "Fertilizante mineral misto de alta qualidade, ideal para fases de crescimento de grãos e hortaliças. Garante maior absorção de nutrientes e melhora a resistência da planta a estresses ambientais. Disponível em sacos de 50kg, paletizados.",
    details: [
        'Composição: 10% Nitrogênio (N), 20% Fósforo (P), 10% Potássio (K)',
        'Forma: Granulado',
        'Embalagem: Saco de 50kg (Paletização disponível para grandes volumes)',
        'Garantia: Pureza mínima de 98%',
    ],
    deliveryOptions: [
        'Frete Expresso (2 dias) para PR e SP',
        'Retirada no Centro de Distribuição em Maringá (PR)',
        'Rastreamento completo do pedido.',
    ],
    mainImage: 'https://storage.googleapis.com/images-cultivar/442ebaed-01fe-447e-9d24-36a47683d1b8.jpg',
};

export default function InsumoDetailPage({ params }: { params: { id: string } }) {
    const insumo = mockInsumoDetail;

    return (
        <div className={styles.pageWrapper}>
            <div className={`container ${styles.detailLayout}`}>
                <div className={styles.mainContent}>
                    <div className={styles.imageGallery}>
                        <div className={styles.mainImage}>
                            <img src={insumo.mainImage} alt={insumo.title} />
                        </div>

                        <div className={styles.thumbnailList}>
                            <div className={styles.thumbnail}><img src={insumo.mainImage} alt="thumbnail 1" /></div>
                            <div className={styles.thumbnail}><img src={insumo.mainImage} alt="thumbnail 2" /></div>
                            <div className={styles.thumbnail}><img src={insumo.mainImage} alt="thumbnail 3" /></div>
                        </div>
                    </div>

                    <h1 className={styles.title}>{insumo.title}</h1>

                    <div className={styles.metaRow}>
                        <span className={styles.location}>
                            <MapPin size={16} style={{ marginRight: 4 }} />
                            {insumo.distance} km do Centro de Distribuição
                        </span>
                        <span className={styles.sealTag}>
                            <Zap size={16} style={{ marginRight: 4 }} /> Selo {insumo.seal}
                        </span>
                        <span className={styles.ratingBox}>
                            <Star size={16} color="#D97706" fill="#D97706" style={{ marginRight: 4 }} />
                            {insumo.rating.toFixed(1)} ({insumo.reviews} avaliações)
                        </span>
                    </div>

                    <div className={styles.section}>
                        <h2>Descrição do Produto</h2>
                        <p>{insumo.description}</p>
                    </div>

                    <div className={styles.section}>
                        <h2><ClipboardList size={20} style={{ marginRight: 8 }} /> Especificações Técnicas</h2>
                        <ul className={styles.specsList}>
                            {insumo.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2><Truck size={20} style={{ marginRight: 8 }} /> Opções de Entrega e Logística</h2>
                        <ul className={styles.deliveryList}>
                            {insumo.deliveryOptions.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                    </div>

                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.priceBox}>
                        <p className={styles.priceLabel}>Preço Base</p>
                        <p className={styles.priceValue}>{insumo.priceUnit}</p>
                        <p className={styles.provider}>Fornecedor: {insumo.supplier}</p>
                    </div>

                    <div className={styles.quoteSection}>
                        <h3>Solicitar Cotação</h3>
                        <p className={styles.quoteSubtitle}>Preencha abaixo para receber um orçamento personalizado com frete.</p>

                        <div className={styles.inputGroup}>
                            <label htmlFor="quantity">Quantidade Desejada (Sacos/Litros/Unidades)</label>
                            <input id="quantity" type="number" placeholder="Ex: 50 sacos ou 500 litros" className={styles.input} />
                        </div>

                        <div className={styles.inputGroup}>
                            <label htmlFor="deliveryLocation">Local de Entrega (CEP / Endereço)</label>
                            <input id="deliveryLocation" type="text" placeholder="CEP ou cidade da fazenda" className={styles.input} />
                        </div>

                        <button className={styles.quoteButton}>
                            <Package size={20} style={{ marginRight: 8 }} /> Enviar Pedido de Cotação
                        </button>

                        <p className={styles.infoText}>
                            Atenção: Esta é uma solicitação de orçamento. A confirmação de preço e estoque será enviada pelo fornecedor.
                        </p>
                    </div>

                    <Link href={`/fornecedores/${insumo.supplier}`} className={styles.viewProviderButton}>
                        Ver Perfil Completo do Fornecedor
                    </Link>
                </aside>

            </div>
        </div>
    );
}