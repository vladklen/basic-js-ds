const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all ks from list l that have a value equal to k.
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

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(list, key) {
  let head = list;
  let previous = null;

  while (list) {
    if (list.value === key) {
      if (previous === null) {
        head = list = list.next;
        continue;
      } else {
        previous.next = list.next;
        list = list.next;
        continue;
      }
    } else {
      previous = list;
      list = list.next;
    }
  }
  return head;
}

module.exports = {
  removeKFromList,
};
