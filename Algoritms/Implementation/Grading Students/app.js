let a=[73,67,38,33]
let arr=[]
function gradingStudents(grades) {
    // Write your code here
    for(let i=0; i<grades.length;i++){
        if(grades[i]>=38&&grades[i]<=100){
            let bolme = grades[i]%10;
            if(bolme>=5){
                let ferq=10-bolme
                let son=grades[i]+ferq
                let hesabla=son-grades[i]
                if(hesabla>=3){
                   arr[i]=grades[i]
                }else{
                   arr[i]=son
                }
            } else if(bolme<=5){
                let ferq2=5-bolme
                let hesabla=grades[i]+=ferq2
                if(hesabla>3){
                    arr[i]=grades[i]
                }else{
                    arr[i]=grades[i]
                }
            }else if(bolme==0){
                arr[i]=grades[i]
            }
        }else{
         arr[i]=grades[i]
        }
    }
    return arr

}

gradingStudents(a)






