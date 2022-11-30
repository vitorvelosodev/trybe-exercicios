const {
  mapString,
  encode,
  decode
} = require('./3exercicio.js');

describe('Encode e Decode', () => {
  test('Cond 1 se são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });

  it('Cond 2', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  it('Cond 3', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  it('Cond 4', () => {
    expect(encode('ABCD123')).toBe('ABCD123');
    expect(decode('ABCD')).toBe('ABCD');
  });

  it('Cond 5', () => {
    expect(encode('ABCD').length).toBe('ABCD'.length);
  });
});