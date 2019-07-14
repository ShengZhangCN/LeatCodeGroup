function ListNode(val) {
  this.val = val;
  this.next = null;
}

var reverseList = function(head) {
  var cur = head;
  var pre = null;
  while (cur != null) {
    var tempNext = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tempNext;
  }
  // console.log(pre);
  return pre;
};

module.exports = {
  ListNode,
  reverseList
};
