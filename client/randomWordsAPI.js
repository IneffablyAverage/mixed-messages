//impliment functionality for fetch to random word API

async function getWordByType(type){

    try {
        const response = await fetch(`http://localhost:3000/proxy/${type}`);

        let word = await response.json();

        return word;
    } catch (error) {
        console.error('OBVIOUS Error:', error);
    }
}

export{
    getWordByType
}