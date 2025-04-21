function Auto(marca, año){
    this.marca = marca
    this.año = año
    
    this.descripcion = function(){
        console.log(`Este auto es ${this.marca} del año ${this.año}`)
    }
}

let nombre1 = new Auto("Mazda", 2024)
let nombre2 = new Auto("Toyota", 2025)

nombre1.descripcion()
nombre2.descripcion()