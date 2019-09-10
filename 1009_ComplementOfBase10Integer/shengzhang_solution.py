class Solution:
    def bitwiseComplement(self, N: int) -> int:
        """
        
        x^y:Does a "bitwise exclusive or". Each bit of the output is the same as the corresponding bit in x if that bit in y is 0, and it's the complement of the bit in x if that bit in y is 1.
        """
        if N == 0:
            return 1
        
        c = 1
 
        while N*2 > c:
            N = N ^ c
            c = c << 1
        return N
