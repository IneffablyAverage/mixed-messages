let closingElement = document.querySelector("#closing");

let playButton = document.querySelector("#play");

let intro = document.querySelector("#intro-message");

let resetButton = document.querySelector("#reset");

let message = document.querySelector("#mixed-message");

let progressBar = document.querySelector("#progress");

let done = document.querySelector("#done");

let toDo = document.querySelector("#not-done");
let toDoString = toDo.innerHTML;

let readyMessage = document.querySelector("#ready");


import { generateMessage } from "./utilities.js";
import { getWordByType } from "./randomWordsAPI.js";
// the _____ _____ _____ _____ _____  the _____ _____
//      adj.  adj.  noun  verb  posi.      adj.  noun

function conjugateToPastTense(verb) {
    if (verb[verb.length - 1] === 'y') {
      return verb.slice(0, -1) + 'ied';
    } else if (verb[verb.length - 1] === 'e') {
      return verb + 'd';
    } else {
      return verb + 'ed';
    }
  }


const generateWordsByType = async (type) => {
    let words = [];
    let doneString = "";
    for(let i = 0; i <= 5; i ++){
        if (!(i % 1)){
            doneString += "~~ ~~ ";
            done.innerHTML = doneString;

            toDoString = toDoString.slice(3, toDoString.length);
            toDo.innerHTML = toDoString;
        }
        let word = (await getWordByType(type)).word;
        if (type === "verb"){
            word = conjugateToPastTense(word);
        }
        words.push(word);
    }
    doneString += "~~ ~~";
    done.innerHTML = doneString;

    toDo.innerHTML = '';
    return words;
}

let words = {};

Promise.all([
    generateWordsByType('adjective'),
    generateWordsByType("verb"),
    generateWordsByType("noun")
  ]).then(([adjectives, pastVerbs, nouns]) => {
    words = {
      adjectives:adjectives,
      pastVerbs:pastVerbs,
      nouns:nouns,
      posi_preps: ["over", "under", "through", "around", "beside", "on top of", "behind", "inside of"]
    }
    readyMessage.setAttribute("style", "display: block");
  });

resetButton.onclick = () => {
    message.innerHTML = `<p id="final">${generateMessage(words)}</p>`;
};  

playButton.onclick = () => {
    if(done.innerHTML == "~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~ ~~"){
    message.innerHTML = `<p id="final">${generateMessage(words)}</p>`;
    closingElement.setAttribute("style", "display: block");
    intro.setAttribute("style", "display: none");
    message.setAttribute("style", "display: block");
    progressBar.setAttribute("style", "display: none");
    }
    else{
        null;
    }
    
};   



