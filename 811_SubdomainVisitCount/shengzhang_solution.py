class Solution:
    def subdomainVisits(self, cpdomains: List[str]) -> List[str]:
        # ans = dict()
        ans = collections.Counter()
        for domain in cpdomains:
            # split the number and the domain name by space
            count, domain = domain.split()
            # convert str:count into int:count
            count = int(count)
            # split the domain by "."
            d_list = domain.split('.')
            for i in range(len(d_list)):
                # for a dict instance, we can call a key that doesn't exist in the dictionary.
                # but for a collection.Counter() instance, we can do that
                # if there is no such domain, then the count(=0) just increase by count,
                # if there is already such a domain, then the count(=ans[domain]) increase by count
                ans['.'.join(d_list[i:])] += count
            
        return ["{} {}".format(ct, dom) for dom, ct in ans.items()]
            
