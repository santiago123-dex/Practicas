let producto = {}

Object.defineProperty(producto, "precio", {
    value : 100,
    writable : true,
    enumerable : true,
    configurable : true
})

Object.defineProperty(producto, "precio", {
    writable :false,
    configurable :false
})

producto.precio = 200
console.log(producto.precio)
delete producto.precio
console.log(producto.precio)