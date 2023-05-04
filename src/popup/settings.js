document.getElementById("settings").addEventListener("click", saveState);

function saveState() {
    chrome.storage.local.set({state: {
        "directions": "",
        "fun_facts": ""
    }})
}