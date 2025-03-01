let usernameforstorage = localStorage.getItem("username");

if (!usernameforstorage) {
    location.href = "index.html";
}

let title = document.getElementById("title");
title.innerHTML = 'יום הולדת שמח    ' + usernameforstorage;

let word = 'זוהרית';

let chooseword = document.getElementById('word');
let text = document.getElementById('container');

function guess() {
    let inputWord = chooseword.value;

    let firstletter = inputWord.charAt(0);
    let secondletter = inputWord.charAt(1);
    let thirdletter = inputWord.charAt(2);
    let fourthletter = inputWord.charAt(3);
    let fifthletter = inputWord.charAt(4);
    let sixthletter = inputWord.charAt(5);

    let check1 = check(firstletter, 0);
    let check2 = check(secondletter, 1);
    let check3 = check(thirdletter, 2);
    let check4 = check(fourthletter, 3);
    let check5 = check(fifthletter, 4);
    let check6 = check(sixthletter, 5);

            text.innerHTML = `
            <div style="background-color: ${check1}" class="letter">${firstletter}</div>
            <div style="background-color: ${check2}" class="letter">${secondletter}</div>
            <div style="background-color: ${check3}" class="letter">${thirdletter}</div>
            <div style="background-color: ${check4}" class="letter">${fourthletter}</div>
            <div style="background-color: ${check5}" class="letter">${fifthletter}</div>
            <div style="background-color: ${check6}" class="letter">${sixthletter}</div>
        `

    ;

    if (check1 === 'green' && check2 === 'green' && check3 === 'green' && check4 === 'green' && check5 === 'green' && check6 === 'green') {
        setTimeout(() => {
            alert('מזל טוב זוהרית מדעית המלכה!!!');
        }, 100);
    }
}

function check(letter, index) {
    if (word.charAt(index) === letter) {
        return 'green';
    }
    if (word.includes(letter)) {
        return 'yellow';
    }
    return 'red';
}

function login() {
    let batman = document.getElementById("continue");
    localStorage.setItem("continue", batman.value);
    window.location.href = "flash.html";
}
