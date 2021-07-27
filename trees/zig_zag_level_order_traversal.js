// LC #103 Binary Tree Zigzag Level Order Traversal

var zigzagLevelOrder = function (root) {
  const result = [];

  const dfs = (node, depth) => {
    if (!node) return;

    if (result.length === depth) {
      result.push([]);
    }

    if (depth === 0 || depth % 2 === 0) {
      result[depth].push(node.val);
    } else {
      result[depth].unshift(node.val);
    }

    if (node.left) dfs(node.left, depth + 1);
    if (node.right) dfs(node.right, depth + 1);
  };

  dfs(root, 0);
  return result;
};
