const UNLOCKED_KEY = "unlocked";
const BAER_TAG = "baer-tag";
const HIDDEN = "d-hidden";

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
    let cardDoc = document.querySelector("#baer-exit-cards");
    if (cardDoc != null) {
        let tag = cardDoc.getAttribute(BAER_TAG);

        console.log("updating locks. unlocked?", unlocked.has(tag));
        if (unlocked.has(tag)) {
            cardDoc.classList.remove(HIDDEN);
        } else {
            cardDoc.classList.add(HIDDEN);
        }
    }
}

window.addEventListener("load", e => {
    unlocked = loadUnlockedTags();
    updateLocks();
})