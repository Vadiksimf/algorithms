/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfLevels(root: TreeNode | null): number[] {
    const queue: LevelOfNode[] = []
    const hash = {} as LevelInfo

    if (root) queue.push({ node: root, level: 0 })

    while (queue.length > 0) {
        const { node, level } = queue.shift()

        if (!hash[level]) {
            hash[level] = { sum: node.val, length: 1 }
        } else {
            hash[level].sum += node.val;
            hash[level].length += 1;
        }

        if (node.left) queue.push({ node: node.left, level: level + 1 })
        if (node.right) queue.push({ node: node.right, level: level + 1})
    }

    return Object.values(hash).map(({ sum, length }) => sum / length)
};

type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

interface LevelOfNode {
  node: TreeNode;
  level: number;
}

interface LevelInfo {
  [level: number]: {
    sum: number;
    length: number;
  };
}
