const formulario = document.getElementById('formulario')
const lista = document.getElementById('lista')

formulario.addEventListener('submit', function (event) {
    event.preventDefault()
    const productos = document.getElementById('productos').value.trim()
    const li = document.createElement('li')
    li.textContent = productos

    const btnMarcar = document.createElement('button')
    btnMarcar.textContent = 'Producto agregado'
    btnMarcar.type = 'button'
    btnMarcar.classList.add('btn-marcar')

    const btnEliminar = document.createElement('button')
    btnEliminar.textContent = 'Eliminar producto'
    btnEliminar.classList.add('btn-eliminar')

    li.appendChild(btnMarcar)
    li.appendChild(btnEliminar)
    lista.append(li)

    document.getElementById('productos').value = ""

})

lista.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-marcar')) {
        event.target.parentElement.classList.add('marcado')
    }
    if (event.target.classList.contains('btn-eliminar')) {
        event.target.parentElement.remove()
    }
})