const radioButtons = document.querySelectorAll('input[type="radio"]');
const body = document.body;

function setTheme(theme) {
  body.setAttribute('data-theme', theme);
}

function changeTheme(event) {
  const selectedTheme = event.target.value;
  setTheme(selectedTheme);
}

// Listen for changes in the radio buttons
for (const radioButton of radioButtons) {
  radioButton.addEventListener('change', changeTheme);
}

export default setTheme;
