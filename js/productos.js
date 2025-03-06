import { viewCategorys } from "./functions/viewCategorys.js";
import { viewOffers } from "./functions/viewOffers.js";

document.addEventListener("DOMContentLoaded", e => {
  viewCategorys();
  viewOffers();
  // MOSTRAR LOS PRODUCTOS
  const $list_prods = document.getElementById("listprods");
  const $fragment = document.createDocumentFragment();
  fetch("https://furniture-api.fly.dev/v1/products?limit=12&page=1")
    .then(rest => rest.json())
    .then(json => {
      json.data.forEach(({name, image_path, price}) => {
        const $card = document.createElement("cardprod-component");
        $card.setAttribute("titleprod", name);
        $card.setAttribute("urlprod",image_path );
        $card.setAttribute("priceprod", price);
        $fragment.appendChild($card);
      });
      $list_prods.appendChild($fragment)
    })
  
  
});