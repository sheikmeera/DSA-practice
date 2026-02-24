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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    let result =0;

    function dfs(node,current){
        if(!node)return;

        current=current+node.val;

        if(!node.left&&!node.right){
            result+=parseInt(current,2);
        }
        dfs(node.left,current);
        dfs(node.right,current);
    }
    dfs(root,"");
    console.log(result)
    return result
};