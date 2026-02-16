// Last updated: 16/02/2026, 16:14:26
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
var maxProduct = function(root) {
    let maxSum=0;
    let mod=1e9+7;


    function getSum(node){
        if(!node)return 0;
        return node.val+getSum(node.left)+getSum(node.right);
    }
    let totalSum=getSum(root);
    function dfs(node){
        if(!node)return 0;
        let left=dfs(node.left);
        let right=dfs(node.right)
        let sum=node.val+left+right;
        product=sum*(totalSum-sum)
        maxSum=Math.max(product,maxSum)
        return sum;
    }
    dfs(root);
    return maxSum%mod;
};