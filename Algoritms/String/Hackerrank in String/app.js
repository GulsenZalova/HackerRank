'use strict';
// verilen sözde hackerrank yazısının olub-olmadığını yoxlayın
let str = "hackerrank";
let s = "herehereiamstackerrank";

if(s.length<str.length){
    console.log("NO")
}
let j=0;
for(let i=0; i<s.length; i++){
    if(s.charAt(i)==str.charAt(j)){
        j++
    }
}
 
if(j==str.length){
    console.log("YES")
}
else{
    console.log("NO")
}






