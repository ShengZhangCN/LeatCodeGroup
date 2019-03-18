class Solution:
    def isUnivalTree(self, root: TreeNode) -> bool:
        self.val = root.val
        # val = root.val
        return self.pre_order(root)
        
    def pre_order(self, root):
        if root is None:
            return True
        if root.val != self.val:
            return False
            
        return self.pre_order(root.left) and self.pre_order(root.right)
        
