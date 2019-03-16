class Solution:
    """
    If we see say S[0] == 'I', we can always put 0 as the first element; similarly, if we see S[0] == 'D', 
    we can always put N as the first element. Say we have a match for the rest of the string S[1], S[2], ... using N distinct elements. 
    Notice it doesn't matter what the elements are, only that they are distinct and totally ordered. 
    Then, putting 0 or N at the first character will match, and the rest of the elements (1, 2, ..., N or 0, 1, ..., N-1) can use 
    the matching we have.
    """
    def diStringMatch(self, S: str) -> List[int]:
        lo, hi = 0, len(S)
        ans = []
        for x in S:
            if x == 'I':
                ans.append(lo)
                lo += 1
            else:
                ans.append(hi)
                hi -= 1

        return ans + [lo]      
        
 
