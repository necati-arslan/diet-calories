import { createLoading } from "../views/loadingView.js";
export class ServiceUI {
  loadingUI = (parenDiv) => {
    const loadingDiv = createLoading();
    parenDiv.appendChild(loadingDiv);
  };

  removeLoadingUI = (parenDiv) => {
    if (document.querySelector(".loader")) {
      const loaderDiv = document.querySelector(".loader");
      parenDiv.removeChild(loaderDiv);
    }
  };

  notify = (value) => {
    const notifyDiv = document.createElement("div");
    notifyDiv.classList.add("notify");
    notifyDiv.innerHTML = `${value}`;
    document.body.appendChild(notifyDiv);

    setTimeout(() => {
      document.body.removeChild(notifyDiv);
    }, 3000);
  };
}
