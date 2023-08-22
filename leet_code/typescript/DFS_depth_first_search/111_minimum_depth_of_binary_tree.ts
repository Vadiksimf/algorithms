/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) return 0

    const queue = [{ node: root, level: 1 }]
    let minDepth = Infinity;

    while (queue.length) {
        const { node, level} = queue.pop()

        if (level >= minDepth) continue
        if (!node.left && !node.right) minDepth = level

        if (node && node.right) queue.push({ node: node.right, level: level + 1 })
        if (node && node.left) queue.push({ node: node.left, level: level +1 })
    }

    return minDepth
};
