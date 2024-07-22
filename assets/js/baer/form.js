const ANSWERS = {
    // baer-key: answer
    "pablo-unlock": "europa center",
    "magentinho-unlock": "kira dicomy",
    "quadriga-unlock": "kranzler eck",
    "pirate-unlock": "go sylt",
    "kudamm-unlock": "1384",
    
    "pablo-clock": pabloAnswer,
    "quadriga-riddle": "blumen und wolken",
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
            let userInput = input.value.toLowerCase();

            if (answer != null) {
                if (typeof answer === "string" && userInput == answer) {
                    input.classList.add("baer-right");
                    unlockTag(tag);
                } else if (typeof answer === "function" && answer(userInput)) {
                    input.classList.add("baer-right");
                    unlockTag(tag);
                } else {
                    input.classList.add("baer-wrong");
                }
            } else {
                console.warn(`No answer found for key ${tag}`);
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

function pabloAnswer(input) {
    // TODO: handle pablo answer
    console.log(`pablo answer ${input}!`);
    return true;
}