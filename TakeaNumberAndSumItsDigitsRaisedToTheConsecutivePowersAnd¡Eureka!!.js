/* 
Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

The number 
89
89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 
89
=
8
1
+
9
2
89=8 
1
 +9 
2
 

The next number in having this property is 
135
135:

See this property again: 
135
=
1
1
+
3
2
+
5
3
135=1 
1
 +3 
2
 +5 
3
 

Task
We need a function to collect these numbers, that may receive two integers 
�
a, 
�
b that defines the range 
[
�
,
�
]
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[
�
,
�
]
[a,b] the function should output an empty list.

90, 100 --> []
Enjoy it!! */

function sumDigPow(a, b) {
  let result = [];
  const numsArr = [];
  for (let i = a; i <= b; i++) {
    numsArr.push(i);
  }

  numsArr.map((num) => {
    if (num < 10) result.push(num);

    if (num > 9) {
      const firstDigit = num.toString()[0];
      const secondDigit = num.toString()[1];
      if (Number(firstDigit) ** 1 + Number(secondDigit) ** 2 === num) {
        result.push(num);
      }
    }

    if (num > 99) {
      const firstDigit = num.toString()[0];
      const secondDigit = num.toString()[1];
      const thirdDigit = num.toString()[2];
      if (
        Number(firstDigit) ** 1 +
          Number(secondDigit) ** 2 +
          Number(thirdDigit) ** 3 ===
        num
      ) {
        result.push(num);
      }
    }

    if (num > 999) {
      const firstDigit = num.toString()[0];
      const secondDigit = num.toString()[1];
      const thirdDigit = num.toString()[2];
      const forthDigit = num.toString()[3];
      if (
        Number(firstDigit) ** 1 +
          Number(secondDigit) ** 2 +
          Number(thirdDigit) ** 3 +
          Number(forthDigit) ** 4 ===
        num
      ) {
        result.push(num);
      }
    }
  });
  console.log(result);
  return result;
}

const result = sumDigPow(1, 90);
console.log(result);

// Simpler Version:

function sumDigPow(a, b) {
  let result = [];

  for (let i = a; i <= b; i++) {
    let sum = 0;
    let digits = i.toString();

    for (let j = 0; j < digits.length; j++) {
      sum += Math.pow(parseInt(digits[j]), j + 1);
    }

    if (sum === i) {
      result.push(i);
    }
  }

  return result;
}
