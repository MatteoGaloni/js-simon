const randomNumbers = getRandomNumber(500, 5);
// creo funzione Start Game
document.getElementById("start").addEventListener("click", () => {
  startGame();
});
function startGame() {
  // document.getElementById("start").addEventListener("click" ())
  console.log(randomNumbers);
  document.getElementById("numUno").innerHTML = randomNumbers[0];
  document.getElementById("numDue").innerHTML = randomNumbers[1];
  document.getElementById("numTre").innerHTML = randomNumbers[2];
  document.getElementById("numQuattro").innerHTML = randomNumbers[3];
  document.getElementById("numCinque").innerHTML = randomNumbers[4];
  setTimeout(hide, 3000);
  setTimeout(askNumbers, 4000);
}

// Creo funzione dinamica per generare n numeri casuali con scelta range massimo
// numeri.innerHTML = randomNumbers;
function getRandomNumber(max, quantity) {
  let risultato = [];
  for (let c = 0; c < quantity; c++) {
    const numero = parseInt(Math.floor(Math.random() * max));
    risultato.push(numero);
  }
  return risultato;
}
// Creo funzione per aggiungere class "hidden"

function hide() {
  document.getElementById("numUno").classList.add("hidden");
  document.getElementById("numDue").classList.add("hidden");
  document.getElementById("numTre").classList.add("hidden");
  document.getElementById("numQuattro").classList.add("hidden");
  document.getElementById("numCinque").classList.add("hidden");
}
//
let numeriUtente = [];

/**
 *  Creo funzione per chiedere risposte all'utente
 */
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
// creo funzione per confrontare gli array
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
  showResult();
  // alert("I numeri corretti sono ", numeriCorretti);
  // console.log("I numeri sbagliati sono ", numeriNonCorretti);
}

// Creo funzione per mostrare i risultati
function showResult() {
  document.getElementById("resultOk").innerHTML = numeriCorretti;
  document.getElementById("resultKo").innerHTML = numeriNonCorretti;
}
