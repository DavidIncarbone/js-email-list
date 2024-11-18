"use strict";
console.clear();

/* API

https://flynn.boolean.careers/exercises/api/random/mail */

// GET ELEMENTS FROM indexedDB.HTML

const main = document.querySelector("main");
console.log(main);
const ul = document.querySelector(".list-group")
console.log(ul);
const button = document.querySelector("button");
console.log(button);
const p = document.querySelector("p");
console.log(p);


// Empty Array for mails

let arrayMails = [];

// EVENTS

button.addEventListener("click", regenerateMails);

// CALL FUNCTION

generateMails(arrayMails);


// FUNCTIONS

// Mails generated with loading page

function generateMails() {
    for (let i = 1; i <= 10; i++) {

        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((mail) => {
                console.log(mail.data);

                const singleMail = mail.data.response;
                arrayMails.push(singleMail);

                if (arrayMails.length === 10) {

                    printMails(arrayMails);
                }

            })
            .catch((error) => {
                console.log(error);

            })
            .finally(() => {
                if (arrayMails.length === 10) {
                    console.log("Tutte le risposte sono state ricevute");
                }

            }
            )
    }

}

// mails generated with button

function regenerateMails() {

    let arrayMails = [];

    let liNode = document.querySelectorAll("li");
    console.log(liNode);

    for (let li of liNode) {

        li.classList.add("d-none");


    }
    for (let i = 1; i <= 10; i++) {

        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((mail) => {
                console.log(mail.data);

                const singleMail = mail.data.response;
                arrayMails.push(singleMail);

                if (arrayMails.length === 10) {

                    let template = "";
                    arrayMails.forEach((mail) => {
                        template += ` <li><a href="#" class="list-group-item list-group-item-action text-white bg-black" aria-current="true">
                ${mail}
            </a></li> `
                        ul.innerHTML = template;
                        p.classList.add("d-none");
                    })
                } else {

                    p.classList.remove("d-none");
                }

            })
            .catch((error) => {
                console.log(error);

            })
            .finally(() => {
                if (arrayMails.length === 10) {
                    console.log("Tutte le risposte sono state ricevute");
                }

            }
            )
    }
}

// print mail's system


function printMails() {

    let template = "";
    arrayMails.forEach((mail) => {
        template += ` <li><a href="#" class="list-group-item list-group-item-action text-white bg-black" aria-current="true">
                ${mail}
            </a></li> `
        ul.innerHTML = template;
    })



}
