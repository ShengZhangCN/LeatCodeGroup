class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        new_email = []
        for e in emails:
            # first delete all strings between the '+' and the '@'
            idx1 = e.find('+')  # make sure that this would find the first pos of '+'
            idx2 = e.find('@')
            e1 = e.replace(e[idx1:idx2], '')
            # second delete the '.' sign
            # do not delete the '.' after '@'
            e1 = e1[:e1.find('@')].replace('.', '') + e1[e1.find('@'):]
            new_email.append(e1)
        # print(new_email)
        return len(set(new_email))
