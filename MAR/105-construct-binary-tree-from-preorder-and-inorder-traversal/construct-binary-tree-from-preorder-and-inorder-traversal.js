/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const map = new Map();

    // Store inorder value -> index
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    let preIndex = 0;

    function build(left, right) {
        if (left > right) {
            return null;
        }
        const rootValue = preorder[preIndex++];
        const root = new TreeNode(rootValue);

    
        const mid = map.get(rootValue);

        root.left = build(left, mid - 1);

        
        root.right = build(mid + 1, right);

        return root;
    }

    return build(0, inorder.length - 1);
};