# MyCalendar
MyCalendar is a Google chrome extension that launches on the UW course registration page and converts the user's registered courses into an .ics file. With MyCalendar, students don't have to manually enter the details of a course (time, recurrence, location, etc.) for all their courses every quarter.
## For peer review
please download the files needed from this version of the repo while we fix current bugs we have with the code:
https://github.com/randofan/MyCalendar/tree/e951c956130e98ef747c838e0f97394a83adff00

## Features
1. Download your course schedule as an .ics file, which can be imported into any calendar app.
2. (Work in Progress) Download a separate .ics file with all the available sections for a class you’re registered for.
3. Change your preferences of the plugin, including which courses the .ics files include.
4. Include a link to each course location on the UW map.

## Setup
- install Chrome v112

## Run
1. Open the [Github Repository](https://github.com/randofan/MyCalendar) and click on <> Code
2. Select "Download ZIP" and download the .zip
3. Unzip the file and place MyCalendar/ into your desired location; DO NOT REMOVE OR MOVE THE FOLDER
4. Navigate to chrome://extensions/ on Chrome
5. In the upper right corner, enable developer mode
6. Click "load unpacked" and select MyCalendar/src
7. Navigate to your [Course Schedule](https://sdb.admin.uw.edu/sisStudents/uwnetid/schedule.aspx?Q=2)
8. In the upper right corner, click on the extension
9. Select the courses you would like to include
10. Click the download button
11. Note you must follow the steps in this order exactly. Failure to do so may result in undefined behavior

## Report Bugs
Known bugs will be reported as [issues](https://github.com/randofan/MyCalendar/issues?q=is%3Aopen+is%3Aissue+label%3Abug). To report a bug, create a new issue in the repository with the label ```bug```. Follow the template provided.

## Current Issues - Beta Release
Section implementation is not ready for release. AN error was made when developing the module and thrying to access the registration page. Forgot that we are not able to access uw pages that required login information, so when parsing we needed to use open pages. In order to accomidate that change we need to refactor our code and add a new method and change the parsing algorithm. Estimated time of completion Friday May 19. 


# Developer Guidelines

## Repository Layout
- src/popup: main execution thread
- src/scripts: content script

## Build
There's no need to build the Chrome extension because it's loaded as unpacked into Chrome.

## Test

#### Dependencies
- install ```npm```
- install Chrome v112
- use MacOS/Linux OS

#### Run Tests
```
cd test
rm -rd src
npm i
./setup.sh
npm test
```

#### Add New Tests
For each function you wish to unit test, add the ```[relative path] [function name]``` to ```test.config```. Note you may only add unit tests for functions which don't reference ```chrome``` or ```document``` directly. Afterwards, open unit.test.js and import the function name using ```require()```. Finally, follow Mocha's documentation with ```describe()``` and ```it()``` to add new unit tests using ```assert()```.

#### Building a Release
Complete the following before opening a pull request:
- Update the version number in ```manifest.json```
    - First Number: Tracks major changes
    - Second Number: Tracks minor changes
    - Third Number: Tracks patches or bug fixes
- Conduct functional testing in the browser to ensure no errors return upon opening the extension.
