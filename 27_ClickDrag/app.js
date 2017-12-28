"use strict";

(function(){
  const slider = document.getElementById("items");
  AddElements();
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });
  
  function AddElements () {
    const className = 'item';
    for(let idx = 1; idx < 26; idx++){
      let classSpec = `item${idx}`;
      let div = "<div class='" + className;
      div += ` ${classSpec}'>`
      if(idx < 10) {
        div += `0${idx}`
      } else {
        div += `${idx}`
      }
      div += "</div>"
      slider.innerHTML += div;
    }
  }
  
  
}());
