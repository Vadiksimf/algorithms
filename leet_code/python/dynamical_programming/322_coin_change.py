# TOTO: Fixme

class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        # Assume index as amount
        dp = {}
        if amount == 0:
            return 0
        for i in range(amount + 1):
            min_coins = float("inf")
            for coin in coins:
                if i >= coin and i - coin not in dp:
                    min_coins = min(min_coins, dp[i - coin])
            dp[i] = -1 if min_coins == float("inf") else 1 + min_coins
        
        return dp[amount] 
