const { ListNode, reverseList } = require("./yicheng_solution.js");

test("test solution", () => {
  var node = new ListNode(1);
  node.next = new ListNode(2);
  node.next.next = new ListNode(3);
  node.next.next.next = new ListNode(4);
  node.next.next.next.next = new ListNode(5);

  var reversedNode = new ListNode(5);
  reversedNode.next = new ListNode(4);
  reversedNode.next.next = new ListNode(3);
  reversedNode.next.next.next = new ListNode(2);
  reversedNode.next.next.next.next = new ListNode(1);

  expect(reverseList(node)).toEqual(reversedNode);
});
