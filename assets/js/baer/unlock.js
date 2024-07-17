/**
 * Key used in localStorage to hold unlocked content.
 */
const UNLOCKED_KEY = "unlocked";

/**
 * Name of the bear key attribute.
 * This is attached to <form class="baer-challenge"> elements.
 * When the form passes, elements with the same bear-content value
 * as this form's bear-key value will become unlocked.
 */
const BAER_KEY_ATTR = "baer-key";
/**
 * Name of the bear content attribute.
 * This attribute marks an element as being part of a group, 
 * which is unlocked (shown) when the <form> element
 * connected to this group passes.
 */
const BAER_CONTENT_ATTR = "baer-content";
/**
 * Allows for dialogue changes based on button choice.
 */
const BAER_OPTION_ATTR = "baer-option";

/**
 * Class that hides stuff.
 */
const HIDDEN = "d-none";

var unlocked = new Map();

console.log("enabling unlock script");
// Loading/saving to localStorage.
function loadUnlockedTags() {
    let unlockedStr = localStorage.getItem(UNLOCKED_KEY);
    
    let unlocked;
    if (unlockedStr != null) {
        unlocked = JSON.parse(unlockedStr);
    } else {
        unlocked = {};
    }

    return new Map(Object.entries(unlocked));
}
function saveUnlockedTags(tags) {
    let tagsArray = Object.fromEntries(tags);
    localStorage.setItem(UNLOCKED_KEY, JSON.stringify(tagsArray));
    updateLocks();
}

// Interoping with the set
function unlockTag(tag, option = null) {
    unlocked.set(tag, option);
    saveUnlockedTags(unlocked);
}
function lockTag(tag) {
    unlocked.delete(tag);
    saveUnlockedTags(unlocked);
}
function isTagUnlocked(tag) {
    return unlocked.has(tag);
}

// Updating the display
function updateLocks() {
    for (let el of document.querySelectorAll(`[${BAER_CONTENT_ATTR}]`)) {
        let tag = el.getAttribute(BAER_CONTENT_ATTR);
        let selectedOpt = unlocked.get(tag);
        console.log(`updating ${tag} to (${unlocked.has(tag)}, ${selectedOpt})`, unlocked)

        // Lock updating.
        // If element has baer-content: XX, that means it is unlocked by key XX.
        // If element also has baer-option: XX, user needed to have pressed option XX in a button array for this to show.

        let hidden = true;
        if (unlocked.has(tag)) {
            let opt = el.getAttribute(BAER_OPTION_ATTR);
            if (opt == null || opt == selectedOpt) {
                hidden = false;
            }
        }

        if (hidden) {
            el.classList.add(HIDDEN);
        } else {
            el.classList.remove(HIDDEN);
        }

        // Handling buttons:
        if (selectedOpt != null) {
            pressButton(tag, selectedOpt);
        }
    }
}

window.addEventListener("load", e => {
    unlocked = loadUnlockedTags();
    updateLocks();
})