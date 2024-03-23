import Swordsman from '../Swordsman.js';

test('valid arguments', () => {
  const result = new Swordsman('Rororo');
  expect(result).toEqual({
    name: 'Rororo',
    type: 'Swordsman',
    health: 100,
    attack: 40,
    defence: 10,
    level: 1,
  });
});
