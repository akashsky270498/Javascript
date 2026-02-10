/*
707. Design Linked List

Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
 

Example 1:

Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]

Explanation
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
myLinkedList.get(1);              // return 2
myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
myLinkedList.get(1);              // return 3
 

Constraints:

0 <= index, val <= 1000
Please do not use the built-in LinkedList library.
At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.
*/

//Node: needed bcoz each LL is made up of node & each node contains data & pointer to next node.

function Node(val) {
  this.val = val;
  this.next = null;
}

//MyLinkedList: needed bcoz we need to perform operations on the linked list.
var MyLinkedList = function () {
  this.head = null; // Initialize the head of the linked list to null
  this.size = 0; // Initialize the size of the linked list to 0
};

// get method: to get the value of the indexth node in the linked list.
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};
// addAtHead method: to add a node of value val before the first element of the linked list.
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  node.next = this.head;
  this.head = node;
  this.size++;
};
//addAtTail method: to append a node of value val as the last element of the linked list.
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);

  if (!this.head) {
    this.head = node;
  } else {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }
  this.size++;
};
// addAtIndex method: to add a node of value val before the indexth node in the linked list.
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.addAtHead(val);
    return;
  }

  let curr = this.head;
  for (let i = 0; i < index - 1; i++) {
    curr = curr.next;
  }

  const node = new Node(val);
  node.next = curr.next;
  curr.next = node;
  this.size++;
};
// deleteAtIndex method: to delete the indexth node in the linked list.
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

// -------- Helper function to print list ----------
function printList(list) {
  let curr = list.head;
  let result = [];
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }
  console.log(result.join(" -> "));
}

// -------- TESTING ----------
const list = new MyLinkedList();

list.addAtHead(1);
list.addAtTail(3);
list.addAtIndex(1, 2);

printList(list); // 1 -> 2 -> 3
console.log(list.get(1)); // 2

list.deleteAtIndex(1);
printList(list); // 1 -> 3
console.log(list.get(1)); // 3
