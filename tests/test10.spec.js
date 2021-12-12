const { foo } = require('../index');

test('foo', () => {
  expect(() => foo()).not.toThrow();
});
