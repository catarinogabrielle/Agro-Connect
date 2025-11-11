import { Search, MapPin, Truck, Package, Info, CheckCircle } from 'lucide-react';
import styles from '@/styles/Frete.module.css';

const mockRastreio = [
    { id: 'AGR-45678', type: 'Insumo', status: 'Em Rota', expected: '15/Nov', origin: 'Maringá - PR', destination: 'Fazenda Boa Esperança' },
    { id: 'SERV-00123', type: 'Serviço', status: 'Agendado', expected: '20/Nov', origin: 'Prestador Alpha', destination: 'Fazenda Progresso' },
];

export default function FretePage() {
    return (
        <div className={styles.pageWrapper}>
            <div className="container">
                <h1 className={styles.pageTitle}>Logística: Simulação e Rastreio</h1>

                <div className={styles.layout}>
                    <section className={styles.moduleCard}>
                        <h2><Truck size={24} style={{ marginRight: 8 }} /> Simular Frete de Insumos</h2>
                        <p className={styles.moduleDescription}>Calcule o custo e o prazo de entrega para sua fazenda.</p>

                        <div className={styles.formGroup}>
                            <label htmlFor="cepOrigem"><MapPin size={16} /> CEP de Origem (Fornecedor)</label>
                            <input id="cepOrigem" type="text" placeholder="CEP de Partida" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="cepDestino"><MapPin size={16} /> CEP de Destino (Sua Fazenda)</label>
                            <input id="cepDestino" type="text" placeholder="CEP da Fazenda" className={styles.input} />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="weight"><Package size={16} /> Peso Total Estimado (kg)</label>
                            <input id="weight" type="number" placeholder="Ex: 5000 kg" className={styles.input} />
                        </div>

                        <button className={styles.simulateButton}>
                            Calcular Frete e Prazo
                        </button>

                        <div className={styles.simulationResult}>
                            <p className={styles.resultLabel}>Resultado Estimado:</p>
                            <p className={styles.resultValue}>R$ 1.250,00</p>
                            <p className={styles.resultDetail}><CheckCircle size={14} style={{ marginRight: 5 }} /> Prazo de 3 dias úteis (Transportadora X)</p>
                        </div>
                    </section>

                    <section className={styles.moduleCard}>
                        <h2><Search size={24} style={{ marginRight: 8 }} /> Rastrear Pedido/Agendamento</h2>
                        <p className={styles.moduleDescription}>Acompanhe o status do seu insumo ou serviço agendado.</p>

                        <div className={styles.formGroup}>
                            <label htmlFor="trackingId"><Info size={16} /> Código do Pedido/Agendamento</label>
                            <input id="trackingId" type="text" placeholder="Ex: AGR-45678" className={styles.input} />
                        </div>

                        <button className={styles.trackButton}>
                            Rastrear
                        </button>

                        <div className={styles.trackingList}>
                            <h3>Últimos Pedidos Rastreáveis</h3>
                            {mockRastreio.map(item => (
                                <div key={item.id} className={styles.trackingItem}>
                                    <div className={styles.itemHeader}>
                                        <p className={styles.itemId}>{item.id}</p>
                                        <span className={`${styles.itemType} ${item.type === 'Insumo' ? styles.insumoType : styles.serviceType}`}>{item.type}</span>
                                    </div>
                                    <p className={styles.itemStatus}>Status: {item.status}</p>
                                    <p className={styles.itemExpected}>Entrega/Início: {item.expected}</p>
                                    <p className={styles.itemRoute}>{item.origin} - {item.destination}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}