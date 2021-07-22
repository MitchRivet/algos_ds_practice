// LC #429 N-ary Tree Level Order Traversal

var levelOrder = function (root) {
  const depthMap = new Map();

  const traverse = (node, depth) => {
    if (!node) return;

    if (depthMap.has(depth)) {
      depthMap.get(depth).push(node.val);
    } else {
      depthMap.set(depth, [node.val]);
    }

    if (node.children && node.children.length) {
      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i], depth + 1);
      }
    }
  };

  traverse(root, 0);
  const result = [];

  depthMap.forEach((value, key) => {
    result.push(value);
  });

  return result;
};
