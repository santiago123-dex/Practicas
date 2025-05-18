const selectColor = document.getElementById('color');
const resultado = document.getElementById('resultado');

selectColor.addEventListener('change', function(event) {
  resultado.textContent = `Seleccionaste el color: ${event.target.value}`;
});
