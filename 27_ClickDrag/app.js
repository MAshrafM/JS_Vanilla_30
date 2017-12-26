"use strict";

(function(){
  AddElements();
  
  function AddElements () {
    const className = 'item';
    const Items = document.getElementById("items");
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
      Items.innerHTML += div;
    }
  }
  
  
}());
