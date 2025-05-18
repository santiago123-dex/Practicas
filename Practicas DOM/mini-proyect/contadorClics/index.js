const container = document.getElementById('botones-container');
const resultado = document.getElementById('resultado');

container.addEventListener('click', function(event) {
  // Verifica si el clic fue en un botón (evita el clic en el div)
  if (event.target.tagName === 'BUTTON') {
    const textoBoton = event.target.textContent;
    resultado.textContent = 'Has hecho clic en: ' + textoBoton;

    // Elimina la clase .activo de todos los botones
    const botones = container.querySelectorAll('button');
    botones.forEach(boton => boton.classList.remove('activo'));

    // Agrega la clase .activo al botón clickeado
    event.target.classList.add('activo');
  }
});
