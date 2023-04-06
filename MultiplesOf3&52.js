/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1) */

function solution(number) {
  let numsArr = [];
  for (let i = number - 1; i > 0; i--) {
    numsArr.unshift(i);
  }
  let multiOf3 = [];
  let commonMulti = [];
  let multiples = [];

  for (let i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 3 === 0 || numsArr[i] % 5 === 0) multiples.unshift(numsArr[i]);
  }
  console.log(commonMulti)
  const result = multiples.reduce((acc, val) => acc + val, 0);
  console.log(result);
  return result;
}

console.log(solution(50));

