// LC #543 Diameter of a Binary Tree

var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  function dfs(node) {
    if (!node) return 0;

    const left = dfs(node.left);

    const right = dfs(node.right);

    diameter = Math.max(left + right, diameter);

    return Math.max(left, right) + 1;
  }

  dfs(root);
  return diameter;
};
