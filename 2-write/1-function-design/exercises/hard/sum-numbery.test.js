// #todo

'use strict';

/**
 * sums all numbery strings in an array of strings
 * returns 0 if the array is empty
 * it does not modify the original array (no side-effects)
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all numbery strings
 */

// -------- your solutions --------

const mapFilterReduce = (arr) => {
  // these work, you need to pass them to the right array methods
  const isNotNaN = (entry) => !Number.isNaN(entry);
  const sumNumbers = (acc, next) => acc + next;
  const castToNumber = (entry) => Number(entry);

  // fill in the array methods and pass in the correct logic
  const sumOfNumberies = arr.map(castToNumber).filter(isNotNaN).reduce(sumNumbers, 0);

  return sumOfNumberies;
};

// -------- your solutions --------

// eslint-disable-next-line no-restricted-syntax
for (const solution of [
  secretSolution,
  mapFilterReduce,
]) {
  describe(solution.name + ': sums all numbery strings in an array of strings', () => {
    describe('different strings', () => {
      it('empty string', () => {
        expect(solution([])).toEqual(0);
      });
      it('one word string', () => {
        expect(solution(['cat'])).toEqual(0);
      });
      it('word and number strings', () => {
        expect(solution(['cat', 'sun', '17', '3.5'])).toEqual(20.5);
      });
      it('number strings', () => {
        expect(solution(['5', '3', '2.8'])).toEqual(10.8);
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arr contains non-strings"); } const c = a.map(a => +a).filter(a => !Number.isNaN(a)).reduce((a, b) => a + b, 0); return c }
