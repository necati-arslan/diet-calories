export const createSelectedIngredient = (value) => {
  const selectedIngredient = document.createElement("div");
  selectedIngredient.innerHTML = `<div class="cancel">x</div>
  <div>${value}</div>`;
  return selectedIngredient;
};
