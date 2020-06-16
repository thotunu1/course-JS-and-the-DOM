document.addEventListener('click', function(){
    const mainHeader = document.querySelector('h1');

    mainHeader.style.backgroundColor = 'red';
})

///event listner code/// 
/*const items = document.querySelectorAll('.quizzing-quizzes');
const el = items[1];

el.addEventListener('keypress', function (event) {
    console.log('You clicked on the 2nd quizzing-quizzes item!');
});*/

///Prevent default action code///
/*const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});*/

/*const myCustomDiv = document.createElement('div'); ///create div element

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p'); ///creates paragraph element
    newElement.textContent = 'This is paragraph number ' + i; ///prints to console log the new paragraph followed by a number

    newElement.addEventListener('click', function respondToTheClick(evt) {
        console.log('A paragraph was clicked.');
    }); ///event listner that responds to click and adds an event to event log

    myCustomDiv.appendChild(newElement); ///appends paragraph to div element
}

document.body.appendChild(myCustomDiv);/// appends div element to document element*/



///refactored code
/*const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}// function is removed from the event listner and referenced instead

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', respondToTheClick);//where function is referenced

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);*/



///refactored code again to put listener on div
/*const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener('click', respondToTheClick);//listner is on the div element

document.body.appendChild(myCustomDiv);*/


///adding evt for target.textContent property
/*const myCustomDiv = document.createElement('div');

function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent); ///evt.target.textContent pulls back text content of the target (In this case, target = whateve was clicked)
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener('click', respondToTheClick);*/



///adding .nodeName checks to see what specific target is before firing off function
/*document.querySelector('#content').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
        console.log('A span was clicked with text ' + evt.target.textContent);
    }
});*/


/*The .nodeName property will return a capital string, not a lowercase one. So when you perform your check make sure to either:
    check for capital letters
    convert the .nodeName to lowercase

// check using capital letters
if (evt.target.nodeName === 'SPAN') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

> // convert nodeName to lowercase
if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}*/

///DOMContentLoaderEvent:  Listens for the DOM content to be loaded before executing javascript.  
///Allows javascript to exist in head element

/*document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});*/
/*So when would you want to use this technique? 
Well, JavaScript code in the <head> will run before JavaScript code in the <body>, 
so if you do have JavaScript code that needs to run as soon as possible, 
then you could put that code in the <head> and wrap it in a DOMContentLoaded event listener. 
This way it will run as early as possible, but not too early that the DOM isn't ready for it.*/

///Testing code performance using performance.now
/*const startingTime = performance.now();

for (let i = 1; i <= 100; i++) { 
  for (let j = 1; j <= 100; j++) {
    console.log('i and j are ', i, j);
  }
}

const endingTime = performance.now();
console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');*/

///Let's rewrite our code to use a DocumentFragment instead of the <div>.

/*const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!*/



