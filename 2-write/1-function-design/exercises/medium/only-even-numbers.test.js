// #todo

'use strict';

/**
 * removes all odd numbers from an array of numbers
 * does not modify the argument (no side-effects)
 * @param {number[]} arrayOfNumbers - the array of numbers to filter
 * @returns {number[]} an array with only even numbers
 */

// -------- your solutions --------
function mySolution(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("arrayOfNumbers is not an array");
  }
  const value = array.some((array) => typeof array !== "number");

  if (value) {
    throw new TypeError("arrayOfNumbers does not contain only numbers");
  }

  const newArray = array.filter((array) => array % 2 === 0);
  return newArray;
}

// eslint-disable-next-line no-restricted-syntax
for (const solution of [mySolution, secretSolution]) {
  describe(solution.name + ': all odd numbers', () => {
    describe('only integer numbers', () => {
      it('[1] ->[] ', () => {
        expect(solution([1])).toEqual([]);
      });
      it('[1, 2] -> [2]', () => {
        expect(solution([1, 2])).toEqual([2]);
      });
      it('[1, 2, 3, 4] - > [2, 4]', () => {
        expect(solution([1, 2, 3, 4])).toEqual([2, 4]);
      });
      it('[0] - > [0]', () => {
        expect(solution([0])).toEqual([0]);
      });
      it('[10, 2, 4, 8, 5, 8, 14, 33] - > [0]', () => {
        expect(solution([10, 2, 4, 8, 5, 8, 14, 33])).toEqual([10, 2, 4, 8, 8, 14]);
      });
    });
    describe('faults', () => {
      it('"dog" -> "arrayOfNumbers is not an array"', () => {
        expect(() => solution('dog')).toThrow(TypeError('arrayOfNumbers is not an array'));
      });
      it('[1, 2, "g", 3, "y"] -> "arrayOfNumbers does not contain only numbers"', () => {
        expect(() => solution([1, 2, 'g', 3, 'y'])).toThrow(TypeError("arrayOfNumbers does not contain only numbers"));
      });
    });
    describe('not only integer numbers', () => {
      it('[1.5] ->[] ', () => {
        expect(solution([1.5])).toEqual([]);
      });
      it('[1, 2, 3.8, 4] -> [2]', () => {
        expect(solution([1, 2, 3.8, 4])).toEqual([2, 4]);
      });
    });
  });
}

  


// minified solution for testing your tests
// prettier-ignore
    function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfNumbers is not an array"); } const b = a.some(a => "number" != typeof a); if (b) { throw new TypeError("arrayOfNumbers does not contain only numbers"); } const c = a.filter(a => 0 == a % 2); return c; }
