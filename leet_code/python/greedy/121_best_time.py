# You are given an array prices where prices[i] is the price of a given stock on the ith day.
# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        profit = 0
        left = 0
        right = 1

        while right < len(prices):
            test = prices[right] - prices[left]
            if test < 0:
                left = right
            else:
                right += 1
                profit = max(profit, test)
        
        print(profit)
        return profit

Solution().maxProfit([7,1,5,3,6,4]) # 5

