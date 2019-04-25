from collections import Counter
class Solution:
    def uncommonFromSentences(self, A: str, B: str) -> List[str]:
        res = []
        
        c1 = Counter(A.split())
        c2 = Counter(B.split())
        
        # get the difference of these two sets
        
        a = set(c1.keys()) - set(c2.keys())
        b = set(c2.keys()) - set(c1.keys())        
        
        if len(a) != 0:
            for s in a:
                if c1[s] == 1:
                    res.append(s)
                    
        if len(b) != 0:
            for s in b:
                if c2[s] == 1:
                    res.append(s)
                    
        return res
