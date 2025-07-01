class Transacao {
    constructor(valor, dataHora){
        this.valor = valor;
        this.dataHora = dataHora;
    }

    checarFormato(){
        let valor = this.valor;
        let dataHora = this.dataHora;
        
        // Checa formato da data/hora para ISO 8601
        const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}-\d{2}:\d{2}$/;
        if(typeof(valor) == 'number' && regex.test(dataHora)){
            return true;
        }
        return false;
    }

    getStatus(){
        if(!this.checarFormato()){
            // Se requisição for vazia ou estiver fora do formato, retorna 400 Bad Request.
            console.error('A requisição está no formato incorreto!');
            return 400;
        }
        let data = new Date(this.dataHora);
        if(this.valor < 0 || Date.now() < data.getTime()){
            // Se valor da transação for negativo ou a data/hora for futura, retorna 422 Unprocessable Entity.
            console.error('A requisição possui valores inválidos!');
            return 422;
        }
        // Caso não tiver problemas, retorna 201 Created
        console.log('Requisição aceita com sucesso!');
        return 201;
    }
}

export default Transacao;