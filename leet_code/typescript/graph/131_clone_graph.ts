type IGraphNode = {
    val: number;
    neighbors: IGraphNode[] | []
}

class GraphNode {
    val: number
    neighbors: IGraphNode[]
    constructor(val?: number, neighbors?: IGraphNode[]) {
        this.val = (val===undefined ? 0 : val)
        this.neighbors = (neighbors===undefined ? [] : neighbors)
    }
}

function cloneGraph(node: GraphNode | null): IGraphNode | null {
    if (!node) return null;

	const map = new Map<GraphNode, GraphNode>().set(node, new GraphNode())
    const queue: GraphNode[] = [node]

    while (queue.length) {
        const curr: GraphNode = queue.pop();
        const newNeighbors: GraphNode[] = curr.neighbors;

        for (let n of newNeighbors) {
            if (!map.has(n)) {
                map.set(n, new GraphNode(n.val));
                queue.push(n);
            }
            map.get(curr).neighbors.push(map.get(n))
        }
    }

    return map.get(node);
};

// Test cases
const node1 = new GraphNode(1, [new GraphNode(2), new GraphNode(3)]);

console.log(cloneGraph(node1));
