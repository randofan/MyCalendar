# MyCalendar
MyCalendar is a Google chrome extension that launches on the UW course registration page and converts the user's registered courses into an .ics file. With MyCalendar, students don't have to manually enter the details of a course (time, recurrence, location, etc.) for all their courses every quarter.

## Features
1. Download your course schedule as an .ics file, which can be imported into any calendar app.
2. (Work in Progress) Download a separate .ics file with all the available sections for a class you’re registered for.
3. Change your preferences of the plugin, including which courses the .ics files include.
4. Include a link to each course location on the UW map.
5. Note that our plugin does not support classes that have "To be arranged" for their time and date. These classes will be disabled in the plugin box.

## Setup
1. install Chrome v112
2. Open the [Github Repository](https://github.com/randofan/MyCalendar) and navigate to Releases; click on Beta Release
3. Select "Source Code" and download the .zip
4. Unzip the file and place MyCalendar/ into your desired location; DO NOT REMOVE OR MOVE THE FOLDER
5. Open Chrome and navigate to [chrome://extensions/](chrome://extensions/)
6. In the upper right corner, enable developer mode
7. Click "load unpacked" and select `MyCalendar/src`

## Run
1. Navigate to your [Course Schedule](https://sdb.admin.uw.edu/sisStudents/uwnetid/schedule.aspx?Q=2)
2. In the upper right corner, click on the extension
3. Select the courses you would like to include
4. Click the download button
5. Note you must follow the steps in this order exactly. Failure to do so may result in undefined behavior

## Report Bugs
Known bugs will be reported as [issues](https://github.com/randofan/MyCalendar/issues?q=is%3Aopen+is%3Aissue+label%3Abug). To report a bug, create a new issue in the repository with the label ```bug```. Follow the template provided.


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
