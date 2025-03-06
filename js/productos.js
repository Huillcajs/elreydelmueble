import { sliderCardOffert } from "./functions/sliderCard.js";

document.addEventListener("DOMContentLoaded", e => {
  // MOSTRAR CADA PRODUCTO DE OFERTA EN LA BARRA DE SLIDER
  const $idslider = document.getElementById("offers_slider");
  const $fragment = document.createDocumentFragment();

  fetch("./api/prodsoffers.json")
  .then(data => data.json())
  .then(json => {
    if(!json) return;
    const cardsoffer = json.offers.map(offer => {
      const {
        id, 
        title, 
        description, 
        quantity, 
        normal_price, 
        discount_price, 
        discount_percentage,
        image
      } = offer;
      return `
      <cardoffer-component
        titleprod = "${title}"
        urlprod = "${image}"
        descriptprod = "${description}"
        priceprodnow = "${discount_price}"
        priceprodold = "${normal_price}"
        descprod = "${discount_percentage}"
        idprod = "${id}"
      ></cardoffer-component>
      `;
    }).join("");

    $idslider.innerHTML += cardsoffer;
    // ACTIVAR EL MOVIMIENTO DEL SLIDER
    sliderCardOffert();
  })
});