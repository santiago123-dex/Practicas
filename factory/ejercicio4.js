function crearContador(nombre){
    let _contador = 0
    return{
        nombre,
        incrementar(numeroSuma){
            _contador += numeroSuma
        },
        leerContador(){
            return _contador
        },
        reiniciar(){
            if(_contador > 0){
                return _contador = 0
            }else{
                return _contador
            }
        }
    }
}

let contador1 = crearContador("Santi")

console.log(contador1.nombre)

contador1.incrementar(2)
contador1.incrementar(2)
console.log(contador1.leerContador())
console.log(contador1.reiniciar())