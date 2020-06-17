function addSkipButton() {
    let root = document.getElementById("vilosRoot");
    let button = document.createElement("div");
    let player = document.getElementById('player0');
    button.style.zIndex = 999;
    button.style.color = "white";
    button.style.position = "fixed";
    button.style.right = 0;
    button.style.bottom = "80px";

    button.style.backgroundColor = "rgba(0,0,0,0.3)";
    button.style.border = "1px solid white";
    button.style.padding = "10px 10px 9px 10px";
    button.style.margin = "0 20px 0 0";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.style.display = "none";
    button.id = "skipButton";
    button.onclick = () => {
        player.currentTime = introTime;
    };
    root.append(button);
    window.setInterval(showHideSkipButton, 1000);
}

function showHideSkipButton() {
    let skipButton = document.getElementById("skipButton");
    let player = document.getElementById('player0');
    let time = parseInt(player.currentTime);

    //display the button
    if (time < introTime) {
        skipButton.innerText = "SKIP INTRO";
        skipButton.style.display = "block";
    } else {
        skipButton.style.display = "none";
    }
}

function init() {
    chrome.runtime.sendMessage(
        {episode: document.referrer.substring(document.referrer.search("m") + 1)},
        (response) => {
            // convert from milliseconds to seconds
            introTime = response/1000;
        });
    addSkipButton();
}

let introTime = 0;
init();

