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
 * Class that hides stuff.
 */
const HIDDEN = "d-none";

var unlocked = new Set();

console.log("enabling unlock script");
// Loading/saving to localStorage.
function loadUnlockedTags() {
    let unlockedStr = localStorage.getItem(UNLOCKED_KEY);
    
    let unlocked;
    if (unlockedStr != null) {
        unlocked = JSON.parse(unlockedStr);
    } else {
        unlocked = [];
    }

    return new Set(unlocked);
}
function saveUnlockedTags(tags) {
    let tagsArray = Array.from(tags);
    localStorage.setItem(UNLOCKED_KEY, JSON.stringify(tagsArray));
    updateLocks();
}

// Interoping with the set
function unlockTag(tag) {
    unlocked.add(tag);
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
        console.log(`updating ${tag} to ${unlocked.has(tag)}`, unlocked)
        if (unlocked.has(tag)) {
            el.classList.remove(HIDDEN);
        } else {
            el.classList.add(HIDDEN);
        }
    }
}

window.addEventListener("load", e => {
    unlocked = loadUnlockedTags();
    updateLocks();
})