let p = new Promise((resolve, reject) => {
    let value = Math.floor(Math.random() * 4); // Genera un número aleatorio entre 0 y 3
    console.log(`Valor generado: ${value}`); // Para ver qué número salió

    if (value === 0) {
        // Si el valor es 0, simulamos un fallo inmediato
        reject(new Error('¡Salió el 0!'));
    } else {
        // Si no es 0, simulamos una operación exitosa con un retraso
        // El retraso es 'value' segundos (value * 1000 milisegundos)
        setTimeout(() => {
            resolve(value); // Llama a resolve con el valor después del retraso
        }, value * 1000);
    }
});
// En este punto, la promesa 'p' está en estado 'pending'.
// Su estado cambiará a 'fulfilled' (después de un retraso) O a 'rejected' (inmediatamente si value es 0).