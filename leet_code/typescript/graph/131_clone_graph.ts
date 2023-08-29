/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

// type Node = {
//     val: number;
//     neighbors: Node[] | []
// }

function cloneGraph(node: Node | null): Node | null {
    if (!node) return null;

	const map = new Map<Node, Node>().set(node, new Node(node.val))
    const queue: Node[] = [node]

    while (queue.length) {
        const curr: Node = queue.pop();
        const newNeighbors: Node[] = curr.neighbors;

        for (let n of newNeighbors) {
            if (!map.has(n)) {
                map.set(n, new Node(n.val));
                queue.push(n);
            }
            map.get(curr).neighbors.push(map.get(n))
        }
    }

    return map.get(node);
};
