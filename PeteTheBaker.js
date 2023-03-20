// Pete, The Baker

function cakes(recipe, available) {
  const ingredientAmount = [...Object.keys(recipe)].map(
    (ing) => Math.floor(available[ing] / recipe[ing]) || 0
  );
  return Math.min(...ingredientAmount);
}
