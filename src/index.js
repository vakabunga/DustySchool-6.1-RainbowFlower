const page = document.querySelector('.page');
const appContainer = document.createElement('div');

const appHeader = document.createElement('h4');
appHeader.textContent = 'Choose color of header';

const colorPickerInput = document.createElement('input');
colorPickerInput.dataset.jscolor = '{}';
colorPickerInput.value = '#000000';

page.appendChild(appContainer);
appContainer.appendChild(appHeader);
appContainer.appendChild(colorPickerInput);

colorPickerInput.addEventListener('input', (event) => {
    const pickedColor = event.target.value;
    appHeader.style.color = pickedColor;
})
