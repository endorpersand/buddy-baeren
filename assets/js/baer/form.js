const ANSWERS = {
    // baer-key: answer
    "hotel-palace-puzzle": "orange",
    "hotel-palace-leave": "answer",
    "pablo-puzzle": "thanks",
}

console.log("enabling form script");

// Input mode: Check if answer matches input
for (let el of document.querySelectorAll(`form[${BAER_KEY_ATTR}]`)) {
    if (!(el instanceof HTMLFormElement)) continue;
    // Add color update:
    let input = el.querySelector("input");
    if (input != null) {
        input.addEventListener("input", () => {
            input.classList.remove("baer-wrong");
            input.classList.remove("baer-right");
        })
    }
    el.addEventListener("submit", e => {
        e.preventDefault();

        let input = el.querySelector("input");
        let tag = el.getAttribute(BAER_KEY_ATTR);
        if (input != null && tag != null) {
            let answer = ANSWERS[tag];
            if (answer != null) {
                if (input.value.toLowerCase() == answer.toLowerCase()) {
                    input.classList.add("baer-right");
                    unlockTag(tag);
                } else {
                    input.classList.add("baer-wrong");
                }
            }
        }
    })
}

// Button array mode: Press one button in array of buttons
function pressButton(key, index) {
    let form = document.querySelector(`form[${BAER_KEY_ATTR}=${key}]`);
    if (form != null) {
        // get selected as a button element
        let selected = form.children[index];
        if (!(selected instanceof HTMLButtonElement)) return;

        // change it to blue
        selected.classList.remove("btn-light");
        selected.classList.add("btn-primary");
        // disable array if not already disabled
        if (!selected.disabled) {
            for (let child of form.children) {
                if (child instanceof HTMLButtonElement) {
                    child.disabled = true;
                }
            }
            unlockTag(key, index);
        }
    }
}