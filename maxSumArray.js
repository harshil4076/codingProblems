function maxSum(arr){
    let maxSum =0
    let sum

    arr.forEach( (item, i) =>{
        for(let j = i; j<= arr.lenght -1; j++){
            sum = sum + arr[j]
        }
        if(sum>maxSum){
            maxSum = sum
        }
        sum = 0
    })
    return maxSum
}

console.log(maxSum([-2,-2,4,-1,-2,1,5,-3]))
console.log(- Math.pow(2,53) -1)