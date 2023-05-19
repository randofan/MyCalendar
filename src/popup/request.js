const getRequest = async (url) => {
    const body = await chrome.runtime.sendMessage({url: `https://www.washington.edu/students/reg/${2223}cal.html`});
    const doc = new DOMParser().parseFromString(body.page, 'text/html')
    return doc
}