/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let arr=[]
    function call(root){
        if(!root)return ;
        call(root.left)
        call(root.right)
        arr.push(root.val)
        return;
    }
    call(root)
    return arr
};