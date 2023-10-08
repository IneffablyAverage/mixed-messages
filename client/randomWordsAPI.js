//impliment functionality for fetch to random word API

async function getWordByType(type){
    try {
        const response = await fetch(`http://localhost:3000/proxy/${type}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

export{
    getWordByType
}