/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let storage = []
    let count = 0
    let power = 0
    
    let node = head
    
    while (node) {
        storage.push(node.val)
        node = node.next
    }
    
    for (let i = (storage.length - 1); i >= 0; i--) {
        if (storage[i] === 1 ) {
            count += Math.pow(2, power)
        }
        power++
    }
    
    return count
};