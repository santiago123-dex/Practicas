let productos = []

function agregarProductos(){
    let nombre = prompt("Ingrese el nombre del producto a agregar")
    let precio = Number(prompt("Ingrese el precio del producto a agregar"))
    let cantidad = Number(prompt("Ingrese la cantidad del producto a agregar"))

    let productoExistente = productos.find(producto => producto.nombre === nombre) // Funcion flecha que encuentra el elemento si ya esta registrado

    if(productoExistente){
        alert("Producto ya esta registrado, se agrega solo la cantidad")
        productoExistente.cantidad += cantidad
    }else{
        productos.push({ // lo convertimos en objeto para que se pueda mostrar de manera ordenada
            nombre: nombre, 
            precio: precio, 
            cantidad: cantidad
        })
        alert("Producto agregado correctamente")
    }
}

function verProductos(){
    let mensaje = "Productos:"
    for(let i = 0; i< productos.length; i++){
        mensaje += `\n Nombre: ${productos[i].nombre} \n Precio: ${productos[i].precio} \n Cantidad: ${productos[i].cantidad}` //llamamos a cada elemento que queremos mostrar en el mensaje
    }
    alert(mensaje)
}

function eliminarProducto(){
    let opcionEliminar = prompt("Ingrese el producto que desea eliminar")
    let indice = productos.findIndex(producto => producto.nombre == opcionEliminar)
    if(indice != -1){
        productos.splice(indice, 1)
        alert("Productos eliminados correctamente")
    }else{
        alert("Producto no encontrado")
    }
}

function menu(){
    let opcion = Number(prompt("\n1 Agregar producto \n2 Ver productos \n3 Eliminar producto"))
    if(opcion == 1){
        agregarProductos()
    }else if(opcion == 2){
        verProductos()
    }else if(opcion == 3){
        eliminarProducto()
    }
}


while(true){
    menu()
}