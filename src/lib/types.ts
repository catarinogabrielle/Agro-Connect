export type SealType = 'OURO' | 'PRATA' | 'BRONZE';

export interface ServiceItem {
    id: number;
    title: string;
    description: string;
    provider: string;
    basePrice: number;
    priceUnit: string;
    rating: number;
    reviews: number;
    distance: number;
    seal: SealType;
}

export interface ServiceCardProps {
    service: ServiceItem;
}