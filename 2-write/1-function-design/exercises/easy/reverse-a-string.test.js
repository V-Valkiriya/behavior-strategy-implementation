// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------
function mySolution (toReverse = '') {
  if (typeof toReverse !== 'string') {
    throw new TypeError();
  }
  let result = '';
  for (let i = toReverse.length - 1; i >= 0; i--) {
    result += toReverse[i];
  }
  return result;
}

// eslint-disable-next-line no-restricted-syntax
for (const solution of [secretSolution, mySolution]) {
  // the main test suite for the function
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    // write at least 5 more tests ...
    it('a string with minus', () => {
      expect(solution('dog-cat')).toEqual('tac-god');
    });
    it('a string letters with numbers', () => {
      expect(solution('dog5cat')).toEqual('tac5god');
    });
    it('a string with !!', () => {
      expect(solution('!!dogandcat')).toEqual('tacdnagod!!');
    });
    it ('string of numbers', () => {
      expect(solution('123456')).toEqual('654321');
    });
    it('numbers instead of a string', () => {
      expect(() => solution(123456)).toThrow(TypeError);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
