import Transacao from "../models/transacaoModel.js";
import {registrarTransacao, deletarTransacoes} from '../db/registros.js';

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

export { criarRegistro, apagarRegistros };