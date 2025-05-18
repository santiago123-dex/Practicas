const obtener = document.getElementById('contenedor')
const primerhijo = obtener.firstChild
const nodos = obtener.childNodes
const elementos = obtener.children
const parent = primerhijo.parentNode
console.log(primerhijo)
console.log(nodos)
console.log(elementos)
console.log(parent)


const primerElemento = obtener.firstElementChild
const segundoElemento = primerElemento.nextElementSibling
segundoElemento.textContent = 'Texto modificado'