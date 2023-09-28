let hiddenElement = document.getElementById("hidden");

let playButton = document.getElementById("play")

let resetButton = document.getElementById("reset");

resetButton.onclick = () => {
    hiddenElement.setAttribute("style", "display: none");
    playButton.setAttribute("style", "display: block");
};  

playButton.onclick = () => {
    hiddenElement.setAttribute("style", "display: block");
    playButton.setAttribute("style", "display: none");
};  