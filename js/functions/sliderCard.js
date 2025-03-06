export function sliderCardOffert() {
  const carousel = document.querySelector('.offers_slider');
  const articles = carousel.querySelectorAll('cardoffer-component'); //Lista de articulos
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let indice = 0; //Posicion imagen
  console.log(articles.length);
  
  function movedArticle(index) { 
    let moved = -index * 100;
    articles.forEach(article => {
      article.style.transform = `translateX(${moved}%)`;
    });
  }

  nextButton.addEventListener('click', () => {
    indice = (indice < articles.length - 1) ? indice + 1 : 0;
    movedArticle(indice);
  });

  prevButton.addEventListener('click', () => {
    indice = (indice > 0) ? indice - 1 : articles.length - 1;
    movedArticle(indice);
  });

  // setInterval(() => {
  //   indice = (indice < articles.length - 1) ? indice + 1 : 0;
  //   movedArticle(indice);
  // }, 4000);
}