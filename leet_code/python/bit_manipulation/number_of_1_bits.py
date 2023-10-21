class Solution:
    def hammingWeight(self, n):
        count = 0
        for i in range(32):
            mask = 1 << i
            if n & mask:
                count += 1
        return count
    
# test
s = Solution()
print(s.hammingWeight(11))
