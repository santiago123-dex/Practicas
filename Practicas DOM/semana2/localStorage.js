const registrar = document.getElementById('registrar')

registrar.addEventListener('submit', function(event){
    event.preventDefault()

    const titulo = document.getElementById('titulo').value
    const director = document.getElementById('director').value
    const estreno = document.getElementById('estreno').value
    const genero = document.getElementById('genero').value

    if(titulo == "" || director == "" || estreno == "" || genero == ""){
        alert("Tiene que ingresar todos los datos")
    }else{
        const pelicula = {
            "titulo": titulo,
            "directo": director,
            "estreno": estreno,
            "genero": genero
        }
        
        const peliculaString = JSON.stringify(pelicula)
        localStorage.setItem('Pelicula enviada correctamente', peliculaString)
        alert('Todo quedo guardado correctamente')
        console.log(peliculaString)
    }
})
