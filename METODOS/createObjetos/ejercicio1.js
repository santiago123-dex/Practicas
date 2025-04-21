let animal = {
    tipo : "desconocido",
    hacerSonido(){
        console.log("Hace un sonido")
    }
}

let perro = Object.create(animal)
perro.tipo = "Perro"
console.log(perro.tipo)
perro.nombre = "firu"
console.log(perro.nombre)
perro.hacerSonido()
console.log(animal.tipo)
