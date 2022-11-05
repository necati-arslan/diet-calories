import { autocomplete } from "../utulities/autocomplate.js";
export const initWelcomePage = () => {
  const ingredientTextbox = document.getElementById("ingredientTextbox");

  ingredientTextbox.addEventListener("keyup", async (event) => {
    let valueText = event.target.value;

    const data = await fetchIngredient();
    console.log(data);
  });

  const fetchIngredient = () => {
    const url = urlPrepare();
    return fetch(url).then((data) => {
      return data.json();
    });
  };

  const urlPrepare = () => {
    const url =
      "https://api.spoonacular.com/food/ingredients/autocomplete?apiKey=e178d8abd3d341d5b8d1f33c5f024a7f&query=appl&number=5";
    return url;
  };
  var countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
  ];

  autocomplete(ingredientTextbox, countries);
};
