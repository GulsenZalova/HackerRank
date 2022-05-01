'use strict';
// Bir cümlənin tərkibində ingilis əlifbasının bütün hərfləri varsa, onda bu mangram adlanır. Buna əsasən təqdim olunan cümlələrin pangram olub olmadığını tapın.
let s = "We promptly judged antique ivory buckles for the prize";
// let s = "We promptly judged antique ivory buckles for the next prize";
let lower=s.toLowerCase()
let letter="abcdefghijklmnopqrstuvwxyz"
let j=0;
let say=0;

for(let i of letter){
  if(lower.includes(i)){
      say++
  }
}
console.log(say)

if(say==26){
        console.log("pangram")
    }
    else{
        console.log("not pangram")
    }
    