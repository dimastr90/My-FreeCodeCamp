/* Flatten a nested array. You must account for varying levels of nesting. */


function steamrollArray(arr) {
let newArray = [];

let func = val => {
   if(!Array.isArray(val)){
     return newArray.push(val);
   }else{
     return val.map(func);
   }
 };

arr.map(func);

 return newArray;

}

steamrollArray([1, [2], [3, [[4]]]]);
