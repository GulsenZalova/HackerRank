
let s1="hello";
let s2="world";
let s1arr=s1.split("");
console.log(s1arr)
let s2arr=s2.split("");

for(let i=0; i<s1arr.length; i++){
    for(let j=0; j<s2arr.length; j++){
        if(s1arr[i]===s2arr[j]){
            console.log(s1arr[i].includes(s2arr))
            // console.log("Yes")
        }
    }
}