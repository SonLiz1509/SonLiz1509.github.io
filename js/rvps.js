document.getElementById('rsvpForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional
  
    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('responseMessage');
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyvsXneSL1uvOMN-4356J2HlHHchrdputbKOgbqivV-z9I6H-GoHPjiF33G5qWzvoSy1g/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        responseMessage.textContent = data.message;
        responseMessage.style.color = 'green';
      } else {
        responseMessage.textContent = 'Error al confirmar tu asistencia.';
        responseMessage.style.color = 'red';
      }
    } catch (error) {
      responseMessage.textContent = 'Error de conexión. Inténtalo de nuevo más tarde.';
      responseMessage.style.color = 'red';
    }
  });