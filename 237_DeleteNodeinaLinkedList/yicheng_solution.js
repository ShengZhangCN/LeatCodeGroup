function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteNode = function(node) {
  var head = new ListNode(4);
  head.next = new ListNode(5);
  head.next.next = new ListNode(1);
  head.next.next.next = new ListNode(9);

  var dummyHead = head;

  while (dummyHead != null && dummyHead.next != null){
    if (dummyHead.next.val == node.val){
      dummyHead.next = node.next;
    }
    dummyHead = dummyHead.next;
  }

  // console.log(head);
  return head;

};

module.exports = {
  ListNode,
  deleteNode
};
