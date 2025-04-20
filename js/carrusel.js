let index = 0;
const captions = [
    "... Primera foto juntos 💕 ...",
    "... Una aventura inolvidable ✈️ ...",
    "... Nuestros perritos 🐶 ...",
    "... El día que dijimos 'Sí' 💍 ..."
];

function moveSlide(step) {
    const slides = document.querySelector('.carousel-container');
    const captionText = document.getElementById("caption");
    const totalSlides = captions.length;
    
    index += step;

    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    slides.style.transform = `translateX(${-index * 100}%)`;
    captionText.textContent = captions[index];
}

/* Cambio automático cada 5 segundos */
setInterval(() => {
    moveSlide(1);
}, 5000);
