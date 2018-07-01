// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {}

module.exports = pyramid;

// pyramid(n) {
//   for (var i = 1; i <= n; i++) {
//     var result = "";
//     let spaces = n - i;
//     result = appendSpaces(result, spaces);
//     for (var k = 0; k < i; k++) {
//       if (k === 0) {
//         result += "#";
//       } else {
//         result += "##";
//       }
//     }
//     result = appendSpaces(result, spaces);
//     console.log(result);
//   }
// }
//
// function appendSpaces(str, spaces) {
//   for (var j = 1; j <= spaces; j++) {
//     str += " ";
//   }
//   return str;
// }
