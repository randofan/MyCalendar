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
- /popup: frontend code
- /scripts: backend code

## Set Up
- cd test
- pip3 install virtualenv
- virtualenv .env
- source .env/bin/activate
- pip3 install -r requirements.txt

## Shut Down
close with ```deactivate```


chromedriver running version 112