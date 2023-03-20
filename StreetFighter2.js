// Street Fighter 2 - Character Selection

function streetFighterSelection(fighters, position, moves) {
  let result = [];

  moves.forEach((move) => {
    if (move === "up") {
      position[0] = 0;
    } else if (move === "down") {
      position[0] = 1;
    } else if (move === "right") {
      position[1] = position[1] === 5 ? 0 : position[1] + 1;
    } else if (move === "left") {
      position[1] = position[1] === 0 ? 5 : position[1] - 1;
    }
    result.push(fighters[position[0]][position[1]]);
  });
  return result;
}
