const assert = require('chai').assert;
const swapKeysInObject = require('./');

describe('Key swapper', () => {
  it('is a function', () => {
    assert.equal(typeof swapKeysInObject, 'function');
  });
});
