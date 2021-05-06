/**
 * @param {number[]} nums
 * @return {number}
 */
function duplicate(nums){
    nums.sort()
     let res = nums.filter((num, i) => {
       return  nums[i] === nums[i-1]? num: null
    })
    return res
}

console.log(duplicate([1,2,3,4,2]))