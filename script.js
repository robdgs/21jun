// --- Esercizi 21-06

// Scriviamo una funzione che passata al map, dato un array di nomi torna una lista di "indice + Nome"
// es:
// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['1 - Luca', '2 - Gabriele']

// Scriviamo una funzione che passata al map, converta ogni elemento al propri indice inverso
// es:
// const names = ['Luca', 'Gabriele', 'Richard', 'Roberta'];
// namesToList(names) // -> [3, 2, 1, 0];

// Scriviamo una funzione che passata al map, dato un array ne torni uno al contrario
// es:
// const names = ['Luca', 'Gabriele'];
// namesToList(names) // -> ['Gabriele', 'Luca'];

const names = [
  "Gianfranco",
  "Piergiorgio",
  "Arcimboldo",
  "Oronzo",
  "Pancrazio",
];

//1
const namesToList = names.map((_, i, array) => i + "-" + array[i]);
console.log(namesToList);

//2
const reversedNamesToList = names.map((_, i) => -i + 4);
console.log(reversedNamesToList);

//3
const reversedNamesArray = names.map(
  (_, i, array) => array[array.length - 1 - i]
);
console.log(reversedNamesArray);
