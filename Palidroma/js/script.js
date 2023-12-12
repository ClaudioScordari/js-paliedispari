/*
    Palidroma

    Chiedere all'utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma

    --------------------------------------------------------------------

    - Dovremmo prendere la parola dell'utente tramite un prompt
    - Suddividere la parola in un arrey
    - Ribaltare l'arrey
    - Vedere se la parola ribaltata è uguale alla parola iniziale dell'utente
*/

// Parola dell'utente
const parolaUtente = prompt('Dimmi la tua parola:');
console.log(parolaUtente);

function palindroma(parolaUtente) {
    // Trasformare la parola in un arrey per avere lettera per lettera
    let parolaUtenteDivisa = parolaUtente.split(''); // QUI C'E' UN ARREY DI LETTERE

    // Ribaltiamo l'arrey di lettere
    parolaUtenteDivisa = parolaUtenteDivisa.reverse();

    // Adesso devo mettere insieme in una stringa l'arrey ribaltato per avere la parola invertita
    const parolaInvertita = parolaUtenteDivisa.join('');

    // Condizione di uguaglianza delle due parole
    if (parolaInvertita == parolaUtente) {
        console.log("E' palindroma");
        return true;
    } else {
        console.log("Non è palindroma");
        return false;
    }
}

// Richiamo della funzione
const functionResult = palindroma(parolaUtente);
console.log(functionResult);