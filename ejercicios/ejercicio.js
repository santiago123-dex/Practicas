let aspirante = new Map()
let contador = 1

let registrarAsistentes = () =>{
    let cargo = prompt("Que cargo tiene dentro de la empresa")

    // busca el valor en aspirante y mira si el cargo ya esta muestra un alert
    for(let valor of aspirante.values()){
        if(valor === cargo){
            alert(`El cargo ya esta registrado`)
            return // salimos de toda la funcion ya que no vamos a ejecutar mas datos
        }
    }

    // registra el cargo
    if(cargo){
        aspirante.set(contador, cargo)
        alert(`Su cargo es ${cargo} con el ID ${contador}`)
        contador ++ // Incrementa el id a partir del siguiente registro
    }
}



let verificarCargo = () => {
    let cargo = prompt("Ingrese el cargo a verificar")

    // crea una variable, esta empieza en false
    let encontrado = false

    // Verifica si el valor encontrado en aspirante y si esta cambia el boleano a true, si es true ejecuta el if de abajo
    for(let valor of aspirante.values()){
        if(valor === cargo){
            encontrado = true
            break // salimos del for con break
        }
    }

    // se ejecuta despues de decir que encontrado en true
    if(encontrado){
        alert(`Su cargo es: ${cargo} con el ID ${contador}`)
    }else{
        alert(`Registre su cargo en la empresa`)
    }
}

let mostrarCargos = () => {
    // verificamos si hay al menos 1 dato dentro del map
    if(aspirante.size == 0){
        alert("No hay cargos registrados")
    }

    let listaCargos = "Cargos registrados:\n"

    // Usamos el forEach para recorrer el map y verificar si tenemos datos dentro de el, lo usamos de manera funcion para llamar al cargo y al id, en este caso el id seria el contador

    aspirante.forEach((cargo, id) => {
    listaCargos += `ID: ${id} ${cargo}\n`
    })
    alert(listaCargos)
}


let menu = () =>{
    let opcion
    do{
        opcion = Number(prompt("\n1 registrar su cargo \n2 Verificar su cargo \n3 Mostrar rangos \n4 Salir"))
        if(opcion < 0 || opcion > 3){
        alert("Elija una opcion correcta")
        continue
    }
    
    switch(opcion){
        case 1:
            registrarAsistentes()
            break
        case 2:
            verificarCargo()
            break
        case 3:
            mostrarCargos()
            break
        case 4:
            alert("saliendo del programa")
            window.location.href = "index.html"
            break
        }
    }while(opcion !== 4)
    }

    menu()