const botones = document.querySelectorAll('.btnMensaje')

botones.forEach(btnMensaje =>{
    btnMensaje.addEventListener('click', function(event){
        event.target.textContent = 'Clickeado'
    })
})

//Creamos un div
const div = document.createElement('div')
// Le damos estilos a la caja
div.style.width = '200px'
div.style.backgroundColor = '#dcdcdc'
div.style.padding = '10px'
div.style.margin = '10px'
// Creamos una etiqueta p
const parrafo = document.createElement('p')
// A la etiqueta p le asignamos un texto
parrafo.textContent = 'Se inserto todo el parrafo'
// a div le agregamos la etiqueta p con sus atributos
div.appendChild(parrafo)
// Insertamos la caja div a la pagina
document.body.appendChild(div)