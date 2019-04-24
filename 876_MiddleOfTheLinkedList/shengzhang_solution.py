# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
import math
class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        # output the nodes into a list and get the middle one
        A = [head]
        while A[-1].next:
            A.append(A[-1].next)
            
        return A[math.floor(len(A)/2)]
