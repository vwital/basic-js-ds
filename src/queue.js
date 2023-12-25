const { NotImplementedError, ListNode } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.queue = {};
  }
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.head == null) {
      this.head = this.tail = new ListNode(value);
      this.queue = this.head;
    } else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (this.head.next == null) {
      let removed = this.head;
      this.head = null;
      this.queue = null;
      this.tail = null;
      return removed.value;
    } else {
      let removedVal = this.head.value;
      this.head = this.head.next;
      this.queue.value = this.head.value;
      this.queue.next = this.head.next;
      return removedVal;
    }
  }
}

module.exports = {
  Queue,
};
