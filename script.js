const playbtn = document.querySelector(".playbtn")

function hidestartscreen () {
    document.querySelector(".startscreen").style.display = "none";
    document.querySelector(".gamescreen").style.display = "flex";
    document.querySelector(".bottom-gamescreen").style.display="none";
    fixPadding();
}

function fixPadding () {
    const gamemodes = document.querySelector(".bottom-gamescreen")
    const gamescreen = document.querySelector(".maingamescreen")

    if (gamemodes.style.display == "none") {
        gamescreen.style.padding = "32px 16px";
    } 
}

function startGame () {
    playbtn.addEventListener("click", () => {hidestartscreen();})

}

startGame();
