function Libro(titulo, autor, añoPublicacion){
    this.titulo = titulo
    this.autor = autor
    this.añoPublicacion = añoPublicacion

    this.resumen = function(){
        console.log(`El libro ${this.titulo} fue escrito por ${this.autor} en el año: ${this.añoPublicacion}`)
    }
}

let descripcion1 = new Libro("Cien años de soledad", "Gabriel Garcia Marquez", "1967")
let descripcion2 = new Libro("Padre rico Padre pobre", "Robert Kiyosaki", "2000")

descripcion1.resumen()
descripcion2.resumen()