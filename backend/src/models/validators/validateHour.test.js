const expect = require('expect');
const { validateHour } = require('./index');

const correctVal1 = '00:00';
const correctVal2 = '23:59';
const falsyVal1 = '24:00';
const falsyVal2 = '00:60';

describe('Test Hour format validator', () => {
  it('00:00 should be true', () => {
    const result = validateHour(correctVal1);
    expect(result).toBeTruthy();
  });
  it('23:59 should be true', () => {
    const result = validateHour(correctVal2);
    expect(result).toBeTruthy();
  });
  it('24:00 should be falsy', () => {
    const result = validateHour(falsyVal1);
    expect(result).toBeFalsy();
  });
  it('00:60 should be falsy', () => {
    const result = validateHour(falsyVal2);
    expect(result).toBeFalsy();
  });
});
