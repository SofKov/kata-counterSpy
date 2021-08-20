const { test, expect } = require('@jest/globals');
const {counterSpy} = require('./counterSpy');

test('it returns empty array if array includes str S', () => {
  expect(counterSpy(["s"])).toEqual([]);
});
 
test('it returns the array element if array does not include str S', () => {
  expect(counterSpy(["a"])).toEqual(["a"]);
});

test('it returns the array element that does not match str S, P, or Y', () => {
  expect(counterSpy(["a", "s", "p", "y"])).toEqual(["a"]);
});

test('it returns the non-spy name - Harriet', () => {
  expect(counterSpy(['Daryl', 'Harriet', 'James'])).toEqual(['Harriet']);
});

test('it returns multiple non-spy names, alphabetically', () => {
  expect(counterSpy(['Sam','Daryl','Chris','Mauro','Harriet'])).toEqual(['Harriet','Mauro']);
});