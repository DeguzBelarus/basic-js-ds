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
function removeKFromList(l, k) {
  if (l == null) {
    return l;
  }

  while (l.value === k && l.next.value && l.next.value !== k) {
    l = l.next;
  }

  let node = l,
    last;

  if (node && node.value === k) {
    return node.next;
  }

  while (node && node.value !== k) {
    last = node;
    node = node.next;
  }

  if (last && node.value === k) {
    // if (node.next.value === k) {

    last.next = node.next;
    // }
  }

  return l;

  //  while (l.value == k) {
  //    l = l.next;
  //  }

  //  currentNode = l;
  //  nextNode = currentNode.next;

  //  while (nextNode != null) {
  //    if (nextNode.value == k) {
  //      currentNode.next = nextNode.next;

  //      if (currentNode.next == null) {
  //        break;
  //      }

  //      currentNode = currentNode.next;
  //      nextNode = currentNode.next;
  //    }
  //  }

  //  return l;

  //   if (l.value === k) {
  //     return l.next ? removeKFromList(l.next, k) : null;
  //   } else {
  //     return {
  //       next: removeKFromList(l.next, k),
  //       value,
  //     };

  //    //  return
  //   }
}

module.exports = {
  removeKFromList,
};
