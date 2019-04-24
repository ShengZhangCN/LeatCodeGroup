class Solution:
    def numberOfLines(self, widths: List[int], S: str) -> List[int]:
        lines, width = 1,0
        
        for c in S:
            w = widths[ord(c) - ord('a')]
            width += w
            # if exceeds the max width per line
            if width > 100:
                # increase line by 1
                lines += 1
                # keep the width for the next line
                width = w
                
        return lines, width        
