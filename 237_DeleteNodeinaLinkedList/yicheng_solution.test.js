const { ListNode, deleteNode } = require("./yicheng_solution.js");

test("test solution", () => {
  var node = new ListNode(5);
  node.next = new ListNode(1);
  node.next.next = new ListNode(9);

  var newNode = new ListNode(4);
  newNode.next = new ListNode(1);
  newNode.next.next = new ListNode(9);

  expect(deleteNode(node)).toEqual(newNode);
});
