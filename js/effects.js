// effects.js
document.addEventListener('DOMContentLoaded', function() {
    // Efecto de confeti
    document.querySelector('.rsvp-btn')?.addEventListener('click', function() {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
    });

});

// Control de Música
document.addEventListener('DOMContentLoaded', function() {
    const musica = document.getElementById('musica');
    const toggleBtn = document.getElementById('toggleMusic');
    const volumeSlider = document.getElementById('volumeSlider');
    const musicText = document.getElementById('musicText');

    // Estado inicial
    musica.volume = 0.3;
    let isPlaying = true;

    // Toggle Play/Pause
    toggleBtn.addEventListener('click', function() {
        if(isPlaying) {
            musica.pause();
            musicText.textContent = "OFF";
            toggleBtn.innerHTML = '<i class="fas fa-music"></i> <span id="musicText">OFF</span>';
        } else {
            musica.play();
            musicText.textContent = "ON";
            toggleBtn.innerHTML = '<i class="fas fa-music"></i> <span id="musicText">ON</span>';
        }
        isPlaying = !isPlaying;
    });

    // Control de Volumen
    volumeSlider.addEventListener('input', function() {
        musica.volume = this.value;
        
        // Cambiar icono según volumen
        const volIcon = this.previousElementSibling;
        if(this.value == 0) {
            volIcon.className = "fas fa-volume-mute";
        } else if(this.value < 0.5) {
            volIcon.className = "fas fa-volume-down";
        } else {
            volIcon.className = "fas fa-volume-up";
        }
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const colors = ['rgba(212, 175, 55, 0.3)', 'rgba(212, 175, 55, 0.1)'];
    
    function animateGlow() {
        const duration = 15000;
        const start = performance.now();
        
        function frame(time) {
            const elapsed = time - start;
            const progress = (elapsed % duration) / duration;
            
            header.style.boxShadow = `
                0 0 25px ${colors[0]},
                inset 0 0 40px ${colors[1]},
                0 0 ${30 + 10 * Math.sin(progress * Math.PI * 2)}px rgba(212, 175, 55, 0.6)
            `;
            
            requestAnimationFrame(frame);
        }
        
        requestAnimationFrame(frame);
    }
    
    animateGlow();
});

