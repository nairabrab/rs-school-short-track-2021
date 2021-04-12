const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *extends ListNode
 */

class Queue {
  get size() {
    // throw new Error('Not implemented');
    const res = 0;
    return this.next === null ? res + 1 : this.next.size();
  }

  enqueue(element) {
    // throw new Error('Not implemented');
    // const l = ++Object.values(this).length;
    // Object.entries[l - 1] = element;
    // Object.entries[l-2]
    // Object.entries(this).push(element);

    // if (this.next === null) {
    //   const newEl = {};
    //   ListNode.call(newEl, element);
    //   this.next = newEl;
    //   return this;
    // }
    // if (!this.next) {
    //   const newEl = {};
    //   ListNode.call(newEl, element);
    //   return newEl;
    // }
    // return this.next.enqueue(element);

    // const node = new ListNode(element);
    // console.log(JSON.stringify(node));
    const node = new ListNode(element);
    node.next = this;
    node.value = element;
    return node;
  }

  // FIFO!!!!!!!!!!!!!
  dequeue() {
    // throw new Error('Not implemented');
    if (this.next === null) {
      const lastEl = this.value;
      // ListNode.call(lastEl, this.value);
      // this = {};
      this.value = undefined;
      this.next = undefined;
      return lastEl;
    }
    // if (!this.next.next) {
    //   const newEl = {};
    //   ListNode.call(newEl, this.value);
    //   this.next = null;
    //   return newEl;
    // }
    // if (this.next.next === null) {
    //   const lastEl = this.next.value;
    //   this.next = null;
    //   return lastEl;
    // }
    const result = this.value;
    const node = new ListNode();
    if (!this.next) this.next = null;
    node.next = JSON.parse(JSON.stringify(this.next));
    node.value = result;
    this.next = node.next;
    this.value = node.value;
    return result;
  }
}

module.exports = Queue;
