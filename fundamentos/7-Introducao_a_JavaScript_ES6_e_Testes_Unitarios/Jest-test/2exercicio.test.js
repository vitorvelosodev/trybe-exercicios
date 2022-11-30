const myFizzBuzz = require('./2exercicio');

describe('Testa fizzbuzz', () => {
  test('Cond 1', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('Cond 2', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  test('Cond 3', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  test('Cond 4', () => {
    const num = 7;
    expect(myFizzBuzz(num)).toBe(num);
  });

  it('Cond 5', () => {
    expect(myFizzBuzz('true')).toBe(false);
  });
});