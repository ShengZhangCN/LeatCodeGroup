class Solution:
    def fib(self, N: int) -> int:
        a = 0
        b = 1
        f = 0
        if N == 1:
            return 1

        for i in range(1,N):
            f = a + b
            a, b = b, a + b
        return f


if __name__=='__main__':
    N = 6
    ans =  Solution().fib(N)
    print(ans)
