# Reference sites
1. https://developer.mozilla.org   (Official documentation)
        - https://developer.mozilla.org/en-US/docs/Web/HTML (HTML)
        - https://developer.mozilla.org/en-US/docs/Web/CSS
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript (Javascript)

2. https://www.w3schools.com/Js/ (Good for individual HTML, CSS, JS concepts)
3. https://www.javascripttutorial.net/
4. https://javascript.info/

________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

### Day 1: 
- Including External Stylesheet, Internal and Inline stylesheet
- Import and Export
- Ways to include Javascript (module/ defer)
- Defining functions
- Events in JS (event/ event types)
- Function hoisting / Variable Hoisting (var)
- Referencing element in the DOM using ID/Class, Names etc.
- Attaching event listeners to DOM / Elements
- Asynchronous JS (using fetch api and async await) with API call
- Project set up and start (Posts fetched)

### Day 2:
- "use strict" behavior
- Manipulate dom (styles and content) along with conditional rendering (based on certain condition)
- Array functions (slice, filter, map)
- var / let / const difference
- Default parameter
- Make re-usable functions
- Project continue (Render Posts, add Post to the server, UI update)

### Day 3
- Call stack
- "==" vs "===" operators
- Imperative vs Declarative programming
- Debugging / Debugger
- HTTP : DELETE request
- Attaching event listeners to element created dynamically.
- Remove element from DOM (.remove() method)
- .closest() 

### Day 4
- Localstorage
- Parsing and Stringifying Values in Localstorage
- Project continued with Localstorage implemented (Posts saved to localstorage and retrieved from it)


### Day 5
- Continue with render saved posts in UI along with conditional rendering and reusable function.
- Attach event listerners(Additional examples)
- Spread operator (... operator)
- Class work (Delete Selected Post from Localstorage, update UI)

### Day 6
- Complete Remove Saved Post From UI
- Map operator to manipulate array items (saved posts in our project), mapping over object array and modify     individual object.
- Storage Event Listener
- Start Updating Post (Prepopulate, dynamic text change for the button).

### Day 7
- Fix some glitches (code refactor)
- Work on HTTP : PUT request
- Scenario on using same method / code conditionally
- Update particular element inside the HTML Element (eg: p inside of li)
- Update object using Object.assign(...)
- Update same variable from the different file (Understanding)
- UI update and resetting values after successful operation

### Day 8
- Login Form Design
- Login Functionality using JS and redirection
- Promise(resolve, reject)
- Consuming Promise
- Class work (To save user info to localstorage if login is successful)

### Day 9
- Complete user re-direction on login/logout
  Class Work:
  ___________

        - Validate User Login Form on our existing "post manager application", try to meet the following criteria whenever possible:
        - You must create a re-usable function with minimal duplication
        - Feel free to use the HTML structure (element for displaying error message / login loader) of your choice but make sure you validate correctly. 
        - Disallow multiple submission if no-response has been received from the server while doing login to the app
        - To display the error messages/warnings/ login progresses, you MUST use the same function and your function should be able to handle all scenarios less duplication.
        - Make function as less coupled as possible.
        - Use proper selector (you may vary type of selectors as much as possible) while referencing on DOM

### Day 10
- Implement bootstrap 5 navbar
- Implement logout functionality
- Complete the classwork (solution to the work of Day 9)
- IIFE (Immediately Invoked Function expression)
- Implement bootstrap 5 navbar
- Implement logout functionality as well as display logged in username on the header section. 
- Nullish coalescing operator (?? operator)
- Basic UI refactor