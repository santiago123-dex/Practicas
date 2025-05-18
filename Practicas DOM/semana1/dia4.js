const imagen = document.getElementById('imagen')
const cambiar = document.getElementById('cambiar')

cambiar.addEventListener('click', function(){
    imagen.src = "hidden.png"
    imagen.alt = "Segunda imagen"
})