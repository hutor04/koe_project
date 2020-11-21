const expect = require('expect');
const { validateEmail } = require('./index');

const correctEmail = 'example@mydomain.com';
const falsyEmail = 'falsyemail.com';

describe('Test email validator', () => {
  it('Should return false to bad formed emails', () => {
    const result =  validateEmail(falsyEmail);
    expect(result).toBeFalsy();
  });
  it('Should return true to well formed emails', () => {
    const result = validateEmail(correctEmail);
    expect(result).toBeTruthy();
  });
});

