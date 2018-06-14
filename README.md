# About This Project
This is a test page written for an internship application; the requirement is to write several functions to calculate real world math problem. Due to the lack of time, the MVP will be presented and commits come after this will be improved version.
# What Language/Tools Are Involved
For the MVP, **NO** framework or tools are used; it is written in pure HTML5/CSS5/JavaScript. 
* Semantic HTML5 is in practice
* Minor work on improving accesibility, e.g. adds alt attributes to img
* CSS3 is written in mobile-first manner
* Use flexbox to add responsiveness into the page
* JavaScript ES6 is in practice, e.g. const
# Structure & Design
## HTML
The body is separated into three parts: header, main and footer. 

In the header, it's the general description of what user can do in this page. When finishing reading the description, User can click the button to start.

The main section is hidden initially. The 'ready' button has click event listener to display it. This is the first interaction user would encounter. Once it's displayed, there are three modules that allow user to interact with the page. Each module is an individual form; however, for simplificity reason, there's no submission button -- all the buttons are set for listening to events only.

The footer includes various contact info for the creater.

## CSS
As mentioned before, the page is written in mobile-first manner. The idea of the design is to have it colorful and thus magical, therefore the background includes an image and a gradient effect.

Each module is surrounded by fieldset border to have clear separation. 

Button has a shadow and hover effect to make it 3D-like.

Hand-write font is used to have a casual and fantasy feeling for the page.

The page was first written based on 320px (iphone5 size);then major sizes of breakpoints are added for responsiveness: 480px, 768px, 1024px.
## JavaScript
The structure goes like: DOM variables, required functions(test requirement), supporting functions, event listeners to all buttons(execution).

The variables are set mainly as `const`, and a `let` for the text reassignment.

Some form validation is added in corresponding event handlers, such as inccorect numbers or blank field. 

Some edge cases considered are also added, such as deleting the existing text area so each html module will only be appended one text area div.
