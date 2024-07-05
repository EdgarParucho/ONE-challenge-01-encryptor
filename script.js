const inputElement = document.getElementById('input-element');
const outputElement = document.getElementById('output-element');
const defaultOutputMessage = 'Ningún mensaje encontrado';
const defaultOutputStyles = "background-image: url('./assets/Not_found.svg'); background-repeat: no-repeat; background-position: 100px 0px; background-blend-mode: lighten; background-size: cover;"

const charsEncryption = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat',
};

function setDefaultStatus() {
  document.getElementById('output-card').setAttribute('style', defaultOutputStyles);
  outputElement.innerText = defaultOutputMessage;
}

function encryptString(string) {
  if (string == '') return setDefaultStatus();
  let encryptedString = '';
  for (let char of string) encryptedString += charsEncryption[char] || char;
  outputElement.innerText = encryptedString;
  document.getElementById('output-card').removeAttribute('style');
}

function decryptString(string) {
  if (string == '') return setDefaultStatus();
  let decryptedString = string;
  for (let char in charsEncryption) decryptedString = decryptedString.replaceAll(charsEncryption[char], char);
  outputElement.innerText = decryptedString;
  document.getElementById('output-card').removeAttribute('style');
}

document.getElementById('encrypt-button').addEventListener('click', () => encryptString(inputElement.value));
document.getElementById('decrypt-button').addEventListener('click', () => decryptString(inputElement.value));
document.getElementById('copy-button').addEventListener('click', () => navigator.clipboard.writeText(outputElement.innerText));
setDefaultStatus();