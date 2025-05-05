let inventario = new Map()

function menu(){

    let opcion
    do{
        opcion = Number(prompt("\n1 Agregar producto \n2 Mostrar inventario \n3 Buscar producto"))

        switch(opcion){
            case 1:
                agregarProducto()
                break
            case 2:
                mostrarInventario()
                break
            case 3:
                buscarProducto()
                break  
            }

        }while(opcion !== 5)
}



let agregarProducto = () =>{
    let name = prompt("Ingrese el nombre del producto nuevo")
    let cantidad = Number(prompt("Ingrese la cantidad"))
    if(inventario.has(name)){
        inventario.set(name, inventario.get(name) + cantidad)
        alert("producto ya esta")
    }else{
        if(name, cantidad){
            inventario.set(name, cantidad)
        }
    }
}

let mostrarInventario = () =>{
    let mensaje = "INVENTARIO \n"
    for(let[producto, cantidad] of inventario){
        mensaje += `${producto}: ${cantidad} \n`
    }
    alert(mensaje)
}

let buscarProducto = () =>{
    let producto = prompt("Ingrese el nombre del producto que quiere averiguar")
    if(inventario.has(producto)){
        alert(`El producto ${producto} con ${inventario.get(producto)} unidades`)
    }else{
        alert("Producto no registrado")
    }
}
menu()