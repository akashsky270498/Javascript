 /*
11. DETECT CYCLE IN LINKED LIST
------------------------------------------------
WHAT?
Check if linked list has a loop

INPUT:
1 -> 2 -> 3 -> 4 -> points back to 2

OUTPUT:
true
*/
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function hasCycle(head) {

    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            console.log("true")
            return true;
        }
    }
    return false;
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
a.next = b; b.next = c; c.next = b;

hasCycle(a);