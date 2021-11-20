/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let sortedList = new ListNode()
    let head = sortedList
    
while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
        sortedList.next = new ListNode(l1.val)
        l1 = l1.next
    } else {
        sortedList.next = new ListNode(l2.val)
        l2 = l2.next
    }
    
    sortedList = sortedList.next
}
    
    if (l1 !== null) {
        sortedList.next = new ListNode(l1.val, l1.next)
    }
    
    if (l2 !== null) {
        sortedList.next = new ListNode(l2.val, l2.next)
    }
    
    return head.next
};