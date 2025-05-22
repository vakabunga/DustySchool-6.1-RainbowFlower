"use strict";

var app = document.querySelector('.app');
var appContainer = document.createElement('div');
var appHeader = document.createElement('h1');
appHeader.textContent = 'Choose color of the Header';
var colorPickerInput = document.createElement('input');
colorPickerInput.classList.add('color-picker');
colorPickerInput.value = '#000000';
app.appendChild(appContainer);
appContainer.appendChild(appHeader);
appContainer.appendChild(colorPickerInput);
var colorPicker = new jscolor('.color-picker');
colorPicker.onInput = function () {
  appHeader.style.color = colorPickerInput.value;
};