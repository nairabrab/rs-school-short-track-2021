/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/* names */) {
  throw new Error('Not implemented');
  // start with names[1]
  // look for previous entries
  // add `(${entries})` to the name if any

//   names.forEach((el, i) => {
//     const count = 0;
//     let res = names.join(',') + ',';
//     const reg = new RegExp(`${el},`);
//     for (let j = 0; j < i; j++) {
//       if (res[j] === el) count++;
//     }
//     if (count) res.push(`${el}(${count})`);
//     else res.push(el);
//     return count ? `${el}(${count})` : el;
//   });
//   return res;
}

module.exports = renameFiles;
