// Last updated: 16/02/2026, 16:14:30
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
var maxLevelSum = function(root) {
    if(!root)return null;

    let level=1;
    let queue=[root];
    let maxSum=-Infinity;
    let ans=1;

    while(queue.length>0){
        let levelSize=queue.length
        let sum=0;
        for(let i=0;i<levelSize;i++){
            let node= queue.shift();
            sum+=node.val;
            if(node.left!==null)queue.push(node.left);
            if(node.right!==null)queue.push(node.right);
        }
        if(sum>maxSum){
            maxSum=sum;
            ans=level;
        }
        level++
    }
    return ans
};