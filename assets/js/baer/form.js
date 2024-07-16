console.log("enabling form script");

for (let el of document.querySelectorAll("form.baer-challenge")) {
    if (el instanceof HTMLFormElement) {
        el.addEventListener("submit", e => {
            e.preventDefault();

            let input = el.querySelector("input");
            if (input != null && input.value == "answer") {
                let tag = el.getAttribute(BAER_TAG);
                unlockTag(tag);
            }
        })
    }
}