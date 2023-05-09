# MyCalendar
MyCalendar is a Google chrome extension that launches on the UW registration page and converts the user's registered courses into an .ics file. 

## Main Goals
1. Exports schedule to an .ics file.
2. Client is able to change the preferences of the plugin, including which classes the calendar includes and whether to generate directions.
3. Shows google map directions between classrooms [for back to back courses].
4. Export all available sections for a class you’re registered for.

## Stretch Goals
1. Use ChatGPT to generate fun facts about the buildings that classes are held in.
2. Implement the extension for multiple browsers, not just Chrome.
3. Allow the user to download an .ics file or open a new calendar/event in common calendar apps (Google calendar, Apple calendar).

## Repository Layout
- src/popup: main execution thread
- src/scripts: content script

# Build

There's no need to build a Chrome extension because it's loaded as unpacked into Chrome.

# Test

### Dependencies
- install ```npm```
- install Chrome v112

### Run Tests
```
cd test
rm -rd src
npm i
./setup.sh
npm test
```

# Run
1. Clone the [Github Repository](https://github.com/randofan/MyCalendar)
1. Navigate to chrome://extensions/ on Chrome
2. In the upper right corner, enable developer mode
3. Click "load unpacked" and select MyCalendar/src
4. Navigate to your [Course Schedule](https://sdb.admin.uw.edu/sisStudents/uwnetid/schedule.aspx?Q=2)
5. In the upper right corner, click on the extension
6. Make your selection on what data you wish to include
7. Click download

## Operational Use Cases
### Download basic calendar
List of Steps (success):
- Student navigates to the UW registration page
- MyCalendar plugin shows a popup, offering to download the calendar.
- Student clicks a button telling MyCalendar to download the calendar.
- MyCalendar converts their schedule into an iCalendar file and downloads it to their machine.
