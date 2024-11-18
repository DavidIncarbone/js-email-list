"use strict";
console.clear();

/* API

https://flynn.boolean.careers/exercises/api/random/mail */

const ul = document.querySelector("main ul:first-child")
console.log(ul);

const arrayMails = [];

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



function printMails(myArray) {

    let template = "";
    arrayMails.forEach((mail) => {
        template += `<li class="list-group-item">${mail}</li > `
        ul.innerHTML = template;
    })

}























































