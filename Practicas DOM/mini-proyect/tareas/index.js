const formulario = document.getElementById('formulario')
const listaTareas = document.getElementById('listaTareas')

formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const tareas = document.getElementById('tareas').value.trim()
    if (tareas == "") {
        alert("Ingrese alguna tarea")
    } else {
        const li = document.createElement('li')
        const btnHecho = document.createElement('button')
        const btnEliminar = document.createElement('button')
        li.textContent = tareas
        btnHecho.type = 'button' // Evita que el botón sea submit
        btnHecho.textContent = 'Tarea hecha'
        btnEliminar.type = 'button'
        btnEliminar.textContent = 'Eliminar Tarea'
        li.appendChild(btnHecho)
        li.appendChild(btnEliminar)
        listaTareas.append(li)

        btnHecho.addEventListener('click', function () {
            li.classList.add('completada')
        })

        btnEliminar.addEventListener('click', function () {
            listaTareas.removeChild(li)
        })
    }
})


