# Team Report/Agenda
## Old Goals
1. 
## Issues
- What you did:
- What worked:
- What you learned:
- Where you had trouble:
## New Goals
1. 

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
1.
### Issues
- What you did:
- What worked:
- What you learned:
- Where you had trouble:
### New Goals
1.

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

