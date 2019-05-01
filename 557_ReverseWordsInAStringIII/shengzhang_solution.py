class Solution:
    def reverseWords(self, s: str) -> str:
        # split s by ' ', reverse word by word and joint together by ' '
        return ' '.join( [ ss[::-1] for ss in s.split()])
