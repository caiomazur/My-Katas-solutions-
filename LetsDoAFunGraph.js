/* Let's do a Fun Graph! 

You have done some data collection today and you want the data to be well presented by a graph so you have decided to make a quick diagram. Suppose that for this kata your data is presented by an array by their value eg [10,5,3,1,4], then you must present your data as follows:


for data = [10,5,3,1,4] :
 ____ ........................ ^ 10
|    |........................ | 9
|    |........................ | 8
|    |........................ | 7
|    |........................ | 6
|    | ____ .................. | 5
|    ||    |............ ____  | 4
|    ||    | ____ ......|    | | 3
|    ||    ||    |......|    | | 2
|    ||    ||    | ____ |    | | 1
|    ||    ||    ||    ||    | | 0
GOOD TO KNOW :
Each bar is always of width 6.

The vertical axis must be surrounded with one space character on each side.

No trailing spaces on any line.

For this kata we use :

the following characters : '_',' ','|','.','^'.
some numbers.
Return type :

Your code must return a character string joined by \n.
[] and [0] has different returns "" and " ____  ^ 0"
CRITERIA :
The length of the array is always less than 50.
The value of a data is also less than 50 and always positive.
GOOD LUCK :)*/

function graph(arr) {
  if (!arr) return [];
  let rowTen = ".".repeat(arr.length) + "^ 10\n";
  let rowNine = ".".repeat(arr.length) + "| 9\n";
  let rowEight = ".".repeat(arr.length) + "| 8\n";
  let rowSeven = ".".repeat(arr.length) + "| 7\n";
  let rowSix = ".".repeat(arr.length) + "| 6\n";
  let rowFive = ".".repeat(arr.length) + "| 5\n";
  let rowFour = ".".repeat(arr.length) + "| 4\n";
  let rowThree = ".".repeat(arr.length) + "| 3\n";
  let rowTwo = ".".repeat(arr.length) + "| 2\n";
  let rowOne = ".".repeat(arr.length) + "| 1\n";
  let rowZero = ".".repeat(arr.length) + "| 0";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 10) {
      rowTen = rowTen.slice(0, i) + "_" + rowTen.slice(i + 1);
      rowTen = rowTen
        .replace(/\./g, ".".repeat(5))
        .replace(/_/g, "_".repeat(5));
    } else if (arr[i] === 9) {
      rowNine = rowNine.slice(0, i) + "_" + rowNine.slice(i + 1);
      rowNine = rowNine
        .replace(/\./g, ".".repeat(5))
        .replace(/_/g, "_".repeat(5));
    } else if (arr[i] === 8) {
      rowEight = rowEight.slice(0, i) + "_" + rowEight.slice(i + 1);
      rowEight = rowEight
        .replace(/\./g, ".".repeat(5))
        .replace(/_/g, "_".repeat(5));
    } else if (arr[i] === 7) {
      rowSeven = rowSeven.slice(0, i) + "_" + rowSeven.slice(i + 1);
      rowSeven = rowSeven
        .replace(/\./g, ".".repeat(5))
        .replace(/_/g, "_".repeat(5));
    } else if (arr[i] === 6) {
      rowSix = rowSix.slice(0, i) + "_" + rowSix.slice(i + 1);
      rowSix = rowSix
        .replace(/\./g, ".".repeat(5))
        .replace(/_/g, "_".repeat(5));
    } else if (arr[i] === 5) {
      rowFive = rowFive.slice(0, i) + "_" + rowFive.slice(i + 1);
      rowFive = rowFive
        .replace(/\./g, ".".repeat(5))
        .replace(/_/g, "_".repeat(5));
    } else if (arr[i] === 4) {
      rowFour = rowFour.slice(0, i) + "_" + rowFour.slice(i + 1);
      rowFour = rowFour
        .replace(/\./g, ".".repeat(5))
        .replace(/_/g, "_".repeat(5));
    } else if (arr[i] === 3) {
      rowThree = rowThree.slice(0, i) + "_" + rowThree.slice(i + 1);
      rowThree = rowThree
        .replace(/\./g, ".".repeat(5))
        .replace(/_/g, "_".repeat(5));
    } else if (arr[i] === 2) {
      rowTwo = rowTwo.slice(0, i) + "_" + rowTwo.slice(i + 1);
      rowTwo = rowTwo
        .replace(/\./g, ".".repeat(5))
        .replace(/_/g, "_".repeat(5));
    } else if (arr[i] === 1) {
      rowOne = rowOne.slice(0, i) + "_" + rowOne.slice(i + 1);
      rowOne = rowOne
        .replace(/\./g, ".".repeat(5))
        .replace(/_/g, "_".repeat(5));
    } else if (arr[i] === 0) {
      rowZero = rowZero.slice(0, i) + "_" + rowZero.slice(i + 1);
      rowZero = rowZero
        .replace(/\./g, ".".repeat(5))
        .replace(/_/g, "_".repeat(5));
    }
  }
  console.log(
    rowTen,
    rowNine,
    rowEight,
    rowSeven,
    rowSix,
    rowFive,
    rowFour,
    rowThree,
    rowTwo,
    rowOne,
    rowZero
  );
}

const result = graph([10, 5, 3, 1, 4]);
console.log(result);
