import Daemon from '../Daemon.js';

test('valid arguments', () => {
  const result = new Daemon('Rororo');
  expect(result).toEqual({
    name: 'Rororo',
    type: 'Daemon',
    health: 100,
    attack: 10,
    defence: 40,
    level: 1,
  });
});
