class Solution:
    
    def preorder(self, root: 'Node') -> List[int]:
        def preorder_helper(root):
            trav.append(root.val)
            for child in root.children:
                preorder_helper(child)    
            
        trav = []
        if not root:
            return []
        preorder_helper(root)
        return trav
            
