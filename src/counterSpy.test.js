const { test, expect } = require('@jest/globals');
const {counterSpy} = require('./counterSpy');

//test 1
test('it returns empty array if array includes str S', () => {
  expect(counterSpy(["s"])).toEqual([]);
});
 
//test 2
test('it returns the array element if array does not include str S', () => {
  expect(counterSpy(["a"])).toEqual(["a"]);
});

// above tests work for single, seperate occurences
// need to test for multiple, mixed array elements

//test 3
test('it returns the array element that does not match str S, P, or Y', () => {
  expect(counterSpy(["a", "s", "p", "y"])).toEqual(["a"]);
});

// test 3 result shows empty array outcome from test 1
// current code - usues includes method and only allows to return empty array or original array
// spec criteria mentions returning a new array
// need to filter out any character not matching "S", "P", or "Y" into a new array and return the filtered array as result
// potential edge case - case sensitivity?
