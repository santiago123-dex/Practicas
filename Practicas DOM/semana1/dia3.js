// boton que cambia el texto del h2
const botonTexto = document.getElementById('botonTexto')
const titulo = document.getElementById('titulo')

botonTexto.addEventListener('click', function(){
    titulo.textContent = 'TITULO NUEVO'
})

// boton que cambia el fondo del body
const botonFondo = document.getElementById('fondo')
botonFondo.addEventListener('click', function(){
    document.body.style.backgroundColor = '#48f' // cambia el color de fondo del body
})


// boton que oculta el h2
const botonOcultar = document.getElementById('ocultar')
botonOcultar.addEventListener('click', function(){
    titulo.style.display = 'none'
})