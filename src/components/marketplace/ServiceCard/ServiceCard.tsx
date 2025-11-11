import Link from 'next/link';
import { MapPin, Star } from 'lucide-react';
import SealTag from '@/components/marketplace/SealTag/SealTag';
import styles from './ServiceCard.module.css';
import { ServiceCardProps } from '@/lib/types';

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {

    return (
        <div className={styles.card}>
            <div className={styles.mainInfo}>
                <div className={styles.header}>
                    <h3 className={styles.title}>
                        <Link href={`/servicos/${service.id}`}>{service.title}</Link>
                    </h3>
                </div>

                <div className={styles.tagsRow}>
                    {service.seal && <SealTag type={service.seal} />}

                    <span className={styles.location}>
                        <MapPin size={16} style={{ marginRight: 4 }} />
                        {service.distance} km de você
                    </span>
                </div>

                {service.description && (
                    <p className={styles.description}>
                        {service.description}
                    </p>
                )}
            </div>

            <div className={styles.sideInfo}>
                <div className={styles.ratingBox}>
                    <Star size={18} fill="#f97316" color="#f97316" style={{ marginRight: 4 }} />
                    <span className={styles.ratingValue}>
                        {service.rating.toFixed(1)}
                    </span>
                    <span className={styles.reviewCount}>
                        ({service.reviews} avaliações)
                    </span>
                </div>

                <div className={styles.priceSection}>
                    <p className={styles.priceLabel}>Preço Base:</p>
                    <p className={styles.priceValue}>{service.priceUnit}</p>
                    <p className={styles.provider}>Prestador: {service.provider}</p>
                </div>

                <Link href={`/servicos/${service.id}`} className={styles.detailButton}>
                    Ver Detalhes e Agendar
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;