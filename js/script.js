// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var nomeStudente = prompt('Inserisci nome tudente:');
var cognomeStudente = prompt('Inserisci cognome studente:');
var etaStudente = parseInt(prompt('Inserisci eta:'));

var studente = {
    nome: nomeStudente,
    cognome: cognomeStudente,
    eta: etaStudente
};

console.log(studente);

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var x in studente) {
    console.log(studente[x]);
}