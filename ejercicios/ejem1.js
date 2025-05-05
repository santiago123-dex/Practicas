class Carro {
    constructor(marca, modelo, color) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
    }

    describir() {
      return `Carro: ${this.marca} ${this.modelo}, Color: ${this.color}`
    }
  }

  class Conductor {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
      this.carros = []; 
    }

    agregarCarro(carro) {
      this.carros.push(carro);
      console.log(`${this.nombre} registró un ${carro.marca} ${carro.modelo}`);
    }

    mostrarCarros() {
      console.log(`Carros de ${this.nombre}:`);
      this.carros.forEach((carro, i) => {
        console.log(`${i + 1}. ${carro.describir()}`);
      });
    }
  }

  let carro1 = new Carro("Toyota", "Corolla", "Rojo");
  let carro2 = new Carro("Chevrolet", "Spark", "Azul");

  let conductor1 = new Conductor("Carlos", 28);

  conductor1.agregarCarro(carro1);
  conductor1.agregarCarro(carro2);

  conductor1.mostrarCarros();