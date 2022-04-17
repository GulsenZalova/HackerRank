// Fibonacci ardıcıllığımı tapın.
let arr=[]
let n=4

for(let i=2; i<=n; i++){
    arr.push(0)
    arr.push(1)
    arr[i]=arr[i-1]+arr[i-2]
}
console.log(arr[n])