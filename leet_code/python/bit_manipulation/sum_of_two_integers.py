class Solution:
    def getSum(self, a: int, b: int) -> int:
        # hexadecimal literal that represents the maximum value 
        # of a 32-bit unsigned integer.
        mask = 0xffffffff 
        while b & mask:
            carry = a & b
            a = a ^ b
            b = carry << 1
        return (a & mask) if b > mask else a
    
s = Solution()
print(s.getSum(1,2))
print(s.getSum(-2,3))
print(s.getSum(0,0))
print(s.getSum(-1,1))
print(s.getSum(-1,-1))