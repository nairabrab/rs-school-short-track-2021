// const ListNode = require('../extensions/list-node');

// const ListNode = require('../extensions/list-node');

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
  // const keyvalues = Object.entries(l);
  // .reverse();
  // keyvalues.forEach((arr, i) => {
  // if (arr[0] === k) {
  //   if (i === 0) {keyvalues[]}
  //   else {};
  // });

  // if (this.value === k)
  // let result = l;
  //   let cash = [];
  //   function dig (list){
  //   if (list.value === k) {
  //     result = list.next;
  //   }
  // cash.push(new Object.call(ListNode(l.value)));
  //   return result.next === null ? cash : dig(result.next, k);
  // }
  // return l.value === k ? removeKFromList(l.next, k) : k;

  // const values = Object.values(l);

  // new Object.call(ListNode(val));
  //   result.value = val;
  //   if (i===0) result.next = null
  //   else
  // } );
  // function linkedListReverseEngined (arr) {
  //   const arrReversed = arr.reverse();
  //   let result = {};
  //   result.value = arrReversed[0];
  // }

  //   const result = [];
  //   Object.values(l).filter((el) => el !== k).reverse().forEach((val, i) => {
  //     result.push({});
  //     ListNode.call(result[i], val);
  //   });
  //   const le = result.length - 1;
  //   for (let i = 1; i < le; i++) {
  //     result[i].next = result[i - 1];
  //   }
  //   return Object.values(l);
  // }

  // return result.reduce((cur,val) => );

  // -> array?
  // array.filter(el => el !== k)

  // const result = {};
  // ListNode.call(result, l.value);
  // ListNode.call(result.next, l.next.value); // while l.next !== null
  // function copyLinkedList(a, b) {
  //   ListNode.call(b, a.value);
  //   b.next = {};
  //   return a.next === null ? b : copyLinkedList(a.next, b.next);
  // }
  // result.next = {};
  // copyLinkedList(result.next, l.next.value);
  // return result;

  // let result = parsejson (l.stringify)
  // function replacer(key, value) {
  //   return value === k ? `${value}replace` : value;
  // }
  // '{"next":{"value":1,"next":{"value":2,"next":{"next":
  // {"value":4,"next":{"value":5,"next":null}}}}}}'
  // let kk = k;
  // kk++;
  // return k === 3 ? JSON.stringify(l/* , replacer */) : kk;
  // .replace(/{"value":"3replace","next":/g,'');

  // JSON.parse(text[, REVIVER])

  // const node = new ListNode(1);
  // if (l.next === null) return l;
  // if (l.value === k) {
  //   node.next = JSON.parse(JSON.stringify(l.next.next));
  //   node.value = l.next.value;
  // } else {
  //   node.next = JSON.parse(JSON.stringify(l.next));
  //   node.value = l.value;
  // }
  // return l.next ? removeKFromList(node, k) : l;
}

module.exports = removeKFromList;
