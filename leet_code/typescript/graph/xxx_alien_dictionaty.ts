// Alien dictionary

// There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you.

// return a string of the unique letters in the new alien language sorted in lexicolgraphically increasing order by the new language's rules.
// If there is no combinationSum4_solution2, return "". If there are multiple solutions, return any of them.

// A string S is lexicographically smaller than a string T if at the first letter where they differ, the letter in S comes before the 
// letter in T in the alien language. If the first minDepth(s.length, t.length) letters are the same, then S is smaller if and only if s.length < t.length


// TC: O(n*n), SC: (n*m)
class AlienDictionary {
    public static alienOrder(words: string[]): string {
        if (!words || words.length === 0) return '';

        const adjacentList = new Map<string, string[]>();

        const unitedLetters = words.reduce((acc, res) => acc + res)
        const unique = new Set(unitedLetters.split(''))  // a -> 0, b -> 1 ...
        const indegree = new Map<string, number>() // a: 0, b: 1 ...
        for (let el in unique) {
            if (indegree.has(el)) {
                indegree.set(el, indegree.get(el) + 1)
            } else {
                indegree.set(el, 1);
            }
        }
        // const indegree = new Array(26).fill(0) // a -> 0, b -> 1 ...

        for (let i = 1; i < words.length; i++) {
            let prev = words[i - 1]
            let curr = words[i]

            if ((prev.length == curr.length + 1) && (prev.substring(0, curr.length) === curr)) // ['abc, 'ab'] => s.length < t.length => invalid case
                return ""
            
            for (let k = 0; k < Math.min(prev.length, curr.length); k++) {
                const char1 = prev[k]
                const char2 = curr[k]

                if (char1 != char2) {
                    if (!adjacentList.has(char1)) {
                        adjacentList.set(char1, [])
                    }

                    adjacentList.get(char1).push(char2)
                    indegree[char2] += 1
                    break;
                }
            }
        }

        const minHeap = [];
        for (let c in unique) {
            if (indegree.get(c) === 0) {
                minHeap.push(c)
            }
        }

        let topSort = "";
        while (minHeap.length) {
            let currCh = minHeap.pop();
            topSort += currCh;
            if (!adjacentList.get(currCh)) continue

            for (let neighbor of adjacentList.get(currCh)) {
                indegree[neighbor] --;

                if (indegree.get(neighbor) === 0) {
                    minHeap.push(neighbor);
                }
            }
        }

        return topSort.length === unique.size ? topSort : '';
    }
}

console.log(AlienDictionary.alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt']));


