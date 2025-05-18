const texto = document.getElementById('texto')
const agregar = document.getElementById('agregar')
const lista = document.getElementById('lista')

agregar.addEventListener('click', ()=>{
    const textoInput = texto.value.trim()
    if(textoInput != ""){
        const li = document.createElement('li')
        li.textContent = textoInput
        lista.append(li)
        texto.value = ""
    }
})