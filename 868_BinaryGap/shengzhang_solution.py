class Solution:
    def binaryGap(self, N: int) -> int:
        # convert integer into binary representation
        b = bin(N)[2:] # string
        
        max_distance = 0
        start = -1
        end = -1
        for i in range(len(b)):
            if b[i] == '1':
                if start == -1:
                    start = i
                elif start != -1:
                    end = i
                    max_distance = max(end-start, max_distance)
                    start = end
        return max_distance
