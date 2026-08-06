/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const arr=[];
    while(head){
        arr.push(head.val)
        head=head.next;
    }

    function tree(left,right){
        if(left>right)return null;
        let mid=Math.floor((left+right)/2);
        const root=new TreeNode(arr[mid]);
        root.left=tree(left,mid-1);
        root.right=tree(mid+1,right)
        return root;
    }
    return tree(0,arr.length-1)
};