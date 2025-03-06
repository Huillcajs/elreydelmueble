class CardOfferComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.titleprod = "";
    this.urlprod = "";
    this.descriptprod = "";

    this.priceprodnow = "0";
    this.priceprodold = "0";
    this.descprod = "0";

    this.idprod = "";
  }
  // Método que se ejecuta cuando el componente se agrega
  async connectedCallback() {
    this.titleprod = this.getAttribute("titleprod") || "";
    this.urlprod = this.getAttribute("urlprod") || "";
    this.descriptprod = this.getAttribute("descriptprod") || "";

    this.priceprodnow = this.getAttribute("priceprodnow") || "0";
    this.priceprodold = this.getAttribute("priceprodold") || "0";
    this.descprod = this.getAttribute("descprod") || "0";

    this.idprod = this.getAttribute("idprod") || "";
    await this.templateCSS();
    this.render();
    this.templateJS();
  }
  // Método para renderizar el contenido del componente
  render() {
    this.shadowRoot.innerHTML += `
    <section class="card_offer">
      <img src="${this.urlprod}" alt="${this.titleprod}">
      <article class="offer_info">
        <span class="offer">${this.descprod}%</span>
        <div>
          <h2>${this.titleprod}</h2>
          <p>${this.descriptprod}</p>
        </div>
        <div class="info_others">
          <div class="offers_prices">
            <del>S/ ${this.priceprodold}</del>
            <strong>S/ ${this.priceprodnow}</strong>
          </div>
          <button id="btnDetails">Ver</button>
        </div>
      </article>
    </section>
    `;
  }
  // CSS
  async templateCSS() {
    await fetch('./componentes/cardoffert/cardoffertComponent.css')
      .then(response => response.text())
      .then(css => this.shadowRoot.innerHTML += `<style>${css}</style>`);
  }
  // AQUI VAN TODAS LAS FUNCIONES JS
  templateJS() {
    this.showDetails();
  }

  showDetails() {
    const $btn = this.shadowRoot.querySelector("#btnDetails");
    $btn.addEventListener("click", e => {
      location.href = `./detallesprod.html?id=${this.idprod}`;
    })
  }
}


window.customElements.define('cardoffer-component', CardOfferComponent);