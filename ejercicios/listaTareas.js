let tareas = []

function agregarTareas(){
    let tarea = prompt("Ingrese el nombre de la tarea que tiene que hacer")
    if(tareas.includes(tarea)){
        alert("Esta tarea ya existe")
    }else{
        tareas.push(tarea)
        alert("Tarea agregada correctamente")
    }
}

function verTareas(){
    if(tareas.length == 0){
        alert("No tiene tareas")
    }else{
        let mensaje = ""
        for(let i = 0; i < tareas.length; i++){
            mensaje += `${tareas[i]} \n`
        }
    alert(mensaje)
    }
}

function eliminarTareas(){
    let tarea = prompt("Ingrese el nombre de la tarea que quiere eliminar")
    if(tareas.includes(tarea)){
        let indice = tareas.indexOf(tarea)// buscamos el indice mediante el indexOf
        tareas.splice(indice, 1)// Encontrado el indice, el primer parametro es el indice y el segundo cuantos elementos desea borrar
        alert("Tarea borrada correctamente")
    }else{
        alert("Tarea no esta en la lista")
    }
}

function menu(){
    let opcion = Number(prompt("\n1 Agregar tarea \n2 Ver tareas \n3 Borrar tarea"))
    if(opcion == 1){
        agregarTareas()
    }else if(opcion == 2){
        verTareas()
    }else if(opcion == 3){
        eliminarTareas()
    }
}


while(true){
    menu()
}