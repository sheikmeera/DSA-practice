// Last updated: 16/02/2026, 16:14:52
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
var deleteDuplicates = function(head) {
    let set=new Set();
    let a=head;
    while(a!==null){
        set.add(a.val)
        a=a.next;
    }
    let arr=Array.from(set).sort((a,b)=>a-b)
    a=new ListNode(0)
    let curr=a;
    for(let ch of arr){
        curr.next=new ListNode(ch,null)
        curr=curr.next;
    }
    return a.next;
};