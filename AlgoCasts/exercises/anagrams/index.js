// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleaningString(stringA) === cleaningString(stringB);
}

function cleaningString(str) {
  return str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   let charsA = buildCharacterMap(stringA);
//   const charsB = buildCharacterMap(stringB);
//
//   if (Object.keys(charsA).length !== Object.keys(charsB).length) {
//     return false;
//   }
//
//   for (let el in charsA) {
//     if (charsB[el] !== charsA[el]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildCharacterMap(str) {
//   let map = {};
//   for (let char of str.replace(/[^\w\s]/g, "").toLowerCase()) {
//     map[char] = map[char] + 1 || 1;
//   }
//   return map;
// }
