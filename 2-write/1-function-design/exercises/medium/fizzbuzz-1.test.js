// #todo

'use strict';

/**
 *  checks if a number is divisible by 5, 3 or both:
 *    numbers divisible by 3 and 5 return "fizzbuzz"
 *    numbers divisible by only 3 return "fizz"
 *    numbers divisible by only 5 return "buzz"
 *    all other numbers are returned un-changed
 *  @param {number} [num=0] - the number to convert
 *    num must be an integer greater than or equal to 0
 *  @returns {number|string} either "fizz", "buzz", "fizzbuzz" or the original number
 */

// -------- your solutions --------
function mySolution(num = 0) {
  if (typeof num !== 'number') {
    throw new TypeError('num is not a number');
  }
  if (num < 0) {
    throw new RangeError('num is less than 0');
  }
  if (!Number.isInteger(num)) {
    throw new RangeError('num is not an integer');
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } if (num % 3 === 0) {
    return 'fizz';
  } if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
}
  

// eslint-disable-next-line no-restricted-syntax
for (const solution of [mySolution, secretSolution]) {
  describe(solution.name + ': fizbuzzish', () => {
    describe('default parameter is 0', () => {
      it('returns "fizzbuzz" when no argument is passed', () =>
        expect(solution()).toEqual('fizzbuzz'));
    });

    describe('not divisible by 3 or 5', () => {
      it('1 -> 1', () => {
        expect(solution(1)).toEqual(1);
      });
      it('2 -> 2', () => {
        expect(solution(2)).toEqual(2);
      });
      // write more tes.ts in this category
      it('4 -> 4', () => {
        expect(solution(4)).toEqual(4);
      });
      it('"hello" -> "is not a number"', () => {
        expect(() => solution('hello')).toThrow(TypeError('num is not a number'));
      });
      it('-5 -> "should be more 0"', () => {
        expect(() => solution(-5)).toThrow(RangeError('num is less than 0'));
      });
      it('6.3 -> "should be integer number"', () => {
        expect(() => solution(6.3)).toThrow(RangeError('num is not an integer'));
      });
    });

    describe('only divisible by only 3', () => {
      const expectedValue = 'fizz';
      it('3 -> "fizz"', () => {
        expect(solution(3)).toEqual(expectedValue);
      });
      it('6 -> "fizz"', () => {
        expect(solution(6)).toEqual(expectedValue);
      });
      // write more tests in this category
      it('9 - > "fizz"', () => {
        expect(solution(9)).toEqual(expectedValue);
      });
      it('12 -> "fizz"', () => {
        expect(solution(12)).toEqual(expectedValue);
      });
      it('33 -> "fizz"', () => {
        expect(solution(33)).toEqual(expectedValue);
      });
    });

    describe('only divisible by only 5', () => {
      const expectedValue = 'buzz';
      it('5 -> "buzz"', () => {
        expect(solution(5)).toEqual(expectedValue);
      });
      it('10 -> "buzz"', () => {
        expect(solution(10)).toEqual(expectedValue);
      });
      // write more tests in this category
      it('20 -> "buzz"', () => {
        expect(solution(20)).toEqual(expectedValue);
      });
      it('25 -> "buzz"', () => {
        expect(solution(25)).toEqual(expectedValue);
      });
    });

    describe('divisible by 5 and 3', () => {
      const expectedValue = 'fizzbuzz';
      it('15 -> "fizzbuzz"', () => {
        expect(solution(15)).toEqual(expectedValue);
      });
      it('30 -> "fizzbuzz"', () => {
        expect(solution(30)).toEqual(expectedValue);
      });
      // write more tests in this category
      it('45 -> "fizzbuzz"', () => {
        expect(solution(45)).toEqual(expectedValue);
      });
      it('60 -> "fizzbuzz"', () => {
        expect(solution(60)).toEqual(expectedValue);
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) { throw new TypeError("num is not a number"); } if (0 > a) { throw new RangeError("num is less than 0"); } if (!Number.isInteger(a)) { throw new RangeError("num is not an integer"); } return 0 == a % 3 && 0 == a % 5 ? "fizzbuzz" : 0 == a % 3 ? "fizz" : 0 == a % 5 ? "buzz" : a }
