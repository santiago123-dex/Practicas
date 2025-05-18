const lista = document.getElementById('lista')

lista.addEventListener('click', function (event) {
    const p = event.target.closest('.item')
    console.log(p)
})