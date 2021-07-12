function merge_k_lists(lists) {
  if (lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    const list1 = lists.shift();
    const list2 = lists.shift();
    const temp = merge_2_lists(list1, list2);
    lists.push(temp);
  }
  return lists[0];
}

function merge_2_lists(list1, list2) {
  const dummy = new SinglyLinkedListNode(0);
  let last = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.data > list2.data) {
      last.next = list2;
      list2 = list2.next;
    } else {
      last.next = list1;
      list1 = list1.next;
    }
    last = last.next;
  }

  if (list1) {
    last.next = list1;
  }
  if (list2) {
    last.next = list2;
  }

  return dummy.next;
}

const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};
