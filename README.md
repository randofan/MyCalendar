# MyCalendar
MyCalendar is a Google chrome extension that launches on the UW registration page and converts the user's registered courses into an .ics file. 

## Features
1. Download your course schedule as an .ics file, which can be imported to any calendar app.
2. (Work in Progress) Download a separate .ics file with all the available sections for a class you’re registered for.
3. Change your preferences of the plugin, including which courses the calendar includes.
4. Include a link to each course location on the UW map.

## Run
1. Clone the [Github Repository](https://github.com/randofan/MyCalendar)
1. Navigate to chrome://extensions/ on Chrome
2. In the upper right corner, enable developer mode
3. Click "load unpacked" and select MyCalendar/src
4. Navigate to your [Course Schedule](https://sdb.admin.uw.edu/sisStudents/uwnetid/schedule.aspx?Q=2)
5. In the upper right corner, click on the extension
6. Make your selection on what data you wish to include
7. Click download
8. Note you must follow the steps in this order exactly. Failure to do so may result in undefined behavior.

## Bugs
#### Report Bugs
To report a bug, create a new issue in the repository with the label ```bug```. Follow the template provided.

#### Known Bugs
Known bugs will be reported here.

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
For each function you wish to unit test, add the ```[relative path] [function name]``` to ```test.config```. Note you may only add unit tests for functions which don't reference ```chrome``` or ```document``` directly.
