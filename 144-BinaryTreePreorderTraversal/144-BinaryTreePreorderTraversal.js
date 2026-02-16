// Last updated: 16/02/2026, 16:14:44
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
var preorderTraversal = function(root) {
    let arr=[];
    function cal(node){
            if(node===null){
            return
        }
    arr.push(node.val);
    cal(node.left);
    cal(node.right);
    }
    cal(root);
    return arr;
};