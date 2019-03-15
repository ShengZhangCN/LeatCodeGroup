function ListNode(val) {
    this.val = val;
    this.next = null;
}

var middleNode = function(head) {
    var length = 0;

    var dummyHead = head;
    while(dummyHead != null){
        length ++;
        dummyHead = dummyHead.next;
    }

    for (var i = 0; i < (length - 1) / 2; i++){
        head = head.next;
    }

    return head;

};
