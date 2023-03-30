/* Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]]. */

array = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];

snail = function (array) {
  const result = [];

  if (array.length === 0) return result;

  let top = 0;
  let bottom = array.length - 1;
  let left = 0;
  let right = array[0].length - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(array[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(array[i][right]);
    }
    right--;

    if (top <= bottom && left <= right) {
      for (let i = right; i >= left; i--) {
        result.push(array[bottom][i]);
      }
      bottom--;

      for (let i = bottom; i >= top; i--) {
        result.push(array[i][left]);
      }
      left++;
    }
  }
  console.log(result);
  return result;
};

snail(array);
