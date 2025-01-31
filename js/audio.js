/*------------------------------------------
  = MUSIC
  -------------------------------------------*/
  try {
    var music;
    var audioIsPlaying = false;
    
    window.addEventListener('load', function() {
      music = new Audio('./audio/CamiloSesto_Jamas.mp3');
    });
  
    var parent = document.getElementById("music-button");
    
    parent.addEventListener("click", function(e) {
      if (audioIsPlaying) {
        audioIsPlaying = false;
        music.pause();
      } else {
        audioIsPlaying = true;
        music.play();
      }
    });
    
    let lastKnownScrollPosition = 0;
    var scrollPlay = false
    
    document.addEventListener("scroll", (event) => {
    
      if (document.scrollY || document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        hidePrepage();
      }
      
      lastKnownScrollPosition = window.scrollY;
    
      if(lastKnownScrollPosition = 50 && !scrollPlay){
        if (audioIsPlaying) {
    
          audioIsPlaying = false;
          if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            //This is an iOS device.
            document.getElementById("my_audio").pause();
          } else {
            //This is not an iOS device!
            music.pause();
          }
        } 
        else {
          audioIsPlaying = true;
          if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            //"This is an iOS device.
          document.getElementById("my_audio").play();
          } else {
            //This is not an iOS device!
          music.play();
          }
    
        }
        scrollPlay = true;
      }
    });
  
    function playMusic(){
  
      if (audioIsPlaying) {
        audioIsPlaying = false;
        music.pause();
      } else {
        audioIsPlaying = true;
        music.play();
      }
    }
  
  } catch {}