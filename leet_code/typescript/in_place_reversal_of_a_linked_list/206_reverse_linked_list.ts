/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return head;

    function reverse(curr, parent) {
        const next = curr.next;
        curr = new ListNode(curr.val, parent)

        if (!next) return curr;
        return reverse(next, curr)
    }

    return reverse(head, null)
};
