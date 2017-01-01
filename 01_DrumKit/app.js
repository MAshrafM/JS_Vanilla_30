"use strict";
(function(){
  
  function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; 
    audio.play(); 
  };
  
  function addAnime(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!key) return;
    key.classList.add('playing');
  };
  
  function removeAnime(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!key) return;
    key.classList.remove('playing');
  };
  
  function playDrum(e){
    playSound(e);
    addAnime(e);
  };
  
  window.addEventListener('keydown', playDrum);
  window.addEventListener('keyup', removeAnime);
})();