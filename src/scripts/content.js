/**
 * Get the content from class schedule.
 * Unable to unit test.
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.page) {
        sendResponse({ classSchedule: getClassSchedule(), classQuarter: getQuarter() });// this is how you send message to popup
        return true;
    }
}
);
