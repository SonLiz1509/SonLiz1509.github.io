document.getElementById('rsvpForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Evita que el formulario se envíe de forma tradicional
  
    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('responseMessage');
  
    try {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbx0sD1nUCTauFjWLOkdyc2XlvHH2T97yuNiDqYWf_WJz1yokfRLd-mh_p4G_642AT9rvA/exec', {
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