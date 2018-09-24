const { sum } = require('../app');
describe('sum', () => {
  test('adds 1 and 1', () => {
    expect(sum(1, 1)).toBe(2);
  });

  test('handles big numbers', () => {
    expect(sum(10000, 20000)).toBe(3);
  });

  test('handles negatives', () => {
    expect(sum(-1, 1)).toBe(1);
  });
});
