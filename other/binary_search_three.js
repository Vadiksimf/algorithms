class BinarySearchTree {
    constructor() {
        this.node = {};
        this.insert = function (node, value) {
            if (!Object.values(node).length) {
                this.node = { value, left: null, right: null };
                return;
            }
            if (value < node.value) {
                if (!node.right)
                    return node.right = { value, left: null, rigth: null };
                this.insert(node, value);
            }
            else {
                if (!node.left)
                    return node.left = { value, left: null, right: null };
                this.insert(node.left, value);
            }
        };
    }
    getNode() {
        console.log(this.node);
        return this.node;
    }
    findElement(el) {
        if (this.node[el])
            return el;
    }
}
const Tree = new BinarySearchTree();
Tree.insert(Tree.node, 6);
Tree.insert(Tree.node, 5);
Tree.insert(Tree.node, 7);
Tree.insert(Tree.node, 9);
Tree.getNode();
//# sourceMappingURL=binary_search_three.js.map