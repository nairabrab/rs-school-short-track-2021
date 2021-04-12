/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // throw new Error('Not implemented');
  // return (email.match(/@.+?\..+?$/) || [' smth went wrong'])[0].slice(1);
  // return email.indexOf('unusual.com@usual.com') ?
  // 'usual.com' : email.match(/@.+?\..+?$/)[0].slice(1);
  const suspects = email.split('@');
  return suspects[suspects.length - 1];
}

module.exports = getEmailDomain;
