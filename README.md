# MyCalendar
MyCalendar is a Google chrome extension that launches on the [UW class schedule page](https://sdb.admin.uw.edu/sisStudents/uwnetid/schedule.aspx) and converts a user's registered courses into a calendar (.ics) file. With MyCalendar, students don't have to manually create a calendar event with the details of a course (time, recurrence, location, etc.) for all their courses every quarter.

## Features
1. Download your course schedule as an .ics file, which can be imported into any calendar app.
    - Works for any academic quarter
    - Calendar events are removed on holidays
2. Download a separate .ics file with all the section times for a class you’re registered for. 
3. Change your preferences of the plugin, including which courses the .ics files include.
    - Note: if a course appears as "To be arranged" for its time and date on your schedule, its checkboxes will be disabled on the plugin.
4. Include a link to each course location on the UW map.

&nbsp; 
# User Manual

## Setup
1. Install Chrome v112
2. Open the [Github Repository](https://github.com/randofan/MyCalendar) and navigate to Releases; click on Final Release
3. Select "Source Code" and download the .zip
4. Unzip the file and place MyCalendar/ into your desired location; DO NOT REMOVE OR MOVE THE FOLDER
5. Open Chrome and navigate to [chrome://extensions/](chrome://extensions/)
6. In the upper right corner, enable developer mode
7. In the upper left corner, click "load unpacked" and select `MyCalendar/src`

## How to Use
1. Navigate to your [Class Schedule](https://sdb.admin.uw.edu/sisStudents/uwnetid/schedule.aspx?Q=2)
    - Note: If you are not on your Class Schedule, the popup will say "Loading... Please ensure you've navigated to your Class Schedule"
2. In the upper right corner of your browser, click on the extension
3. Select the courses you would like to include in your .ics file(s)
    - **Schedule**: Checking this box will include the scheduled meeting times for this course in a calendar file titled "schedule.ics"
    - **Additional Sections**: Checking this box will include all the available sections (regardless if you are registered for it) for this course in a calendar file titled "sections.ics"
4. To include a [UW campus map](https://www.washington.edu/maps/) link for the building of each calendar event, check "Include UW Map link"
    - If you check "Save Changes", your preferece will be saved for any time you use MyCalendar
5. Click the download button
6. Import your .ics file(s) to the calendar application of your choice
7. Note you must follow the steps in this order exactly. Failure to do so may result in undefined behavior

![A test image](/src/images/popup_visual.png)

## Report Bugs
Known bugs will be reported as [issues](https://github.com/randofan/MyCalendar/issues?q=is%3Aopen+is%3Aissue+label%3Abug). To report a bug, create a new issue in the repository with the label ```bug```. Follow the template provided.

&nbsp; 
# Developer Guidelines

## Repository Layout
- src/popup: main execution thread
- src/scripts: content script

## Build
There's no need to build the Chrome extension because it's loaded as unpacked into Chrome.

## Test

#### Dependencies
- install [Node.js](https://nodejs.dev/en/) and ensure ```npm``` is also installed
- install Chrome v112
- use MacOS/Linux OS

#### Run Tests
```
cd test
npm i
./setup.sh
npm test
```

#### Add New Tests
For each function you wish to unit test, add the `[relative path] [function name]` to `test.config`. Note you may only add unit tests for functions which don't reference `chrome` or `document` directly. Afterwards, open `unit.test.js` and import the function name using `require()`. Finally, follow Mocha's documentation with `describe()` and `it()` to add new unit tests using `assert()`. Note, we don't offer support for any other types of tests.

#### Building a Release
Complete the following before opening a pull request:
- Update the version number in `manifest.json`
    - First Number: Tracks major changes
    - Second Number: Tracks minor changes
    - Third Number: Tracks patches or bug fixes
- Conduct functional testing in the browser to ensure no errors return upon opening the extension.
