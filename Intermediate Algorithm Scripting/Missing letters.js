/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.   */

function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for(let i=0; i<str.length; i++){
    if(alphabet[alphabet.indexOf(str.charAt(0))+i] !== str.charAt(i)){
      return alphabet[alphabet.indexOf(str.charAt(0))+i];
    }
  }
  return undefined;
}

fearNotLetter("abce");
