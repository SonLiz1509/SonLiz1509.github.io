// Configuración de la fecha del evento
const weddingDate = new Date('November 15, 2025 16:00:00').getTime();

// Actualización del contador cada segundo
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  // Cálculo de días, horas, minutos y segundos restantes
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Actualización del DOM
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  // Cuando el contador llega a 0
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = "<h2>¡El gran día ha llegado!</h2>";
  }
}, 1000);
