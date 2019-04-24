class Solution:
    def findWords(self, words: List[str]) -> List[str]:
        set1 = {'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'}
        set2 = {'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'}
        set3 = {'z', 'x', 'c', 'v', 'b', 'n', 'm'}
        
        res = []
        # for each word, convert into lowercase, make them as set 
        for word in words:
            s = set(word.lower())
            if s.intersection(set1) == s:
                res.append(word)
            elif s.intersection(set2) == s:
                res.append(word)
            elif s.intersection(set3) == s:
                res.append(word)
            
        return res
