import { addContador } from "./functions/counter.js";

document.addEventListener("DOMContentLoaded", e => {
// Obtiene el valor de los parámetros
let params = new URLSearchParams(window.location.search);
let name = params.get('name');
let iddata = params.get('id');
console.log(name);
if(name == null && iddata != null) {
  // Hacer peticion a la API de ofertas
  fetch(`./api/prodsoffers.json`)
    .then(rest => rest.json())
    .then(json => {
      if(!json.offers) location.href = "productos.html";
      const [offers] = json.offers.filter(offer => offer.id == iddata)
      if(!offers) location.href = "productos.html";
      console.log(offers);
      
      // QUE HACER CUANDO SE OBTIENE LOS DATOS
      const $content = document.querySelector(".content_prod");
      const $img = $content.querySelector("img");
      const $content_info = $content.querySelector(".content_info");

      const {
        id, 
        title, 
        description, 
        quantity, 
        normal_price, 
        discount_price, 
        discount_percentage,
        image
      } = offers;
  
      $img.src = image;
      $img.alt = title;
  
      $content_info.innerHTML = `
        <h1>${title}</h1>
        <p>
          ${description}
        </p>
        <div class="stock">Disponible: <strong>${quantity}</strong></div>
        <div class="content_interaction">
          <div class="content_price">
            <div>
              <button id="mas">+</button>
              <span class="cantidad">0</span>
              <button id="menos">-</button>
            </div>
            <del class="price">S/ ${normal_price}</del>
            <span class="price">S/ ${discount_price}.00</span>
          </div>
          <button class="btn_buy">Comprar</button>
        </div>
      `;
      addContador(quantity);
    })
} else {
  // Hacer la peticion a la API de muebles
  fetch(`https://furniture-api.fly.dev/v1/products?name=${name}`)
    .then(rest => rest.json())
    .then(json => {
      if(!json.data[0]) location.href = "index.html";
      // QUE HACER CUANDO SE OBTIENE LOS DATOS
      const $content = document.querySelector(".content_prod");
      const $img = $content.querySelector("img");
      const $content_info = $content.querySelector(".content_info");
      const {name, image_path, description, category, price, stock} = json.data[0];
  
      $img.src = image_path;
      $img.alt = name;
  
      $content_info.innerHTML = `
        <h1>${name}</h1>
        <p>
          ${description}
        </p>
        <div class="stock">Disponible: <strong>${stock}</strong></div>
        <div class="content_interaction">
          <div class="content_price">
            <div>
              <button id="mas">+</button>
              <span class="cantidad">0</span>
              <button id="menos">-</button>
            </div>
            <span class="price">S/ ${price}.00</span>
          </div>
          <button class="btn_buy">Comprar</button>
        </div>
      `;
      addContador(stock);
    })
  }
});
