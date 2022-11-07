export const createRecipeDetail = (recipe) => {
  const sectionRecipeDetail = document.createElement("section");
  sectionRecipeDetail.classList.add("detail_recipe");
  let text = ` <div class="container">
  <div class="content">
    <div class="recipe_header flex">
      <div>
        <img
          src="${recipe.image}"
          alt=""
        />
      </div>
      <div>
        <h2>${recipe.title}</h2>
        <hr />
        <div class="nutrient">
          <h3>Nutrient</h3>
          <div class="values flex">`;

  if (recipe.nutrition.nutrients) {
    recipe.nutrition.nutrients.forEach((nutrient) => {
      if (
        nutrient.name == "Calories" ||
        nutrient.name == "Fat" ||
        nutrient.name == "Carbohydrates" ||
        nutrient.name == "Protein" ||
        nutrient.name == "Sugar"
      ) {
        text += ` <div>
                <p><strong>${nutrient.name} : </strong>${nutrient.amount} ${nutrient.unit} kcal</p>
              </div>`;
      }
    });
  }
  text += `
    </div>
    <hr />
    <h3>Percent of Nutrient</h3>
    <div class="values flex">
    `;
  if (recipe.nutrition.caloricBreakdown) {
    text += `
      <div>
      <p><strong>Protein : </strong>${recipe.nutrition.caloricBreakdown.percentProtein} %</p>
    </div>
    <div>
      <p><strong>Fat : </strong>${recipe.nutrition.caloricBreakdown.percentFat} %</p>
    </div>
    <div>
      <p><strong>Carbs : </strong>${recipe.nutrition.caloricBreakdown.percentCarbs} %</p>
    </div>
      `;
  }
  text += `
  </div>
  <hr />
  <div class="values flex">
    <div>
      <p><strong>Ready In Minutes : </strong>${recipe.readyInMinutes}</p>
    </div>
    <div>
      <p><strong>servings : </strong>${recipe.servings}</p>
    </div>
  </div>
</div>
</div>
</div>
  `;

  if (recipe.extendedIngredients) {
    text += `<div class="ingredients">
    <hr />
    <h3>Ingredients</h3>
    <ul class="flex">`;
    recipe.extendedIngredients.forEach((ingredient) => {
      text += `<li>${ingredient.original}</li>
        `;
    });
    text += ` </ul>
    </div>`;
  }
  if (recipe.instructions) {
    text += `<div class="direction">
<hr />
<h3>Instructions</h3>
<p>${recipe.instructions}</p>
</div>`;
  }

  text += `<div class="direction">
<hr />
<h3>Direction</h3>
<p>${recipe.summary}</p>
</div>
</div>
</div>
`;

  sectionRecipeDetail.innerHTML = text;
  return sectionRecipeDetail;
};
