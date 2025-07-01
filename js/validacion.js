const invitados = {
  "f0001": {
    "nombre": "Karen Conde y Carlos Nolasco",
    "mensaje": "Tenerlos en nuestras vidas ha sido uno de los regalos más valiosos que la vida nos ha dado. Hoy, que damos este gran paso, no podemos imaginar hacerlo sin ustedes a nuestro lado. Ser nuestros dama y caballero de honor no es solo un título, es un reflejo de todo lo que significan para nosotros: apoyo incondicional, risas interminables, aventuras inolvidables y también compañía en los momentos difíciles. Gracias por ser hogar, familia y amistad verdadera. Este no es solo un “sí, acepto” entre nosotros dos… también es un “sí” a seguir caminando junto a ustedes por muchas etapas más. Los queremos con todo el corazón.",
    "invitados": 3
  },
  "ramirez23": {
    "nombre": "Familia Ramírez",
    "mensaje": "Gracias por estar con nosotros en este momento tan especial.",
    "invitados": 2
  }
};

function validarCodigo() {
  const codigo = document.getElementById('codigoInput').value.trim().toLowerCase();
  const contenedor = document.getElementById('mensajePersonalizado');

  if (invitados[codigo]) {
    const info = invitados[codigo];
    contenedor.innerHTML = `
      <h2>¡Hola, ${info.nombre}!</h2>
      <p>${info.mensaje}</p>
      <p><strong>Número de invitados:</strong> ${info.invitados}</p>
      <button id="btnInvitacion" onclick="irAInvitacion()">Ver Invitación</button>
    `;
    contenedor.style.display = 'block';

    //  Agregar animación de entrada
    contenedor.classList.remove('mensaje-animado'); // reset por si ya estaba
    void contenedor.offsetWidth; // fuerza reflujo para reiniciar animación
    contenedor.classList.add('mensaje-animado');

    //  Ocultar sección de entrada de código
    const bloqueSuperior = document.querySelector('.texto-portada');
    if (bloqueSuperior) bloqueSuperior.style.display = 'none';

    //  Cambiar estilo de portada para permitir scroll
    const portada = document.getElementById('portada');
    if (portada) {
      portada.style.position = 'static';
      portada.style.height = 'auto';
    }

    //  Permitir scroll global
    document.body.style.overflowY = 'auto';

    //  Hacer scroll suave al mensaje
    contenedor.scrollIntoView({ behavior: 'smooth' });

  } else {
    contenedor.innerHTML = `<p style="color:red;">Código no válido. Intenta de nuevo.</p>`;
    contenedor.style.display = 'block';
  }
}


function irAInvitacion() {
  window.location.href = './invitacion.html';
}
