'use strict';

// Strong Password taskının 1-ci üsulu,   2-ci üsul StronPassword_2 faylındadır.

/*
Luiza dostları ilə əlaqə saxlamaq üçün sosial şəbəkəyə qoşulub. Qeydiyyat səhifəsi ondan ad və parol daxil etməyi tələb etdi. Bununla belə, parol güclü olmalıdır. Veb sayt parolu aşağıdakı meyarlara cavab verərsə, onu güclü hesab edir:

-Onun uzunluğu ən azı 6 olmalıdır.
-Tərkibində ən azı 1 rəqəm olmalıdır.
-Tərkibində ən azı 1 kiçik ingilis hərfi olmalıdır.
-Tərkibində ən azı 1 böyük ingilis hərfi olmalıdır.
-Tərkibində ən azı bir xüsusi simvol olmalıdır. Xüsusi simvollar bunlardır: !@#$%^&*()-+

Tələb olunlan: Yuxarıdan tələb olunan hər hansı bir xarakter daxil edilmədikdə və ya uzunluq yetərsiz olduqda parolu güclü edəcək simvol sayını return edin.

Qeyd: Budur, həllinizdə yerləşdirə biləcəyiniz formada simvol növləri dəsti:
numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"

*/
let password="#HackerRank"
let numbers = "0123456789"
let lower_case = "abcdefghijklmnopqrstuvwxyz"
let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let special_characters = "!@#$%^&*()-+"
let n=password.length
let say=0
let num=numbers.length;
let numeral=0
let lc=lower_case.length;
let low_case=0
let uc=upper_case.length;
let up_case=0
let sc=special_characters.length
let s_c=0

for(let a=0; a<n; a++){
    for(let b=0; b<num; b++){
        if(password[a]==numbers[b]){
            numeral++
        }
        // console.log(numeral)
    }
    for(let c=0; c<lc; c++){
        if(password[a]==lower_case[c]){
            low_case++
        }
        // console.log(low_case)
    }
    for(let d=0; d<uc; d++){
        if(password[a]==upper_case[d]){
            up_case++
        }
        // console.log(up_case)
    }
    for(let e=0; e<sc ; e++){
        if(password[a]==special_characters[e]){
            s_c++
        }
        // console.log(s_c)
    }
}
    // console.log(numeral)
    // console.log(low_case)
    // console.log(up_case)
    // console.log(s_c)
    

if(numeral==0){
    say++
}
// console.log(say)
   
if(low_case==0){
     say++
}
console.log(say)
if(up_case==0){
  say++
}
console.log(say)
if(s_c==0){
  say++
 }
 console.log(say)

if(n>=6){
    console.log(say)
}
else{
    n=6-n
}

if(say>n){
    console.log(say)
}
else{
    console.log(n)
}
