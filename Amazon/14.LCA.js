/*
14. LOWEST COMMON ANCESTOR
------------------------------------------------
EDGE CASE:
- If root is null
*/
// T: O(n) S: O(h)

const lowestCommonAncestor = (root, p, q) => {

    if (!root) return null;
    
    if (root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;

    return left || right;
}