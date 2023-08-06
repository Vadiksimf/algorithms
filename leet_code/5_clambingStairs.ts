// leetcode 70
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// If we will see the pattern, we can see that it is a fibonacci series
// for 1 step, there is only 1 way,  1 => 1
// for 2 steps, there are 2 ways,    2 => 2
// for 3 steps, there are 3 ways,    3 => 3 = 1 + 2
// for 4 steps, there are 5 ways,    4 => 5 = 2 + 3
// for 5 steps, there are 8 ways     5 => 8 = 3 + 5
function climbStairs(n: number): number {
    if (n <= 3) return n;

    let a = 1;
    let b = 2;
    for (let i = 3; i <= n; i++) {
        let prev = a;
        a = b;
        b = prev + a;
    }

    return b;
};
