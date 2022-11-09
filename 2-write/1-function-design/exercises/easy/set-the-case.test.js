// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------
function mySolution (text = '', lowerCase = true) {
  if (typeof text !== 'string') {
    throw new TypeError();
  }
  if (typeof lowerCase !== 'boolean') {
    throw new TypeError();
  }
  if (lowerCase === true) {
    return text.toLowerCase();
  } else {
    return text.toUpperCase();
  }
}

// eslint-disable-next-line no-restricted-syntax
for (const solution of [secretSolution, mySolution]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).toEqual('');
      });
    });
    // write the tests indicated by the comments
    describe('when set to lower case', () => {
      // when the text is an empty string
      it('first parameter is a empty string, second parameter is true', () => {
        expect(solution('', true)).toEqual('');
      });
      // when the text is all upper case
      it('first parameter is a string with all upper case letters, second parameter is true', () => {
        expect(solution('HELLO', true)).toEqual('hello');
      });
      // when the text is all lower case
      it('first parameter is a string with all lower case letters, second parameter is true', () => {
        expect(solution('hello', true)).toEqual('hello');
      });
      // when the text is mixed upper and lower case
      it('first parameter is a string with mixed upper case and lower case letters', () => {
        expect(solution('HellO', true)).toEqual('hello');
      });
      // when the text contains punctuation
      it('first parameter is a string with punctuation, second parameter is true', () => {
        expect(solution('Hello!', true)).toEqual('hello!');
      });
      // when the text contains numbers
      it('first parameter is a string with numbers, second parameter is true', () => {
        expect(solution('Hello77', true)).toEqual('hello77');
      });
    });
    describe('when set to upper case', () => {
      // when the text is an empty string
      it('first parameter is a empty string, second parameter is false', () => {
        expect(solution('', false)).toEqual('');
      });
      // when the text is all upper case
      it('first parameter is a string with all upper case letters, second parameter is false', () => {
        expect(solution('HELLO', false)).toEqual('HELLO');
      });
      // when the text is all lower case
      it('first parameter is a string with all lower case letters, second parameter is false', () => {
        expect(solution('hello', false)).toEqual('HELLO');
      });
      // when the text is mixed upper and lower case
      it('first parameter is a string with mixed upper case and lower case letters, second parameter is false', () => {
        expect(solution('HellO', false)).toEqual('HELLO');
      });
      // when the text contains punctuation
      it('first parameter is a string with punctuation, second parameter is false', () => {
        expect(solution('Hello!', false)).toEqual('HELLO!');
      });
      // when the text contains numbers
      it('first parameter is a string with numbers, second parameter is false', () => {
        expect(solution('Hello77', false)).toEqual('HELLO77');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
