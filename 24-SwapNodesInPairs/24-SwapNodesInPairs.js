// Last updated: 16/02/2026, 16:15:08
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let root=head;
    if(head==null)return head;
    while(head!=null&&head.next!=null){
        let temp=head.next.val;
        head.next.val=head.val;
        head.val=temp;
        head=head.next.next;
    }
    return root;
};