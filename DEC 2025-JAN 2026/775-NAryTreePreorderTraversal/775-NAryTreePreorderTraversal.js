// Last updated: 16/02/2026, 16:14:38
/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let arr=[];
    function cal(node){
            if(node===null){
            return
        }
        arr.push(node.val);
        for(let ch of node.children){
            cal(ch)
        }
    }
    cal(root);
    return arr;
};