import { autocomplete } from "../utulities/autocomplate.js";
import { Service } from "../services/service.js";
import { ServiceUI } from "../services/serviceUI.js";
import { AUTO_COMPLATE_URL } from "../constant.js";
import { createSelectedIngredient } from "../views/selected-ingredients.js";
import { getRecipes } from "./recipesPage.js";
export const initWelcomePage = () => {
  const serviceIngredient = new Service();
  const serviceUI = new ServiceUI();

  const ingredientTextbox = document.getElementById("ingredientTextbox");
  const btnAddNewIngradient = document.getElementById("btnAddNewIngradient");
  const selectedIngredients = document.getElementById("selectedIngredient");
  const rootDiv = document.getElementById("root");

  let ingredients = [];

  ingredientTextbox.addEventListener("keydown", async (event) => {
    let valueText = event.target.value;

    const queryString = `query=${valueText}&number=5`;
    const data = await serviceIngredient.fetchIngredient(
      AUTO_COMPLATE_URL,
      queryString
    );
    autocomplete(ingredientTextbox, data, valueText);
  });

  btnAddNewIngradient.addEventListener("click", (event) => {
    if (ingredientTextbox.value == "") {
      serviceUI.notify("Textbox is empty");
    } else {
      ingredients.push(ingredientTextbox.value);
      addIngredient(ingredientTextbox.value);
    }
    ingredientTextbox.value = "";
    event.preventDefault();
  });

  const deleteIngredient = (value) => {
    ingredients = ingredients.filter((item) => item !== value);
    displaySelectedIngredients(ingredients);
  };

  const displaySelectedIngredients = (arr) => {
    selectedIngredients.innerHTML = "";
    ingredients.forEach((e) => addIngredient(e));
  };

  const addIngredient = (value) => {
    const elementSelectedIngrediend = createSelectedIngredient(value);
    selectedIngredients.appendChild(elementSelectedIngrediend);
    elementSelectedIngrediend
      .querySelector(".cancel")
      .addEventListener("click", (event) => {
        const textValue = event.target.nextElementSibling.textContent;
        deleteIngredient(textValue);
      });
  };

  document.getElementById("getRecipes").addEventListener("click", () => {
    if (ingredients.length == 0) {
      serviceUI.notify("Please insert at least one ingredient");
    } else {
      document.querySelector(".welcomePage").style.height = "auto";
      rootDiv.innerHTML = "";
      document
        .querySelector("section.welcomePage .content")
        .classList.add("content_after_query");
      getRecipes(ingredients);
    }
  });
};
