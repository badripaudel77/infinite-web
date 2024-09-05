# Reference sites
1. https://developer.mozilla.org   (Official documenatation)
        - https://developer.mozilla.org/en-US/docs/Web/HTML (HTML)
        - https://developer.mozilla.org/en-US/docs/Web/CSS
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript (Javascript)

2. https://www.w3schools.com/Js/ (Good for individual HTML, CSS, JS conepts)
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


#### Day 5
- Continue with render saved posts in UI along with conditional rendering and reusable function.
- Attach event listerners.
- Locastorage Event listener
- Class work (Delte Selected Post from Localstorage, update UI)

### URL 
(FOR PERSONAL REFERENCE USE)
Button group classes with name (to match css styling)

### TODO attach event listerners as functionality
liElement.addEventListener('click', (event) => {
        const target = event?.target?.closest('button'); 
        target?.classList.contains('mark-post-btn')) ....
});

### Retrieve element by data-id={someID}
const updatedElement = document.querySelector(`[data-id="${postId}"]`);