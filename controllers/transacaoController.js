import Transacao from "../models/transacaoModel.js";
import {getTransacoes, registrarTransacao, deletarTransacoes} from '../db/registros.js';

const listarEstatistica = (seg) => {
    let ms = seg * 1000;

    const estatistica = {
        "count": 0,
        "sum": 0,
        "avg": 0,
        "min": 0,
        "max": 0
    }

    // Filtra as transações que ocorreram no ultimo minuto (60s = 60000ms).
    let transacoes = getTransacoes();
    let ultimasTransacoes = transacoes.filter(e => {
        let data = e.dataHora instanceof Date ? e.dataHora : new Date(e.dataHora);
        return (Date.now() - data.getTime()) < ms;
    });

    // Calcula o número, soma, média, mínimo e máximo dos valores das transações.
    let valores = ultimasTransacoes.map(e => e.valor);
    estatistica.count += ultimasTransacoes.length;
    estatistica.sum += valores.reduce((acc, v) => acc + v, 0);
    estatistica.avg += estatistica.count > 0 ? estatistica.sum / estatistica.count : 0;
    estatistica.min += estatistica.count > 0 ? Math.min(...valores) : 0;
    estatistica.max += estatistica.count > 0 ? Math.max(...valores) : 0;

    // Retorna objeto estatística
    console.log('Estatisticas enviadas com sucesso!');
    return estatistica;
}

const criarRegistro = (valor, dataHora) => {
    let transacao = new Transacao(valor, dataHora);
    let status = transacao.getStatus();
    if(status == 201){
        // Registra a transação bem sucedida
        registrarTransacao(transacao);
    }
    return status;
}

const apagarRegistros = () => {
    // Apaga todos os dados das transações
    console.log('Registros de transações apagados!')
    deletarTransacoes();
}

export { listarEstatistica, criarRegistro, apagarRegistros };