// LC #102 Binary tree level order traversal

var levelOrder = function (root) {
  const depthMap = new Map();
  const traverse = (node, depth) => {
    if (!node) return;

    if (depthMap.has(depth)) {
      depthMap.get(depth).push(node.val);
    } else {
      depthMap.set(depth, [node.val]);
    }

    if (node.left) traverse(node.left, depth + 1);
    if (node.right) traverse(node.right, depth + 1);
  };

  traverse(root, 0);
  const result = [];

  depthMap.forEach((value, key) => {
    result.push(value);
  });

  return result;
};
