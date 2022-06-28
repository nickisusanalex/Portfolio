let message = document.querySelector("#message");

function animateCharacters(element) {
    let spanElements = element.querySelectorAll("span");

    for (let i = 0; i < spanElements.length; i++) {
        let spanElement = spanElements[i];
        let randomDuration = 1 + Math.random() * 30;
        
        spanElement.style.setProperty("--duration", randomDuration + "s");
    }
}

animateCharacters(message);