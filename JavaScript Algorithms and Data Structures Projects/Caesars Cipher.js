/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

function rot13(str) { // LBH QVQ VG!
   let res="";

   for(let i=0; i<str.length; i++){
     let buf = str.charCodeAt(i);
     if(buf>64 && buf<91){
       res+= buf+13<91 ? String.fromCharCode(buf+13) : String.fromCharCode(buf+13-26);
     }else{
       res+=str.charAt(i);
     }
   }

  return res;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
