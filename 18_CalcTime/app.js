"use strict";
(function(){
  const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
  
  document.querySelector(".btn").addEventListener("click", calcTime);
  
  function calcTime(){
    const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(':').map(parseFloat);
      return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;
    
    document.querySelector('.calc-time').innerHTML = hours +'hr '+ mins + 'm ' + secondsLeft + 's'
    document.querySelector('.total').style.backgroundColor = "rgb(94, 222, 93)"
  }
})();