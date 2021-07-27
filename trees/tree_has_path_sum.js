// LC #112 path sum

var hasPathSum = function (root, targetSum) {
  let result = false;
  const traverse = (node, sum) => {
    if (sum === targetSum && !node.left && !node.right) {
      result = true;
    } else {
      if (node.left) {
        traverse(node.left, sum + node.left.val);
      }

      if (node.right) {
        traverse(node.right, sum + node.right.val);
      }
    }
  };

  if (root) traverse(root, root.val);

  return result;
};
