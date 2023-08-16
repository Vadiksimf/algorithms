# Given two strings s and t, return true if they are equal when both are typed into empty text editors.
#  '#' means a backspace character.

# Note that after backspacing an empty text, the text will continue empty.

# Example 1:

# Input: s = "ab#c", t = "ad#c"
# Output: true
# Explanation: Both s and t become "ac".

## NOT SOLVED

class Solution(object):
    def getNumOfBS(self, start, string, acc):
        if string[start] == "#":
            return self.getNumOfBS(start - 1, string, acc + 1)
        return acc

    def backspaceCompare(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """

        s_pointer = len(s) - 1
        t_pointer = len(t) - 1

        while s_pointer >= 0 and t_pointer >= 0:
            if s[s_pointer] == "#":
                bss = self.getNumOfBS(s_pointer - 1, s, 1)
                s_pointer -= bss + 1
            if t[t_pointer] == "#":
                bss = self.getNumOfBS(s_pointer - 1, t, 1)
                t_pointer -= bss + 1
            print(s_pointer, t_pointer)
            s_pointer -= 1
            t_pointer -= 1

            if s[s_pointer] != t[t_pointer]:
                return False
            
        
        return True

# print(Solution().backspaceCompare("ab#c", "ad#c"))
# print(Solution().backspaceCompare("ab##", "d#c#"))
print(Solution().backspaceCompare("xywrrmp", "xywrrmu#p"))
