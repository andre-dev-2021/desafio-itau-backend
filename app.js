const fs = require('fs')
const path = './data.json'
const express = require('express');

const readData = () => {
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

const writeData = (valor, dataHora) => {
    let transacao = {
        valor: valor,
        dataHora: dataHora
    }
    data = readData();
    data.push(transacao)
    fs.writeFileSync(path, JSON.stringify(data, null, 4));
    console.log("Adicionado!")
}

function validarRequisicao(valor, dataHora){
    if(valor === undefined && dataHora === undefined){
        return 400;
    }else if(valor < 0 || Date.now() < dataHora.getTime()){
        return 422;
    }
    return 200;
}

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/transacao", (req, res) => {
    let valor =  req.body.valor !== undefined ? parseFloat(req.body.valor) : undefined;
    let dataHora = req.body.dataHora !== undefined ? new Date(req.body.dataHora) : undefined;
    const status = validarRequisicao(valor, dataHora);
    if(status == 200){
        writeData(valor, dataHora);
    }
   res.status(status).send({})
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} ...`);
})
