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
    let set =new Set();
    let a =head;
    while(a!=null){
        set.add(a.val)
        a=a.next
    }
    let arr=Array.from(set).sort((a,b)=>a-b);
    let node=new ListNode(0);
    let temp=node
    for(let val of arr){
        node.next=new ListNode(val);
        node=node.next
    }
    return temp.next
    
};