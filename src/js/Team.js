export default class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    this.members.push(character);
  }

  addAll(...characters) {
    characters.forEach((char) => this.members.push(char));
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.members.length; i += 1) {
      yield this.members[i];
    }
  }
}
