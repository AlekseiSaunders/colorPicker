const colorP = document.getElementById('color-picker');
const userColorDis = document.getElementById('userColor');
const schemeP = document.getElementById('scheme-select');

colorP.addEventListener('input', () => {
  let user_color = colorP.value;
  userColorDis.innerHTML = `
		<h1>User Color is: ${user_color}</h1>
`;
});
