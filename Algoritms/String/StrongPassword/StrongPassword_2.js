'use strict';

// Strong Password taskının 2-ci üsulu

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


let password="gulsen"
let numbers = "0123456789"
let lower_case = "abcdefghijklmnopqrstuvwxyz"
let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let special_characters = "!@#$%^&*()-+"
let n=password.length
console.log(n)
let say=0
let numeral=0
let low_case=0
let up_case=0
let s_c=0

for(let pass of password){
    if(numbers.includes(pass)){
        numeral++
    }
    if(lower_case.includes(pass)){
        low_case++
    }
    if(upper_case.includes(pass)){
        up_case++
    }
    if(special_characters.includes(pass)){
        s_c++
    }
}
console.log(numeral)
console.log(low_case)
console.log(up_case)
console.log(s_c)

if(numeral==0){
    say++
}
if(low_case==0){
    say++
}
if(up_case==0){
    say++
}
if(s_c==0){
    say++
}
console.log(say)

if(n>=6){
    console.log(say)
}
else{
    console.log(n=6-n)
}

// if(say>n){
//     console.log(say)
// }
// else{
//     console.log(n)
// }