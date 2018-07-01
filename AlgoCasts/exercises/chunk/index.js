// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chuncked = [];
  var index = 0;
  while (index < array.length) {
    chuncked.push(array.slice(index, index + size));
    index += size;
  }
  return chuncked;
}

module.exports = chunk;

// function chunk(array, size) {
//   const chuncked = [];
//   for (let element of array) {
//     const last = chuncked[chuncked.length - 1];
//     if (!last || last.length === size) {
//       chuncked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chuncked;
// }

// function chunk(array, size) {
//   let result = [];
//   let subarray = [];
//
//   var j = 1;
//   for (var i = 0; i < array.length; i++) {
//     if (j === size || i === array.length - 1) {
//       j = 1;
//       subarray.push(array[i]);
//       result.push(subarray);
//       subarray = [];
//     } else {
//       j++;
//       subarray.push(array[i]);
//     }
//   }
//   return result;
// }
