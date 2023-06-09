# Team Report/Agenda
## Old Goals
1. Implementing core of backend (Trinity & Gavin)
    - Flesh out each component. Get the popup functioning with mock scraped data
2. Figure out how to run the content scraper in the background and export that data to other components
3. Figure out what a viable testing architecture will be (David & Saket)
4. Figure out how to use shell scripts to automate building and CI/CD

## Issues
- What you did: 
  - Started implementing the backend
  - Successfully ran the frontend of the extension on Chrome locally
  - Solidify our testing architecture (Selenium & Mocha)
  - Setup our CI system through Git Actions
- What worked: Dividing and conquering worked really well this week. We all focused on separate parts of the project which allowed us to get a lot done.
- What you learned: We gained confidence in how we are are going to implement our browser through Chrome's API and how we will test our browser's integration/system. 
- Where you had trouble: David had some trouble setting up our CI system through Git action, but was able to figure it out. Otherwise, no other problems!
## New Goals
1. Finish backend (Trinity, Gavin, Saket)
2. Deploy functional extension in Chrome (locally)
3. Write basic tests for all components

# Contributions of Individuals

## David
### Old Goals
1. Look at other popular Chrome extensions on Github to see how they handle CI/CD.
2. Write code to get data from the content script to the popup script via SessionStorage.
### Issues
- What you did: worked on setting up testing and CI.
- What worked: created an node.js project in the test/ folder and installed dependencies to support testing via Mocha and Selenium. Set up CI with GitHub Actions, which automatically runs the tests whenever we push to main.
- What you learned: How to set up CI with GitHub Actions. I also learned how Mocha tests and Selenium work in JS.
- Where you had trouble: I had trouble setting up the CI because the Selenium tests keep timing out seemingly randomly when I push to main, despite them being well under the timeout when I run locally.
### New Goals
1. Write more tests for our application for alpha release.
2. Help with message passing between our content script and main thread.

## Saket
### Old Goals
1. continue to review javascript for the programing aspect of the project.
2. start on the sections.js module by creating the back end portion and the map for the html scraper.
3. start to build test modules to test functionality of the components.
### Issues
- What you did: very limited work this week, reviewed a bunch of javascript in order to start developing the main module that parses the time schedule
  to get the section information and other info to add to the calender. Tried to synthesize the html page of a time schedule to see what parts to try and   target and parse.
- What worked: being able to use documentation and look up how to actually use different functions, also being able to access the html page in it's 
  entirty using view page source to figure out what parts of the html code i need to target.
- What you learned: that there are many different ways to try and solve this problem to parse the information, but it is important to find a way to 
  not only figure out how to efficently create a program, but also figure out a way to create an implemntation that fits in with the overall structure
  of the layout we decided upon and utilize our resources as efficent as possible.
- Where you had trouble: figuring out the best implementation for parsing the document, and making sure that the code i am writing takes efficency and 
  code complexity into consideration
### New Goals
1. continue to review javascript for the programing aspect of the project.
2. continue working on the sections.js module by creating the back end portion and the map for the html scraper.
3. continue to build test modules to test functionality of the components. 

## Trinity
### Old Goals
1. Start implementing backend!!! Make progress on export.js and content.js by next team meeting
### Issues
- What you did:
  - Finished export.js, which injects the user's course names into the HTML table and parses the checkboxes upon button click to record the user's selections
  - Got the extension running in Chrome in developer mode. 
  - Did research on how we can send data on the DOM from our content script to our popup scripts
  - Started revising content.js. The HTML parsing logic needs to be updated
- What worked:
  - I did a deepr dive into the Chrome API / Extensions documentation and it gave me a much better idea of how to set up our extension
- What you learned:
  - About the architecture of Chrome Extensions, and how to rn an extension locally in Chrome
- Where you had trouble:
  - Minimal trouble
### New Goals
1. Finish content.js (backend script & html parser)
2. Work with Gavin to get the entire extension functional in the browser

## Gavin
### Old Goals
1. Write ics.js
### Issues
- What you did: I wrote the first version of ics.js. It takes in an array of classes in a specific format, and converts it into an .ics file that contains all the classes for the quarter.
- What worked: I took care to look at how my teammates had written their code for pulling the classes out of the html. This helped me to write my code in a way that would work well with theirs.
- What you learned: I learned a lot about how to write efficient Javascipt and good ways to build strings in js.
- Where you had trouble: It had been a while since I had written in Javascipt, so I had to remind myself about the syntax and how the language works. This slowed me down a bit in the early stages.
### New Goals
1. Update ics.js to work with holidays and interruptions in the quarter calendar.

