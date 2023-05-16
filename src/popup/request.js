/**
 * Wrapper to GET a webpage. Note, you must add every url you GET from
 * to manifest.json -> "host_permissions".
 * Unable to unit test.
 * 
 * @param {*} url 
 * @returns 
 */
const getRequest = (url) => {
    let res = {}
    const urls = [url]
    urls.forEach(async (url) => {
        const r = await chrome.runtime.sendMessage({url: url})
        res['body'] = r.page
    });
    return res
}