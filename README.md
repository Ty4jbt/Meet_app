This is going to be an app that will let the user know about events happening in their area and elsewhere. This app is to be serverless and is going to work while user is offline.

Key Features Include:
- Filter events by city
- Show/hide event details
- Specify number of events
- Use the app when offline
- Add an app shortcut to the home screen
- View a chart showing the number of upcoming events by city

User Stories:
- As a user, I should be able to filter events by city so that I can see a list of events that take place in the city of my choosing.
- As a user, I should be able to show/hide event details so that I can see more information about a specific event.
- As a user, I should be able to specify the number of events I want to view in the app so that I can see a certain number of events listed at once.
- As a user, I should be able to use the app when offline so that I can use the app without internet.
- As a user, I should be able to add the app shortcut to my home screen so that I can open the app without going to my browser.
- As a user, I should be able to see a chart showing the upcoming events in each city so that I know how many events a city is putting on.

Test Scenarios:
SCENARIO 1-1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.

Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 1-2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.

Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 1-3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.

Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

SCENARIO 2-1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT

Given the user didn't selected an event
When the user is viewing event list
Then the user should see all events in a simple collapsed format

SCENARIO 2-2: USER CAN EXPAND AN EVENT TO SEE ITS DETAILS

Given the event details had not been expanded
When the user selects the show details button
Then the event elements should expand to show more details

SCENARIO 2-3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS

Given the event details are already selected/expanded
When the user selects event details again
Then the selected event should collapse to a simple collapsed view

SCENARIO 3-1: WHEN USER HASN'T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER

Given a user has not specified number of events to show
When the event list is shown
Then 32 events will be shown by default

SCENARIO 3-2: USER CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE

Given the user would like a certain number of events shown
When user inputs the number of events they would like
Then the event list will show users prefered number of events

SCENARIO 4-1: SHOW CACHED DATA WHEN THERE'S NO INTERNET CONNECTION

Given there is no internet connection
When a user opens the app
Then user will see a cached version of the app to view the events they opened last

SCENARIO 4-2: SHOW ERROR WHEN USER CHANGES THE SETTINGS (CITY, TIME RANGE)

Given the app is offline and user is viewing cached version of app
When the user changes any of the settings
Then app will show error

SCENARIO 5-1: SHOW A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY

Given user would like to see a visual representaion of events
When user selects charts
Then user can open a chart of events taking place in each city

