class CuentaBancaria{
    banco = "Banco GPT"
    #titular
    #saldo
    constructor(nombreTitular, saldoInicial){
        this.#titular = nombreTitular
        this.#saldo = saldoInicial
    }
    getResumen(){
        return{
            nombreTitular : this.#titular,
            saldoInicial : this.#saldo
        }
    }
    get saldo(){
        return this.#saldo
    }

    set depositar(cantidad){
        if(cantidad > 0){
            this.#saldo += cantidad
        }
    }
}

let cuenta1 = new CuentaBancaria("Nicolas", 1000)

console.log(cuenta1.banco)
console.log(cuenta1.getResumen())

cuenta1.depositar = 500

console.log(cuenta1.saldo)