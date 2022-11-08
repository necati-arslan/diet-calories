import { Service } from "../services/service.js";
import { ServiceUI } from "../services/serviceUI.js";

import { RECIPE_BY_INGREDIENT_URL } from "../constant.js";
import {
  createRecipesSectionElement,
  createRecipeElement,
} from "../views/recipesView.js";

import { RECIPE_DETAIL_URL } from "../constant.js";
import { createRecipeDetail } from "../views/recipeDetailView.js";

export const getRecipes = async (ingredients) => {
  try {
    const serviceRecipe = new Service();
    const serviceUI = new ServiceUI();
    const rootDiv = document.getElementById("root");
    const recipesSectionElement = createRecipesSectionElement();
    const recipesContainerElement =
      recipesSectionElement.querySelector(".container");

    const queryString = `ingredients=${[...ingredients]}&number=10`;
    serviceUI.loadingUI(rootDiv);
    const recipes = await serviceRecipe.fetchIngredient(
      RECIPE_BY_INGREDIENT_URL,
      queryString
    );

    serviceUI.removeLoadingUI(rootDiv);

    recipes.forEach((recipe) => {
      const recipeElement = createRecipeElement(recipe);
      recipesContainerElement.appendChild(recipeElement);
    });

    rootDiv.appendChild(recipesSectionElement);

    document.querySelectorAll(".getRecipe").forEach((element) => {
      element.addEventListener("click", async (event) => {
        try {
          const recipeID = event.target.value;
          rootDiv.innerHTML = "";
          serviceUI.loadingUI(rootDiv);
          const queryString = `${RECIPE_DETAIL_URL}${recipeID}/information?apiKey=`;
          const recipe = await serviceRecipe.fetchIngredient(
            queryString,
            "&includeNutrition=true"
          );

          serviceUI.removeLoadingUI(rootDiv);
          const sectionRecipeDetailElement = createRecipeDetail(recipe);
          rootDiv.innerHTML = "";
          rootDiv.appendChild(sectionRecipeDetailElement);
        } catch (error) {
          serviceRecipe.handleError(error);
          serviceUI.notify("Oops! There is a problem!!!");
        }
      });
    });
  } catch (error) {
    serviceRecipe.handleError(error);
    serviceUI.notify("Oops! There is a problem!!!");
  }
};
