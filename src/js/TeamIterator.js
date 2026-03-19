export default class TeamIterator {
  constructor() {
    this.members = [];
  }

  add(character) {
    this.members.push(character);
  }

  addAll(...characters) {
    characters.forEach((char) => this.members.push(char));
  }

  [Symbol.iterator]() {
    let index = 0;
    const { members } = this;

    return {
      next() {
        if (index < members.length) {
          const value = members[index];
          index += 1;
          return { value, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}
