// Get the Middle Character

function getMiddle(s) {
  //Code goes here!

  const middle = Math.floor(s.length / 2);
  if (s.length % 2 === 0) return s[middle - 1] + s[middle];
  else return s[middle];
}
