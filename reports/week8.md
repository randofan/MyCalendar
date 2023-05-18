# Team Report/Agenda
## Old Goals
1. Implement sections feature (download calendar file for additional sections of a lecture)
2. Get unit tests working + write more tests
3. Look into publishing on the Chrome extension store
## Issues
- What you did: implemented saving preferences; added unit tests & improved modularity; dynamically generate academic calendar from online; worked on adding additional sections not signed up for; styled the popup; added holiday, location link, and start/end date support to iCal download.
- What worked: able to save preferences; added some unit tests to improve coverage; implemented full dynamic support with location links to iCal download; popup styled.
- What you learned: still working on properly parsing html from academic calendar; still working on getting additional sections.
- Where you had trouble: sending get requests is untested in production still; adding sections was time-consuming.
## New Goals
1. finish sections support.
2. improve test coverage.
3. flesh out documentation.

# Contributions of Individuals

## David
### Old Goals
1. continue working on the sections.js module now adding the full html scrapper and connecting to main module.
2. continue to build test modules to test functionality of the components.
3. update documentation.
### Issues
- What you did: created a function to send GET requests to an external website that bypasses chrome security features; refactored code to increase modularity and encapsulation, so we get better unit test coverage; added documentation to functions.
- What worked: was able to create function to send GET requests; refactoring went well.
- What you learned: how chrome extension security features work and how background service workers function.
- Where you had trouble: creating unit tests because mocha exports don't work as expected.
### New Goals
1. write full system test that goes beyond just checking it compiles.
2. provide extension-specific support to team members.

## Saket
### Old Goals
1. continue to review javascript for the programing aspect of the project.
2. continue working on the sections.js module by creating the back end portion and the map for the html scraper.
3. continue to build test modules to test functionality of the components.

### Issues
- What you did: I wrote a section time schedule parser which would access the registration and create the schedule objects and finished the parser logic.
- What worked: beingt able to test while developing. By being able to use the console on chrome and fixing bugs as they appear helped. Also that the time schedules are all formatted the same way.
- What you learned: that it is important to think about all the different ways to solve a problem. So I made a mistake and did not account for the login information needed for accessing the section pages, so I needed to figure out another way to parse the information without the login, which was within the time schedule. So finding other ways to solve a problem is important.
- Where you had trouble: Had trouble with the deadline of the assignments. Need more time to fully develop the desired funcitonality. So trying to find time and trying to extend the release of the sections update took time and was difficult to find time to do. 
### New Goals
1. finish the sections.js module now adding the full html scrapper and connecting to main module.
2. continue to build test modules to test functionality of the components.
3. finalize documentation.

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
1.
### Issues
- What you did:
- What worked:
- What you learned:
- Where you had trouble:
### New Goals
1. 

