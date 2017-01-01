"use strict";
(function(){
  const ss = document.querySelector(".ss"),
        mm = document.querySelector(".mm"),
        hh = document.querySelector(".hh");
  
  function setDate(){
    const current = new Date(),
                s = current.getSeconds(),
                m = current.getMinutes(),
                h = current.getHours(),
                
                sInDegree = ((s/60) * 360) + 90,
                mInDegree = ((m/60) * 360) + 90,
                hInDegree = ((h/12) * 360) + 90;
    
    function fixV(elem){
      elem.style.transform = "rotate(90deg)";
      elem.style.transition="all 0s";
    }
    
    function moveHand(elem, degree){
      elem.style.transform = `rotate(${degree}deg)`
    }
    
    if(s>0){moveHand(ss, sInDegree)}else{fixV(ss);}
    if(m>0){moveHand(mm, mInDegree)}else{fixV(mm);}
    if(h>0){moveHand(hh, hInDegree)}else{fixV(hh);}
  }
  setInterval(setDate, 1000);

  setDate();
})();