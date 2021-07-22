// LC #94 Inorder traversal

var inorderTraversal = function (root) {
  const result = [];

  function traverse(node) {
    if (!node) return;

    if (node.left) traverse(node.left);
    result.push(node.val);
    if (node.right) traverse(node.right);
  }

  traverse(root);
  return result;
};
