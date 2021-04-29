
let arr = [2,1,0,2,0,1,0,2,0,2,1,1,2,0,1]
//////////
let arr0 = []
  let arr1 = []
   let arr2 = []
function arraySort (){
    for(let i = 0; i<= arr.length-1; i++){
        if(arr[i] == 0){
            arr0.push(arr[i])
        }
        else if(arr[i] == 1){
            arr1.push(arr[i])
        }
        else if(arr[i] == 2){
            arr2.push(arr[i])
        }
        
    }
    return [...arr0, ...arr1, ...arr2]
}

console.log(arraySort())