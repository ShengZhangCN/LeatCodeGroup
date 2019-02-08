class Solution:
    def numJewelsInStones(self, J: 'str', S: 'str') -> 'int':
        # solution 1:
        c = 0
        for j in J:
            for s in S:
                if s==j:
                    c +=1
        return c
        
        # soluton 2:
        return sum(j in J for j in S)
        
