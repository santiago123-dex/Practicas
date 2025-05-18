const caja = document.getElementById('caja')
const boton = document.getElementById('estilo')

boton.addEventListener('click', function(){
    caja.style.backgroundColor = '#48f'
    caja.style.padding = '20px'
    caja.style.fontSize = '30px'
})