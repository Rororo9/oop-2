import Zombie from '../Zombie.js';

test('valid arguments', () => {
  const result = new Zombie('Rororo');
  expect(result).toEqual({
    name: 'Rororo',
    type: 'Zombie',
    health: 100,
    attack: 40,
    defence: 10,
    level: 1,
  });
});
