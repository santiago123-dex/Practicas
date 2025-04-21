let animal = {
    sonido : "ninguno",
    hacerSonido(){
        console.log(`El animal hace: ${this.sonido}`)
    }
}

let gato = {
    sonido : "miau"
}

Object.setPrototypeOf(gato, animal)

gato.hacerSonido()