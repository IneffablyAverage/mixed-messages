


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

export{
    generateMessage
}