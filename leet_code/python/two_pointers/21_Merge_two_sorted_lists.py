# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        cur = dummy = ListNode()

        while list1 and list2:
            if list1.val < list2.val:
                cur.next = list1
                cur = cur.next 
                list1 = list1.next
            else:
                cur.next = list2
                cur = cur.next 
                list2 = list2.next

        if list1 or list2:
            cur.next = list1 if list1 else list2
            
        return dummy.next


# There is an example of List Node in python
# https://www.youtube.com/watch?v=6sBsF13n5ig

class ListNode:
    def __init__(self, value):
        self.value = value
        self.next = None

# Creating ListNode objects
node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)

# Linking nodes together
node1.next = node2
node2.next = node3

# Traversing the linked list
# "1" --> "2" --> "3" --> "None"
cur_node = node1
while cur_node is not None:
    print(cur_node.value)
    cur_node = cur_node.next

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, value):
        node = ListNode(value)
        if self.head is None:
            self.head = node
            return

        current_node = self.head

        # Traverse to the end of the list
        while current_node.next is not None:
            current_node = current_node.next
        # Append the new node to the end of the list
        current_node.next = node

    def printLinkedList(self):
        current_node = self.head
        while current_node is not None:
            print(current_node.value, "-->", end=" ")
            current_node = current_node.next
        print("None")

linked_list = LinkedList()
linked_list.append('10')
linked_list.append('20')
linked_list.append('30')
linked_list.printLinkedList()
