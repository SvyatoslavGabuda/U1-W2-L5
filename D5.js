/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log(
  "\n-----------------------------------------Esercizio1-----------------------------------------\n"
);
const pets = ["dog", "cat", "hamster", "redfish"];
for (i = 0; i < pets.length; i++) {
  console.log("Elemento array", i, ":", pets[i]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log(
  "\n-----------------------------------------Esercizio2-----------------------------------------\n"
);
pets.sort();
for (i = 0; i < pets.length; i++) {
  console.log("Elemento array", i, ":", pets[i]);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log(
  "\n-----------------------------------------Esercizio3-----------------------------------------\n"
);
for (i = pets.length - 1; i > -1; i--) {
  console.log("Elemento array", i, ":", pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log(
  "\n-----------------------------------------Esercizio4-----------------------------------------\n"
);
console.log(
  "Ordine Prima di spostare il primo elemento in ultima posizione\n",
  pets
);

pets.push(pets.shift());

console.log(
  "Ordine Dopo aver spostato il primo elemento in ultima posizione\n",
  pets
);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log(
  "\n-----------------------------------------Esercizio5-----------------------------------------\n"
);
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
// cars[0].licenceplate = "0000000"; //AGGIUNTA DI UN SINGOLO ELEMENTO
for (i = 0; i < cars.length; i++) {
  cars[i].licenceplate = 123456 + i;
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log(
  "\n-----------------------------------------Esercizio6-----------------------------------------\n"
);
cars.push({
  brand: "Subaru",
  model: "Forester",
  color: "teal",
  trims: ["AWD", "4x4", "r-line"],
  licenceplate: 111111,
});
// console.log(cars);
for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log(
  "\n-----------------------------------------Esercizio7-----------------------------------------\n"
);

const justTrims = [];
for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log(
  "\n-----------------------------------------Esercizio8-----------------------------------------\n"
);
for (i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log(
  "\n-----------------------------------------Esercizio9-----------------------------------------\n"
);

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let contatore = 0;
while (numericArray[contatore] !== 32) {
  console.log(numericArray[contatore]);
  contatore++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log(
  "\n-----------------------------------------Esercizio10-----------------------------------------\n"
);
const charactersArray = ["g", "n", "u", "z", "d"];
const numeridaicarattari = [];
for (i = 0; i < charactersArray.length; i++) {
  switch (true) {
    case charactersArray[i] === "a":
      numeridaicarattari[i] = 1;
      break;
    case charactersArray[i] === "b":
      numeridaicarattari[i] = 2;
      break;
    case charactersArray[i] === "c":
      numeridaicarattari[i] = 3;
      break;
    case charactersArray[i] === "d":
      numeridaicarattari[i] = 4;
      break;
    case charactersArray[i] === "e":
      numeridaicarattari[i] = 5;
      break;
    case charactersArray[i] === "f":
      numeridaicarattari[i] = 6;
      break;
    case charactersArray[i] === "g":
      numeridaicarattari[i] = 7;
      break;
    case charactersArray[i] === "h":
      numeridaicarattari[i] = 8;
      break;
    case charactersArray[i] === "i":
      numeridaicarattari[i] = 9;
      break;
    case charactersArray[i] === "l":
      numeridaicarattari[i] = 10;
      break;
    case charactersArray[i] === "m":
      numeridaicarattari[i] = 11;
      break;
    case charactersArray[i] === "n":
      numeridaicarattari[i] = 12;
      break;
    case charactersArray[i] === "o":
      numeridaicarattari[i] = 13;
      break;
    case charactersArray[i] === "p":
      numeridaicarattari[i] = 14;
      break;
    case charactersArray[i] === "q":
      numeridaicarattari[i] = 15;
      break;
    case charactersArray[i] === "r":
      numeridaicarattari[i] = 16;
      break;
    case charactersArray[i] === "s":
      numeridaicarattari[i] = 17;
      break;
    case charactersArray[i] === "t":
      numeridaicarattari[i] = 18;
      break;
    case charactersArray[i] === "u":
      numeridaicarattari[i] = 19;
      break;
    case charactersArray[i] === "v":
      numeridaicarattari[i] = 20;
      break;
    case charactersArray[i] === "z":
      numeridaicarattari[i] = 21;
      break;

    default:
      console.log("Something is wrong");
  }
}
console.log(charactersArray);
console.log(numeridaicarattari);
