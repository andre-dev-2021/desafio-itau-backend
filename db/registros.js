/**
 * Armazena e fornece funções para leitura, registro e eliminação de transações.
 */

let transacoes = [];

const getTransacoes = () => {
    return transacoes;
}

const registrarTransacao = (novaTransacao) => {
    transacoes.push(novaTransacao);
}

const deletarTransacoes = () => {
    transacoes = [];
}

export { getTransacoes, registrarTransacao, deletarTransacoes };