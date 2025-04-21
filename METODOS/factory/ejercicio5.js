function crearGestorTareas(nombreLista){
    let _listaTareas = []
    return{
        nombreLista,
        agregarTarea(tarea){
            return _listaTareas.push(tarea)
        },
        verTareas(){
            return _listaTareas
        },
        eliminarTareas(nombreTarea){
            let index = _listaTareas.indexOf(nombreTarea)
            if(index !== -1){ // si es diferente a -1 se ejecuta ya que el indexOf devuelve -1 cuando no esta en el array
                _listaTareas.splice(index, 1)// Index dice la posicion y el 1 es la cantidad de elementos que vamos a borrar
            }else{
                console.log("Tarea no encontrada")
            }
        },
        contarTareas(){
            return _listaTareas.length
        }
    }
}

let nombreLista = crearGestorTareas("Tareas Santi")

console.log(nombreLista.nombreLista)

nombreLista.agregarTarea("Español")
nombreLista.agregarTarea("Matematicas")
console.log(nombreLista.verTareas())
console.log(nombreLista.contarTareas())
nombreLista.eliminarTareas("Matematicas")
console.log(nombreLista.verTareas())