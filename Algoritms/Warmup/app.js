// Hər iki arrayin uygun elementlərini müqayisə edin,hansı böyükdürsə, həmin şəxsə 1 bal verin və nəticəni array formasında çap edin
let a=[5, 6 , 7];
let b=[3, 6 , 10]

let alis=0
let bob=0

for(let i=0; i<a.length; i++){
    if(a[i]>b[i]){
        alis++
    }
    else if(a[i]<b[i]){
        bob++
    }
}

console.log ([alis, bob])