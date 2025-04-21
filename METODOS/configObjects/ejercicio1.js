let producto = {
    nombre : "laptop",
    precio : 1500,
    disponible : true
}

Object.preventExtensions(producto)

producto.marca = "apple"
console.log(producto.marca)

producto.precio = 2000
console.log(producto.precio)

Object.seal(producto)

delete producto.disponible
console.log(producto.disponible)

producto.nombre = "apple"
console.log(producto.nombre)

console.log(Object.isExtensible(producto))
console.log(Object.isSealed(producto))
console.log(Object.isFrozen(producto))
