/*
13. BINARY TREE LEVEL ORDER
------------------------------------------------
EDGE CASE:
- Empty tree → []

INPUT:
   1
  / \
 2   3

OUTPUT:
[[1],[2,3]]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 */
//T:O(n) S:O(w)
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const levelOrder = (root) => {
    if (!root) return [];

    const result = [];

    const queue = [root];
    console.log("Queue:", queue);

    while (queue.length > 0) {

        const levelSize = queue.length;
        console.log("Level Size:", levelSize);
        const currentLevel = [];
        console.log("Current Level:", currentLevel);

        for (let i = 0; i < levelSize; i++) {

            const node = queue.shift();
            console.log("Node:", node);
            currentLevel.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(currentLevel);
        console.log("Result:", result);
    }
    return result;
}

const myTree = new TreeNode(1, new TreeNode(2), new TreeNode(3));

// 4. SEE THE OUTPUT
console.log("--- Tree Output ---");
console.log(levelOrder(myTree));