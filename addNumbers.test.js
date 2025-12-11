const { addNumbers } = require('./index'); // or './index' depending on filename

test('adds two numbers', () => {
  expect(addNumbers(2, 3)).toBe(5);
});
