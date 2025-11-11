import React from 'react';
import { Zap, Shield, Sparkles } from 'lucide-react';
import styles from './SealTag.module.css';

export type SealType = 'OURO' | 'PRATA' | 'BRONZE';

interface SealTagProps {
    type: SealType;
}

const sealConfig = {
    OURO: {
        icon: Zap,
        label: 'Selo OURO',
        className: styles.sealOuro,
    },
    PRATA: {
        icon: Shield,
        label: 'Selo PRATA',
        className: styles.sealPrata,
    },
    BRONZE: {
        icon: Sparkles,
        label: 'Selo BRONZE',
        className: styles.sealBronze,
    },
};

const SealTag: React.FC<SealTagProps> = ({ type }) => {
    const config = sealConfig[type];
    const IconComponent = config.icon;

    if (!config) return null;

    return (
        <span className={`${styles.sealTag} ${config.className}`}>
            <IconComponent size={14} style={{ marginRight: 4 }} />
            {config.label}
        </span>
    );
};

export default SealTag;