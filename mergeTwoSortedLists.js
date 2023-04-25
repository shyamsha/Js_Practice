var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

console.log(mergeTwoLists(list1, list2));
