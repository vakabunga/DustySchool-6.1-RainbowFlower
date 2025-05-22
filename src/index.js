const app = document.querySelector('.app');
const appContainer = document.createElement('div');

const appHeader = document.createElement('h1');
appHeader.textContent = 'Choose color of the Header';

const colorPickerInput = document.createElement('input');
colorPickerInput.classList.add('color-picker');
colorPickerInput.value = '#000000';

app.appendChild(appContainer);
appContainer.appendChild(appHeader);
appContainer.appendChild(colorPickerInput);

const colorPicker = new jscolor('.color-picker');

colorPicker.onInput = () => {
  appHeader.style.color = colorPickerInput.value;
};
