/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) {
        return null
    }
    let forwardList = []
    let node = head
    while (node) {
        forwardList.push(node.val)
        node = node.next
    }
    
    let newList = new ListNode()
    var head2 = newList
    for (let i = forwardList.length - 1; i >= 1; i--) {
        head2.val = forwardList[i]
        head2.next = new ListNode()
        head2 = head2.next
    }
    
    head2.val = forwardList[0]
    head2.next = null
    
    return newList
};