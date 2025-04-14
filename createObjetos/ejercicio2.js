// SI el prototipo en este caso animal se le cambian las propiedades tambien se reflejan en el objeto que decidio heredar estas propiedades

let animal = {
    tipo : "animal",
    hacerSonido(){
        console.log("Sonido genérico de animal")
    }
}

let gato = Object.create(animal)
gato.tipo = "Gato"
console.log(gato.tipo)

gato.hacerSonido = function(){
    console.log("Miau")
}
animal.hacerSonido()
gato.hacerSonido()