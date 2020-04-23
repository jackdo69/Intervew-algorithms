var mergeTwoLists = function(l1, l2) {
  var l3 = new ListNode(0); //create new linked list pointer
  var prev = l3;

  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  // once we reach end of a linked list, append the other
  // list because we know it is already sorted
  if (l1 === null) {
    prev.next = l2;
  }
  if (l2 === null) {
    prev.next = l1;
  }

  return l3.next;
};
