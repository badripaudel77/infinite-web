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
- TBD

### URL 
(FOR PERSONAL REFERENCE USE)
Button group classes with name (to match css styling)

<div class="button-group">
            <button type="button" id="edit-post-btn" class="edit-post-btn" title='Edit this post'><i class="fa fa-edit"></i></button>
            <button type="button" id="mark-post-btn" class="mark-post-btn" title='Mark as done'><i class="fa fa-check"></i></button>
            <button type="button" id="delete-post-btn" class="delete-post-btn" title='Delete post'><i class="fa fa-trash"></i></button>
</div>

### TODO attach event listerners as functionality
liElement.addEventListener('click', (event) => {
        const target = event?.target?.closest('button'); 
        target?.classList.contains('mark-post-btn')) ....
});