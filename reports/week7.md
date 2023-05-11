# Team Report/Agenda
## Old Goals
1. Finish backend (Trinity, Gavin, Saket)
2. Deploy functional extension in Chrome (locally)
3. Write basic tests for all components

## Issues
- What you did: Finished the backend of our main use case, wrote tests, updated our README with setup instructions, recorded our presentation for Alpha release!
- What worked: We did a lot of communicating over Slack this week. Discussed errors and implementation decisions there
- What you learned: Learned about asyncronous collaboration
- Where you had trouble: Thinking through testing infrastructure and how we're going to enable unit testing
## New Goals
1. Implement sections feature (download calendar file for additional sections of a lecture)
2. Get unit tests working + write more tests
3. Look into publishing on the Chrome extension store

# Contributions of Individuals

## David
### Old Goals
1. Write more tests for our application for alpha release.
2. Help with message passing between our content script and main thread.
### Issues
- What you did: successfully wrote message passing, the download scripts, and saving settings.
- What worked: the front end now renders properly and you can download the file.
- What you learned: how to use the chrome api and how chrome extensions can interact with it.
- Where you had trouble: setting up unit tests. the method I originally explored doesn't seemt to work, so working on a pivot.
### New Goals
1. get unit tests working; I need to reconsider my approach.
2. help out with general system design and chrome extension specific questions.

## Saket
### Old Goals
1. continue to review javascript for the programing aspect of the project.
2. continue working on the sections.js module by creating the back end portion and the map for the html scraper.
3. continue to build test modules to test functionality of the components.
### Issues
- What you did: created a basic module that took a specific section page and parsed it to get the quiz sections and lecture sections
- What worked: being able to split up the section part into multiple parts, so i first work on the parsing logic, then change the inputs, then remove all constant variables.
- What you learned: instead of tackling everything at once, break it up to smaller parts and working on it one at a time. 
- Where you had trouble: getting the logic correct and figuring out what to target to get the information i want
### New Goals
1. continue working on the sections.js module now adding the full html scrapper and connecting to main module.
2. continue to build test modules to test functionality of the components.
3. update documentation.

## Trinity
### Old Goals
1. Finish content.js (backend script & html parser)
2. Work with Gavin to get the entire extension functional in the browser

### Issues
- What you did:
    - Fixed the content script that scrapes the HTML
    - Worked with David to make a minor update to how we're passing the course data
    - Updated the code so that only the high level course gets displayed on the popup, but all registered sections (lecture and quiz section) still get downloaded as an ICS file
- What worked: Asking questions in Slack, work independently then update the team on my progress in Slack
- What you learned: Learned more about the Chrome API, specifically the listener that we've setup in export.js
- Where you had trouble: N/A
### New Goals
1. Write unit tests for backend components
2. Help implement section.js if needed

## Gavin
### Old Goals
1. Update ics.js to work with holidays and interruptions in the quarter calendar.
### Issues
- What you did: I wrote the framework for ics.js to work with holidays and interruptions in the calendar. I also did a lot
of bug testing of ics.js using some new unit tests that I wrote, and was able to find and fix multiple bugs in it. 
- What worked: ics.js is now completely functional and bug-free, thanks to the unit tests.
- What you learned: I learned a lot about using unit tests in mocha and node.js and how they can help us do our testing
- Where you had trouble: I had trouble implementing the holidays to work completely, because ics.js still needs to get that raw
information from the content.js script. Right now, the code to implement holidays is in ics.js but commented out.
### New Goals
1. integrate holidays and interruptions with content.js
2. continue to write tests for ics.js to be really thourough about ironing out all the bugs.

