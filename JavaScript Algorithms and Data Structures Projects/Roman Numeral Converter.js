/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
    let res = "";
    let arrCompare = [[1000, 'M'],[900, 'CM'],[500, 'D'], [400, 'CD'], ['100', 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];
    
    while(num!=0){
        for(let i=0; i<arrCompare.length; i++){
            if(num-arrCompare[i][0]>=0){
                res+=arrCompare[i][1];
                num-=arrCompare[i][0];
                break;
            }
        }
    }
 return res;
}

convertToRoman(36);
