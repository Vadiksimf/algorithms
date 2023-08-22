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
var maxDepth = function(root) {
    if (!root) return 0;
    const stack = [{ node: root, level: 1 }]
    let maxDepth = 0;

    while (stack.length) {
        const { node, level } = stack.pop();
        if (maxDepth < level) maxDepth = level
        if (!node.left && !node.right) continue

        if (node && node.left) stack.push({ node: node.left, level: level + 1 });
        if (node && node.right) stack.push({ node: node.right, level: level + 1 });
    }

    return maxDepth
};
