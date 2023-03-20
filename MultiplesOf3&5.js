// Multiples of 3 or 5

function solution(number) {
  let multiplesArray = [];

  if (number <= 0) return 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiplesArray.push(i);
    }
  }
  let result = multiplesArray.reduce((acc, val) => acc + val);
  console.log(result);
  return result;
}
