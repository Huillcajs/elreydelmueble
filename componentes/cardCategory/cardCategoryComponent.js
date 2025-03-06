class CardCategoryComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.titlecategory = "";
    this.urlcategory = "";
    this.nameid = "";
  }
  // Método que se ejecuta cuando el componente se agrega
  async connectedCallback() {
    this.titlecategory = this.getAttribute("titlecategory") || "";
    this.urlcategory = this.getAttribute("urlcategory") || "";
    this.nameid = this.getAttribute("nameid") || "0";
    await this.templateCSS();
    this.render();
    this.templateJS();
  }
  // Método para renderizar el contenido del componente
  render() {
    this.shadowRoot.innerHTML += `
      <div class="category">
        <img src="${this.urlcategory}" alt="${this.titlecategory}">
        <h3>${this.titlecategory}</h3>
      </div>
    `;
  }
  // CSS
  async templateCSS() {
    await fetch('./componentes/cardCategory/cardCategoryComponent.css')
      .then(response => response.text())
      .then(css => this.shadowRoot.innerHTML += `<style>${css}</style>`);
  }
  // AQUI VAN TODAS LAS FUNCIONES JS
  templateJS() {
    this.showDetails();
  }

  showDetails() {

  }
}


window.customElements.define('cardcategory-component', CardCategoryComponent);