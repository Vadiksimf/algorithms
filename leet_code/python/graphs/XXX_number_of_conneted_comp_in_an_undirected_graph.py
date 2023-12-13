from typing import List
"""
Number of connected components in an Undirected Graph

Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), 
write a function to find the number of connected components in an undirected graph.

[ Note: You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is
the same as [1,0] and thus will not appear together in edges]

input: n = 5, edges = [[0,1], [0,2], [0,3], [1,3]]
output: 1

input: n = 5, edges = [[0,1], [1,2], [2,4], [5,6]]
output: 3 
"""

def union_find(root: List[List[int]], X: int) -> int:
    if root[X] != X:
        root[X] = union_find(root, root[X]) 
    return X
    

def num_of_connected(n: int, edges: List[List[int]]) -> int:
    root = [i for i in range(n)]
    rank = [0] * n
    counter = n
    
    for edge in edges:
        A, B = edge
        root_A = union_find(root, A)
        root_B = union_find(root, B)
        
        if root_A != root_B:
            counter -= 1
        if rank[root_A] > rank[root_B]:
            rank[A] += 1
            root[B] = root[A]
        else:
            rank[B] += 1
            rank[A] = rank[B]
    
    return counter

assert num_of_connected(5, [[0,1], [0,2], [0,3], [1,3]]) == 1, "Test failed"
assert num_of_connected(7, [[0,1], [1,2], [2,4], [5,6]]) == 3, "Test failed"
        
        

