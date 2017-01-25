"use strict";
(function(){
  let cont_1 = document.getElementById("cont_1");
  let cont_2 = document.getElementById("cont_2");
  let cont_3 = document.getElementById("cont_3");
  const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 },
    ];
    
  let block = "<table><thead><tr><th>Names</th><th>Born Date</th></tr></thead><tbody>"
    for(let i = 0; i < people.length; i++){
      block += `<tr><td>${people[i].name}</td><td>${people[i].year}</td></tr>`;
    }
  block += "</tbody></table>";
  cont_1.innerHTML = block;
    
  const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
  cont_2.innerHTML = isAdult.toString();
  
  const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
  cont_3.innerHTML = allAdults.toString();
  
})();