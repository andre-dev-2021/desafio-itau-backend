import Transacao from "../models/transacaoModel.js";
import {getTransacoes, registrarTransacao, deletarTransacoes} from '../db/registros.js';

const listarEstatistica = () => {
    const estatistica = {
        "count": 0,
        "sum": 0,
        "avg": 0,
        "min": 0,
        "max": 0
    }

    let transacoes = getTransacoes();
    let ultimasTransacoes = transacoes.filter(e => {
        let data = e.dataHora instanceof Date ? e.dataHora : new Date(e.dataHora);
        return (Date.now() - data.getTime()) < 60000;
    });

    let valores = ultimasTransacoes.map(e => e.valor);
    estatistica.count += ultimasTransacoes.length;
    estatistica.sum += valores.reduce((acc, v) => acc + v, 0);
    estatistica.avg += estatistica.count > 0 ? estatistica.sum / estatistica.count : 0;
    estatistica.min += estatistica.count > 0 ? Math.min(...valores) : 0;
    estatistica.max += estatistica.count > 0 ? Math.max(...valores) : 0;
    
    return estatistica;
}

const criarRegistro = (valor, dataHora) => {
    let transacao = new Transacao(valor, dataHora);
    let status = transacao.getStatus();
    if(status == 200){
        registrarTransacao(transacao);
    }
    return status;
}

const apagarRegistros = () => {
    deletarTransacoes();
}

export { listarEstatistica, criarRegistro, apagarRegistros };