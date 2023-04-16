const { NotImplementedError } = require("../extensions/index.js");

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
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  dequeue() {
    const current = this.head;
    this.head = this.head.next;
    return current.value;
  }
}

module.exports = {
  Queue,
};

const queue = new Queue();
queue.enqueue(1); // adds the element to the queue
queue.enqueue(2); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
queue.enqueue(4); // adds the element to the queue
queue.enqueue(5); // adds the element to the queue
queue.enqueue(6); // adds the element to the queue
queue.enqueue(7); // adds the element to the queue
queue.enqueue(8); // adds the element to the queue
queue.enqueue(9); // adds the element to the queue
// queue.dequeue(); // returns the top element from queue and deletes it, returns 1
queue.getUnderlyingList();
// returns { value: 3, next: null }
