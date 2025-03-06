export async function viewCategorys() {
  // MOSTRAR CATEGORIAS DISPONIBLES
  const $listCategory = document.getElementById("list_category");
  fetch("./api/categorys.json")
  .then(data => data.json())
  .then(json => {
    if(!json) return;
  
    const cardCategory = json.categories.map(({key, name, image}) => {
      return `
      <cardcategory-component
      titlecategory="${name}"
      urlcategory="${image}"
      nameid="${key}"
      ></cardcategory-component>
      `;
    }).join("");
  
    $listCategory.innerHTML = cardCategory;
  })
}