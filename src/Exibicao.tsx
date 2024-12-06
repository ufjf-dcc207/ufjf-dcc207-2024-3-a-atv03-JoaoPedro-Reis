import './Exibicao.css';
interface ExibicaoProps {
    abertura: Date;
    fechamento: Date;
    cercado: string;
}

export default function ({abertura:inicio, fechamento:fim, cercado:local}: ExibicaoProps){
    return (
    <div className="exibicao">
        <div className="inicio">{inicio.toLocaleDateString()}</div>
        <div className="fim">{fim.toLocaleDateString()}</div>
        <div className="local">{local}</div>
    </div>
    );
}