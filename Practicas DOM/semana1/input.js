const input = document.getElementById('nuevoElement')
const boton = document.getElementById('agregar')
const lista = document.getElementById('lista')

boton.addEventListener('click', function(){
    const texto = input.value.trim()
    if(texto != ""){
        const li = document.createElement('li')
        li.textContent = texto
        lista.append(li)
        input.value = ""
    }
})