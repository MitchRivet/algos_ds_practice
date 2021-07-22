// LC #144 Preorder traversal

var preorderTraversalRecursive = function (root) {
  const result = [];

  function traverse(node) {
    if (!node) return;
    result.push(node.val);

    if (node && node.left) {
      traverse(node.left);
    }

    if (node && node.right) {
      traverse(node.right);
    }

    return;
  }

  traverse(root);
  return result;
};

var preorderTraversalIterative = function (root) {
  if (root === null) {
    return [];
  }

  const traversalArray = [root];
  var currentNode = root;
  const answer = [];

  while (traversalArray.length > 0) {
    if (currentNode) answer.push(currentNode.val);

    if (currentNode.right) {
      traversalArray.push(currentNode.right);
    }

    if (currentNode.left) {
      traversalArray.push(currentNode.left);
    }

    currentNode = traversalArray.pop();
  }

  return answer;
};
