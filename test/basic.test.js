import sum from '../src/js/basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});
