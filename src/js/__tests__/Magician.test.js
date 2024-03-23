import Magician from '../Magician.js';

test('valid arguments', () => {
  const result = new Magician('Rororo');
  expect(result).toEqual({
    name: 'Rororo',
    type: 'Magician',
    health: 100,
    attack: 10,
    defence: 40,
    level: 1,
  });
});
