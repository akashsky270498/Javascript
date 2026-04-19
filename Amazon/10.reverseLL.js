/*
10. REVERSE LINKED LIST
------------------------------------------------
INPUT:
1 -> 2 -> 3 -> 4

OUTPUT:
4 -> 3 -> 2 -> 1
*/
class ListNode {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

console.log(reverseList(head));