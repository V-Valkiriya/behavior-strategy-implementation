// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------
function mySolution(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('arrayOfStrings is not an array');
  }
  const value = array.some((array) => typeof array !== 'string');
  if (value) {
    throw new TypeError('arrayOfStrings does not contain only strings');
  }
  const reverse = array.reverse();
  const result = reverse.join('');
  return result;
}

// eslint-disable-next-line no-restricted-syntax
for (const solution of [mySolution, secretSolution]) {
  describe(solution.name + ': reverses it, and combines the string', () => {
    describe('only strings', () => {
      it('empty array', () => {
        expect(solution([])).toEqual('');
      });
      it('array with 1 string element', () => {
        expect(solution(['dog'])).toEqual('dog');
      });
      it('array with 2 string element', () => {
        expect(solution(['dog', 'cat'])).toEqual('catdog');
      });
      it('array with 2 word string element and empty string', () => {
        expect(solution(['dog', '', 'cat'])).toEqual('catdog');
      });
      it('array with 2 word string element and space string', () => {
        expect(solution(['dog', ' ', 'cat'])).toEqual('cat dog');
      });
      it('array with 3 word string element', () => {
        expect(solution(['dog', 'cat', 'bird'])).toEqual('birdcatdog');
      });
    });
    describe('faults', () => {
      it('not array', () => {
        expect(() => solution('dog, cat')).toThrow(TypeError('arrayOfStrings is not an array'));
      });
      it('array with string element and not string element', () => {
        expect(() => solution(['dog', 1, 'cat'])).toThrow(TypeError('arrayOfStrings does not contain only strings'));
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
