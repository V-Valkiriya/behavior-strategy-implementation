// #todo

'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------
function mySolution (array) {
  if (!Array.isArray(array)) {
    throw new TypeError('arrayOfStrings is not an array');
  }
  const value = array.some((array) => typeof array !== 'string');
  if (value) {
    throw new TypeError('arrayOfStrings contains non-strings');
  }

  const newArr = array.map((array) => Number(array));
  const result = newArr.filter((array) => !Number.isNaN(array));
  return result;
}

// eslint-disable-next-line no-restricted-syntax
for (const solution of [mySolution, secretSolution]) {
  describe(solution.name + ': takes an array of strings and returns a new array of numbers', () => {
    describe('strings', () => {
      it('only word strings', () => {
        expect(solution(['dog', 'cat', 'bird'])).toEqual([]);
      });
      it('word and number strings', () => {
        expect(solution(['dog', '1', 'cat', '3.8'])).toEqual([1, 3.8]);
      });
      it('empty strings', () => {
        expect(solution([])).toEqual([]);
      });
      it('only number strings', () => {
        expect(solution(['7', '1', '0.6', '3.8'])).toEqual([7, 1, 0.6, 3.8]);
      });
    });
    describe('fault', () => {
      it('not array', () => {
        expect(() => solution('dog, cat, bird')).toThrow(TypeError('arrayOfStrings is not an array'));
      });
      it('word and number strings', () => {
        expect(() => solution(['dog', 1, 'cat', 3.8])).toThrow(TypeError('arrayOfStrings contains non-strings'));
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
