/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {

  return str.replace(/([a-z])([A-Z])|[_|\s]/g , '$1-$2').toLowerCase();
}

spinalCase('This Is Spinal Tap');
