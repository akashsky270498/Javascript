/*
12. MERGE TWO SORTED LISTS
------------------------------------------------
EDGE CASES:
- One list empty
- Both empty

INPUT:
[1,2,4] and [1,3,4]
OUTPUT:
[1,1,2,3,4,4]
*/
// T: O(n+m) S: O(1)
const mergeTwoLists = (l1, l2) => {

    if (!l1) return l2;
    if (!l2) return l2;

    let dummy = new ListNode(-1);

    let curr = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = (l1 !== null) ? l1 : l2;
    return dummy.next;
}