const { NotImplementedError } = require('../lib/errors');
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
    this.beginning = null;
    this.end = null;
  }

  getUnderlyingList() {
    return this.beginning;
  }

  enqueue(/* value */) {
    const newValue = { value, next: null };
    if (!this.beginning) {
      this.beginning = newValue;
      this.end = newValue;
    } else {
      this.end.next = newValue;
      this.end = newValue;
    }
  }

  dequeue() {
    if (!this.beginning) return undefined;
    const value = this.beginning.value;
    this.beginning = this.beginning.next;
    if (!this.beginning) this.end = null;
    return value;
  }
}

module.exports = {
  Queue
};
