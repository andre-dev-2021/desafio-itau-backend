import express from 'express';
import {listarEstatistica, criarRegistro, apagarRegistros} from './controllers/transacaoController.js';

const app = express();
app.use(express.json()); // Middleware

// GET /estatistica
app.get("/estatistica", (req, res) => {
    const seg = Number(req.query.seg) || 60;
    const estatistica = JSON.stringify(listarEstatistica(seg));
    res.status(200).send(estatistica);
});

// POST /transacao
app.post("/transacao", (req, res) => {
    let status = criarRegistro(req.body.valor, req.body.dataHora);
    res.status(status).send({});
});

// DELETE /transacao
app.delete("/transacao", (req, res) => {
    apagarRegistros();
    res.status(200).send({});
});

// Inicia servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} ...`);
})
