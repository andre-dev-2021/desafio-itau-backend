class Transacao {
    constructor(valor, dataHora){
        this.valor = valor;
        this.dataHora = dataHora;
    }

    getStatus(){
        let valor = this.valor;
        let dataHora = this.dataHora != undefined ? new Date(this.dataHora) : undefined;
        if(valor === undefined && dataHora === undefined){
            return 400;
        }else if(valor < 0 || Date.now() < dataHora.getTime()){
            return 422;
        }
        this.valor = valor;
        this.dataHora = dataHora;
        return 200;
    }
}

export default Transacao;