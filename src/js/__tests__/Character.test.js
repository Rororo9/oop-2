import Character from '../Character.js';

test('valid arguments', () => {
  const result = new Character('Rororo', 'Daemon');
  expect(result).toEqual({
    name: 'Rororo',
    type: 'Daemon',
    health: 100,
    attack: undefined,
    defence: undefined,
    level: 1,
  });
});

test('short name', () => {
  expect(() => new Character('R', 'Daemon')).toThrowError('неверное имя');
});

test('long name', () => {
  expect(() => new Character('NewCharacter', 'Daemon')).toThrowError('неверное имя');
});

test('invalid type', () => {
  expect(() => new Character('Rororo', 'Angel')).toThrowError('неверный тип');
});
