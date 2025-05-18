const formulario = document.getElementById('formulario')
const resultado = document.getElementById('resultado')

formulario.addEventListener('submit', function(event){
    const totalCuenta = document.getElementById('total-cuenta').value
    const propina = document.getElementById('propina').value
    event.preventDefault()

    if(totalCuenta <= 0 || propina <= 0){
        alert('Numero invalido')
    }else{   
        const calPropina = totalCuenta * (propina/100)
        resultado.textContent = 'La propina es: $' + calPropina
        resultado.style.color = 'green'
        document.getElementById('total-cuenta').value = ""
        document.getElementById('propina').value = ""
    }
})