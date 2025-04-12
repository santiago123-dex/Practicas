let cuentaBancaria = {
    _saldo: 0,
    get saldo(){
        return this._saldo
    },
    set saldo(n){
        console.log("no puedes modificar el saldo de esa manera")
    }, 
    depositar(cantidad){
        if(cantidad>0){
            this._saldo = this._saldo + cantidad
        }
    },
    retirar(cantidad){
        if(this._saldo >= cantidad && cantidad > 0){
            this._saldo = this._saldo - cantidad
        }else{
            console.log("fondos insuficientes")
        }
    }
}
cuentaBancaria.saldo = 10
console.log(cuentaBancaria.saldo)
cuentaBancaria.depositar(500)
console.log(cuentaBancaria.saldo)
cuentaBancaria.retirar(200)
console.log(cuentaBancaria.saldo)
cuentaBancaria.retirar(500)
console.log(cuentaBancaria.saldo)
console.log(cuentaBancaria.saldo)