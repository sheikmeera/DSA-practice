// Last updated: 16/02/2026, 16:15:09
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head1=list1;
    let head2=list2;
    let dummy=new ListNode(0,null);
    let curr=dummy;
    let res=[]
    while(head1!==null){
        res.push(head1.val);
        head1=head1.next;
    }
     while(head2!==null){
        res.push(head2.val);
        head2=head2.next;
    }
    res=res.sort((a,b)=>a-b);
    for(let i=0;i<res.length;i++){
        curr.next=new ListNode(res[i],null);

        curr=curr.next;
    }
    return dummy.next;
    
};