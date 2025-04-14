function crearSensorTemperatura(nombreSensor, temperaturaInicial){
    let _temperatura = temperaturaInicial
    return{
        nombreSensor,
        leerTemperatura(){
            return _temperatura
        },
        ajustarTemperatura(nuevaTemp){
            if(nuevaTemp > -50 && nuevaTemp < 100){
                _temperatura = nuevaTemp
            }else{
                console.log("Valor no permitido")
            }
        }

    }
}

let temperatura = crearSensorTemperatura("santiago", 30)

console.log(temperatura.nombreSensor)
console.log(temperatura.leerTemperatura())

temperatura.ajustarTemperatura(80)
console.log(temperatura.leerTemperatura())

temperatura.ajustarTemperatura(200)
console.log(temperatura.leerTemperatura())

