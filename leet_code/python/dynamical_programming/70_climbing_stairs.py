class Solution:
    # Fibonacci
    def climbStairs(self, n: int) -> int:
        if n <= 3:
            return n
        res = 2
        prev = 1
        for i in range(2,n,1):
            temp = res
            res += prev
            prev = temp
        
        return res
    
# test
s = Solution()
print(s.climbStairs(2))
print(s.climbStairs(3))
print(s.climbStairs(4))
print(s.climbStairs(5))
print(s.climbStairs(6))
