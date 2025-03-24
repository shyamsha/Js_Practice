// Given a binary tree, find the sum of it deepest leaves and return it.
function binaryTreeSum(root) {
  let sum = 0;
  let maxDepth = 0;
  let dfs = (node, depth) => {
    if (!node) return;
    if (depth > maxDepth) {
      maxDepth = depth;
      sum = node.val;
    } else if (depth === maxDepth) {
      sum += node.val;
    }
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };
  dfs(root, 0);
  return sum;
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);
root.left.left.left = new Node(7);
root.right.right.right = new Node(8);

console.log(binaryTreeSum(root)); // 15
