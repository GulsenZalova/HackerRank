// Stringlər daxilində eyni hərflərin olub-olmadığını müəyyənləşdir
// Hər 3 üsul doğrudur, amma hackerrank tərərfindən ən optimal sayılan 3cü üsul oldu

// 1ci üsul

// let s1="hello";
// let s2="world";
// let coxluq=""
// for(let i=0; i<s1.length; i++){
//     for(let j=0; j<s2.length; j++){
//         if(s1[i]==s2[j]){
//             coxluq=coxluq+s1[i]
//         }
//     }
// }
// console.log(coxluq)
// if(coxluq.length==0){
//    let s1="hello";
// let s2="world";
// }else{
//     console.log("YES")
// }


// 2ci üsul

// let s1="hello";
// let s2="world";
// let arr=[]

// for(let i of s1){
//     arr.push(i)
// }
// for(let i of s2){
//    if( arr.includes(i)){
//     console.log("YES")
//    }
// }
// console.log("NO")   


//  3 cü üsul  
// let s1="he";
// let s2="world";

// let cumle=false

// for(let i of s1){
//     if(s2.includes(i)){
//         cumle=true
//         break
//     }
// }
// if (cumle==true){
//     console.log("YES")
// }
// else{
//     console.log("NO") 
// }