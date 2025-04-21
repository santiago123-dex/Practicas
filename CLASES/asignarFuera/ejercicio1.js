class Usuario{
    rol = "estudiante"
    #nombre
    #edad 
    constructor(nombre, edad){
        this.setDatos(nombre,edad)
    }
    setDatos(nombre, edad){
        this.#edad = edad
        this.#nombre = nombre   
    }
    getResumen(){
        return{
            nombre : this.#nombre,
            edad : this.#edad
        }
    }
}

let usuario1 = new Usuario("Santiago", 18)

console.log(usuario1.rol)
console.log(usuario1.getResumen())