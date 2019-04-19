class Solution:
    def searchBST(self, root, val):
        # # don't know why it doesn't work
        # if not root:
        #     return root
        # if root.val == val:
        #     return root
        # elif root.val > val:
        #     self.searchBST(root.left, val)
        # else:
        #     self.searchBST(root.right, val)

        trav = root
        while trav:
            if trav.val == val:
                return trav
            elif trav.val > val:
                trav = trav.left
            else:
                trav = trav.right

        return  trav
