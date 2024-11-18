"usestrict";
console.clear();

// UTILITIES FUNCTION

// RANDOM NUMBER GENERATOR

/**
 * 
 * @param {num} min 
 * @param {num} max 
 * @returns 
 * 
 * @abstract Genera un numero random compreso tra min e max
 */

export default function randomNumbersGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ODDS OR EVEN 

/**
 * 
 * @param {num} num 
 * @returns 
 * @abstract Indica se un numero è pari o dispari
 */

export function oddsOrEven(num) {

    let result = "";

    if (num % 2 === 0) {
        result = "pari"
        console.log(`Il risultato è ${result}`);


    } else {
        result = "dispari"
        console.log(`Il risultato è ${result}`);
    }
}


// ODDS EVEN GAME 

/**
 * 
 * @param {num} num 
 * @returns 
 * @abstract Gioco pari e dispari tra utente e pc
 */

export function oddsEven() {

    const pcNumber = randomNumber(1, 10);
    console.log("numPC", pcNumber);

    const userNumber = parseInt(prompt("Inserisci un numero tra 1 e 10"));
    console.log("num user", userNumber);


    const userChoice = prompt("Scegli pari o dispari");
    console.log(userChoice);

    const sum = pcNumber + userNumber;
    console.log(sum);


    const oeResult = oddsEven(sum);
    console.log(oeResult);

    if (oeResult === userChoice.toLowerCase()) {

        console.log("Hai vinto!");

    } else {
        console.log("Hai perso");

    }
}




// DICE GAME
/**
 * 
 * @param {num} userNumber 
 * @param {num} pcNumber 
 * @returns 
 * @abstract Gioco dei dadi tra utente e pc
 */

export function dice() {

    const userNumber = randomNumber(1, 6);
    const pcNumber = randomNumber(1, 6);

    let message = `Il tuo numero è ${userNumber}, mentre il numero del PC è ${pcNumber}. `

    if (userNumber > pcNumber) {

        console.log(message + "Complimenti, hai vinto!");

    } else if ((userNumber < pcNumber)) {

        console.log(message + "Spiacente, purtroppo hai perso");

    } else {

        console.log(message +
            "Tu e il pc avete pescato lo stesso numero, abbiamo quindi un pareggio!");

    }
    return;
}

// Word Reverse

/**
 * 
 * @param {string} 
 * @returns 
 * @abstract Inverte una parola
 */

export function wordReverse() {
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; i--) {

        reversedWord += word[i];

    }
    if (word === reversedWord) {
        console.log("La parola è palindroma");

    } else {
        console.log("La parola non è palindroma");

    }

    return reversedWord
}


// Content between generator

/**
 * 
 * @param {Array} myArray 
 * @param {num} min 
 * @param {num} max 
 * @returns 
 * @array Return a new array with numbers between min and max
 */

export function contentBetweenExtractor(myArray, min, max) {
    const arrayMinMax = checkMinMax(min, max);
    let numMin = arrayMinMax[0];
    let numMax = arrayMinMax[1];
    console.log(numMin, numMax);

    const newArray = [];

    for (let i = 0; i < myArray.length; i++)

        if (myArray[i] >= myArray[numMin] && myArray[i] <= myArray[numMax]) {

            newArray.push(myArray[i]);
        }

    return newArray;

}

// Ritorna in a il valore minimo ed in b il valore massimo

export function checkMinMax(a, b) {

    let arrayValori = [a, b];
    a = Math.min(...arrayValori);
    b = Math.max(...arrayValori);
    return [a, b];
}