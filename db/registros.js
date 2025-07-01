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