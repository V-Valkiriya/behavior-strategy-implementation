// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------
function mySolution (text = '', lowerCase = true) {
  if (typeof text !== 'string') {
    throw new TypeError();
  }
  if (typeof lowerCase !== 'boolean') {
    throw new TypeError();
  }
  let result = '';
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  } 
  if (lowerCase === true) {
    return result.toLowerCase();
  }
  if (lowerCase === false) {
    return result.toUpperCase();
  }
}


// eslint-disable-next-line no-restricted-syntax
for (const solution of [secretSolution, mySolution]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        it('first parameter an empty string', () => {
          expect(solution('', true)).toEqual('');
        });
        // when the text is all upper case
        it('firs parameter is string with all upper case letters, second parameter is true', () => {
          expect(solution('HELLO', true)).toEqual('olleh');
        });
        // when the text is all lower case
        it('first parameter is a string with all lower case letters, second parameter is true', () => {
          expect(solution('hello', true)).toEqual('olleh');
        });
        // when the text is mixed upper and lower case
        it('first parameter is a string with mixed lower case and upper case letters, second parameter is true', () => {
          expect(solution('HelLo', true)).toEqual('olleh');
        });
        // when the text contains punctuation
        it('first parameter is a string with punctuation, second parameter is true', () => {
          expect(solution('Hello, sunny!', true)).toEqual('!ynnus ,olleh');
        });
        // when the text contains numbers
        it('first parameter is a string with numbers, second parameter is true', () => {
          expect(solution('Hello777', true)).toEqual('777olleh');
        });
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it('first parameter is an empty string, second parameter is false', () => {
          expect(solution('', false)).toEqual('');
        });
        // when the text is all upper case
        it('first parameter is a string with all upper case letters, second parameter is false', () => {
          expect(solution('HELLO', false)).toEqual('OLLEH');
        });
        // when the text is all lower case
        it('first parameter is a string with all lower case letters, second parameter is false', () => {
          expect(solution('hello', false)).toEqual('OLLEH');
        });
        // when the text is mixed upper and lower case
        it('first parameter is a string with mixed upper case and lower case lettrs, second parameter is false', () => {
          expect(solution('HelLO', false)).toEqual('OLLEH');
        });
        // when the text contains punctuation
        it('first parameter with punctuation, second parameter false', () => {
          expect(solution('Hello!!', false)).toEqual('!!OLLEH');
        });
        // when the text contains numbers
        it('first parameter with numbers, second parameter false', () =>  {
          expect(solution('Hello77', false)).toEqual('77OLLEH');
        });
      });
    });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
