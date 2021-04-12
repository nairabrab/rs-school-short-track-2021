/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
  throw new Error('Not implemented');
  // const res = {};
  // domains.forEach(el => {res[el.split('.').reverse().join('.')] = 0});
  // domains.forEach(el => {el.split('.')});
  // domains.forEach(el => {res[`.${el.split('.')[0]}`] = 0});
  // const dom = [];
  // domains.forEach((el) => { dom.push(el.slice(lastIndexOf('.'))); });
  // res[dom[0]] = dom.length;
  // dom.length = 0;
}

module.exports = getDNSStats;
