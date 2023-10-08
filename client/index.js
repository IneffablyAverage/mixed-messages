let closingElement = document.querySelector("#closing");

let playButton = document.querySelector("#play");

let intro = document.querySelector("#intro-message");

let resetButton = document.querySelector("#reset");

let message = document.querySelector("#mixed-message");


import { generateMessage } from "./utilities.js";
import { getWordByType } from "./randomWordsAPI.js";
// the _____ _____ _____ _____ _____  the _____ _____
//      adj.  adj.  noun  verb  posi.      adj.  noun


const generateWordsByType = async (type) => {
    let words = [];
    for(let i = 0; i < 10; i ++){
        const word = await getWordByType(type);
        words.push(word);
    }
    return words;
}

const words = {};

Promise.all([
    generateWordsByType("adjective"),
    generateWordsByType("verb"),
    generateWordsByType("noun")
  ]).then(([adjectives, pastVerbs, nouns]) => {
    words = {
      adjectives:adjectives,
      pastVerbs:pastVerbs,
      nouns:nouns,
      posi_preps: ["over", "under", "through", "around", "beside", "on top of", "behind", "inside of"]
    }
  });

resetButton.onclick = () => {
    closingElement.setAttribute("style", "display: none");
    intro.setAttribute("style", "display: block");
    message.setAttribute("style", "display: none");
};  

playButton.onclick = async () => {
    closingElement.setAttribute("style", "display: block");
    intro.setAttribute("style", "display: none");
    
    message.innerHTML = `<p id="final">${generateMessage(words)}</p>`;
    message.setAttribute("style", "display: block");
};   



