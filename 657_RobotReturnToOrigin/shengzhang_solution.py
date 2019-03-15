from collections import Counter
class Solution:
    def judgeCircle(self, moves: str) -> bool:
        c = Counter(moves)
        # stay still with no movements
        if len(c) == 0:
            return True
        if len(set(moves)) == 3 or len(set(moves)) == 1:
            return False
        if 'L' in c.keys() and 'R' in c.keys() and 'U' in c.keys() and 'D' in c.keys():
            if c['L'] == c['R'] and c['U'] == c['D']:
                return True
        elif 'L' in c.keys() and 'R' in c.keys():
            if c['L'] == c['R']:
                return True
        elif 'U' in c.keys() and 'D' in c.keys():
            if c['U'] == c['D']:
                return True
        else:
            return False
        return False
