// LC #199 Binary Tree Right Side View

var rightSideView = function (root) {
  const currentQueue = [];
  let nextLevel = [];
  currentQueue.push(root);
  const result = [];

  if (!root) return result;

  while (currentQueue.length > 0) {
    const currentNode = currentQueue.shift();

    if (currentNode.left) {
      nextLevel.push(currentNode.left);
    }

    if (currentNode.right) {
      nextLevel.push(currentNode.right);
    }

    if (currentQueue.length === 0) {
      result.push(currentNode.val);
      currentQueue.push(...nextLevel);
      nextLevel = [];
    }
  }

  return result;
};
