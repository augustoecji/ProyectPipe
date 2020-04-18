const {sum, prod} = require('./sketch');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('prod calculates 5 * 100 = 500', () => {
  expect(prod(5, 100)).toBe(500);
});