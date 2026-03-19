import Character from './js/Character';
import TeamIterator from './js/TeamIterator';
import TeamGenerator from './js/TeamGenerator';

const bowman = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const swordsman = new Character('Мечник', 'Swordsman', 60, 1, 50, 15);
const wizard = new Character('Маг', 'Wizard', 40, 1, 30, 5);

console.log('Итератор ');
const teamIterator = new TeamIterator();
teamIterator.add(bowman);
teamIterator.add(swordsman);
teamIterator.add(wizard);

const iterator = teamIterator[Symbol.iterator]();
let result = iterator.next();
while (!result.done) {
  console.log(result.value.name);
  result = iterator.next();
}

console.log('Генератор ');
const teamGenerator = new TeamGenerator();
teamGenerator.add(bowman);
teamGenerator.add(swordsman);
teamGenerator.add(wizard);

const charsFromGenerator = [...teamGenerator];
for (let i = 0; i < charsFromGenerator.length; i += 1) {
  console.log(charsFromGenerator[i].name);
}
