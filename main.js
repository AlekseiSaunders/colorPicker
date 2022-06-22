const colorP = document.getElementById('color-picker');
const userColorDis = document.getElementById('userColor');
const schemeP = document.getElementById('scheme-select');
const userSchemeDis = document.getElementById('userScheme');
const submitBtn = document.getElementById('create-scheme__btn');
const baseURL = 'https://www.thecolorapi.com/scheme?';
let user_color = '#000000';
let user_scheme = 'monochrome';

colorP.addEventListener('input', () => {
  user_color = colorP.value;
});

schemeP.addEventListener('change', () => {
  user_scheme = schemeP.value;
});

submitBtn.addEventListener('click', () => {
  let url = baseURL + `hex=${user_color.slice(1)}` + `&mode=${user_scheme}` + `&count=6`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
