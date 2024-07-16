const UNLOCKED_KEY = "unlocked";
const UNLOCKED_CONTENT = "unlocked_content";
const BAER_TAG = "baer-tag";
const HIDDEN = "d-none";
const CONTENT_TO_UNLOCK = "unlock-content";

var unlocked = new Set();
var unlockedContentSet = new Set();
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

    let unlockedContentStr = localStorage.getItem(UNLOCKED_CONTENT);

    if (unlockedContentStr != null) {
        unlockedContent = JSON.parse(unlockedContentStr);
    } else {
        unlockedContent = [];
    }
    
    return [new Set(unlocked), new Set(unlockedContent)];
}
function saveUnlockedTags(tags, contentSet) {
    let tagsArray = Array.from(tags);
    let unlockedContentArray = Array.from(contentSet)


    localStorage.setItem(UNLOCKED_KEY, JSON.stringify(tagsArray));
    localStorage.setItem(UNLOCKED_CONTENT, JSON.stringify(unlockedContentArray));
    
}

// Interoping with the set
function unlockTag(tag, content_to_unlock) {
    unlocked.add(tag);
    unlockedContentSet.add(content_to_unlock);
 
    saveUnlockedTags(unlocked, unlockedContentSet);
    updateLocks(content_to_unlock);
}
function lockTag(tag) {
    unlocked.delete(tag);
    saveUnlockedTags(unlocked);
}
function isTagUnlocked(tag) {
    return unlocked.has(tag);
}

// Updating the display 
function updateLocks(content_to_unlock) {
    
    let cardDoc = document.getElementById(content_to_unlock);
    if (cardDoc != null && cardDoc.hasAttribute(BAER_TAG)) {
        let tagValue = cardDoc.getAttribute(BAER_TAG);
        
        console.log("Updating locks for tag:", tagValue, "unlocked?", unlocked.has(tagValue));
        
        if (unlocked.has(tagValue)) {
            cardDoc.classList.remove(HIDDEN);
        } else {
            cardDoc.classList.add(HIDDEN);
        }
    }
}

window.addEventListener("load", e => {
    let unlockedInfo = loadUnlockedTags();
    unlocked = unlockedInfo[0];
    unlockedContentSet = unlockedInfo[1];
    
    unlockedContentSet.forEach(e => {
        updateLocks(e);
    })

})