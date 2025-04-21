class Vehiculo{
    constructor(marca, modelo){
        this.marca = marca
        this.modelo = modelo
    }
    detalle(){
        console.log(`${this.marca} , ${this.modelo}`)
    }
}

class Auto extends Vehiculo{
    constructor(marca, modelo, puertas){
        super(marca,modelo)
        this.puertas= puertas
    }
    detalle(){
        super.detalle()
        console.log(`Y el numero de puertas es ${this.puertas}`)
    }
}

let auto1 = new Auto("Toyota", 2025, 6)

auto1.detalle()


console.log(typeof auto1)
console.log(auto1.constructor.name)// el resultado es Auto por que a partir de este creamos la instancia
console.log(auto1 instanceof Vehiculo)