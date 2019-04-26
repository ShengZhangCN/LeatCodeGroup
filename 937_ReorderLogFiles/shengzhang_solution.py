class Solution:
    def reorderLogFiles(self, logs: List[str]) -> List[str]:
        def f(log):
            id_, rest = log.split(" ", 1)
            # usage of sorted( ,key=), customize sorted() function
            # the generated (0, ..., ...) and (1,) would used as keys for comparison,
            # first compare the first element, then the second, then third...
            return (0, rest, id_) if rest[0].isalpha() else (1,)

        return sorted(logs, key = f)        
