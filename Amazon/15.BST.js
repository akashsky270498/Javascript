/*
15. VALID BST
------------------------------------------------
EDGE CASE:
- Empty tree → true
*/
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isValidBST(root, min = -Infinity, max = Infinity) {

    if (!root) return true;

    if (root.val <= min || root.val >= max) return false;


    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}



// Case 1: VALID BST
//      5
//     / \
//    1   7
const validTree = new TreeNode(5, new TreeNode(1), new TreeNode(7));

// Case 2: INVALID BST 
//      5
//     / \
//    1   4  <-- 4 is less than 5, so it's on the right side? WRONG.
const invalidTree = new TreeNode(5, new TreeNode(1), new TreeNode(4));

console.log("--- BST Validation ---");
console.log("Is Tree 1 Valid?", isValidBST(validTree));   // Expected: true
console.log("Is Tree 2 Valid?", isValidBST(invalidTree)); // Expected: false