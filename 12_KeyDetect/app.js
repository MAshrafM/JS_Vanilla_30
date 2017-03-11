"use strict";
(function(){
  const pressed = [];
  const secretCode = 'sonic';
  const textpad = document.getElementById("textpad");
  window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
      textpad.innerHTML = "Secret Cracked!"
      cornify_add();
    }
    textpad.innerHTML += e.key;
  });
})();