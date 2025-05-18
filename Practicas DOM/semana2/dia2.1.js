const lista = document.getElementById('lista')

lista.addEventListener('click', (event) =>{
    if(event.target.classList.contains('btn-eliminar')){
        event.target.parentElement.remove()
    }
})