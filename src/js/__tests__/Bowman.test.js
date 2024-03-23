import Bowman from '../Bowman.js';

test('valid arguments', () => {
  const result = new Bowman('Rororo');
  expect(result).toEqual({
    name: 'Rororo',
    type: 'Bowman',
    health: 100,
    attack: 25,
    defence: 25,
    level: 1,
  });
});
