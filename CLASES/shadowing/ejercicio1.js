class Animal {
    constructor(nombre){
        this.nombre = nombre
    }
    hacerSonido(){
        console.log("El animal hace un sonido")
    }
}

class Perro extends Animal{
    hacerSonido(){
        console.log("El perro ladra")
    }
    sonidoAnimalOriginal(){
        super.hacerSonido()
    }
}

let miPerro = new Perro("Milu")

miPerro.hacerSonido()
miPerro.sonidoAnimalOriginal()