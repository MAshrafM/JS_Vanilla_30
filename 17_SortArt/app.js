"use strict";
(function(){
  const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

  function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
  }

  document.querySelector('#bands').innerHTML =
    bands
      .map(band => `<li>${band}</li>`)
      .join('');
  
  document.getElementById("sort").addEventListener("click", Sort);
  document.getElementById("rev").addEventListener("click", Rev);
  document.getElementById("list").addEventListener("click", List);
  
  function List(){
   
   document.querySelector('#bands').innerHTML =
    bands
      .map(band => `<li>${band}</li>`)
      .join('');
    }
  
  function Sort(){
   let sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
   document.querySelector('#bands').innerHTML = 
    sortedBands
      .map(band => `<li>${band}</li>`)
      .join('');
    }
  function Rev(){
   let sortedBands = bands.sort((a, b) => strip(a) < strip(b) ? 1 : -1);
   document.querySelector('#bands').innerHTML = 
    sortedBands
      .map(band => `<li>${band}</li>`)
      .join('');
    }
})();