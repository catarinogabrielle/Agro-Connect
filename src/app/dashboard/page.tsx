import { Package, Truck, Calendar, TrendingUp, DollarSign, Star, Zap } from 'lucide-react';
import styles from '@/styles/Dashboard.module.css';

const user = { name: "Poliana Ferreira", farm: "Fazenda Progresso", location: "Maringá - PR" };

const mockMetrics = [
    { title: "Serviços Agendados (Mês)", value: 5, icon: Calendar, color: "#047857" },
    { title: "Pedidos de Insumos (Mês)", value: 8, icon: Package, color: "#f97316" },
    { title: "Cotações Pendentes", value: 2, icon: DollarSign, color: "#ef4444" },
    { title: "Próxima Entrega (dias)", value: 3, icon: Truck, color: "#3b82f6" },
];

const mockServiceStatus = [
    { id: 1, title: "Colheita de Soja", status: "Em Progresso", progress: 65, date: "12/Nov" },
    { id: 2, title: "Pulverização", status: "Agendado", progress: 0, date: "20/Nov" },
    { id: 3, title: "Manutenção Trator", status: "Concluído", progress: 100, date: "05/Nov" },
];

const mockInsumoStatus = [
    { id: 101, title: "Fertilizante NPK", status: "Em Rota", expected: "15/Nov", progress: 80 },
    { id: 102, title: "Semente de Milho", status: "Entregue", expected: "08/Nov", progress: 100 },
];

export default function DashboardPage() {
    return (
        <div className={styles.pageWrapper}>
            <div className="container">
                <header className={styles.header}>
                    <h1 className={styles.title}>Olá, {user.name}!</h1>
                    <p className={styles.subtitle}>Seu resumo de atividades na {user.farm} ({user.location}).</p>
                </header>

                <section className={styles.metricGrid}>
                    {mockMetrics.map((metric) => (
                        <div key={metric.title} className={styles.metricCard} style={{ borderBottomColor: metric.color }}>
                            <metric.icon size={28} style={{ color: metric.color }} />
                            <p className={styles.metricTitle}>{metric.title}</p>
                            <p className={styles.metricValue}>{metric.value}</p>
                        </div>
                    ))}
                </section>

                <div className={styles.contentGrid}>
                    <div className={styles.activityCard}>
                        <h2 className={styles.cardHeader}><Calendar size={20} /> Status dos Serviços Agendados</h2>
                        <ul className={styles.statusList}>
                            {mockServiceStatus.map(service => (
                                <li key={service.id} className={styles.statusItem}>
                                    <div className={styles.statusInfo}>
                                        <p className={styles.itemTitle}>{service.title}</p>
                                        <p className={styles.itemStatus} style={{ color: service.status === 'Em Progresso' ? '#f97316' : service.status === 'Agendado' ? '#3b82f6' : '#047857' }}>
                                            {service.status} - {service.date}
                                        </p>
                                    </div>
                                    <div className={styles.progressBar}>
                                        <div
                                            className={styles.progressFill}
                                            style={{ width: `${service.progress}%`, backgroundColor: service.status === 'Concluído' ? '#047857' : '#f97316' }}
                                        ></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.activityCard}>
                        <h2 className={styles.cardHeader}><Package size={20} /> Rastreio de Insumos</h2>
                        <ul className={styles.statusList}>
                            {mockInsumoStatus.map(insumo => (
                                <li key={insumo.id} className={styles.statusItem}>
                                    <div className={styles.statusInfo}>
                                        <p className={styles.itemTitle}>{insumo.title}</p>
                                        <p className={styles.itemStatus} style={{ color: insumo.status === 'Em Rota' ? '#f97316' : '#047857' }}>
                                            {insumo.status} - Entrega: {insumo.expected}
                                        </p>
                                    </div>
                                    <div className={styles.progressBar}>
                                        <div
                                            className={styles.progressFill}
                                            style={{ width: `${insumo.progress}%`, backgroundColor: insumo.status === 'Entregue' ? '#047857' : '#f97316' }}
                                        ></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.activityCard}>
                        <h2 className={styles.cardHeader}><Star size={20} /> Pendências e Avaliações</h2>
                        <div className={styles.pendingItem}>
                            <p className={styles.pendingText}>Você tem 1 serviço concluído que precisa ser avaliado.</p>
                            <button className={styles.actionButton}>Avaliar Agora</button>
                        </div>
                        <div className={styles.pendingItem}>
                            <p className={styles.pendingText}>2 cotações de insumos prontas para análise.</p>
                            <button className={styles.actionButton} style={{ backgroundColor: '#3b82f6' }}>Ver Cotações</button>
                        </div>
                    </div>

                    <div className={styles.recommendationCard}>
                        <h2 className={styles.cardHeader}><Zap size={20} /> Recomendações de Otimização</h2>
                        <p className={styles.recommendationText}>
                            Sua última colheita teve custo 12% acima da média regional.
                        </p>
                        <p className={styles.recommendationAction}>
                            <TrendingUp size={16} /> A IA sugere revisar os prestadores da categoria 'Colheita' próximos a você com Selo Ouro.
                        </p>
                        <button className={styles.actionButton} style={{ backgroundColor: '#047857' }}>Ver Prestadores</button>
                    </div>

                </div>
            </div>
        </div>
    );
}