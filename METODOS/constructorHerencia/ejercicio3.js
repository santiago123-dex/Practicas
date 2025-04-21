let baseVehicle = {
    start(){
        return console.log("Vehículo encendido")
    }
}

function Car(brand, year){
    this.brand = brand
    this.year = year
}

Car.prototype = baseVehicle

Car.prototype.info = function(){
    return console.log(`Marca : ${this.brand}, Year: ${this.year}`)
}

let car1 = new Car("Toyota", 2020)

function ElectricCar (brand, year, batery){
    this.brand = brand
    this.year = year
    this.batery = batery
}

ElectricCar.prototype = Object.create(baseVehicle)

ElectricCar.prototype.charge = function(){
    return console.log("Cargando bateria....")
}

let ecocar = new ElectricCar("Mazda", 2025, "nueva")

car1.start()
ecocar.start()
baseVehicle.info()
