const colorP = document.getElementById('color-picker');
const userColorDis = document.getElementById('userColor');
const schemeP = document.getElementById('scheme-select');
const userSchemeDis = document.getElementById('userScheme');
const baseURL =  'https://www.thecolorapi.com/scheme?'

colorP.addEventListener('input', () => {
  let user_color = colorP.value;
  userColorDis.innerHTML = `
		<h1>User Color is: ${user_color}</h1>
`;
});

schemeP.addEventListener('change', () => {
  let user_scheme = schemeP.value;
  userSchemeDis.innerHTML = `
   <h2>User Scheme is: ${user_scheme.toUpperCase()}</h2>
`;
});

