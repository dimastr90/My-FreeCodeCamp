/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

function convertHTML(str) {
  return str.replace(/[&<>'"]/g, repl);
}

function repl(elem){
  switch(elem){
    case '&':
       return '&amp;';
       break;
    case '<':
       return '&lt;';
       break;
    case '>':
       return '&gt;';
       break;
    case '\"':
       return '&quot;';
       break;
    case '\'':
       return '&apos;';
       breal;      
  }
}


convertHTML("Dolce & Gabbana");
