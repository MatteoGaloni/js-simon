let numeri = document.getElementById("numeri");
// Creo funzione dinamica per generare n numeri casuali con scelta range massimo
numeri.innerHTML = getRandomNumber(500, 5);
function getRandomNumber(max, quantity) {
  let risultato = [];
  for (let c = 0; c < quantity; c++) {
    const numero = Math.floor(Math.random() * max);
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
setTimeout(askNumbers, 9000);
function askNumbers() {
  let numeriUtente = [];
  for (let c = 0; c < 5; c++) {
    datoUtente = prompt("Inserisci numero");
    numeriUtente.push(datoUtente);
  }
  return numeriUtente;
}
