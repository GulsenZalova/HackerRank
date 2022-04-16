let k=50
// let arr=[1,2,8,3,4,5,9,6,7]
let arr=[1,12,5,111,200,1000,10]
let arrsort=arr.sort(function(a,b){return a-b})
let say=0
let newarr=[]

for(let i=0; i<arrsort.length; i++){
    say+=arr[i]
    if(say<=k)
   newarr[i]=arrsort[i]
}
console.log(newarr.length)