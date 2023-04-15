/* Emotional Sort ( ︶︿︶)
You'll have a function called "sortEmotions" that will return an array of emotions sorted. It has two parameters, the first parameter called "arr" will expect an array of emotions where an emotion will be one of the following:

:D -> Super Happy
:) -> Happy
:| -> Normal
:( -> Sad
T_T -> Super Sad
Example of the array:[ 'T_T', ':D', ':|', ':)', ':(' ]

And the second parameter is called "order", if this parameter is true then the order of the emotions will be descending (from Super Happy to Super Sad) if it's false then it will be ascending (from Super Sad to Super Happy)

Example if order is true with the above array: [ ':D', ':)', ':|', ':(', 'T_T' ]

Super Happy -> Happy -> Normal -> Sad -> Super Sad
If order is false: [ 'T_T', ':(', ':|', ':)', ':D' ]

Super Sad -> Sad -> Normal -> Happy -> Super Happy
Example:

arr = [':D', ':|', ':)', ':(', ':D']
sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]
More in test cases!

Notes:

The array could be empty, in that case return the same empty array ¯\_( ツ )_/¯
All emotions will be valid
Enjoy! (づ｡◕‿‿◕｡)づ */

function sortEmotions(arr, order) {
  const emotions = {
    ":D": 5,
    ":)": 4,
    ":|": 3,
    ":(": 2,
    "T_T": 1,
  };

  const keysArr = Object.keys(emotions);
  const valuesArr = Object.values(emotions);

  if (order) {
    const emoToNum = arr.map((emo) => {
      if (emotions[emo]) return emotions[emo];
    });

    const numsSort = emoToNum.sort((a, b) => b - a);

    const numsToEmo = numsSort.map((num) => {
      if (valuesArr.indexOf(num) + 1) {
        return (num = keysArr[valuesArr.indexOf(num)]);
      }
    });
    console.log(numsToEmo);
    return numsToEmo;
  } else {
    const emoToNum = arr.map((emo) => {
      if (emotions[emo]) return emotions[emo];
    });

    const numsSort = emoToNum.sort((a, b) => a - b);

    const numsToEmo = numsSort.map((num) => {
      if (valuesArr.indexOf(num) + 1) {
        return (num = keysArr[valuesArr.indexOf(num)]);
      }
    });
    console.log(numsToEmo);
    return numsToEmo; // (ง •̀_•́)ง
  }
}

const result = sortEmotions([":D", "T_T", ":D", ":("], false);
//console.log(result);
