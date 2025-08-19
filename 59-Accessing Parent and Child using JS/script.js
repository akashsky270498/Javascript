// Selecting the first <h2> and logging its parent
const h2 = document.querySelector('h2');
console.log("Parent of <h2>:", h2.parentElement); // -> Returns <body> (an HTMLElement) or null if no parent.


// Selecting <ul> to explore children, nodes, siblings
const ul = document.querySelector('ul');
console.log("========== Children ==========");
console.log("ul.children:", ul.children); // -> Returns HTMLCollection of only <li> elements (ignores text nodes)
console.log("ul.childNodes:", ul.childNodes); // -> Returns NodeList of ALL child nodes (elements + text nodes + comments)

console.log("========== First & Last Child ==========");
console.log("ul.firstElementchild: ", ul.firstElementChild); // -> First <li> element or null if empty
console.log("ul.lastElementChild: ", ul.lastElementChild); // -> Last <li> element or null if empty

console.log("ul.firstChild: ", ul.firstChild); // -> Could be a text node (like whitespace/newline) or element
console.log("ul.lastChild: ",ul.lastChild) // -> Could be a text node (like whitespace/newline) or element

console.log("========== Siblings ==========");
console.log("ul.nextElementSibling: ", ul.nextElementSibling); // -> // Next sibling element of <ul>
console.log("ul.previousElementSibling: ", ul.previousElementSibling); // -> // Previous sibling element of <ul>

console.log("ul.nextSibling: ", ul.nextSibling); // -> // Next sibling node (could be text node)
console.log("ul.previousSibling: ", ul.previousSibling); // -> // Previous sibling node (could be text node)

console.log("========== Text Node Update ==========");
// To update a text node inside <body>
// childNodes[2] because whitespace/newline count as nodes too
// Be careful: index depends on HTML structure
document.body.childNodes[2].nodeValue = "Updated text node value";


// Key Point for Interview:
// Each element is a Node, 
// but each node is not necessarily an Element (it could be text, comment, etc).