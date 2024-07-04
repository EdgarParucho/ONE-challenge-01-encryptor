const inputElement = document.getElementById('input-element');
const outputElement = document.getElementById('output-element');

const charsEncryption = {
  a: 'ai',
  e: 'enter',
  i: 'imes',
  o: 'ober',
  u: 'ufat',
};

function encryptString(string) {
  let encriptedString = '';
  for (let char of string) encriptedString += charsEncryption[char] || char;
  return encriptedString;
}

function decryptString(string) {
  let decriptedString = string;
  for (let char in charsEncryption) decriptedString = decriptedString.replaceAll(charsEncryption[char], char);
  return decriptedString;
}

document.getElementById('encrypt-button').addEventListener('click', () => outputElement.innerText = encryptString(inputElement.value));
document.getElementById('decrypt-button').addEventListener('click', () => outputElement.innerText = decryptString(inputElement.value));
