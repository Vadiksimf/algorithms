from typing import List

"""
You have a graph of n nodes labeled from 0 to n-1. You are given an integer n nad a list of edges where 
edges [i] = [ai, bi] indicates that there is an undirected edge between nodes ai nd bi in the graph.
Check: is there are no self-loops or repeated edges.
"""

"""
n = 5
edges = [[0,1], [0,2], [0,3], [1,4]]

Output: Tree

n = 5
edges = [[0,1], [1,2], [2,3], [2,4], [3,4]]

Output: false
"""


# TC: O(V + E) Vertices + Edges
# SC: O(V)     Vertices

# Union find
def find_root(root: List[int], X: int) -> int:
    if root[X] != X:
        root[X] = find_root(root, root[X])
    return root[X]

def valid_tree(n: int, edges: List[List[int]]) -> bool:
    root = [i for i in range(n)]
    rank = [0] * n
    count = n

    for edge in edges:
        A, B = edge
        root_A = find_root(root, A)
        root_B = find_root(root, B)
        
        # Check on loop
        if root_A == root_B:
            return False
        
        # The edge with a biggest rank must be a parent
        if rank[root_A] > rank[root_B]:
            root[B] = root[A]
            rank[A] += 1
        else:
            root[A] = root[B]
            rank[B] += 1
        count -= 1
    
    # Check on disconnected edges and return      
    return count == 1


def valid_tree1(n: int, edges: List[List[int]]) -> bool:
    root = [i for i in range(n)]
    rank = [0] * n
    count = n
    
    for edge in edges:
        if root[edge[0]] == root[edge[1]]:
            # Check on loops
            return False
        root[edge[1]] = edge[1]
        rank[edge[0]] += 1
        count -= 1
    # Check on disconnected edges
    if count != 1:
        return False
    
    return True

assert valid_tree1(5, [[0,1], [0,2], [0,3], [1,4]]) == True, 'Test failed'
assert valid_tree1(5, [[0,1], [1,2], [2,3], [2,4], [3,4]]) == False, 'Test failed'
assert valid_tree1(7, [[0,1], [1,2], [2,3], [3,4], [5,6]]) == False, 'Test failed'

assert valid_tree(5, [[0,1], [0,2], [0,3], [1,4]]) == True, 'Test failed'
assert valid_tree(5, [[0,1], [1,2], [2,3], [2,4], [3,4]]) == False, 'Test failed'
assert valid_tree(7, [[0,1], [1,2], [2,3], [3,4], [5,6]]) == False, 'Test failed'
