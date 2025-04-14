function crearLibro(titulo, autor) {
    let _codigo = "Santiago" // privado

    return {
        titulo,
        autor,
        getCodigo() {
            return _codigo;
        }
    };
}

let libro = crearLibro("1984", "George Orwell");

console.log(libro.titulo);        // 1984
console.log(libro.getCodigo());   // ej. "Santiago"
console.log(libro._codigo);       // undefined ❌
console.log(libro.autor);       
