const input = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

function countVowel() {
  let vowelCount = 0;
  let q = input.value.toLowerCase();
  for(let i = 0; i< q.length; i++){
    if(q[i].match(/([a,e,i,o,u])/))
    vowelCount++;
  }

  result.innerHTML = `${input.value} has ${vowelCount} vowels`;
}


btn.addEventListener("click", countVowel);


