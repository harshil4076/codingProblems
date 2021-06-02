/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    var a_pointer = 0
    var b_pointer = s.length-1
     do {
         temp_a = s[a_pointer]
         temp_b = s[b_pointer]
         
         s[a_pointer] = temp_b
         s[b_pointer] = temp_a
         
         a_pointer++
         b_pointer--
     }while(a_pointer <= b_pointer)
     console.log(s)
 };
 reverseString(['j','i','y','a'])