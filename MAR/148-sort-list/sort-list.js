/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {

    if (!head || !head.next) return head;

    // Find middle
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Split
    let mid = slow.next;
    slow.next = null;

    // Sort both halves
    let left = sortList(head);
    let right = sortList(mid);

    // Merge
    return merge(left, right);
};

function merge(l1, l2) {

    let dummy = new ListNode(0);
    let tail = dummy;

    while (l1 && l2) {

        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }

        tail = tail.next;
    }

    if (l1) tail.next = l1;
    if (l2) tail.next = l2;

    return dummy.next;
}