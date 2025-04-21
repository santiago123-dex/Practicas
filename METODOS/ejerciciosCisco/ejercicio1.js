let listaCompras = {
    productos : [],
    agregarProducto(nombre, cantidad, precio){
        let productoExistente = this.productos.find(p => p.nombre === nombre)
        if(!productoExistente){
            this.productos.push({nombre, cantidad, precio})
        }else{
            productoExistente.cantidad += cantidad
            console.log(`Producto ya existe` )
        }
    },
    mostrarLista(){
        return this.productos
    },
    eliminarProducto(nombre){
        let index = this.productos.indexOf(p=> p.nombre === nombre)
        if(index !== -1){
            this.productos.splice(index, 1)
        }else{
            console.log("Producto no encontrado")
        }
    },
    contarProductos(){
        return this.productos.reduce((total, p)=> total += p.cantidad, 0)
    }
}
