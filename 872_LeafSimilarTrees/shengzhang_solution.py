# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def leafSimilar(self, root1: TreeNode, root2: TreeNode) -> bool:
        # traversal in any order to print out the leaves
        # then compare
        
        l1 = []
        l2 = []
        
        l1 = self.get_leaves(l1, root1)
        l2 = self.get_leaves(l2, root2)
        
        if l1 == l2:
            return True
        else:
            return False
        
    def get_leaves(self, l, root):
        def pre_order(root):
            if not root:
                return
            if root:
                if root.left is None and root.right is None:
                    l.append(root.val)
            pre_order(root.left)
            pre_order(root.right)
            
        pre_order(root)
        return l
    
