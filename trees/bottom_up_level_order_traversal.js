// LC #107 Binary Tree Level Order Traversal 2

var levelOrderBottom = function (root) {
  const result = [];
  const traversalLevelOrder = (node, depth) => {
    if (!node) return;
    if (result.length === depth) {
      result.push([]);
    }

    result[depth].push(node.val);

    if (node.left) traversalLevelOrder(node.left, depth + 1);
    if (node.right) traversalLevelOrder(node.right, depth + 1);

    return;
  };

  traversalLevelOrder(root, 0);

  result.reverse();
  return result;
};
