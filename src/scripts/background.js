chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.url) {
        console.log("request")
        fetch(request.url)
        .then(r => r.text())
        .then(b => sendResponse({page: b}))
        .catch()
        return true
    }
})