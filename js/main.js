// Creo funzione dinamica per generare n numeri casuali con scelta range massimo
console.log(getRandomNumber(500, 10));

function getRandomNumber(max, quantity) {
  let risultato = [];
  for (let c = 0; c < quantity; c++) {
    const numero = Math.floor(Math.random() * max);
    risultato.push(numero);
  }
  return risultato;
}
