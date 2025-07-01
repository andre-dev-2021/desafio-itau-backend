# 🧩 Desafio Programação Backend - Itaú Unibanco

<p>Esta é uma versão em Node.js do desafio de backend do Itaú Unibanco, voltado para programadores juniores. Consiste em uma API REST para transações bancárias, possibilitando o usuario registrar, deletar e obter estatísticas das transações realizadas. Esse projeto foi realizado utilizando o framework ExpressJS e arquitetura MVC.</p>

- [Repositório do Desafio (Spring Boot)](https://github.com/feltex/desafio-itau-backend)

## 💻 Tecnologias utilizadas
- [ExpressJS](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en)

## 🚀 Como executar este projeto localmente?

### 1. Clone este repositório

```bash
git clone https://github.com/andre-dev-2021/desafio-itau-backend
```

### 2. Acesse o diretório e instale as dependências
```bash
cd desafio-itau-backend
npm install
```

### 3. Inicie o servidor
```bash
npm start
```
<p>A API estará disponível em: <i>localhost:3000</i></p>

## 📌 Endpoints

### `POST /transacao`
Valida e registra transações válidas.

***Exemplo de requisição correta***
```json
{
    "valor": 123.45, // Valor da transação em decimal
    "dataHora": "2025-07-01T00:00:00.000-03:00" // Data/Hora da transação em formato ISO 8601
}
```
Esta transação é aceita e respondida com `201 Created` sem nenhum corpo.

***Exemplos de requisições incorretas***
```json
{
    // Requisição sem corpo.
}
```

```json
{
    "valor": "123",
    "dataHora": "01/07/2025 00:00:00" // Valores fora do padrão aceito.
}
```
Nesses exemplos, a transação não é aceita e o endpoint responde com `400 Bad Request` sem nenhum corpo.

```json
{
    "valor": -1, // Valor negativo
    "dataHora": "2031-01-10T00:00:00.000-03:00" // Data/Hora futura
}
```

Nesse exemplo, a transação não é aceita e o endpoint responde com `422 Unprocessable Entity` sem nenhum corpo.

### `DELETE /transacao`
Apaga todos os dados das transações realizadas, retorna `200 OK` sem nenhum corpo.

### `GET /estatistica`
Retorna as estatisticas dos ultimos 60 segundos (1 minuto) ou em um tempo especificado.

Exemplo: `/estatistica` retorna estatísticas do último minuto, enquanto `/estatistica?seg=120` retorna estatísticas dos últimos dois minutos.

***Exemplo de resposta***
```json
{
    "count": 10, 
    "sum": 1234.56,
    "avg": 123.456,
    "min": 12.34,
    "max": 123.56
}
```
Retorna as estatisticas e status `200 OK`.

## Autor

Desenvolvido por André Pereira de Sá
- GitHub: [@andre-dev-2021](https://github.com/andre-dev-2021)
- Linkedin: [André Pereira de Sá](https://www.linkedin.com/in/andrepereirasa/)