/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(/* l, k */) {
  throw new Error('Not implemented');
  //   for (const val in l) {
  //     if (Object.hasOwnProperty.call(l, val)) {
  //       if (this.value === k) {
  //         this.next = this.next.next;
  //         this.value = this.next.value;
  //       }
  //     }
  //   }
  // const keyvalues = Object.entries(l).reverse();
  //   keyvalues.forEach((arr,i) => {
  //     if (arr[0] === k) {
  //       if (i === 0) {keyvalues[]}
  //       else {};
  //     }

//   });
//   return l;
  // -> array?
  // array.filter(el => el !== k)
}

module.exports = removeKFromList;
