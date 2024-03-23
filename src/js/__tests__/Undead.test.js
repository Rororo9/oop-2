import Undead from '../Undead.js';

test('valid arguments', () => {
  const result = new Undead('Rororo');
  expect(result).toEqual({
    name: 'Rororo',
    type: 'Undead',
    health: 100,
    attack: 25,
    defence: 25,
    level: 1,
  });
});
