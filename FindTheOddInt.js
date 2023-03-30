/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

function findOdd(A) {
  // Loop through the provided numbers array:
  for (let i = 0; i < A.length; i++) {
    // Initialize a counter variable:
    let count = 0;
    // Second loop to check how many times the element[i] appears in the array:
    for (j = 0; j < A.length; j++) {
      if (A[i] === A[j]) {
        count++;
      }
    }
    // If the count is odd return the element [i] of the first loop:
    if (count % 2 !== 0) {
      console.log(A[i]);
      return A[i];
    }
  }
}

findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
