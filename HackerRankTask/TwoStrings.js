// Stringlər daxilində eyni hərflərin olub-olmadığını müəyyənləşdir
let s1="hello";
let s2="world";
let coxluq=""
for(let i=0; i<s1.length; i++){
    for(let j=0; j<s2.length; j++){
        if(s1[i]==s2[j]){
            coxluq=coxluq+s1[i]
        }
    }
}
console.log(coxluq)
if(coxluq.length==0){
    console.log("NO")
}else{
    console.log("YES")
}
