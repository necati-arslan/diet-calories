import { API_KEY } from "../constant.js";
import { MAIN_URL } from "../constant.js";
export class Service {
  constructor() {}

  fetchIngredient = (queryString) => {
    const url = this.urlPrepare(queryString);
    return fetch(url)
      .then((data) => {
        return data.json();
      })
      .catch((err) => {
        this.handleError(err);
      });
  };

  urlPrepare = (queryString) => {
    const url = `${MAIN_URL}/food/ingredients/autocomplete?apiKey=${API_KEY}&${queryString}`;
    return url;
  };

  handleError(err) {
    localStorage.setItem("err", err);
  }
}
