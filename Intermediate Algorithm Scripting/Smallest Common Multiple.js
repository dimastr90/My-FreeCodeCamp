/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

function smallestCommons(arr) {
  arr.sort((a,b)=> a-b);
  let res=0;
  let iter = arr[1];
  let bool =false;


  while(res===0){
  for(let i=arr[0]; i<=arr[1];i++){
    if(iter%i===0){
      bool=true;
    }else{
      bool=false;
      break;
    }
  }
  if(bool){
      res=iter;
    }
    iter++;
}

return res;
}


smallestCommons([1,5]);
