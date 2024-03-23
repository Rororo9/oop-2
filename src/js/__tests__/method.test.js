import Bowman from '../Bowman.js';

test('lvlUp, health 100', () => {
  const character = new Bowman('Rororo');
  character.levelUp();
  expect(character).toEqual({
    name: 'Rororo',
    type: 'Bowman',
    health: 100,
    attack: 30,
    defence: 30,
    level: 2,
  });
});

test('dmg points 20, health 100', () => {
  const character = new Bowman('Rororo');
  character.damage(20);
  expect(character).toEqual({
    name: 'Rororo',
    type: 'Bowman',
    health: 85,
    attack: 25,
    defence: 25,
    level: 1,
  });
});

test('dmg points 25, health 15', () => {
  const character = new Bowman('Rororo');
  character.health = 15;
  character.damage(25);
  expect(character).toEqual({
    name: 'Rororo',
    type: 'Bowman',
    health: 0,
    attack: 25,
    defence: 25,
    level: 1,
  });
});

test('lvlUp, health 0', () => {
  const character = new Bowman('Rororo');
  character.health = 0;
  expect(() => {
    character.levelUp();
  }).toThrowError('нельзя повысить lvl умершего');
});
