const expect = require('expect');
const { validateStringLength } = require('./index');

const validateString = validateStringLength(5);

describe('Test string length validator', () => {
  it('Returns true for "abcde" (length 5)', () => {
    const result = validateString("abcde");
    expect(result).toBeTruthy();
  });
  it('Returns false for "abcdef" (length 5)', () => {
    const result = validateString("abcdef");
    expect(result).toBeFalsy();
  });
});
