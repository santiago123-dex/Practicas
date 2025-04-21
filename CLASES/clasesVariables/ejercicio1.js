let Libro = class{
    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }
    detalles(){
        console.log(`El libro ${this.titulo} fue escrito por ${this.autor}`)
    }
}

let Revista = class{
    constructor(nombre, articulo){
        this.nombre = nombre
        this.articulo = articulo
    }
    resultado(){
        console.log(`La revista ${this.nombre} presento el articulo ${this.articulo} sobre los congresistas`)
    }
}


let libro1 = new Libro("Cien años de soledad", "Gabriel Garcia Marquez")

libro1.detalles()

let revista1 = new Revista("El tiempo", "1190")

revista1.resultado()