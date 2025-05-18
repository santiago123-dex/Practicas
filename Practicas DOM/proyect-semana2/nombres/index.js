const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(event){
    event.preventDefault()

    const nombre = document.getElementById('nombre').value.trim()
    const resultado = document.getElementById('resultado')

    const anterior = JSON.parse(localStorage.getItem('resultado'))

    if(nombre){
        localStorage.setItem('resultado', JSON.stringify(nombre))

        if(anterior == nombre){
            resultado.textContent = `Hola de nuevo ${nombre}`
        }else{
            resultado.textContent = `Hola ${nombre}`
        }
        document.getElementById('nombre').value = ""
    }



})