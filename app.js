import {criarRegistro, apagarRegistros} from './controllers/transacaoController.js';
import express from 'express';
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post("/transacao", (req, res) => {
    let status = criarRegistro(req.body.valor, req.body.dataHora);
    res.status(status).send({});
});

app.delete("/transacao", (req, res) => {
    apagarRegistros();
    res.status(200).send({});
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} ...`);
})
