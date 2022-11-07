import { API_KEY } from "../constant.js";
import { MAIN_URL } from "../constant.js";
export class Service {
  constructor() {}

  fetchIngredient = (subUrl, queryString) => {
    const url = this.urlPrepare(subUrl, queryString);
    return fetch(url)
      .then((data) => {
        return data.json();
      })
      .catch((err) => {
        this.handleError(err);
      });
  };

  urlPrepare = (subUrl, queryString) => {
    const url = `${MAIN_URL}${subUrl}${API_KEY}&${queryString}`;
    return url;
  };

  handleError(err) {
    localStorage.setItem("err", err);
  }
}
