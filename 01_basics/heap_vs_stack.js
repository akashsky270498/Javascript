/*
Stack (Primitive Data Types):
When a variable is stored in the stack, a copy of the value is created.

This means any changes made to the copied value do not affect the original variable.

Primitive data types like number, string, boolean, null, and undefined are stored in the stack.

Heap (Non-Primitive Data Types):
When a variable is stored in the heap, a reference to the actual memory location is stored.

This means any changes made through that reference directly affect the original value.

Non-primitive data types like objects, arrays, and functions are stored in the heap.
*/

let channelOne = "Coding Ninjas";

let channelTwo = channelOne;
console.table({ channelOne: channelOne, channelTwo: channelTwo });

/*
┌────────────┬─────────────────┐
│ (index)    │ Values          │
├────────────┼─────────────────┤
│ channelOne │ 'Coding Ninjas' │
│ channelTwo │ 'Coding Ninjas' │
└────────────┴─────────────────┘
*/

channelTwo = "Two and Two";
console.table({ channelOne: channelOne, channelTwo: channelTwo });
//after updating channelTwo: the changes gets update in specific channeltwo object.
/*
┌────────────┬─────────────────┐
│ (index)    │ Values          │
├────────────┼─────────────────┤
│ channelOne │ 'Coding Ninjas' │
│ channelTwo │ 'Two and Two'   │
└────────────┴─────────────────┘
*/

//********************************************************************************************************** */

const userOne = {
  username: "Robert Downey",
  skill: "Acting",
};

const userTwo = userOne;

console.table({ userOne, userTwo });

/*
┌─────────┬─────────────────┬──────────┐
│ (index) │ username        │ skill    │
├─────────┼─────────────────┼──────────┤
│ userOne │ 'Robert Downey' │ 'Acting' │
│ userTwo │ 'Robert Downey' │ 'Acting' │
└─────────┴─────────────────┴──────────┘
*/

//after updating userTwo: the changes gets update in both the object.
userTwo.username = "Scarlet Johanson";
console.table({ userOne, userTwo });

/*
┌─────────┬────────────────────┬──────────┐
│ (index) │ username           │ skill    │
├─────────┼────────────────────┼──────────┤
│ userOne │ 'Scarlet Johanson' │ 'Acting' │
│ userTwo │ 'Scarlet Johanson' │ 'Acting' │
└─────────┴────────────────────┴──────────┘
*/
