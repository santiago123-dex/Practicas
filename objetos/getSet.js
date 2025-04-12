let persona = {
    _nombre : "Ana",
    _edad : 25,
    get nombre(){
        return this._nombre
    },
    set nombre(n){
        if(n.length>2){
            this._nombre = n
        }else{
            console.log("Ingrese un nombre valido")
        }
    },
    get edad(){
        return this._edad
    },
    set edad(e){
        if(e > 0){
            this._edad = e
        }else{
            console.log("Ingrese una edad valida")
        }
    }
}


persona.nombre = "L"
console.log(persona.nombre)
console.log(persona.edad)
persona.edad = "-30"
console.log(persona.edad)