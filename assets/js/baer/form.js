const ANSWERS = {
    // baer-key: answer
    "hotel-palace-puzzle": "orange",
    "hotel-palace-leave": "answer",
    "pablo-puzzle": "thanks",
}

console.log("enabling form script");
for (let el of document.querySelectorAll(`form[${BAER_KEY_ATTR}]`)) {
    if (!(el instanceof HTMLFormElement)) continue;
    
    el.addEventListener("submit", e => {
        e.preventDefault();

        let input = el.querySelector("input");
        let tag = el.getAttribute(BAER_KEY_ATTR);
        if (input != null && tag != null) {
            let answer = ANSWERS[tag];
            if (answer != null && input.value == answer) {
                unlockTag(tag);
            }
        }
    })
}