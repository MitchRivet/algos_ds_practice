// LC #109  Convert Sorted List to Binary Search Tree

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedListToBST = function (head) {
  const values = [];
  if (head) {
    values.push(head.val);
    let listPtr = head;

    while (listPtr.next) {
      values.push(listPtr.next.val);
      listPtr = listPtr.next;
    }
  } else {
    return null;
  }

  const buildBst = (start, end) => {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new TreeNode(values[mid]);

    if (start === end) return node;

    node.left = buildBst(start, mid - 1);
    node.right = buildBst(mid + 1, end);

    return node;
  };

  return buildBst(0, values.length - 1);
};
