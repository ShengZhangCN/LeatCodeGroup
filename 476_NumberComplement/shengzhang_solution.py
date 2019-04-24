class Solution:
    def findComplement(self, num: int) -> int:
#         # convert integer into binary representations
#         b = bin(num)[2:]
#         length = len(b)
#         b = int(b) 
        
#         # create a all 1 integer that is the same length as b
#         c = [str(int((i+1)/(i+1))) for i in range(length)]  
        
#         d = int(''.join(c))
        
#         e = str(d - b)#.lstrip('0')
        
#         res = int(str(e), 2)
        
#         return res
    
        # solution 2
        binary=bin(num)[2:]
        com=""
        for i in str(binary):
            if i=='1':
                com+='0'
            else:
                com+='1'
        return int(com, 2)
