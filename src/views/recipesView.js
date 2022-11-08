export const createRecipeElement = (recipe) => {
  const recipeDiv = document.createElement("div");
  recipeDiv.classList.add("recipe");
  let text = `
  <div class="item">
  <div class="recipe_img">
    <img
      src="${recipe.image}"
      alt=""
    />
  </div>
</div>
<div class="recipe_title">${recipe.title}</div>
<div class="item ingredient">
  <div>
    <div class="title_used">Used Ingredients</div>
    <div class="used_ingredients flex">`;

  recipe.usedIngredients.forEach((ingredient) => {
    text += ` <div class="flex">
    <img
      src="${ingredient.image}"
      alt=""
    />
    <span>${ingredient.name}</span>
  </div>`;
  });

  text += `</div>
  <div class="title_missed">Missed Ingredients</div>
  <div class="missed_ingredients flex">`;

  recipe.missedIngredients.forEach((ingredient) => {
    text += ` <div class="flex">
    <img
      src="${ingredient.image}"
      alt=""
    />
    <span>${ingredient.name}</span>
  </div>`;
  });

  text += `</div>
</div>
<div class="item button">
<button  value="${recipe.id}" class="btn-red getRecipe">See Recipe</button>
</div>
  `;
  recipeDiv.innerHTML = text;
  return recipeDiv;
};

export const createRecipesSectionElement = () => {
  const recipesSection = document.createElement("section");
  recipesSection.classList.add("recipes");
  recipesSection.innerHTML = `<div class="container"></div>
    `;
  return recipesSection;
};
