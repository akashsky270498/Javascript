const h2 = document.querySelector('h2');
console.log(h2.parentElement) // Returns body tag an HTMLElement or null if the element (h2) has no parent.

const ul = document.querySelector('ul');
console.log(ul.children) // Returns HTMLCollection of <li> elements (no text nodes) or HTMLCollection [] if no children.

console.log(ul.childNodes) // Returns nodeList of all child nodes (including text nodes) or NodeList [] if no children.

console.log(ul.firstElementChild) // returns first <li> element or null if no children.
console.log(ul.lastElementChild) // returns last <li> element or null if no children.
console.log(ul.firstChild) // returns first child node (could be a text node) or null if no children.
console.log(ul.lastChild) // returns last child node (could be a text node)

console.log(ul.nextElementSibling) // returns next sibling element (could be another <ul> or <li>) or null if no next sibling.
console.log(ul.previousElementSibling) // returns previous sibling element (could be another <ul> or <li>) or null if no previous sibling.
console.log(ul.nextSibling) // returns next sibling node (could be a text node) or null if no next sibling.
console.log(ul.previousSibling) // returns previous sibling node (could be a text node) or null if no previous sibling.


//To update the text node 
document.body.childNodes[2].nodeValue = "Updated text node value";

//Each element is a Node but each node is not an Element.