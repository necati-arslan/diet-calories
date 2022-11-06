import { autocomplete } from "../utulities/autocomplate.js";
import { Service } from "../services/service.js";
import { createSelectedIngredient } from "../views/selected-ingredients.js";
export const initWelcomePage = () => {
  const serviceIngredient = new Service();

  const ingredientTextbox = document.getElementById("ingredientTextbox");
  const btnAddNewIngradient = document.getElementById("btnAddNewIngradient");
  const selectedIngredients = document.getElementById("selectedIngredient");
  let ingredients = [];

  ingredientTextbox.addEventListener("keydown", async (event) => {
    let valueText = event.target.value;

    const queryString = `query=${valueText}&number=5`;
    const data = await serviceIngredient.fetchIngredient(queryString);
    console.log("welcopage", data);
    autocomplete(ingredientTextbox, data, valueText);
  });

  btnAddNewIngradient.addEventListener("click", (event) => {
    if (ingredientTextbox.value == "") {
      alert("görev girmelisiniz");
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
    console.log(ingredients);
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
};
