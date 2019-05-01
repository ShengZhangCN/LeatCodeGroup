# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def increasingBST(self, root: TreeNode) -> TreeNode:
        vals = []
        
        def in_order(root):
            if root:
                in_order(root.left)
                vals.append(root.val)
                in_order(root.right)
                
        # first, we traverse the tree and record the value in a in-order way
        # second, we reconstruct the right-child only tree 
        in_order(root)    
        head = TreeNode(0)
        tmp_head = head
        for val in vals:
            tmp_head.right = TreeNode(val)
            tmp_head = tmp_head.right
            
        return head.right
