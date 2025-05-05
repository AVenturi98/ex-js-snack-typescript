import './style.css'

// 🏆 Snack 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

// Se è una stringa: stampala in maiuscolo

// Se è un numero: moltiplicalo per due e stampalo

// Se è un booleano: stampa “Sì” o “No” in base al suo valore

// In tutti gli altri casi: stampa “Tipo non supportato”

// 🎯 BONUS
// Se è null: stampa “Il dato è vuoto”
// Se è un array: stampa la sua lunghezza
// Se è una Promise: attendi che si risolva e stampa il valore del resolve.

let result: unknown;

typeof result === 'string' && console.log(result?.toUpperCase());
typeof result === 'number' && console.log(result * 2);
typeof result === 'boolean' && result === true ? console.log('Si') : console.log('No');
typeof result !== 'string' || typeof result !== 'number' || typeof result !== 'boolean' && console.log('Tipo non suportato');

// bonus
result === null && result && console.log('Il dato è vuoto');
Array.isArray(result) && result && console.log(result.length);
// result instanceof Array && result && console.log(result.length);
result instanceof Promise && result && console.log(result.then(res => console.log(res)));
