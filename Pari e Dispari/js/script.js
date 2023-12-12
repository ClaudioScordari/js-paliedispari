/*
    Pari e Dispari

    L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

    Sommiamo i due numeri

    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

    Dichiariamo chi ha vinto.
*/

// L'utente qui sceglie o pari o dispari
const utente_pari_dispari = prompt('Scegli pari o dispari');
console.log(utente_pari_dispari);

// L'utente sceglie un numero da 1 a 5
const numUtente = parseInt(prompt('Adesso scegli un numero da 1 a 5'));
console.log('Il mio numero è: ' + numUtente);


/**************************************************/
// Funzione di un numero random
function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**************************************************/


// Richiamo la funzione del numero random inserendo gli estremi
const numRandomPc = numRandom(1, 5);
console.log('Il numero random del Pc è: ' + numRandomPc);

// Sommo il numero dell'utente con quello del pc
const sum = numUtente + numRandomPc;
console.log('La somma tra i due numeri è: ' + sum);


/**************************************************/
// Funzione che stabilisce se il numero è pari o dispari
function pari_dispari(sum) {
    if (sum % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }
}
/**************************************************/


// Condizione di vittoria
if (pari_dispari(sum) == utente_pari_dispari) {
    console.log('Hai vinto');
} else {
    console.log('Ha vinto il Pc');
}
