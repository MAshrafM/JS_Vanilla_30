"use strict";
(function(){
  const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarstrm', year: 1829, passed: 1909 }
    ];
  
  let btn = document.getElementById("btn1");
  let cont_1 = document.getElementById("cont_1");
  let getNames = inventor => `${inventor.first} ${inventor.last}`;
  btn.onclick = function(){
    const fullNames = inventors.map(getNames);
    //cont_1.innerHTML = fullNames.join('<br>');
    let block = "<table><thead><tr><th>Names</th><th>Born Date</th><th>Death Date</th></tr></thead><tbody>"
    for(let i = 0; i < inventors.length; i++){
      block += `<tr><td>${fullNames[i]}</td><td>${inventors[i].year}</td><td>${inventors[i].passed}</td></tr>`;
    }
    block += "</tbody></table>";
    cont_1.innerHTML = block;
  }
  
  let btn2 = document.getElementById("btn2");
  let cont_2 = document.getElementById("cont_2");
  btn2.onclick = function(){
    const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600)).map(getNames);
    cont_2.innerHTML = fifteen.join('<br>');
  }
  
  let btn3 = document.getElementById("btn3");
  let cont_3 = document.getElementById("cont_3");
  btn3.onclick = function(){
    const fifteen = inventors.sort((a, b) => a.year > b.year ? 1 : -1).map(getNames);
    cont_3.innerHTML = fifteen.join('<br>');
  }
  
})();