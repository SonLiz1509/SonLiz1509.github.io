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
    
        const Icon = toggleBtn.querySelector('i');
        if (isPlaying) {
            musica.pause();
            Icon.className = "fas fa-volume-mute";
        } else {
            musica.play();
            Icon.className = "fas fa-music";
        }
        isPlaying = !isPlaying;
    });

    // // Control de Volumen
    // volumeSlider.addEventListener('input', function() {
    //     musica.volume = this.value;
        
    //     // Cambiar icono según volumen
    //     const Icon = toggleBtn.querySelector('i');
    //     const volIcon = this.previousElementSibling;
    //     if(this.value == 0) {
    //         volIcon.className = "fas fa-volume-mute";
    //     } else if(this.value < 0.5) {
    //         volIcon.className = "fas fa-volume-down";
    //         musica.play();
    //     } else {
    //         volIcon.className = "fas fa-volume-up";
    //         musica.play();
    //     }
    // });

});

