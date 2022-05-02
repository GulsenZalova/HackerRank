// let arr=[1,2,3,4,5]
// let arr=[1,3,5,7,9]
let arr=[7, 69, 2, 221, 8974]
let arr_sort=arr.sort(function(a,b){return a-b})
let min=0;
let max=0;

for(let i of arr_sort){
    if(arr_sort.indexOf(i)>0){
        max+=i
    }
}
for(let j of arr_sort){
    if(arr_sort.indexOf(j)<4){
    min+=j
    }
}
console.log(min, max)

