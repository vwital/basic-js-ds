const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, k) {
  let initial = list;
  let currentNode = initial;
  let nextNode = list.next;
  let prevNode = list;
  while (currentNode !== null) {
    if (currentNode.value === k) {
      if (currentNode === initial) {
        initial = initial.next;
        currentNode = nextNode;
        prevNode = null;
        if (nextNode !== null) nextNode = nextNode.next;
        // break;
      } else if (nextNode == null) {
        prevNode.next = null;
        break;
      } else if (currentNode.value === k && nextNode.value === k) {
        currentNode.value = nextNode.next.value;
        currentNode.next = nextNode.next.next;
        break;
      } else {
        currentNode.value = nextNode.value;
        currentNode.next = nextNode.next;
        break;
      }
    } else {
      prevNode = currentNode;
      currentNode = nextNode;
      if (nextNode !== null) nextNode = nextNode.next;
    }
  }
  return initial;
}

module.exports = {
  removeKFromList,
};
