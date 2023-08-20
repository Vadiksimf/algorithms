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
type ListNode = {
    val: number
    next: ListNode | null
}

const ListNode = class {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const LinkedList = class {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}


function hasCycle(head: ListNode | null): boolean {
    if (head === null || head.next === null) return false;
    
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next

        if (slow === fast) return true;
    }

    return false
};

function hasCycleSlow(head: ListNode | null): boolean {
    const set = new Set<ListNode | null>();

    while (head) {
        if (set.has(head)) return true

        set.add(head)
        head = head.next;
    }

    return false;
};