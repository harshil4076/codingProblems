
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

// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.
// Examples : 

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5
// Note: Order of elements is not important here.
function negativeSort (input) {
    // let negative =[]
    // let positive = []

    // for(i=0; i< input.length; i++){

    //     if(Math.sign(input[i]) == -1){
    //         negative.push(input[i])
    //     }
    //     else if(Math.sign(input[i]) == 1){
    //         positive.push(input[i])
    //     }
    // }

    // return [...negative, ...positive]
    let res = input
    let j = 0;
    let temp;

    for(i=0; i< res.length; i++){
        if(res[i] < 0){
            temp = res [i]  //-13
            res[i] = res[j]  //res[i] = 2 = res[j] = 1
            res[j] = temp
            j++
        }
    }
    return res
}

// console.log(negativeSort([-12, 11, -13, -5, 6, -7, 5, -3, -6]))

function unionIntersection(arr1, arr2){
    let arr = [...arr1, ...arr2]
    let freq = {}
    let union = []
    let intersection = []
    for (i=0; i<arr.length-1;i++){
        if(freq[arr[i]]){
            freq[arr[i]]++
        }
        else if(!freq[arr[i]]){
            freq[arr[i]] = 1
        }
    }
    console.log(freq)
        for(let item in freq){
            if(item == 2){
                let int = parseInt(item)
                union.push(int)
            }
        }
        intersection = Object.keys(freq).map(item => parseInt(item)) 
        
    return {
        union : union,
        intersection : intersection
    }
}
// console.log(unionIntersection([1,2,3,4], [2,4,5,6,7]))

function rotate(arr){

    let temp 
    temp = arr[arr.length-1]
    arr.pop()
    arr.unshift(temp)
    // arr.shift() 
    return arr
}
console.log(rotate([1,2,3,4,5]))