import { MapPin, Clock, Calendar, Star, Zap, Phone, User, XCircle } from 'lucide-react';
import styles from '@/styles/DetailServicos.module.css';

const mockServiceDetail = {
    id: 1,
    title: 'Colheita de Soja - John Deere S790',
    provider: 'AgroFazenda Sol',
    description: 'Colheitadeira de alta capacidade, com telemetria e agricultura de precisão (AP) embarcada. Selo de Qualidade OURO.',
    basePrice: 350,
    priceUnit: '/ hectare',
    rating: 4.8,
    reviews: 120,
    distance: 45,
    seal: 'OURO',
    iaPriceSuggestion: 335,
    equipmentSpecs: ['250 HP', 'GPS RTK', 'Capacidade 100 ton/dia'],
    images: [
        'https://storage.googleapis.com/images-cultivar/442ebaed-01fe-447e-9d24-36a47683d1b8.jpg',
        'https://storage.googleapis.com/images-cultivar/442ebaed-01fe-447e-9d24-36a47683d1b8.jpg',
        'https://storage.googleapis.com/images-cultivar/442ebaed-01fe-447e-9d24-36a47683d1b8.jpg',
        'https://storage.googleapis.com/images-cultivar/442ebaed-01fe-447e-9d24-36a47683d1b8.jpg',
    ],
    providerDetails: {
        since: 2018,
        contact: '(44) 9XXXX-XXXX',
        totalServices: 450,
    },
    cancellationPolicy: 'Cancelamento gratuito em até 48 horas antes da data agendada. Cancelamentos fora do prazo podem incorrer em multa de 10%.',
};

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
    const service = mockServiceDetail;

    return (
        <div className={styles.pageWrapper}>
            <div className={`container ${styles.detailLayout}`}>
                <section className={styles.mainInfo}>
                    <div className={styles.imageGallery}>
                        <div className={styles.mainImage}>
                            <img src={service.images[0]} alt={service.title} />
                        </div>
                        <div className={styles.thumbnailList}>
                            {service.images.map((imgUrl, index) => (
                                <img key={index} src={service.images[0]} alt={`Thumbnail ${index + 1}`} className={styles.thumbnail} />
                            ))}
                        </div>
                    </div>

                    <h1 className={styles.title}>{service.title}</h1>
                    <p className={styles.provider}>Prestador: <span className={styles.highlight}>{service.provider}</span></p>

                    <div className={styles.metaData}>
                        <span className={styles.metaItem}><Star size={16} color="#D97706" /> {service.rating} ({service.reviews} avaliações)</span>
                        <span className={styles.metaItem}><MapPin size={16} /> {service.distance} km de você</span>
                        <span className={`${styles.metaItem} ${service.seal === 'OURO' ? styles.sealOuro : ''}`}><Zap size={16} /> Selo {service.seal}</span>
                    </div>

                    <p className={styles.description}>{service.description}</p>

                    <div className={styles.section}>
                        <h2>Sobre o Prestador</h2>
                        <div className={styles.providerProfile}>
                            <div className={styles.profileMeta}>
                                <p><User size={16} className={styles.iconPrimary} /> Membro desde: {service.providerDetails.since}</p>
                                <p><Phone size={16} className={styles.iconPrimary} /> Total de Serviços: {service.providerDetails.totalServices}</p>
                            </div>
                            <button className={styles.profileButton}>Ver Perfil Completo</button>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2>Especificações Técnicas</h2>
                        <ul className={styles.specsList}>
                            {service.equipmentSpecs.map((spec, index) => (
                                <li key={index}>{spec}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2>Processo de Certificação e Garantia</h2>
                        <p className={styles.assurance}>Este serviço possui rastreio por GPS e garantia de entrega de acordo com o SLA. O pagamento é liberado ao prestador somente após a confirmação da finalização do serviço.</p>
                    </div>

                    <div className={styles.section}>
                        <h2>Política de Cancelamento</h2>
                        <div className={styles.cancellationPolicy}>
                            <XCircle size={20} className={styles.iconAlert} />
                            <p>{service.cancellationPolicy}</p>
                        </div>
                    </div>
                </section>

                <aside className={styles.sidebar}>

                    <div className={styles.priceBox}>
                        <span className={styles.priceLabel}>Preço Base:</span>
                        <p className={styles.basePrice}>R$ {service.basePrice} <span className={styles.unit}>{service.priceUnit}</span></p>

                        <div className={styles.iaRecommendation}>
                            <Zap size={20} color="#047857" style={{ marginRight: 5 }} />
                            <p>Preço Otimizado pela IA: <span className={styles.iaPrice}>R$ {service.iaPriceSuggestion} {service.priceUnit}</span></p>
                        </div>
                        <p className={styles.priceNote}>*O preço final pode variar em +/- 5% dependendo da distância e condições do terreno.</p>
                    </div>

                    <div className={styles.scheduleBox}>
                        <h2>Agendamento</h2>

                        <div className={styles.inputGroup}>
                            <label htmlFor="dataDesejada"><Calendar size={16} /> Data Desejada</label>
                            <input type="date" id="dataDesejada" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="horaInicio"><Clock size={16} /> Horário de Início</label>
                            <input type="time" id="horaInicio" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="hectares"><MapPin size={16} /> Hectares Estimados</label>
                            <input type="number" id="hectares" placeholder="Ex: 50 ha" className={styles.input} />
                        </div>

                        <p className={styles.totalEstimate}>Estimativa Total: <span>R$ 16.750,00</span></p>
                        <button className={styles.scheduleButton}>Solicitar Agendamento e Proposta</button>
                    </div>
                </aside>
            </div>
        </div>
    );
}