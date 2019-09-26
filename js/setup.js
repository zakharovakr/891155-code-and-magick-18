'use strict';

var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var firstNameRand = Math.floor(Math.random() * FIRST_NAME.length);
var lastNameRand = Math.floor(Math.random() * LAST_NAME.length);
var coatColorRand = Math.floor(Math.random() * COAT_COLOR.length);
var eyesColorRand = Math.floor(Math.random() * EYES_COLOR.length);

var wizards = [
  {
    name: 'firstNameRand' + 'lastNameRand',
    coatColor: 'COAT_COLOR[coatColorRand]',
    eyesColor: 'EYES_COLOR[eyesColorRand]'
  },
  {
    name: 'FIRST_NAME[firstNameRand]' + 'LAST_NAME[lastNameRand]',
    coatColor: 'COAT_COLOR[coatColorRand]',
    eyesColor: 'EYES_COLOR[eyesColorRand]'
  },
  {
    name: 'FIRST_NAME[firstNameRand]' + 'LAST_NAME[lastNameRand]',
    coatColor: 'COAT_COLOR[coatColorRand]',
    eyesColor: 'EYES_COLOR[eyesColorRand]'
  },
  {
    name: 'FIRST_NAME[firstNameRand]' + 'LAST_NAME[lastNameRand]',
    coatColor: 'COAT_COLOR[coatColorRand]',
    eyesColor: 'EYES_COLOR[eyesColorRand]'
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
