// LC #113 Path Sum II

var pathSum = function (root, targetSum) {
  const paths = [];

  const traverse = (node, sum, path) => {
    if (sum === targetSum && !node.left && !node.right) {
      paths.push([...path]);
    } else {
      if (node.left) {
        path.push(node.left.val);
        traverse(node.left, sum + node.left.val, path);
        path.pop();
      }

      if (node.right) {
        path.push(node.right.val);
        traverse(node.right, sum + node.right.val, path);
        path.pop();
      }
    }
  };

  if (root) traverse(root, root.val, [root.val]);

  return paths;
};
