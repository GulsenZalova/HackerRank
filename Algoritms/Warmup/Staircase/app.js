
function staircase(n) {
    // Write your code here
    let say=n
    for(let i=0; i<say; i++){
        let  stair="";
        for(let j=0; j<say; j++){
            if(i+j>say-2){
                stair+="#"
            }
            else{
                stair+=" "
            }
        }
        console.log(stair)
    }

}



