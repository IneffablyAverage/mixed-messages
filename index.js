let closingElement = document.querySelector("#closing");

let playButton = document.querySelector("#play");

let intro = document.querySelector("#intro-message")

let resetButton = document.querySelector("#reset");

let message = document.querySelector("#mixed-message")


function randomElement(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

function generateMessage(Words){
    let adj1 = randomElement(Words.adjectives);
    let adj2 = randomElement(Words.adjectives);
    let adj3 = randomElement(Words.adjectives);
    let noun1 = randomElement(Words.nouns);
    let noun2 = randomElement(Words.nouns);
    let verb = randomElement(Words.pastVerbs);
    let positional = randomElement(Words.posi_preps);
    
    return `The ${adj1} ${adj2} ${noun1} ${verb} ${positional} the ${adj3} ${noun2}.`
}
// the _____ _____ _____ _____ _____  the _____ _____
//      adj.  adj.  noun  verb  posi.      adj.  noun

const Words = {
    adjectives: ["big", "small", "tall", "loud", "tiny", "smelly", "forgetful", "plump", "obsequious", "vile", "cocky", "bewildered", "brown", "red", "blue", "green", "busy", "strange"],
    pastVerbs: ["jumped", "squirmed", "swam", "talked", "moved", "yelled", "barked", "typed", "croaked", "leaped", "drank", "ate", "got", "wriggled"],
    nouns: ["dog", "fox", "toad", "hare", "table", "laptop", "tomato", "tree", "road", "bridge", "cup", "candlestick", "mountain", "bear", "goat"],
    posi_preps: ["over", "under", "through", "around", "beside", "on top of", "behind", "inside of"]
};

resetButton.onclick = () => {
    closingElement.setAttribute("style", "display: none");
    intro.setAttribute("style", "display: block");
    message.setAttribute("style", "display: none");
};  

playButton.onclick = () => {
    closingElement.setAttribute("style", "display: block");
    intro.setAttribute("style", "display: none");
    message.innerHTML = `<p id="final">${generateMessage(Words)}</p>`;
    message.setAttribute("style", "display: block");
};  



