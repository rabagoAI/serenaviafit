
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = "¡Gracias por suscribirte!";
  mensaje.style.color = "green";
  this.reset();
});
