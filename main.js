const colorP = document.getElementById('color-picker');
const userColorDis = document.getElementById('userColor');
const schemeP = document.getElementById('scheme-select');
const userSchemeDis = document.getElementById('userScheme');
const submitBtn = document.getElementById('create-scheme__btn');
const textSection = document.querySelector('.text__wrapper');
const colorSection = document.querySelector('.color__wrapper');
const baseURL = 'https://www.thecolorapi.com/scheme?';
let user_color = '#000000';
let user_scheme = 'monochrome';
let user_count = '6';

colorP.addEventListener('input', () => {
  user_color = colorP.value;
});

schemeP.addEventListener('change', () => {
  user_scheme = schemeP.value;
  user_count = '6';
  if (user_scheme === 'quad') {
    user_count = 4;
  } else if (user_scheme === 'triad') {
    user_count = 3;
  }
});

submitBtn.addEventListener('click', () => {
  textSection.innerHTML = '';
  colorSection.innerHTML = '';
  let url =
    baseURL +
    `hex=${user_color.slice(1)}` +
    `&mode=${user_scheme}` +
    `&count=${user_count}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 6; i++) {
        let text_article = document.createElement('article');
        let color_article = document.createElement('article');
        text_article.classList.add('color__text');
        color_article.classList.add('color__box');
        color_article.style.backgroundColor = `${data.colors[i].hex.value}`;
        text_article.innerText = `
          ${data.colors[i].hex.value}
					${data.colors[i].name.value}
        `;
        textSection.appendChild(text_article);
        colorSection.appendChild(color_article);
      }
    });
});
