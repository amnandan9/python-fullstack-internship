/*
Synchronous and Asynchronous
--------------------------------
Synchronous (Blocking of code):
- Tasks are executed one after another in sequence.
- Each task must complete before the next one starts.

Asynchronous (Non-blocking of code):
- Tasks can run independently.
- The program does not wait for a task to complete before moving to the next one.


setTimeout and setInterval
--------------------------------
setTimeout():
- Executes a function or code after a specified delay.

setInterval():
- Executes a function repeatedly at specified time intervals.
*/
/*
Promises
--------------------------------
- A Promise is an object that keeps track of whether a certain event has happened or not
  and determines what happens after the event.
- Promises are used to handle asynchronous operations in JavaScript.

Promise Instance Methods:
- then() → handles the resolved state
- catch() → handles the rejected state
- finally() → executes regardless of resolve or reject


Promise Static Methods:
- all() → returns an array of results if all promises resolve,
          otherwise returns the first rejected promise
- any() → returns the first resolved promise,
          if all reject, returns Aggregate Error
- allSettled() → returns an array of all settled promises
- race() → returns the first settled promise (resolved or rejected)


Fetch Method (fetch())
--------------------------------
- Used to get data from the backend

Status Codes:
- 200 → request successful
- 404 → page not found


Async and Await
--------------------------------
- Async and await are simplified ways to work with promises
- Both come as a pair

- async → used while declaring a function
- await → used when fetching or waiting for data
*/
/*
BOM (Browser Object Model)
--------------------------------
- BOM refers to a set of objects provided by the browser
- Used to interact with the browser environment outside the webpage content


DOM (Document Object Model)
--------------------------------
- DOM is a programming interface for web development
- It represents the webpage so programs can modify structure, style, and content

BOM and DOM Structure
--------------------------------

window (Global Object)
│
├── alert()
├── localStorage
├── prompt()
└── DOM
     │
     └── document
          │
          └── html
               │
               ├── head
               │    ├── meta
               │    └── title
               │
               └── body
                    ├── h1
                    ├── div
                    │    ├── h3
                    │    └── span
                    └── p


Explanation:
--------------------------------
- window → Top-level object in browser (BOM)
- alert(), prompt(), localStorage → part of BOM

- DOM starts from document
- document → represents entire webpage
- html → root element
- head → contains meta, title
- body → contains visible content (h1, div, p, etc.)

- DOM is structured like a tree (parent-child relationship)

DOM Methods
--------------------------------
1) getElementById()
- Targets element with a specific id
- Returns the element if found, otherwise returns null


2) getElementsByClassName()
- Targets all elements with a specific class name
- Returns HTMLCollection (array-like), or empty collection if none found


3) getElementsByTagName()
- Targets all elements with a specific tag name
- Returns HTMLCollection, or empty collection if none found


4) querySelector()
- Targets the first element that matches a CSS selector
- Returns the element if found, otherwise returns null


5) querySelectorAll()
- Targets all elements that match a CSS selector
- Returns a NodeList (array-like), or empty list if none found
*/