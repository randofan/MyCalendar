# Team Report/Agenda
## Old Goals
1. Update project requirements. Include revised non-functional requirements.
2. Wireframe popup UI.
3. Design backend system architecture. Finalize a coding language and framework.
4. Determine what data we need to collect.
5. Get all mappings to time schedules. Each department has its own time schedule, so we need to find them all.
6. Figure out what software we will use to develop project.
## Issues
- What you did:
    - Finished fleshing out design and architecture
    - Finalized the popup wireframe
    - Open conversation on automated build and testing architecture
    - Updated our work timeline
- What worked:
    - Splitting up work and then reviewing as a team in class
- What you learned:
    - We're all shaking off some of the javascsript dust :)
- Where you had trouble:
    - Testing may be more complicated since we are deploying a browser extension. David is going to focus on this for the next week.
    - Building may be more complicated since we're deploying a browser extension. David is going to focus on this for the next week.
## New Goals
1. Implementing core of backend (Trinity & Gavin)
    - Flesh out each component. Get the popup functioning with mock scraped data
2. Figure out how to run the content scraper in the background and export that data to other components
3. Figure out what a viable testing architecture will be (David & Saket)
4. Figure out how to use shell scripts to automate building and CI/CD

# Contributions of Individuals

## David
### Old Goals
1. Read Chrome extension documentation and follow setup tutorial for "estimated read time" (follows similar requirements to our project).
### Issues
- What you did: 
    - Read more into the limitations of Chrome extensions. I learned more about how content scripts work.
    - Researched how we can incorporate build and test tools into our Chrome extension.
    - Revised the Design Architecture to follow an MVC. Improved the design's modulation.
    - Wrote code to get user registration data from the class schedule page.
- What worked:
    - Confident that our project is feasible given the technology's constraints.
- What you learned:
    - Learned more about how JavaScript runs differently through the browser and via Node.js
    - Determined a plan for how we can use CI/CD and automated testing.
- Where you had trouble:
    - Still unable to test if content script works.
    - Unsure if it'll be possible to run Chrome extensions on Chromium browser.
### New Goals
1. Look at other popular Chrome extensions on Github to see how they handle CI/CD.
2. Write code to get data from the content script to the popup script via SessionStorage.

## Saket
### Old Goals
1. finish backend mapping between course name and html page to get schedule information.
2. review javascript for the programing aspect of the project.

### Issues
- What you did: helped design the overall relationships of our modules and figure out how the overall application would work with respect to all other 
  parts of the project and what modules are needed and how they should all be connected in order for the application to be correctly built and working 
  properly. Additionally got all the data needed form the time schedule that should allow us to be able to scrape all the section information from the 
  time schedule.
- What worked: Being able to fully visuallize how all the different components of our app will be connected is really helpful because it helped me to
  vizualize what i may need to do in order build the specific component and how it worls with all the different parts and what i need to do to make sure
  the module or part i create is able to seamlessly mesh with the app we are building. Also beinga able to discuss with everyone helps all of us be on
  the same page developing this project.
- What you learned: learned that being able to brainstorm and preplan is really helpful because there is an existing structure that we can use to build
  our module and it gives sort of a reference we can use to make sure we are on the right track and we are doing everything we need to in order to get
  the best results possible.
- Where you had trouble: there was some trouble trying to efficently parse the available course page to get all the html pages for each course time
  schedules to get all the schedule information without doing it one at a time manually. So trying to code up a way to extract this information with one
  go was a bit tricky.
### New Goals
1. continue to review javascript for the programing aspect of the project.
2. start on the sections.js module by creating the back end portion and the map for the html scraper. 
3. start to build test modules to test functionality of the components.

## Trinity
### Old Goals
1. Work on software architecture and design in project requirements
2. Wireframe the UI design in Figma
### Issues
- What you did: Finished the popup wireframes, focused on the Design section of our doc, fleshing out the implementation of our popup.
- What worked: Asking for async feedback in Slack, splitting up work then touching base in class.
- What you learned: Learned how how ci/cd and testing will add more complexity because we need to deploy to Chrome.
- Where you had trouble: N/A
- Where you are stuck: For now, N/A. I am anticiapting some problems in figure out how export.js and content.js will exchange data on Chrome
### New Goals
1. Start implementing backend!!! Make progress on export.js and content.js by next team meeting

## Gavin
### Old Goals
1. For this coming week, I want to focus on the architecture of the plugin, especially the code behind parsing the calendar and creating the .ics file from it.
2. I think overall I want to work mostly on the code for converting between the different data types that will be present in our plugin.
### Issues
- What you did: I worked on the architecture and how the program will be broken up into different files, and how those files will interact and pass data between themselves. I also researched the format of an .ics file, in preparation for writing the .ics file creator this week.
- What worked: Communicating clearly with the other members of the team on how we should write our files how the code that each of us write should interact.
- What you learned: I learned a lot about the format of an .ics file, which is a relatively simple format that we can create easily.
- Where you had trouble: I was not able to start writing the ics.js script yet, which I will start on this week.
### New Goals
1. Write ics.js

