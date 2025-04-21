let producto = {}

Object.defineProperty(producto, "nombre", {
    value : "Santi",
    writable : true,
    enumerable : true,
    configurable : true
})

Object.defineProperty(producto, "precio", {
    value : 200,
    writable: false,
    enumerable : true,
    configurable : false
})

Object.defineProperty(producto, "descuento", {
    value : 100,
    writable : true,
    enumerable : true,
    configurable : false
})

producto.nombre = "Javiz"
console.log(producto.nombre)

producto.precio = 300
console.log(producto.precio)

producto.descuento = 200
console.log(producto.descuento)

delete producto.descuento
console.log(producto.descuento)