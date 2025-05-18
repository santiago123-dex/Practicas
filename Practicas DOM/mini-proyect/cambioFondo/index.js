const btn1 = document.getElementById('boton1')
const btn2 = document.getElementById('boton2')
const btn3 = document.getElementById('boton3')
const btn4 = document.getElementById('boton4')
const btn5 = document.getElementById('boton5')
const body = document.body

function limpiarClases(){
    body.classList.remove('fondo1', 'fondo2', 'fondo3', 'fondo4', 'fondo5')
}

btn1.addEventListener('click', function(event){
    limpiarClases()
    body.classList.add('fondo1')
})
btn2.addEventListener('click', function(event){
    limpiarClases()
    body.classList.add('fondo2')    
})
btn3.addEventListener('click', function(event){
    limpiarClases()
    body.classList.add('fondo3')
})
btn4.addEventListener('click', function(event){
    limpiarClases()
    body.classList.add('fondo4')
})
btn5.addEventListener('click', function(event){
    limpiarClases()
    body.classList.add('fondo5')
})