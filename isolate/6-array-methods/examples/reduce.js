'use strict';

/**
 * joins two strings together with a comma and a space
 * @param {string} acc
 * @param {string} next
 * @returns {string} "acc, next"
 */
const commaSpace = (acc, next) => `${acc}, ${next}`;


// reduce requires an initial value if the array is empty
const _1_array = [];
const _1_expect = '';
const _1_test = _1_array.reduce(commaSpace, '') === _1_expect;
console.assert(_1_test, 'Test 1');

// reduce returns the first value if there is only one
const _2_array = ['hello!'];
const _2_expect = 'hello!';
const _2_test = _2_array.reduce(commaSpace) === _2_expect;
console.assert(_2_test, 'Test 2');

// reduce combines the values if there are two
const _3_array = ['hello', 'goodbye'];
const _3_expect = 'hello, goodbye';
const _3_test = _3_array.reduce(commaSpace) === _3_expect;
console.assert(_3_test, 'Test 3');

// reduce combines the values if there are many
const _4_array = ['huh', 'huh?', 'what?', 'what!?'];
const _4_expect = 'huh, huh?, what?, what!?';
const _4_test = _4_array.reduce(commaSpace) === _4_expect;
console.assert(_4_test, 'Test 4');

// reduce can use the initial value at the beginning
const _5_array = ['huh', 'huh?', 'what?', 'what!?'];
const _5_expect = 'confusion, huh, huh?, what?, what!?';
const _5_test = _5_array.reduce(commaSpace, 'confusion') === _5_expect;
console.assert(_5_test, 'Test 4');
