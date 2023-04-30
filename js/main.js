// document.getElementById("start").addEventListener("click" ())
const randomNumbers = getRandomNumber(500, 5);
console.log(randomNumbers);
let numeri = document.getElementById("numUno");

// Creo funzione dinamica per generare n numeri casuali con scelta range massimo
numeri.innerHTML = randomNumbers;

function getRandomNumber(max, quantity) {
  let risultato = [];
  for (let c = 0; c < quantity; c++) {
    const numero = parseInt(Math.floor(Math.random() * max));
    risultato.push(numero);
  }
  return risultato;
}
// Creo funzione per aggiungere class "hidden"
setTimeout(hide, 3000);
function hide() {
  numeri.classList.add("hidden");
  console.log(numeri);
}
// Creo funzione per chiedere risposte all'utente
setTimeout(askNumbers, 4000);
let numeriUtente = [];
// setTimeout(() => {
//   console.log(numeriUtente);
// }, 5000);
function askNumbers() {
  for (let c = 0; c < 5; c++) {
    datoUtente = parseInt(prompt("Inserisci numero"));
    numeriUtente.push(datoUtente);
    // let isincluded = randomNumbers.includes(datoUtente);
    //   console.log("il numero inserito è incluso nell'array", isincluded);
  }
  // console.log(numeriUtente);
  arrayComparing();
}
let numeriCorretti = [];
let numeriNonCorretti = [];

function arrayComparing() {
  for (let index = 0; index < randomNumbers.length; index++) {
    let isincluded = randomNumbers.includes(numeriUtente[index]);
    console.log(isincluded);
    if (isincluded === true) {
      numeriCorretti.push(numeriUtente[index]);
    } else {
      numeriNonCorretti.push(numeriUtente[index]);
    }
  }
  console.log("I numeri corretti sono ", numeriCorretti);
  console.log("I numeri sbagliati sono ", numeriNonCorretti);
}
