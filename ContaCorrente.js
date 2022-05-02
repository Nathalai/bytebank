import { Cliente } from "./Cliente.js";

export class ContaCorrente{    
    static numeroDeContas = 0;
    agencia;
    // #saldo = 0; >> # está em processo de implementação para significar que o parâmetro é privado (não pode ser alterado de fora da classe)
    _saldo = 0;
    _cliente;


    get saldo() {
        return this._saldo;
    }    

    set cliente(valor){
        if (valor instanceof Cliente){
            this._cliente = valor;
        }        
    }

    get cliente(){
        return this._cliente;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }


    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if (valor <= 0){
            return
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}