
let c ="fcrxzwscanmligyxyvym";
let d ="jxwtrhvujlmrpdoqbisbwhmgpmeoke";
 
function makeAnagram(a, b){
let say=0;
let silinen;
let w=b
for(let i=0; i<a.length; i++){
    for(let j=0; j<w.length; j++){
        if(a[i]==w[j]){
            say++;
            w = w.replace(`${w[j]}`, "");
            break;
        }
    }
}
silinen=a.length-say + (b.length-say);
console.log(silinen);
}
makeAnagram(c,d)





























// let a="fcrxzwscanmligyxyvym";
// let b="jxwtrhvujlmrpdoqbisbwhmgpmeoke";
// let say=""
// let k_uzun=''
// let c=a+b
// say+=c
// let cumle=say.split('').sort()
// for(let i=0; i<cumle.length; i++){
//     if(cumle[i]===cumle[i+1]){
//      cumle[i]=0
//      cumle[i+1]=0
//     }
// }
// let arrsort=cumle.sort()
// for(let k of arrsort){
//     if(k===0){
//         k_uzun+=k
//     }
// }
// console.log(cumle.length-k_uzun.length)







// for(let i of a){
//     if(b.includes(i)){
//     }else{
//         c+=i
//     }
// }

// for(let i of b){
//     if(a.includes(i)){
//     }else{
//         c+=i
//     }
    
// }
// console.log(c.length)

// for(let i=0; i<a.length; i++){
//     if(a[i]===a[i+1]){
//         a[i+1]=0
//         console.log(a[i])
//     }
// }
