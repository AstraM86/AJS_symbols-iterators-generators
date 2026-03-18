import Character from './js/Character';
import Team from './js/Team';

const bowman = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const swordsman = new Character('Мечник', 'Swordsman', 60, 1, 50, 15);
const wizard = new Character('Маг', 'Wizard', 40, 1, 30, 5);

const team = new Team();
team.add(bowman);
team.add(swordsman);
team.add(wizard);

console.log('Перебор команды:');
const characters = [...team];
for (let i = 0; i < characters.length; i += 1) {
  console.log(characters[i].name);
}

console.log('Всего персонажей:', characters.length);
console.log(characters);
