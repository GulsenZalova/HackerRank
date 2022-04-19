'use strict';

// Marsda qəzaya düşən kosmik gəmi yerə SOS mesajları göndərir, amma radiasiya səbəbi ilə bəzi xarakterlər dəyişir, dəyişən xarakter sayını tapın.

let s="SOSSOT";
let arr=s.split("")
let n=s.length
let ss=[]
let o=[]
let ss_n=ss.length
let o_n=o.length
let ss_value=(n*2)/3
let o_value=(n*1)/3
let say=0
let chek=0
let y=o_value-o_n
let x = ss_value-ss_n

for(let i of arr){
    if(i=="S"){
        ss.push(i)
    }
}

for(let j of arr){
    if(j=="O"){
        o.push(j)
    }
}

if(ss.length==ss_value){
    if(o.length==o_value){
        console.log(0)
    }
}

if(ss.length != ss_value){
    let x = ss_value-ss.length
    say+=x

}

if(o.length != o_value){
    let y=o_value-o.length
    chek+=y
}
console.log(say+chek)
