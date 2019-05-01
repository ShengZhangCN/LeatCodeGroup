# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0 
        if root and root.left is None and root.right is None:
            return 1
        
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
