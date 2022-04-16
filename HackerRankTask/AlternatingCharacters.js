
let s1="AAABBB"
let say=0

for(let i=0; i<s1.length; i++){
    if(s1[i]==s1[i+1]){
        s1[i+1]=0
        say++
    }
}
console.log(say)

