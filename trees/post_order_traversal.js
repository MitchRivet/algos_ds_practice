// LC #145 Post order traversal of a binary tree

var postorderTraversal = function (root) {
  const result = [];

  function traverse(node) {
    if (!node) return;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    result.push(node.val);
  }

  traverse(root);
  return result;
};
