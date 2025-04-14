function crearCuenta (usuario, clave){
    let _clave = clave
    return {
        usuario,
        clave,
        verificarClave(claveIntento){
            return claveIntento === _clave
        },
        cambiarClave(claveAntigua, claveNueva){
            if(claveAntigua == _clave){
                _clave = claveNueva
                return true
            }else{
                return false
            }
        }
    }
}

let clave = crearCuenta("Santi", 1230)

console.log(clave.usuario)
console.log(clave.clave)

console.log(clave.verificarClave(2314))
