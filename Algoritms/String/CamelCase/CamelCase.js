'use strict';
//  CamelCase qaydalar uy]un şəkildə verilmiş string daxilində neçə söz olduğunu tapın.
let s="saveChangesInTheEditor";
let arr=[]
arr.push(s[0])
let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

for(let i of s){
    if(upper_case.includes(i)){
        arr.push(i)
    }
}
console.log(arr.length)

