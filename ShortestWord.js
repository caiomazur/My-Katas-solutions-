/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

 */

function findShort(s){
  
    const strArr = s.split(" ")
    let shortestWord = null;
     
     for (let i = 0; i < strArr.length; i++) {
       if (i === 0) shortestWord = strArr[i].length; 
       else if (strArr[i].length < shortestWord) shortestWord = strArr[i].length;
     }
     return shortestWord;
   }