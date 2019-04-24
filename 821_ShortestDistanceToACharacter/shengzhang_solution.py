class Solution:
    def shortestToChar(self, S: str, C: str) -> list:
        # get the indeces of c in S
        id_set = []
        for i in range(len(S)):
            if S[i] == C:
                id_set.append(i)
        
        # calculate the shortest distance 
        res = []
        for i in range(len(S)):
            min = float('inf')
            for j in range(len(id_set)):
                min_tmp = abs(i - id_set[j])
                if min_tmp < min:
                    min = min_tmp
            res.append(min)
        return res


if __name__=='__main__':
    S = "loveleetcode"
    C = "e"

    ans = Solution().shortestToChar(S, C)
    print(ans)
