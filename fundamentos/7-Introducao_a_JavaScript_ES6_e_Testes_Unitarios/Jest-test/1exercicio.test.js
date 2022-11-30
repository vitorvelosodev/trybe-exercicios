const myRemove = require('./1exercicio');

it('Verifica cond 1 do exercício', () => {
  const array = [1, 2, 3, 4];
  expect(myRemove(array, 3)).toEqual([1, 2, 4]);
});

it('Verifica cond 2 do exercício', () => {
  const array = [1, 2, 3, 4];
  expect(myRemove(array, 3)).not.toEqual([1, 2, 3, 4]);
});

it('Verifica cond 1 do exercício', () => {
  const array = [1, 2, 3, 4];
  expect(myRemove(array, 5)).toEqual([1, 2, 3, 4]);
});