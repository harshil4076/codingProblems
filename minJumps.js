function minJumps(arr){
    let jump = 0
    let current = 0
    for(i=0; i<= arr.length-1;i++){
        if(i!== current){
            continue
        }else if(i === current){
            if(i + arr[current] >= arr.length - 1){
                jump ++ 
                return jump
            }else{
                current = current + arr[current]
                jump ++
            }
        }
    }
    return jump
}
console.log(minJumps([ 1, 2, 8, 9, 5 ]))
