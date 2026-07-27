/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head||!head.next||k===0){
        return head;
    }
    let tail=head;
    let length=1;
    while(tail.next){
        tail=tail.next;
        length++
    }
    k=k%length;
    if(k===0){
        return head;
    }
    tail.next=head;
    let newTail=head;
    let move=length-k-1;
    console.log(k)
    while(move>0){
        newTail=newTail.next;
        move--;
    }
    console.log(move,newTail);
    let newHead=newTail.next;
    newTail.next=null;

    return newHead

};