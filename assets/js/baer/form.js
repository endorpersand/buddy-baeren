 //                  selector                      answer         
newFormInput(  "form.hotel-palace-arrival",       "orange");
newFormInput(  "form.hotel-palace-pablo",         "answer");
newFormInput(  "form.pablo-arrive",               "thanks");





















console.log("enabling form script");
function newFormInput(selector, answer) {
    for (let el of document.querySelectorAll(selector)) {
        if (el instanceof HTMLFormElement) {
            el.addEventListener("submit", e => {
                e.preventDefault();
                let input = el.querySelector("input");
                if (input != null && input.value.toLowerCase() == answer) {
                    let tag = el.getAttribute(BAER_TAG);
                    let content_to_unlock = el.getAttribute(CONTENT_TO_UNLOCK);
                    
                    unlockTag(tag,content_to_unlock);
                }
            })
        }
    }
}

